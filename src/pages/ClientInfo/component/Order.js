import React, { Component } from 'react';
import '../index.scss'
import { connect } from 'react-redux';
import { getOrders, cancelOrder } from '../../../service';
import { withRouter } from 'react-router-dom'

const mapDispatchToProps = dispatch => ({
});

const mapStateToProps = state => ({
  ...state.userReducer,
  ...state.goodsReducer
})
const orderStatus = ['已完成', '商家确认中', '用户确认中', '用户取消中', '已取消'];
class Order extends Component {
  state = {
    orders: []
  }
  cancelOrder = async (id, order, index) => {
    const { orders } = this.state;
    const orderData = { ...order, goods: JSON.stringify(order.goods) };
    delete order.createTime
    const { success } = await cancelOrder({id, orderData, status: 3});
    if (success) {
      orders[index].status = 3;
      this.setState({
        orders
      })
    }
  }
  async componentDidMount() {
    const { userInfo } = this.props;
    const { success, data } = await getOrders({ id: userInfo.id });
    if (success) {
      this.setState({
        orders: data.map(item => {
          return {
            ...item,
            goods: JSON.parse(item.goods),
          }
        })
      })
    }
  }
  render() {
    const { orders } = this.state;
    return (
      <div className="order-container">
        { orders.map((order, index) => {
          return (
            <div key={order.id} className="order-item">
              { order.goods.map(item => {
                return (
                  <div key={item.id} className="shopping-item">
                    <img src={item.url[0]} alt=""></img>
                    <div className="item">
                      <div className="title">
                        <span>{item.name}</span>
                        <span>￥{item.price}</span>
                      </div>
                      <div className="desc">￥ {parseFloat(item.price / item.goodsNumber)} / 件</div>
                      <div className="opera">
                        <span>{parseFloat(item.goodsNumber)}<font size="2">件</font></span>
                      </div>
                    </div>
                  </div>
                )
              }) }
              <div className="order-status-container">
                <div>{orderStatus[order.status]}</div>
                { order.status === 1 || order.status === 2 ?(
                  <div className="btn" onClick={() => this.cancelOrder(order.id, order, index)}>取消订单</div>
                ) : null}
              </div>
            </div>
          )
        }) }
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Order))