/* eslint-disable taro/no-stateless-component */
// eslint-disable-next-line no-unused-vars
import Taro from "@tarojs/taro";
import PropTypes from "prop-types";
import { View, Text, Image } from "@tarojs/components";

import "./style.scss";

function GoodsItem(props) {
  const { imgSrc, name, price } = props;
  return (
    <View className="goods-item">
      <Image className="goods-img" src={imgSrc} />
      <View className="goods-desc">
        <Text className="goods-desc-text">{name}</Text>
        <View className="goods-desc-price">
          <Text>{`¥ ${price}`}</Text>
        </View>
      </View>
    </View>
  );
}

GoodsItem.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};

export default GoodsItem;
