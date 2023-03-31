import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HomeIndex from '../views/homeindex/HomeIndex.vue'
import Home from '../views/home/Home.vue'
import HomeArticleList from "@/views/home/ArticleListTwo.vue"
//import Blog from '../views/article/general.vue'
import Layout from "@/layout"
import AppMain from "@/layout/component/AppMain.vue"

Vue.use(VueRouter)

const routes = [
  {
    path:'',
    //name:"layout",//父路由已经有子路由了  父路由要给子路由一个默认的路由 ， 使用name跳转layout路由时 不会触发子路由 
    meta:{title:'Layout'},
    type:'layout',
    hidden:true,
    component:Layout,
    children:[
      {
        path: '/',
        name: 'home1',
        meta: {title: '首页',icon:'fa-home'},
        type:'menu',
        component: HomeView
      },
      // {
      //   path: '/homeindex',
      //   name: 'home',
      //   meta: {title: '首页',icon:'fa-home'},
      //   type:'menu',
      //   component: HomeIndex
      // },
      // {
      //   path: '/home',
      //   name: 'home',
      //   meta: {title: '首页',icon:'fa-home'},
      //   type:'menu',
      //   component: (resolve) => require(['@/views/home/Home.vue'],resolve),
      // },
      {
        path: '/homepage',
        name: 'homepage',
        meta: {title: '首页',icon:'fa-home'},
        type:'menu',
        component: (resolve) => require(['@/views/page/HomePage.vue'],resolve),
      },
      {
        path: '/articlelist',
        name: 'articlelist1',
        meta: {title: '文章列表',icon:'fa-home'},
        type:'menu',
        component: (resolve) => require(['@/views/page/ArticleListPage.vue'],resolve),
      },
      // {
      //   path: '/articlelist',
      //   name: 'articlelist',
      //   meta: {title: '文章列表',icon:'fa-home'},
      //   type:'menu',
      //   component: (resolve) => require(['@/views/homeindex/ArticleListOne.vue'],resolve),
      // },
      // {
      //   path: '/articlelist',
      //   name: 'articlelist',
      //   meta: {title: '文章列表',icon:'fa-home'},
      //   type:'menu',
      //   component: (resolve) => require(['@/views/home/ArticleListTwo.vue'],resolve),
      // },
      {
        path: '/article/:articleId',
        name: 'blog11',
        meta: {title: '博客文章',icon:'fa-home'},
        type:'menu',
        component: () => import(/* webpackChunkName: "about" */ '../views/article/ArticleContentPage.vue')
      },
      {
        path: '/blog/article/:articleId',
        name: 'blog12',
        meta: {title: '博客文章',icon:'fa-home'},
        type:'menu',
        component: () => import(/* webpackChunkName: "about" */ '../views/article/ArticleGeneralPage.vue')
      },
      {
        path: '/leavecomment',
        name: 'comment1',
        meta: {title: '留言评论',icon:'fa-home'},
        type:'menu',
        component: () => import(/* webpackChunkName: "about" */ '../views/page/LeaveWord.vue')
      },
      {
        path: '/about',
        name: 'about1',
        meta: {title: '关于本站',icon:'fa-home'},
        type:'menu',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
      },
      {
        path: '/login',
        name: 'login1',
        meta: {title: '用户登录',icon:'fa-home'},
        type:'menu',
        component: () => import(/* webpackChunkName: "about" */ '../views/page/LoginPage.vue')
      },
    ]
  },
  {
    path:'/home',
    name:"Home",
    meta:{title:'Home'},
    component:Layout,
    type:'cateogry',
    children:[
      {
        path: '',
        name: 'BigHome',
        meta: {title: '首页',icon:'fa-home'},
        type:'menu',
        component: (resolve) => require(['@/views/home/Home.vue'],resolve),
        //component: () => import('../views/home/Home.vue')
      },
      {
        path: 'articlelist',
        name: 'ArticleListTwo',
        meta: {title: '文章列表',icon:'fa-home'},
        type:'menu',
        //component:HomeArticleList
        component: (resolve) => require(['../views/home/ArticleListTwo.vue'],resolve),
      },
      {
        path: 'article/:articleId',
        name: 'blog21',
        meta: {title: '博客文章',icon:'fa-home'},
        type:'menu',
        component: () => import(/* webpackChunkName: "about" */ '../views/article/ArticleContentPage.vue')
      },
      {
        path: 'blog/article/:articleId',
        name: 'blog22',
        meta: {title: '博客文章',icon:'fa-home'},
        type:'menu',
        component: () => import(/* webpackChunkName: "about" */ '../views/article/ArticleGeneralPage.vue')
      },
    ]
  },
  {
    path:'/homeindex',
    //name:"HomeIndexLayout",
    meta:{title:'Layout'},
    component:Layout,
    type:'cateogry',
    children:[
      {
        path: '',
        name: 'home3',
        meta: {title: '首页',icon:'fa-home'},
        type:'menu',
        component: HomeIndex
      },
      {
        path: 'articlelist',
        name: 'articlelist3',
        meta: {title: '文章列表',icon:'fa-home'},
        type:'menu',
        component: (resolve) => require(['../views/homeindex/ArticleListOne.vue'],resolve),
      },
      {
        path: 'article/:articleId',
        name: 'blog31',
        meta: {title: '博客文章',icon:'fa-home'},
        type:'menu',
        component: () => import(/* webpackChunkName: "about" */ '../views/article/ArticleContentPage.vue')
      },
      {
        path: 'blog/article/:articleId',
        name: 'blog32',
        meta: {title: '博客文章',icon:'fa-home'},
        type:'menu',
        component: () => import(/* webpackChunkName: "about" */ '../views/article/ArticleGeneralPage.vue')
      },
    ]
  },
  {
    path: '/404',
    name: 'error404',
    //component: Error404,
    component: (resolve) => require(['@/views/error/ErrorPage404.vue'],resolve),
    meta: { title: '404', icon: '' },
    type: 'error',
    hidden: true
  },
  {
    path: '/403',
    name: 'error403',
    component: (resolve) => require(['@/views/error/ErrorPage403.vue'],resolve),
    meta: { title: '403', icon: '' },
    type: 'error',
    hidden: true
  },
  //这个*匹配必须放在最后，将改路由配置放到所有路由的配置信息的最后，否则会其他路由path匹配造成影响。     
  {
    path: '*',
    redirect: '/404',
    type: 'error',
    hidden: true
  }
]

const router = new VueRouter({
  mode: 'history',
  //base: process.env.BASE_URL,
  scrollBehavior: () => ({ y: 0 }),
  routes
})
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

export default router
