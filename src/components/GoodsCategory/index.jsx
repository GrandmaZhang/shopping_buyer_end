import Taro, { Component } from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import { categoryMap } from "./config";
import "./style.scss";

const GoodsCategory = () => {
  return (
    <View className="cate-wrap">
      {categoryMap.map(item => (
        <View className="cate-item" key={item.key}>
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
