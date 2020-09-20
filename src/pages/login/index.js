import Taro, { Component } from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import { AtForm, AtInput, AtButton, AtToast } from "taro-ui";
import { connect } from "@tarojs/redux";
import Request from "../../utils/request";
import userAPI from "../../api/user";
import RootPage from "../RootPage";
import { mapDispatchToProps, mapStateToProps } from "./connect";
import eyeClose from "../../images/icon/eyeclose.png";
import eyeOpen from "../../images/icon/eyeopen.png";

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
      repeatPassword: "",
      name: "",
      tel: "",
      address: "",
      loginType: LOGIN,
      toastText: "",
      isToastOpened: false,
      isShow: false
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

  handleRPasswordChange = value => {
    this.setState({
      repeatPassword: value
    });
  };

  handleNameChange = value => {
    this.setState({
      name: value
    });
  };

  handleTelChange = value => {
    this.setState({
      tel: value
    });
  };

  handleAddressChange = value => {
    this.setState({
      address: value
    });
  };

  changeLoginType = () => {
    const { loginType } = this.state;
    this.setState({
      loginType: loginType === LOGIN ? REGISTER : LOGIN
    });
  };

  handleRegister = async () => {
    const {
      username,
      password,
      repeatPassword,
      name,
      address,
      tel
    } = this.state;
    if (password === repeatPassword) {
      try {
        const data = await Request({
          url: userAPI.register,
          method: "POST",
          data: {
            username,
            password,
            name,
            address,
            tel
          }
        });
        this.setState({
          isToastOpened: true,
          toastText: data.msg
        });
        this.handleLogin();
      } catch (err) {
        console.log(err);
      }
    } else {
      Taro.showToast({
        title: "重复密码不正确",
        icon: "none"
      });
    }
  };

  handleLogin = async e => {
    console.log(e, "submit");
    const { changeLogin, setUserInfo } = this.props;
    const { username, password } = this.state;
    try {
      const userInfo = await Request({
        url: userAPI.login,
        method: "POST",
        data: {
          username,
          password
        }
      });
      if (userInfo.id) {
        changeLogin(true);
        setUserInfo(userInfo);
        Taro.showToast({
          title: "登录成功",
          icon: "none"
        });
        Taro.switchTab({
          url: `/pages/home/index`
        });
      } else if (userInfo.code && userInfo.code !== 0) {
        Taro.showToast({
          title: userInfo.msg,
          icon: "none"
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  handleEye = () => {
    const { isShow } = this.state;
    console.log(isShow);
    this.setState({
      isShow: !isShow
    });
  };

  render() {
    const {
      username,
      password,
      repeatPassword,
      name,
      address,
      tel,
      loginType,
      isToastOpened,
      toastText,
      isShow
    } = this.state;

    return (
      <RootPage>
        <View className="login-page" id="login-page">
          <AtForm
            onSubmit={
              loginType === LOGIN ? this.handleLogin : this.handleRegister
            }
          >
            {loginType === LOGIN ? (
              <View>
                <AtInput
                  name="username"
                  title="用户名"
                  type="text"
                  placeholder="请输入用户名"
                  value={username}
                  onChange={this.handleUserNameChange}
                />
                <View className="split-line" />
                <AtInput
                  name="username"
                  title="密码"
                  type={isShow ? "text" : "password"}
                  placeholder="请输入密码"
                  value={password}
                  onChange={this.handlePasswordChange}
                />
                <View className="eye" onClick={this.handleEye}>
                  {!isShow ? (
                    <Image className="open" src={eyeOpen} />
                  ) : (
                    <Image className="close" src={eyeClose} />
                  )}
                </View>
                <View className="split-line" />
              </View>
            ) : (
              <View>
                <AtInput
                  name="username"
                  title="用户名"
                  type="text"
                  placeholder="请输入用户名"
                  value={username}
                  onChange={this.handleUserNameChange}
                />
                <View className="split-line" />
                <AtInput
                  name="username"
                  title="密码"
                  type="password"
                  placeholder="请输入密码"
                  value={password}
                  onChange={this.handlePasswordChange}
                />
                <View className="split-line" />
                <AtInput
                  name="username"
                  title="重复密码"
                  type="password"
                  placeholder="请重复密码"
                  value={repeatPassword}
                  onChange={this.handleRPasswordChange}
                />
                <View className="split-line" />
                <AtInput
                  name="name"
                  title="真实姓名"
                  type="text"
                  placeholder="请输入真实姓名"
                  value={name}
                  onChange={this.handleNameChange}
                />
                <View className="split-line" />
                <AtInput
                  name="tel"
                  title="联系方式"
                  type="text"
                  placeholder="请输入联系方式"
                  value={tel}
                  onChange={this.handleTelChange}
                />
                <View className="split-line" />
                <AtInput
                  name="address"
                  title="收获地址"
                  type="text"
                  placeholder="请输入收获地址"
                  value={address}
                  onChange={this.handleAddressChange}
                />
                <View className="split-line" />
              </View>
            )}
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
      </RootPage>
    );
  }
}

export default Login;
