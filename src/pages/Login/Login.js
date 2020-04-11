import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { postData } from '../../utils';
import { connect } from "react-redux";
import { isLogin, changeUserInfo } from "../../actions/userAction";
import './login.scss'

const mapDispatchToProps = dispatch => ({
  isLogin: params => dispatch(isLogin(params)),
  getUserInfo: params => dispatch(changeUserInfo(params)),
});
const mapStateToProps = state => ({
  ...state
});
const [LOGIN, REGISTER] = [1, 0]
class Login extends Component {
  state = {
    username: '',
    password: '',
    loginType: LOGIN
  }
  register = async () => {
    const { username, password } = this.state;
    try {
      await postData('/register', { username, password });
      this.login();
    } catch (err) {
      alert(err)
    }
  }
  login = async () => {
    const { history, isLogin, getUserInfo } = this.props;
    const { username, password } = this.state;
    const { success, msg, data } = await postData('/login', { username, password });
    if (success) {
      isLogin(true);
      getUserInfo(data)
      history.push('/peng');
    } else {
      alert(msg)
    }
  }
  changeUserInfo = (event, type) => {
    this.setState({
      [type]: event.target.value
    })
  }
  changeLoginType = () => {
    const { loginType } = this.state;
    this.setState({
      loginType: loginType === LOGIN ? REGISTER : LOGIN
    })
  }
  render() {
    const { username, password, loginType} = this.state;
    return (
      <div className="login-container">
        <div className="main">
          <input defaultValue={username} onChange={(e) => this.changeUserInfo(e, 'username')} placeholder="请输入用户名"/>
          <input defaultValue={password} onChange={(e) => this.changeUserInfo(e, 'password')} placeholder="请输入密码" type="password"/>
          { loginType === LOGIN ? (<div onClick={this.login} className="send">登录</div>) : (<div onClick={this.register} className="send">注册</div>) }
          <div onClick={this.changeLoginType} className="change-type">{loginType === LOGIN ? '没有账号？请点此注册' : '已有账号？请点此登录'}</div>
        </div>
      </div>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));