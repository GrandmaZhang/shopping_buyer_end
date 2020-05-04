/* eslint-disable taro/no-anonymous-function-in-props */
/* eslint-disable taro/no-stateless-component */
import Taro from "@tarojs/taro";
import { View, Image, Text } from "@tarojs/components";
import { categoryMap } from "./config";
import "./style.scss";

const GoodsCategory = () => {
  const handleClick = tabKey => {
    Taro.navigateTo({
      url: `/pages/search/index?id=${tabKey}`
    });
  };

  return (
    <View className="cate-wrap">
      {categoryMap.map((item, index) => (
        <View
          className="cate-item"
          key={item.key}
          onClick={() => handleClick(index + 1)}
        >
          <View className="img-wrap">
            <Image src={item.pic} />
          </View>
          <Text>{item.name}</Text>
        </View>
      ))}
    </View>
  );
};

export default GoodsCategory;
