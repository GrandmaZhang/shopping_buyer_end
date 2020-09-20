// eslint-disable-next-line no-unused-vars
import Taro, { Component } from "@tarojs/taro";
import { View, Image, Text } from "@tarojs/components";
import { AtButton, AtToast, AtTag, AtBadge } from "taro-ui";
import { connect } from "@tarojs/redux";
import Request from "../../utils/request";
import detailAPI from "../../api/detailPage";
import cartAPI from "../../api/cart";
import RootPage from "../RootPage";
import cart from "../../images/tab/cart-active.png";
import { mapStateToProps } from "./connect";

import "./style.scss";

@connect(mapStateToProps, null)
class Detail extends Component {
  state = {
    goodsDetail: {},
    isToastOpened: false,
    cartNum: 0,
    toastText: "已添加商品至购物车"
  };

  async componentDidMount() {
    const goodsId = parseInt(this.$router.params.id, 10);
    try {
      const goodsDetail = await Request({
        url: detailAPI.getGoodsById,
        method: "GET",
        data: {
          id: goodsId
        }
      });
      this.setState({
        goodsDetail
      });
    } catch (e) {
      console.log(e);
    }

    this.getCurCartItemNum();
  }

  getCurCartItemNum = async () => {
    const { userInfo } = this.props;
    try {
      const cartItems = await Request({
        url: cartAPI.getCartItem,
        method: "GET",
        data: {
          userId: userInfo.id
        }
      });
      this.setState({
        cartNum: cartItems.length
      });
    } catch (e) {
      console.log(e);
    }
  };

  addGoodToCart = async () => {
    const { userInfo } = this.props;
    const goodsId = parseInt(this.$router.params.id, 10);
    try {
      await Request({
        url: detailAPI.addGoodsToCart,
        method: "GET",
        data: {
          goodsId,
          userId: userInfo.id
        }
      });
      this.getCurCartItemNum();
      this.setState({
        isToastOpened: true
      });
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    const { goodsDetail, isToastOpened, toastText, cartNum } = this.state;
    return (
      <RootPage>
        <View className="detail-page">
          <Image src={goodsDetail.url} className="detail-image" />
          <View className="detail-desc">
            <Text className="price">{`¥${goodsDetail.price}`}</Text>
            <Text className="desc">{goodsDetail.desc}</Text>
            <View className="extra">
              <View className="tag1">
                <AtTag circle>快递 15.00</AtTag>
              </View>
              <View className="tag2">
                <AtTag circle>月销{goodsDetail.sold}</AtTag>
              </View>
            </View>
          </View>
          <View className="detail-bottom">
            <AtBadge value={cartNum}>
              <Image src={cart} className="cart-icon" />
            </AtBadge>
            <View className="detail-btn">
              <AtButton circle onClick={this.addGoodToCart}>
                加入购物车
              </AtButton>
            </View>
          </View>
          <AtToast isOpened={isToastOpened} text={toastText} />
        </View>
      </RootPage>
    );
  }
}

export default Detail;
