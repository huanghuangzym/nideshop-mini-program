var util = require('../../utils/util.js');
var api = require('../../config/api.js');

Page({
  data: {
    goods: []
  },
  onLoad: function (options) {
    this.getCatalog();
  },
  getCatalog: function () {
    //CatalogList
    let that = this;
    wx.showLoading({
      title: '加载中...',
    });
    util.request(api.IndexUrl).then(function (res) {
        that.setData({
          goods: res.data.goods
        });
        wx.hideLoading();
      });
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
})