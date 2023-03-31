import request from '@/utils/request'

//获取首页轮播图
export function getcCarousel() {
    return request({
      url: '/geekplusapp/getCarousel',
      method: 'get',
    })
}

// 查询首页网站友情链接，is_display=1,表示显示
export function displayFriendlyLink() {
  return request({
    url: '/geekplusapp/displayFriendlyLink',
    method: 'get',
    //params: query
  })
}

// 用户申请首页友情链接，is_display=0,默认不显示，需要审核
export function userAppFriendlyLink(gpdata) {
  return request({
    url: '/geekplusapp/userAppFriendlyLink',
    method: 'post',
    data: gpdata
  })
}

// 网站用户评论留言
export function sendUserComment(data) {
  return request({
    url: '/geekplusapp/userCommentMessage',
    method: 'post',
    data: data
  })
}

// 获取用户的留言信息
export function getAllUserComment(query) {
  return request({
    url: '/geekplusapp/getAllUserComment',
    method: 'get',
    params: query
  })
}

// 获取用户的留言评论数量
export function getUserCommentCount() {
  return request({
    url: '/geekplusapp/getUserCommentCount',
    method: 'get'
  })
}

// 获取最新的十条用户的留言评论
export function getArticleLatestUserComment() {
  return request({
    url: '/geekplusapp/getLatestArticleUserComment',
    method: 'get'
  })
}

// 获取热门的六条用户的留言评论
export function getWebHotUserComment() {
  return request({
    url: '/geekplusapp/getHotWebUserComment',
    method: 'get'
  })
}

// 查询网站信息，比如标题，网站介绍，网站底部备案信息等
export function getGpWebTitleInfo(id) {
  return request({
    url: '/geekplusapp/getGpWebTitleInfo',
    method: 'get',
    params:id
  })
}

// 查询关于我的信息，我的个人介绍等
export function getAboutMyGpWeb(id) {
  return request({
    url: '/geekplusapp/getAboutMyGpWeb/'+id,
    method: 'get',
  })
}

// 博客网站查询最新六条的文章
export function getSixNewestArticle(param) {
  return request({
    url: '/geekplusapp/getSixNewestArticle',
    method: 'get',
    params:param
  })
}

// 博客网站查询十条特别推荐的文章
export function getTenRecommendArticle(param) {
  return request({
    url: '/geekplusapp/getTenRecommendArticle',
    method: 'get',
    params:param
  })
}

// 博客网站查询一个大屏显示特别推荐的文章
export function getOneRecommendArticle(param) {
  return request({
    url: '/geekplusapp/getOneRecommendArticle',
    method: 'get',
    params:param
  })
}

// 博客网站查询四个大屏显示特别推荐的文章
export function getFourRecommendArticle(param) {
  return request({
    url: '/geekplusapp/getFourRecommendArticle',
    method: 'get',
    params:param
  })
}

// 查询父子目录菜单循环递归文章类型目录列表
export function listSubParentCategory() {
  return request({
    url: '/geekplusapp/listSubParentCategory',
    method: 'get',
  })
}

// 查询各个标签的文章数量
export function getTagArticleCount() {
  return request({
    url: '/geekplusapp/getTagArticleCount',
    method: 'get',
  })
}

// 根据标签的tagId查询每个标签的所有文章列表
export function getTagToArticle(id) {
  return request({
    url: '/geekplusapp/getTagToArticle',
    method: 'get',
    params:id
  })
}

// 查询最新的一条通知
export function getGpNoticeNewOne() {
  return request({
    url: '/geekplusapp/getGpNoticeNewOne',
    method: 'get',
  })
}

// 查询最新的五条通知
export function getGpNoticeNewFive() {
  return request({
    url: '/geekplusapp/getGpNoticeNewFive',
    method: 'get',
  })
}

// 用户投稿
export function userWriteGpArticles(data) {
  return request({
    url: '/geekplusapp/userWriteGpArticles',
    method: 'post',
    data:data
  })
}

// 获取文章详情
export function getArticleDetail(id) {
  return request({
    url: '/geekplusapp/getArticle/'+id,
    method: 'get',
  })
}

// 用户查询文章列表,根据不同的文章目录
export function getArticleCategoryList(param) {
  return request({
    url: '/geekplusapp/getArticleList',
    method: 'get',
    params:param
  })
}

// 提供在写文章时查询所有标签
export function getArticleTagList(param) {
  return request({
    url: '/geekplusapp/getArticleTagList',
    method: 'get',
    params:param
  })
}

// 在写文章时，需要插入文章的所属标签
export function insertArticleMapTag(dataM) {
  return request({
    url: '/geekplusapp/insertArticleMapTag',
    method: 'get',
    data:dataM
  })
}

//获取疫情数据
export function getcovid() {
    return request({
      url: '/covid/getAllData',
      method: 'get',
    })
}

//获取世界疫情数据
export function getWorldCovid() {
    return request({
      url: '/covid/getCovid19Foreign',
      method: 'get',
    })
}

//获取世界疫情数据
export function get163coviddata() {
  return request({
    url: '/163coviddata',
    method: 'get',
  })
}