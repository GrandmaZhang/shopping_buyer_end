/* eslint-disable taro/no-stateless-component */
// eslint-disable-next-line no-unused-vars
import Taro from "@tarojs/taro";
import { View, Text } from "@tarojs/components";

import "./style.scss";

const Message = props => {
  const { isShow, msg } = props;
  // const [isShow, setIsShow] = useState(false);

  // useEffect(() => {
  //   if (show) {
  //     setIsShow(true);
  //     setTimeout(() => {
  //       setIsShow(false);
  //     }, duration);
  //   }
  // }, [show]);

  return (
    <View className={`message ${isShow ? "slideIn" : "slideOut"}`}>
      <Text>{msg}</Text>
    </View>
  );
};

export default Message;
