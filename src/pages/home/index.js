import Taro, { Component } from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import { AtSearchBar } from "taro-ui";
import Request from "../../utils/request";
import AdSwiper from "../../components/AdSwiper";
import GoodsCategory from "../../components/GoodsCategory";
import GoodsList from "../../components/GoodsList";
import homePageAPI from "../../api/homePage";
import "./index.scss";

class HomePage extends Component {
  config = {
    navigationBarTitleText: "zml的黑店-首页"
  };

  state = {
    goods: [],
    banner: [],
    searchValue: ""
  };

  componentDidMount() {
    this.getBanner();
    this.getGoods();
  }

  //分享
  onShareAppMessage() {
    return {
      title: "基于Taro框架开发的购物网站",
      path: "/pages/home/index"
    };
  }

  // 小程序上拉加载
  onReachBottom() {
    this.getGoods();
  }

  getBanner = async () => {
    try {
      const banner = await Request({
        url: homePageAPI.getBanner,
        method: "GET"
      });

      this.setState({
        banner
      });
    } catch (e) {
      console.log(e);
    }
  };

  getGoods = async () => {
    const { goods } = this.state;
    try {
      const moreGoods = await Request({
        url: homePageAPI.getRecommendGoods,
        method: "GET"
      });
      this.setState({
        goods: [...goods, ...moreGoods]
      });
    } catch (e) {
      console.log(e);
    }
  };

  handleSearch = value => {
    console.log(value, "value");
    this.setState({
      searchValue
    });
  };

  goToSearchPage = () => {
    Taro.navigateTo({
      url: `/pages/search/index`
    });
  };

  render() {
    const { searchValue, banner, goods } = this.state;
    return (
      <View className="home-page">
        <AtSearchBar
          value={searchValue}
          // onChange={this.handleSearch}
          onFocus={this.goToSearchPage}
        />
        <AdSwiper data={banner} />
        <GoodsCategory />
        {/* <View className="recomend-goods-wrap">
          {goods.map((item, index) => (
            <View className="recomend-goods-item" key={`${item.id}-${index}`}>
              <GoodsItem
                name={item.name}
                imgSrc={item.url[0]}
                desc={item.desc}
                price={item.price}
              />
            </View>
          ))}
        </View> */}
        <GoodsList goods={goods} />
      </View>
    );
  }
}

export default HomePage;
