// eslint-disable-next-line no-unused-vars
import Taro, { Component } from "@tarojs/taro";
import { connect } from "@tarojs/redux";
import { View } from "@tarojs/components";
import Request from "../../utils/request";
import orderAPI from "../../api/order";
import { mapStateToProps } from "./connect";

import "./style.scss";

@connect(mapStateToProps, null)
class Order extends Component {
  state = {
    orders: []
  };

  async componentDidShow() {
    const { userInfo } = this.props;
    try {
      const orders = await Request({
        url: orderAPI.getOrders,
        method: "GET",
        data: {
          userId: userInfo.id
        }
      });
      console.log(orders, "orders");
      this.setState({
        orders
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const { orders } = this.state;
    console.log(orders, "orders");
    return (
      <View className="order-page">
        <View>orderrrrr</View>
      </View>
    );
  }
}

export default Order;
