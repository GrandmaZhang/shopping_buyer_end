import Taro, { Component } from "@tarojs/taro";
import { View, Text, Input, Button } from "@tarojs/components";
import "./index.scss";

let setIntervalTime = null;

class Login extends Component {
  config = {
    navigationBarTitleText: "登录"
  };

  constructor(props) {
    super(props);
    this.state = {
      mobile: "",
      code: "",
      invitation_code: "",
      access_token: "",
      nickname: "",
      new_user: "",
      is_has_buy_card: "",
      smsText: "发送验证码",
      sending: 0,
      smsTime: 30,
      erroMessage: ""
    };
  }

  // tips
  showToast(text) {
    Taro.showToast({
      title: text,
      icon: "none"
    });
  }

  render() {
    const { sending, smsTime } = this.props;
    if (Taro.getEnv() === Taro.ENV_TYPE.WEAPP) {
      this.setState({
        sending,
        smsTime
      });
    }
    return (
      <View className="login-page" id="login-page">
        <View className="title">您好，请登录</View>
        <View className="title-des">新用户注册即享18天会员98元</View>
      </View>
    );
  }
}

export default Login;
