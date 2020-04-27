import "@tarojs/async-await";
import Taro, { Component } from "@tarojs/taro";
// import { Provider } from "@tarojs/redux";
import Home from "./pages/home";

import "./styles/base.scss";
import "taro-ui/dist/style/index.scss";

class App extends Component {
  config = {
    pages: [
      "pages/home/index",
      "pages/cart/index",
      "pages/user/index",
      "pages/login/index",
      "pages/message/index",
      "pages/search/index"
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

  async componentDidMount() {}

  render() {
    return (
      // <Provider store={store}>
      <Home />
      // </Provider>
    );
  }
}

Taro.render(<App />, document.getElementById("app"));
