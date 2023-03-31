<template>
  <div class="container">
    <section>
      <b-breadcrumb
        id="GPBreadcrumb"
        align="is-left"
        separator="has-arrow-separator"
        size="is-small"
      >
        <b-breadcrumb-item
          tag="router-link"
          :to="item.path"
          v-for="(item, index) in levelList"
          :key="item.path"
          :active="index == levelList.length - 1 ? true : false"
        >
          <!-- <span v-if="item.redirect==='noRedirect'||index==levelList.length-1" class="no-redirect">{{ item.meta.title }}</span> -->
          <span>{{ item.meta.title }}</span>
          <!-- <a v-else @click.prevent="handleLink(item)">{{ item.meta.title }}</a> -->
        </b-breadcrumb-item>
        <!-- <b-breadcrumb-item tag='router-link' to="/documentation">Docs</b-breadcrumb-item>
                        <b-breadcrumb-item tag='router-link' to="/documentation/breadcrumb" active>Breadcrumb</b-breadcrumb-item> -->
      </b-breadcrumb>
    </section>
    <div class="tile">
      <div class="tile is-parent is-vertical is-1"></div>
      <div class="tile is-vertical is-10">
        <div class="tile is-parent is-vertical">
          <article class="tile is-child notification is-success">
            <div class="content">
              <h3>
                {{
                  articleInfo.articleTitle
                    ? articleInfo.articleTitle
                    : "代码没有双全法，人生也一样"
                }}
              </h3>
              <!-- <h4>param传值{{ $route.params.articleId }}</h4> -->
              <div class="tt">
                <label
                  >作者：{{
                    articleInfo.authorName ? articleInfo.authorName : "周舟"
                  }}</label
                >
                |
                <label
                  >发布：{{
                    articleInfo.createTime
                      ? articleInfo.createTime
                      : "2019.05.31"
                  }}</label
                >
                |
                <label
                  >浏览：{{
                    articleInfo.viewCount ? articleInfo.viewCount : 38909
                  }}</label
                >
              </div>
              <div
                class="content"
                v-if="articleInfo.articleContent"
                v-html="articleInfo.articleContent"
              ></div>
              <div class="content" v-else>
                <p>
                  软件设计要考虑诸多方面，权衡各种利弊，以设计一个趋于完美的解决方案。在方案未落实之前，这也是争论的焦点，探讨的是方案的可行性，然而无论再好的方案都有弊端的，只是众多方案中选优罢了，这点正是本文的主题。程序设计不可能集所有优点于一身，必有牺牲的一面，常常因为为了满足准确性，而牺牲了性能，为了满足某些需求，而冗余了代码，甚至入侵了业务也不惜，因此代码是没有双全法的，有得必有失，不必苛求。
                </p>
                <p>
                  代码尚且如此，人生又何尝不是？人生是不完美的，也无法做到十全十美，这不是付出多少的问题，这就是一个真命题，就像地球引力一般的存在，再成功的人也有他遗憾的问题，是因为他厚此薄彼的结果，当然厚此薄彼要加上引号，其动机没有不纯，这就是2选1的问题，举个不恰当的例子，一个男人有了外遇，被老婆知道了，老婆和情人其实都有一个共同的诉求，就是男人必须在两者之间选择一个，这时男人不管如何做出选择都是痛的，如若男人继续做出中庸的选择，那么两头都不讨好，最后只能竹篮打水一场空，两个人都得不到，举这个例子可能不太恰当，但能说明问题所在。
                </p>
                <p>
                  说了这么多，无非就是论证并无双全法之说，唯一的办法是以自己的诉求为出发点，偏向和放大一方，以最小的代价舍弃另一方。以上纯属个人无稽之谈，愉悦而已，喜则取之，厌则弃之。
                </p>
              </div>
              <!-- Content -->
            </div>
          </article>
          <div class="tile is-child">
            <div class="">
              <div class="card">
                <div class="card-content">
                  <h2 class="title">"Quote"</h2>
                  <h3 class="subtitle">Programmer</h3>
                </div>
                <footer class="card-footer">
                  <span class="card-footer-item">
                    <a href="#" class="button is-success">
                      <!-- <i class="fa fa-thumbs-up"></i> -->
                      <b-icon pack="fa" icon="thumbs-up" size="is-medium">
                      </b-icon>
                    </a>
                  </span>
                  <span class="card-footer-item">
                    <a href="#" class="button is-danger">
                      <!-- <i class="fa fa-thumbs-o-down"></i> -->
                      <!-- <font-awesome-icon icon="fa-sharp fa-solid fa-thumbs-up" /> -->
                      <b-icon pack="fa" icon="thumbs-down" size="is-medium">
                      </b-icon>
                    </a>
                  </span>
                  <span class="card-footer-item">
                    <a href="#" class="button is-info">
                      <!-- <i class="fa fa-retweet"></i> -->
                      <b-icon pack="fa" icon="retweet" size="is-medium">
                      </b-icon>
                    </a>
                  </span>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="tile is-parent is-vertical is-1"></div>
      <!-- <div class="tile is-parent is-vertical">
        <div class="tile is-child">
          <article class="panel box is-info">
            <p class="panel-heading">搜索</p>
            <p class="panel-tabs">
              <a class="is-active">All</a>
              <a>Public</a>
              <a>Private</a>
              <a>Sources</a>
              <a>Forks</a>
            </p>
            <div class="panel-block">
              <p class="control has-icons-left">
                <b-field>
                  <b-input
                    placeholder="搜索..."
                    type="search"
                    icon-pack="fa"
                    icon="search"
                    icon-size="is-small"
                    rounded
                  >
                  </b-input>
                </b-field>
              </p>
            </div>
            <a class="panel-block is-active">
              <span class="panel-icon">
                <i class="fas fa-book" aria-hidden="true"></i>
              </span>
              bulma
            </a>
            <a class="panel-block">
              <span class="panel-icon">
                <i class="fas fa-book" aria-hidden="true"></i>
              </span>
              marksheet
            </a>
            <a class="panel-block">
              <span class="panel-icon">
                <i class="fas fa-book" aria-hidden="true"></i>
              </span>
              minireset.css
            </a>
            <a class="panel-block">
              <span class="panel-icon">
                <i class="fas fa-book" aria-hidden="true"></i>
              </span>
              jgthms.github.io
            </a>
          </article>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import {
  ToastProgrammatic as Toast,
  ModalProgrammatic as Modal,
  NotificationProgrammatic as Notification,
} from "buefy"; // 项目用的buefy UI框架
import { getWorldCovid, getcovid, get163coviddata } from "@/api/test";
import { getArticleDetail } from "@/api/geekplus/geekplus";
//import BreadCrumb from '@/components/BreadCrumb'
export default {
  name: "BlogArticle",
  // components: {
  //     BreadCrumb
  // },
  data() {
    return {
      mycharts: "",
      worldNames: [],
      levelList: [], //导航面包屑数据
      articleInfo: {
        articleCategory: "4",
        articleContent: null,
        articleTitle: "springboot整合AOP,实现log操作日志",
        authorId: null,
        authorName: "一个程序员",
        createBy: null,
        createTime: "2023-03-21 08:36:14",
        id: 1,
        isDisplay: "0",
        likeCount: null,
        params: {},
        remark: null,
        searchValue: null,
        updateBy: null,
        updateTime: "2023-03-21 17:32:28",
        viewCount: null,
      },
    };
  },
  created() {
    this.getBreadcrumb();
    //this.test();
    this.test1();
    console.log(this.$route.params.articleId);
    this.getArticle();
  },
  mounted() {
    //Toast.open("fbjbj")
    //this.mycharts = echarts.init(document.getElementById('mapchart'))
    this.init();
  },
  methods: {
    getArticle() {
      var id = this.$route.params.articleId;
      getArticleDetail(id)
        .then((response) => {
          this.articleInfo = response.data;
        })
        .catch((error) => {});
    },
    init() {
      // 使用新浪疫情数据接口获取数据
      // jsonp(
      //     'http://interface.sina.cn/news/wap/fymap2020_data.d.json?_=1580892522427',
      //     (err, data) => {
      //         console.log(data.data.worldlist);
      //         // const list = data.data.worldlist.map(item => {
      //         //     return {
      //         //         name: item.name,
      //         //         value: item.value
      //         //     }
      //         // })
      //         // this.test(names).then(res => {
      //         //     console.log(res.data.dst);
      //         //     let ss = res.data.dst;
      //         //     console.log(ss);
      //         //     let namess = ('"' + ss.replace(/, /g, '","') + '"').split(",");
      //         //     this.worldNames = namess;
      //         // });
      //         let arr = (data.data.worldlist);
      //         let list = arr.map(function(e) {
      //             return {name:e.name, value: e.value };
      //         });
      //         // let list1 = arr.map(function(e) {
      //         //     return {name:e.name, value: e.deathNum };
      //         // });
      //         console.log(list);
      //         // 将数据给到地图
      //         option.series[0].data = list;
      //         //option.series[1].data = list1;
      //         this.mycharts.setOption(option);
      //         // this.mycharts.on("click", function(params) {
      //         // console.log(params);
      //         // if (params.name === "China") {
      //         // console.log(1111);
      //         // this.$router.push({path:'/covid'});
      //         // }
      //         // });
      // })
      // getWorldCovid().then(response => {
      //     let that=this;
      //     let covid19=JSON.parse(response.data);
      //     console.log(covid19);
      //     let arr = covid19.data;
      //         let list = arr.map(function(e) {
      //             return { name: e.name, value: e.value };
      //     });
      //     // 将数据给到地图
      //     option.series[0].data = list;
      //     this.myecharts.setOption(option);
      // });
    },
    test1() {
      getWorldCovid().then((response) => {
        var res = response;
        console.log(res);
      });
    },
    test(content) {
      this.axios
        .post("https://maikeadmin.geekplus.xyz:8443")
        .then((response) => {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    getBreadcrumb() {
      let matched = this.$route.matched.filter(
        (item) => item.meta && item.meta.title
      );
      const first = matched[0];

      if (!this.isHome(first)) {
        matched = [{ path: "/", meta: { title: "首页" } }].concat(matched);
      }

      this.levelList = matched.filter(
        (item) => item.meta && item.meta.title && item.meta.breadcrumb !== false
      );
      console.log(this.levelList);
    },
    isHome(route) {
      const name = route && route.name;
      if (!name) {
        return false;
      }
      return name.trim().toLocaleLowerCase() === "home".toLocaleLowerCase();
    },
  },
};
</script>

<style>
</style>