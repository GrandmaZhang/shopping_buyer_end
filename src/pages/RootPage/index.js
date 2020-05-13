/* eslint-disable no-unused-vars */
import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtMessage } from "taro-ui";

class RootPage extends Component {
  render() {
    return (
      <View>
        <AtMessage />
        {this.props.children}
      </View>
    );
  }
}

export default RootPage;
