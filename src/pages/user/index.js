/* eslint-disable import/no-unresolved */
import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { AtAvatar, AtButton } from "taro-ui";
import { connect } from "@tarojs/redux";
import userAvatar from "../../images/user/userAvatar.png";
import { mapStateToProps } from "./connect";

import "./index.scss";

@connect(mapStateToProps, null)
class User extends Component {
  config = {
    navigationBarTitleText: "我的"
  };

  checkOrder = () => {
    Taro.navigateTo({
      url: `/pages/order/index`
    });
  };

  render() {
    return (
      <View className="user-page">
        <View className="user-head">
          <AtAvatar circle image={userAvatar}></AtAvatar>
          <Text>姓名</Text>
        </View>
        <AtButton onClick={this.checkOrder}>查看订单</AtButton>
      </View>
    );
  }
}

export default User;
