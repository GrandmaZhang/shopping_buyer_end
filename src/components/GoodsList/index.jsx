/* eslint-disable import/no-unresolved */
/* eslint-disable taro/no-stateless-component */
import Taro from "@tarojs/taro";
import PropTypes from "prop-types";
import { View } from "@tarojs/components";
import GoodsItem from "../GoodsItem";

import "./style.scss";

function GoodsList(props) {
  const { goods } = props;

  const goToDetail = id => {
    Taro.navigateTo({
      url: `/pages/detail/index?id=${id}`
    });
  };

  return (
    <View className="recomend-goods-wrap">
      {goods.map((item, index) => (
        <View
          className="recomend-goods-item"
          key={`${item.id}-${index}`}
          // eslint-disable-next-line taro/no-anonymous-function-in-props
          onClick={() => goToDetail(item.id)}
        >
          <GoodsItem name={item.name} imgSrc={item.url[0]} price={item.price} />
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
