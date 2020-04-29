import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtSearchBar, AtTabs, AtTabsPane } from "taro-ui";
import Request from "../../utils/request";
import homePageAPI from "../../api/homePage";
import GoodsList from "../../components/GoodsList";
import { tabList } from "../../components/GoodsCategory/config";

import "./style.scss";

class SearchPage extends Component {
  config = {
    navigationBarTitleText: "商品列表"
  };

  constructor(props) {
    super(props);

    const curTab = parseInt(this.$router.params.id, 10);
    this.state = {
      searchValue: "",
      goods: [],
      currentTab: curTab
    };
  }

  async componentDidMount() {
    const { currentTab } = this.state;
    try {
      const goodsItems = await Request({
        url: homePageAPI.getGoodsItems,
        method: "GET",
        data: {
          categoryId: currentTab
        }
      });
      this.setState({
        goods: goodsItems
      });
    } catch (e) {
      console.log(e);
    }
  }

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

  handleTabClick = async tabIndex => {
    try {
      const goodsItems = await Request({
        url: homePageAPI.getGoodsItems,
        method: "GET",
        data: {
          categoryId: tabIndex
        }
      });
      this.setState({
        goods: goodsItems
      });
    } catch (e) {
      console.log(e);
    }
    this.setState({
      currentTab: tabIndex
    });
  };

  render() {
    const { searchValue, goods, currentTab } = this.state;
    console.log(goods, "searchGoods");
    return (
      <View className="search-page">
        <AtSearchBar
          focus
          value={searchValue}
          onChange={this.handleChange}
          onActionClick={this.handleSearch}
        />
        <AtTabs
          current={currentTab}
          scroll
          tabList={[{ title: "全部" }, ...tabList]}
          onClick={this.handleTabClick}
        >
          <AtTabsPane current={currentTab} index={0}>
            <View className="search-page__content">
              <GoodsList goods={goods} />
            </View>
          </AtTabsPane>
          {tabList.map((item, index) => (
            <AtTabsPane current={currentTab} index={index + 1}>
              <View className="search-page__content">
                <GoodsList goods={goods} />
              </View>
            </AtTabsPane>
          ))}
        </AtTabs>
      </View>
    );
  }
}

export default SearchPage;
