import Taro from "@tarojs/taro";
import PropTypes from "prop-types";
import { View, Text, Image } from "@tarojs/components";
import GoodsItem from "../GoodsItem";

import "./style.scss";

const GoodsList = props => {
  const { goods } = props;
  console.log(goods, "goods");
  return (
    <View className="recomend-goods-wrap">
      {goods.map((item, index) => (
        <View className="recomend-goods-item" key={`${item.id}-${index}`}>
          <GoodsItem
            name={item.name}
            imgSrc={item.url[0]}
            desc={item.desc}
            price={item.price}
          />
        </View>
      ))}
    </View>
  );
};

GoodsList.defaultProps = {
  goods: []
};

GoodsList.propTypes = {
  goods: PropTypes.instanceOf(Array).isRequired
};

export default GoodsList;
