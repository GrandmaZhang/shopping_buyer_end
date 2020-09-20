// eslint-disable-next-line no-unused-vars
import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { AtForm, AtInput, AtButton } from "taro-ui";
import { connect } from "@tarojs/redux";
import userAPI from "../../api/user";
import Request from "../../utils/request";
import { mapStateToProps, mapDispatchToProps } from "./connect";

import "./style.scss";

@connect(mapStateToProps, mapDispatchToProps)
class UserInfo extends Component {
  constructor(props) {
    super(props);
    const { userInfo } = this.props;
    this.state = {
      isEdit: false,
      username: userInfo ? userInfo.username : "",
      name: userInfo ? userInfo.name : "",
      tel: userInfo ? userInfo.tel : "",
      address: userInfo ? userInfo.address : ""
    };
  }

  handleUserNameChange = value => {
    this.setState({
      username: value
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

  handleEdit = () => {
    this.setState({
      isEdit: true
    });
  };

  handleSubmit = async () => {
    const { userInfo, setUserInfo } = this.props;
    const { username, name, address, tel } = this.state;
    const newInfo = {
      username,
      name,
      address,
      tel
    };
    try {
      const data = await Request({
        url: userAPI.update,
        method: "POST",
        data: {
          id: userInfo.id,
          ...newInfo
        }
      });
      if (data && data.code !== 0) {
        Taro.showToast({
          title: data.msg,
          icon: "none"
        });
      } else {
        setUserInfo({ ...userInfo, ...newInfo });
        this.setState({
          isEdit: false
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { userInfo } = this.props;
    const { isEdit, username, name, tel, address } = this.state;

    return (
      <View className="user-info">
        <Text className="title">个人信息</Text>
        <View className="edit-btn">
          <AtButton type="primary" size="small" onClick={this.handleEdit}>
            编辑
          </AtButton>
        </View>
        {isEdit ? (
          <AtForm onSubmit={this.handleSubmit}>
            <AtInput
              name="username"
              title="用户名"
              type="text"
              placeholder="请输入用户名"
              value={username}
              onChange={this.handleUserNameChange}
            />
            <AtInput
              name="name"
              title="真实姓名"
              type="text"
              placeholder="请输入真实姓名"
              value={name}
              onChange={this.handleNameChange}
            />
            <AtInput
              name="tel"
              title="联系方式"
              type="text"
              placeholder="请输入联系方式"
              value={tel}
              onChange={this.handleTelChange}
            />
            <AtInput
              name="address"
              title="收获地址"
              type="text"
              placeholder="请输入收获地址"
              value={address}
              onChange={this.handleAddressChange}
            />
            <AtButton formType="submit">提交</AtButton>
          </AtForm>
        ) : (
          <View className="show">
            <View className="info-item">
              <Text>用户名：</Text>
              <Text>{userInfo.username}</Text>
            </View>
            <View className="info-item">
              <Text>真实姓名：</Text>
              <Text>{userInfo.name}</Text>
            </View>
            <View className="info-item">
              <Text>余额：</Text>
              <Text>{userInfo.money}元</Text>
            </View>
            <View className="info-item">
              <Text>联系方式：</Text>
              <Text>{userInfo.tel}</Text>
            </View>
            <View className="info-item">
              <Text>收获地址：</Text>
              <Text>{userInfo.address}</Text>
            </View>
          </View>
        )}
      </View>
    );
  }
}

export default UserInfo;
