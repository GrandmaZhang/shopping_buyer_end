/* eslint-disable taro/no-stateless-component */
// eslint-disable-next-line no-unused-vars
import Taro, { useState } from "@tarojs/taro";
import { View, Image, Text } from "@tarojs/components";

import "./style.scss";

const OrderGoodItem = props => {
  const { name, price, url, goodsNumber } = props;

  return (
    <View className="cart-item">
      <View className="cart-item__imgWrap">
        <Image className="cart-item__img" src={url[0]} />
      </View>
      <View className="cart-item__desc">
        <Text className="cart-item__name">{name}</Text>
        <View className="cart-item__handle">
          <Text className="cart-item__price">¥{price}</Text>
          <View className="cart-item__number">
            <Text>x{goodsNumber}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default OrderGoodItem;
