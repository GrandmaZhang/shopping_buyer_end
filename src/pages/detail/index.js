import Taro, { Component } from "@tarojs/taro";
import { View, Image } from "@tarojs/components";
import { AtButton } from "taro-ui";

class Detail extends Component {
  render() {
    return (
      <View className="detail-page">
        <Image />
        <View className="detail-desc">
          <Text className="price"></Text>
          <Text className="desc"></Text>
          <View className="extra">
            <Text>快递</Text>
            <Text>月销</Text>
          </View>
        </View>
        <View className="detail-bottom">
          <AtButton>加入购物车</AtButton>
        </View>
      </View>
    );
  }
}

export default Detail;
