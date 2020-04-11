import { getData,handleGetParams, postData } from '../utils';

export const getUserInfo = async () => {
  return await getData('/userInfo')
}

export const getRecommendGoods = async () => {
  return await getData("/recommend-goods")
}

export const getGoodsCategories = async () => {
  return await getData('/goods-category');
}

export const getGoodsItems = async (params) => {
  return await getData(handleGetParams('/goods-items', params))
}

export const getSearchGoods = async(params) => {
  return await getData(handleGetParams('/search-goods', params))
}

export const addCart = async(params) => {
  return await getData(handleGetParams('/add-goods-cart', params))
}

export const getCartItem = async(params) => {
  return await getData(handleGetParams('/get-cart-item', params))
}

export const addOrder = async(params) => {
  return await postData('/add-order', { ...params });
}

export const getOrders = async(params) => {
  return await getData(handleGetParams('/get-orders', params))
}

export const cancelOrder = async(params) => {
  return await postData('/cancel-order', params)
}