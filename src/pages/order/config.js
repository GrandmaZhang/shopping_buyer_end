export const switchStatus = status => {
  switch (status) {
    case 0:
      return "已完成";
    case 1:
      return "已下单";
    case 2:
      return "商家取消中";
    case 3:
      return "用户取消中";
    case 4:
      return "已取消";
    default:
      return "已下单";
  }
};
