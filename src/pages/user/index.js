import Taro, { Component } from "@tarojs/taro";
import { View, Image, Text, Icon } from "@tarojs/components";
import "./index.scss";

class User extends Component {
  config = {
    navigationBarTitleText: "我的"
  };

  goPage = e => {
    if (
      e.currentTarget.dataset.url == "/pages/login/index" &&
      this.props.access_token
    ) {
      return;
    }
    Taro.navigateTo({
      url: e.currentTarget.dataset.url
    });
  };

  goToPage = e => {
    if (!this.props.access_token) {
      Taro.navigateTo({
        url: "/pages/login/index"
      });
      return;
    }
    Taro.navigateTo({
      url: e.currentTarget.dataset.url
    });
  };

  render() {
    const { mobile, coupon_number, nickname, list } = this.props;
    return <View className="user-page">用户管理</View>;
  }
}

export default User;
