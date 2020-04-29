import Taro from "@tarojs/taro";
import PropTypes from "prop-types";
import { View } from "@tarojs/components";
import GoodsItem from "../GoodsItem";

import "./style.scss";

function GoodsList(props) {
  const { goods } = props;
  return (
    <View className="recomend-goods-wrap">
      {goods.map((item, index) => (
        <View className="recomend-goods-item" key={`${item.id}-${index}`}>
          <GoodsItem
            name={item.name}
            imgSrc={item.url[0]}
            name={item.name}
            price={item.price}
          />
        </View>
      ))}
    </View>
  );
}

GoodsList.defaultProps = {
  goods: []
};

GoodsList.propTypes = {
  goods: PropTypes.instanceOf(Array).isRequired
};

export default GoodsList;
