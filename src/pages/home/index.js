/* eslint-disable import/no-unresolved */
import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtSearchBar } from "taro-ui";
// import io from "weapp.socket.io";
import { connect } from "@tarojs/redux";
import Request from "../../utils/request";
import AdSwiper from "../../components/AdSwiper";
import GoodsCategory from "../../components/GoodsCategory";
import GoodsList from "../../components/GoodsList";
import homePageAPI from "../../api/homePage";
import RootPage from "../RootPage";
import userAPI from "../../api/user";
import { mapDispatchToProps, mapStateToProps } from "./connect";
import "./index.scss";

@connect(mapStateToProps, mapDispatchToProps)
class HomePage extends Component {
  config = {
    navigationBarTitleText: "zml的黑店-首页"
  };

  state = {
    goods: [],
    banner: [],
    searchValue: ""
  };

  async componentDidMount() {
    try {
      const userInfo = await Request({
        url: userAPI.userInfo,
        method: "GET"
      });
      console.log(userInfo, "userInfo");
      if (userInfo.code === -1) {
        Taro.navigateTo({
          url: `/pages/login/index`
        });
      } else {
        this.getBanner();
        this.getGoods();
      }
    } catch (e) {
      console.log(e);
    }

    // try {
    //   const socket = io("http://localhost:7001");

    //   socket.on("connect", () => {
    //     console.log("connect!");
    //     socket.emit("chat", "hello world!");
    //   });

    //   socket.on("res", msg => {
    //     console.log("res from server: %s!", msg);
    //   });

    // } catch (e) {
    //   console.log(e, "socket error");
    // }
  }

  componentDidShow() {
    const { isLogin } = this.props;
    console.log(isLogin, "isLogin");
    if (isLogin) {
      this.getBanner();
      this.getGoods();
    }
  }

  //分享
  onShareAppMessage() {
    return {
      title: "基于Taro框架开发的购物网站",
      path: "/pages/home/index"
    };
  }

  // 小程序上拉加载
  onReachBottom() {
    this.getGoods();
  }

  getBanner = async () => {
    try {
      const banner = await Request({
        url: homePageAPI.getBanner,
        method: "GET"
      });

      this.setState({
        banner
      });
    } catch (e) {
      console.log(e);
    }
  };

  getGoods = async () => {
    const { goods } = this.state;
    try {
      const moreGoods = await Request({
        url: homePageAPI.getRecommendGoods,
        method: "GET"
      });
      this.setState({
        goods: [...goods, ...moreGoods]
      });
    } catch (e) {
      console.log(e);
    }
  };

  handleSearch = value => {
    console.log(value, "value");
    this.setState({
      searchValue: value
    });
  };

  goToSearchPage = () => {
    Taro.navigateTo({
      url: `/pages/search/index`
    });
  };

  render() {
    const { searchValue, banner, goods } = this.state;
    return (
      <RootPage>
        <View className="home-page">
          <AtSearchBar value={searchValue} onFocus={this.goToSearchPage} />
          <AdSwiper data={banner} />
          <GoodsCategory />
          <GoodsList goods={goods} />
        </View>
      </RootPage>
    );
  }
}

export default HomePage;
