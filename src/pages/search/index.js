import Taro, { Component } from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import { AtSearchBar } from "taro-ui";
import Request from "../../utils/request";
import homePageAPI from "../../api/homePage";
import GoodsList from "../../components/GoodsList";

class SearchPage extends Component {
  config = {
    navigationBarTitleText: "商品列表"
  };

  state = {
    searchValue: "",
    goods: []
  };

  handleSearch = async () => {
    const { searchValue } = this.state;
    try {
      const moreGoods = await Request({
        url: homePageAPI.getSearchGoods,
        method: "GET",
        data: {
          keyword: searchValue
        }
      });
      this.setState({
        goods: moreGoods
      });
    } catch (e) {
      console.log(e);
    }
  };

  handleChange = value => {
    console.log(value, "value");
    this.setState({
      searchValue: value
    });
  };

  render() {
    const { searchValue, goods } = this.state;
    console.log(goods, "searchGoods");
    return (
      <View className="search-page">
        <AtSearchBar
          focus
          value={searchValue}
          onChange={this.handleChange}
          onActionClick={this.handleSearch}
        />
        <GoodsList goods={goods} />
      </View>
    );
  }
}

export default SearchPage;
