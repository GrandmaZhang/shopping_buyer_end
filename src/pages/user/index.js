/* eslint-disable import/no-unresolved */
import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { AtAvatar, AtButton, AtIcon } from "taro-ui";
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

  checkUser = () => {
    Taro.navigateTo({
      url: `/pages/userInfo/index`
    });
  };

  render() {
    const { userInfo } = this.props;
    return (
      <View className="user-page">
        <View className="user-head">
          <AtAvatar circle image={userAvatar}></AtAvatar>
          <Text className="user-name">{userInfo.username}</Text>
        </View>
        <AtButton onClick={this.checkUser} circle>
          <AtIcon value="user" size="24" color="#333" />
          查看个人信息
        </AtButton>
        <AtButton onClick={this.checkOrder} circle>
          <AtIcon value="tags" size="24" color="#333" />
          查看订单
        </AtButton>
      </View>
    );
  }
}

export default User;
