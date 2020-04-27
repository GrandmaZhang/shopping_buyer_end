import Taro, { Component } from "@tarojs/taro";
import { connect } from "@tarojs/redux";
import { View, Image, Button, Text } from "@tarojs/components";
import "./index.scss";

class Cart extends Component {
  config = {
    navigationBarTitleText: "购物车"
  };

  goHome() {
    if (Taro.getEnv() === Taro.ENV_TYPE.WEB) {
      Taro.navigateTo({
        url: "/pages/home/index"
      });
    } else {
      Taro.switchTab({
        url: "/pages/home/index"
      });
    }
  }

  // componentDidMount = () => {
  //   wx.createInterstitialAd({
  //     adUnitId: 'adunit-5266635b7140e545'
  //   }).show()
  // };

  componentDidShow() {
    // 设置衣袋小红点
    // if (this.props.items.length > 0) {
    //   Taro.setTabBarBadge({
    //     index: 1,
    //     text: String(this.props.items.length)
    //   });
    // } else {
    //   Taro.removeTabBarBadge({
    //     index: 1
    //   });
    // }
  }

  render() {
    return <View className="cart-page">购物车</View>;
  }
}

export default Cart;
