import Taro, { Component } from "@tarojs/taro";
import { View, Text, Input, Button } from "@tarojs/components";
import { AtForm, AtInput, AtButton, AtToast } from "taro-ui";
import { connect } from "@tarojs/redux";
import Request from "../../utils/request";
import userAPI from "../../api/user";
import { mapDispatchToProps, mapStateToProps } from "./connect";

import "./index.scss";

const [LOGIN, REGISTER] = [1, 0];
@connect(mapStateToProps, mapDispatchToProps)
class Login extends Component {
  config = {
    navigationBarTitleText: "登录"
  };

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      loginType: LOGIN,
      toastText: "",
      isToastOpened: false
    };
  }

  // tips
  showToast(text) {
    Taro.showToast({
      title: text,
      icon: "none"
    });
  }

  handleUserNameChange = value => {
    this.setState({
      username: value
    });
  };

  handlePasswordChange = value => {
    this.setState({
      password: value
    });
  };

  changeLoginType = () => {
    const { loginType } = this.state;
    this.setState({
      loginType: loginType === LOGIN ? REGISTER : LOGIN
    });
  };

  handleRegister = async () => {
    const { username, password } = this.state;
    try {
      const data = await Request({
        url: userAPI.register,
        method: "POST",
        data: {
          username,
          password
        }
      });
      this.setState({
        isToastOpened: true,
        toastText: "注册成功"
      });
      this.handleLogin();
    } catch (err) {
      console.log(err);
    }
  };

  handleLogin = async e => {
    const { changeLogin } = this.props;
    const { username, password } = this.state;
    try {
      await Request({
        url: userAPI.login,
        method: "POST",
        data: {
          username,
          password
        }
      });
      changeLogin(true);
      this.setState({
        isToastOpened: true,
        toastText: "登录成功"
      });
      Taro.switchTab({
        url: `/pages/home/index`
      });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const {
      username,
      password,
      loginType,
      isToastOpened,
      toastText
    } = this.state;

    return (
      <View className="login-page" id="login-page">
        <AtForm
          onSubmit={
            loginType === LOGIN ? this.handleLogin : this.handleRegister
          }
        >
          <AtInput
            name="username"
            title="用户名"
            type="text"
            placeholder="请输入用户名"
            value={username}
            onChange={this.handleUserNameChange}
          />
          <AtInput
            name="username"
            title="密码"
            type="password"
            placeholder="请输入密码"
            value={password}
            onChange={this.handlePasswordChange}
          />
          <AtButton formType="submit">
            {loginType === LOGIN ? "登录" : "注册"}
          </AtButton>
        </AtForm>
        <Text onClick={this.changeLoginType} className="change-type">
          {loginType === LOGIN
            ? "没有账号？请点此注册"
            : "已有账号？请点此登录"}
        </Text>
        <AtToast isOpened={isToastOpened} text={toastText} />
      </View>
    );
  }
}

export default Login;
