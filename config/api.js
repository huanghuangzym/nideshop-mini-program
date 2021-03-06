const ApiRootUrl = 'http://192.168.33.19:8080/api/';

module.exports = {
  IndexUrl: ApiRootUrl + 'index/index', //首页数据接口
  
  AuthLoginByWeixin: ApiRootUrl + 'auth/loginByWeixin', //微信登录

  GoodsCount: ApiRootUrl + 'goods/count',  //统计商品总数
  GoodsList: ApiRootUrl + 'goods/list',  //获得商品列表
  GoodsCategory: ApiRootUrl + 'goods/category',  //获得分类数据
  GoodsDetail: ApiRootUrl + 'goods/detail',  //获得商品的详情
  GoodsRelated: ApiRootUrl + 'goods/related',  //商品详情页的关联商品（大家都在看）

};