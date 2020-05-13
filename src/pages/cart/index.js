/* eslint-disable import/no-unresolved */
import Taro, { Component } from "@tarojs/taro";
import { connect } from "@tarojs/redux";
import { View, Text } from "@tarojs/components";
import { AtButton } from "taro-ui";
import cartAPI from "../../api/cart";
import RootPage from "../RootPage";
import Request from "../../utils/request";
import CartItem from "../../components/CartItem";
import { mapStateToProps } from "./connect";
import "./index.scss";

@connect(mapStateToProps, null)
class Cart extends Component {
  config = {
    navigationBarTitleText: "购物车"
  };

  state = {
    cartItems: []
  };

  goHome() {
    if (Taro.getEnv() === Taro.ENV_TYPE.WEB) {
      Taro.navigateTo({
        url: "/pages/home/index"
      });
    } else {
      Taro.switchTab({
        url: "/pages/home/index"
      });
    }
  }

  async componentDidMount() {}

  async componentDidShow() {
    this.getCartItem();
  }

  getCartItem = async () => {
    const { userInfo } = this.props;
    try {
      const cartItems = await Request({
        url: cartAPI.getCartItem,
        method: "GET",
        data: {
          userId: userInfo.id
        }
      });
      console.log(cartItems, "cartItems");
      this.setState({
        cartItems
      });
    } catch (e) {
      console.log(e);
    }
  };

  countMoney = async () => {
    const { userInfo } = this.props;
    const { cartItems } = this.state;
    const totalMoney = this.getTotalMoney(cartItems);
    try {
      const result = await Request({
        url: cartAPI.addOrder,
        method: "POST",
        data: {
          userId: userInfo.id,
          goods: cartItems,
          price: totalMoney
        }
      });
      console.log(result, "result");
      Taro.showToast({
        title: "下单成功",
        icon: "success",
        duration: 3000
      });
    } catch (e) {
      console.log(e);
    }
  };

  getTotalMoney = cartItems => {
    return cartItems.reduce((prev, { price, goodsNumber }) => {
      return prev + price * goodsNumber;
    }, 0);
  };

  render() {
    const { userInfo } = this.props;
    const { cartItems } = this.state;
    const totalMoney = this.getTotalMoney(cartItems);
    return (
      <RootPage>
        <View className="cart-page">
          <View className="content">
            {cartItems.map(item => (
              <CartItem
                // eslint-disable-next-line taro/no-spread-in-props
                {...item}
                key={item.id}
                userId={userInfo.id}
                refresh={this.getCartItem}
              />
            ))}
          </View>
          <View className="bottom-bar">
            <Text>¥{totalMoney}</Text>
            <AtButton onClick={this.countMoney}>结算</AtButton>
          </View>
        </View>
      </RootPage>
    );
  }
}

export default Cart;
