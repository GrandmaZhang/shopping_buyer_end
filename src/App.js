import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { isLogin, changeUserInfo } from "./actions/userAction";
import HomePage from "./pages/HomePage/HomePage";
import Goods from "./pages/Goods/Goods";
import ClientInfo from "./pages/ClientInfo/ClientInfo";
import TabBar from "./pages/Components/TabBar";
import Login from "./pages/Login/Login";
import { getUserInfo, getCartItem } from "./service";
import { changeCartItem } from "./actions/goodsAction";

const mapDispatchToProps = dispatch => ({
  isLogin: params => dispatch(isLogin(params)),
  changeUserInfo: params => dispatch(changeUserInfo(params)),
  changeCartItem: params => dispatch(changeCartItem(params))
});

const mapStateToProps = state => ({
  ...state
});
class App extends Component {
  async componentDidMount() {
    const userInfo = await getUserInfo();
    if (userInfo.code === -1) {
      this.props.isLogin(false);
    } else {
      this.props.isLogin(true);
      this.props.changeUserInfo(userInfo);
      const { changeCartItem } = this.props;
      const { success, data: cart } = await getCartItem({userId: userInfo.id});
      if (success) {
        changeCartItem(cart);
      }
    }
  }
  render() {
    const { userReducer } = this.props;
    return (
      <Router>
        {userReducer.isLogin ? (
          <>
            <div className="main-container">
              <Switch>
                <Route exact path="/peng">
                  <HomePage />
                </Route>
                <Route path="/goods">
                  <Goods />
                </Route>
                <Route path="/user">
                  <ClientInfo />
                </Route>
              </Switch>
            </div>
            <TabBar />
          </>
        ) : (
          <Route>
            <Login />
          </Route>
        )}
      </Router>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
