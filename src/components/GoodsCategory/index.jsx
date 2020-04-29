import Taro, { Component } from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
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
          <span>{item.name}</span>
        </View>
      ))}
    </View>
  );
};

export default GoodsCategory;
