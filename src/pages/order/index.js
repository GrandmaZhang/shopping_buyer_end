/* eslint-disable import/no-unresolved */
// eslint-disable-next-line no-unused-vars
import Taro, { Component } from "@tarojs/taro";
import { connect } from "@tarojs/redux";
import { View, Text } from "@tarojs/components";
import moment from "moment";
import Request from "../../utils/request";
import orderAPI from "../../api/order";
import RootPage from "../RootPage";
import OrderGoodItem from "../../components/OrderGoodItem";
import { mapStateToProps } from "./connect";
import { switchStatus } from "./config";

import "./style.scss";

@connect(mapStateToProps, null)
class Order extends Component {
  state = {
    orders: []
  };

  async componentDidShow() {
    this.refresh();
  }

  refresh = async () => {
    const { userInfo } = this.props;
    try {
      const orders = await Request({
        url: orderAPI.getOrders,
        method: "GET",
        data: {
          id: userInfo.id
        }
      });
      console.log(orders, "orders");
      this.setState({
        orders
      });
    } catch (e) {
      console.log(e);
    }
  };

  cancleOrder = async id => {
    try {
      await Request({
        url: "/cancel-order",
        method: "POST",
        data: {
          id,
          status: 3
        }
      });
      this.refresh();
    } catch (e) {
      console.log(e);
    }
  };

  deleteOrder = async id => {
    try {
      await Request({
        url: "/delete-order",
        method: "POST",
        data: {
          id
        }
      });
      this.refresh();
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    const { orders } = this.state;
    console.log(orders, "orders");
    return (
      <RootPage>
        <View className="order-page">
          {!orders.length && <Text>您还没有订单，快去下单吧～</Text>}
          {orders.map(item => {
            const { goods } = item;
            const goodsList = JSON.parse(goods);
            return (
              <View className="order-item" key={item.id}>
                <Text className="order-title">
                  下单时间：
                  {moment(item.createTime).format("YYYY-MM-DD HH:mm:ss")}
                </Text>
                <Text className="order-status">
                  {switchStatus(item.status)}
                </Text>
                <View className="order-goodsList">
                  {goodsList.map(goodsItem => (
                    <OrderGoodItem
                      key={goodsItem.id}
                      // eslint-disable-next-line taro/no-spread-in-props
                      {...goodsItem}
                    />
                  ))}
                </View>
                <View className="opt-bar">
                  {item.status === 1 && (
                    <Text
                      className="opt-btn"
                      // eslint-disable-next-line taro/no-anonymous-function-in-props
                      onClick={() => this.cancleOrder(item.id)}
                    >
                      取消订单
                    </Text>
                  )}
                  <Text
                    className="opt-btn"
                    // eslint-disable-next-line taro/no-anonymous-function-in-props
                    onClick={() => this.deleteOrder(item.id)}
                  >
                    删除订单
                  </Text>
                </View>
              </View>
            );
          })}
        </View>
      </RootPage>
    );
  }
}

export default Order;
