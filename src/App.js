/* eslint-disable import/no-unresolved */
import "@tarojs/async-await";
import Taro, { Component } from "@tarojs/taro";
import { Provider, connect } from "@tarojs/redux";
import io from "weapp.socket.io";
// import { AtMessage } from "taro-ui";
import "taro-ui/dist/style/index.scss";
import Home from "./pages/home";
import userAPI from "./api/user";
import Request from "./utils/request";
import configStore from "./flux/store";
import { mapStateToProps, mapDispatchToProps } from "./connect";

import "./styles/base.scss";

const store = configStore();

@connect(mapStateToProps, mapDispatchToProps)
class App extends Component {
  config = {
    pages: [
      "pages/home/index",
      "pages/cart/index",
      "pages/user/index",
      "pages/login/index",
      "pages/message/index",
      "pages/search/index",
      "pages/detail/index",
      "pages/order/index",
      "pages/userInfo/index"
    ],
    window: {
      backgroundTextStyle: "dark",
      navigationBarBackgroundColor: "#fff",
      navigationBarTitleText: "zml的黑店",
      navigationBarTextStyle: "black"
    },
    tabBar: {
      list: [
        {
          pagePath: "pages/home/index",
          text: "首页",
          iconPath: "./images/tab/home.png",
          selectedIconPath: "./images/tab/home-active.png"
        },
        {
          pagePath: "pages/cart/index",
          text: "购物车",
          iconPath: "./images/tab/cart.png",
          selectedIconPath: "./images/tab/cart-active.png"
        },
        {
          pagePath: "pages/user/index",
          text: "我的",
          iconPath: "./images/tab/user.png",
          selectedIconPath: "./images/tab/user-active.png"
        }
      ],
      color: "#333",
      selectedColor: "#333",
      backgroundColor: "#fff",
      borderStyle: "white"
    }
  };

  async componentDidMount() {
    const { changeLogin } = this.props;
    try {
      const userInfo = await Request({
        url: userAPI.userInfo,
        method: "GET"
      });
      if (userInfo.code === -1) {
        changeLogin(false);
      } else {
        changeLogin(true);
      }
    } catch (e) {
      console.log(e);
    }

    try {
      const socket = io("http://localhost:7001");

      console.log(socket, "socket");
      socket.on("connect", () => {
        console.log("connect!");
      });

      socket.on("res", () => {
        Taro.atMessage({
          message: "您的订单状态有更新～",
          type: "info",
          duration: 5000
        });
      });
    } catch (e) {
      console.log(e, "socket error");
    }
  }

  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}

Taro.render(<App />, document.getElementById("app"));
