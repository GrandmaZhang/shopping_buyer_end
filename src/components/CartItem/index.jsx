/* eslint-disable taro/no-stateless-component */
// eslint-disable-next-line no-unused-vars
import Taro, { useState } from "@tarojs/taro";
import { View, Image, Text } from "@tarojs/components";
import { AtInputNumber, AtIcon } from "taro-ui";
import Request from "../../utils/request";
import detailAPI from "../../api/detailPage";
import cartAPI from "../../api/cart";

import "./style.scss";

const CartItem = props => {
  const {
    id,
    name,
    price,
    url,
    userId,
    refresh,
    goodsNumber: curNumber
  } = props;
  const [goodsNumber, setGoodsNumber] = useState(curNumber);

  const addGoods = async number => {
    try {
      await Request({
        url: detailAPI.addGoodsToCart,
        method: "GET",
        data: {
          goodsId: id,
          number,
          userId
        }
      });
      refresh();
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = val => {
    setGoodsNumber(val);
    addGoods(val);
  };

  const handleDelete = async () => {
    try {
      await Request({
        url: cartAPI.deleteCartItem,
        method: "POST",
        data: {
          goodsId: id
        }
      });
      refresh();
    } catch (e) {
      console.log(e);
    }
  };

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
            <AtInputNumber
              min={1}
              max={10}
              step={1}
              value={goodsNumber}
              onChange={handleChange}
            />
          </View>
          <View className="delete-btn" onClick={handleDelete}>
            <AtIcon value="trash" size="20" color="#333" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartItem;
