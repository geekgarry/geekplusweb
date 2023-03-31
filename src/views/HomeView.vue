<template>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div> -->
  <div class="is-fullhd">
    <div class="card is-flex-mobile is-hidden-tablet">
      <header class="card-header">
        <p class="card-header-title">
          时间从来不回答，生命从来不喧哗。我是我境遇里的起步者！
        </p>
        <button class="card-header-icon" aria-label="more options">
          <span class="icon">
            <i class="fa fa-angle-down" aria-hidden="true"></i>
          </span>
        </button>
      </header>
    </div>
    <!-- 是Buefy中的一个类，页面以白色为背景 -->
    <div class="container my-auto mx-auto">
      <div class="tile is-vertical">
        <div class="tile is-parent is-hidden-mobile">
          <div class="tile is-child">
            <div
              class="columns is-variable is-1-mobile is-1-tablet is-2-desktop is-2-widescreen is-2-fullhd is-multiline is-flex-mobile"
            >
              <div class="column">
                <div class="card">
                  <div class="overlay-layer">
                    <div class="overlay-inner-div">
                      <div class="overlay-title">title</div>
                      <a class="info" href="#">更多</a>
                    </div>
                  </div>
                  <div class="card-image">
                    <figure class="image is-3by2">
                      <img src="img/cover2.jpg" alt="Placeholder image" />
                    </figure>
                  </div>
                </div>
              </div>
              <div class="column">
                <div class="card">
                  <div class="overlay-layer">
                    <div class="overlay-inner-div">
                      <div class="overlay-title">title</div>
                      <a class="info" href="#">更多</a>
                    </div>
                  </div>
                  <div class="card-image">
                    <figure class="image is-3by2">
                      <img src="img/cover2.jpg" alt="Placeholder image" />
                    </figure>
                  </div>
                </div>
              </div>
              <div class="column">
                <div class="card">
                  <div class="overlay-layer">
                    <div class="overlay-inner-div">
                      <div class="overlay-title">title</div>
                      <a class="info" href="#">更多</a>
                    </div>
                  </div>
                  <div class="card-image">
                    <figure class="image is-3by2">
                      <img src="img/cover2.jpg" alt="Placeholder image" />
                    </figure>
                  </div>
                </div>
              </div>
              <div class="column">
                <div class="card">
                  <div class="overlay-layer">
                    <div class="overlay-inner-div">
                      <div class="overlay-title">title</div>
                      <a class="info" href="#">更多</a>
                    </div>
                  </div>
                  <div class="card-image">
                    <figure class="image is-3by2">
                      <img src="img/cover2.jpg" alt="Placeholder image" />
                    </figure>
                  </div>
                </div>
              </div>
              <div class="column">
                <div class="card">
                  <div class="overlay-layer">
                    <div class="overlay-inner-div">
                      <div class="overlay-title">title</div>
                      <a class="info" href="#">更多</a>
                    </div>
                  </div>
                  <div class="card-image">
                    <figure class="image is-3by2">
                      <img src="img/cover2.jpg" alt="Placeholder image" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="tile"> -->
        <!-- <div class="tile is-hidden-touch">
          <div class="tile is-parent">
            <div class="tile is-child">
              <div
                class="columns is-desktop is-variable is-1-mobile is-1-tablet is-2-desktop is-2-widescreen is-2-fullhd"
              >
                <div class="column">
                  <div class="card" >
                    <div class="card-image">
                      <figure class="image is-3by2">
                        <img src="img/cover1.jpg" alt="Placeholder image" />
                      </figure>
                    </div>
                    <div class="card-content">
                      <div class="media">
                        <div class="media-left">
                          <figure class="image is-24x24">
                            <img
                              :src="require('@/assets/logo.png')"
                              alt="Placeholder image"
                            />
                          </figure>
                        </div>
                        <div class="media-content">
                          <p class="title is-6">Garry Plus</p>
                          <p class="subtitle is-size-7">@garryplus</p>
                        </div>
                      </div>
                      <div class="content is-size-6">
                        <span class="custom-title"
                          >市集里最熟悉的陌生人，多年以后，我们又在繁华的市集相遇，伫立对视片刻，便擦肩而过，消失在了人潮中。</span
                        >
                        <br />
                        <div class="is-size-6">
                          <a href="#">#java</a> <a href="#">#nodejs</a>
                        </div>
                        <time class="is-size-7" datetime="2016-1-1"
                          >11:09 PM - 1 Jan 2016</time
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="column">
                  <div class="card">
                    <div class="card-image">
                      <figure class="image is-3by2">
                        <img src="img/cover1.jpg" alt="Placeholder image" />
                      </figure>
                    </div>
                    <div class="card-content">
                      <div class="media">
                        <div class="media-left">
                          <figure class="image is-24x24">
                            <img
                              :src="require('@/assets/logo.png')"
                              alt="Placeholder image"
                            />
                          </figure>
                        </div>
                        <div class="media-content">
                          <p class="title is-6">Garry Plus</p>
                          <p class="subtitle is-size-7">@garryplus</p>
                        </div>
                      </div>
                      <div class="content is-size-6">
                        <span class="custom-title"
                          >市集里最熟悉的陌生人，多年以后，我们又在繁华的市集相遇，伫立对视片刻，便擦肩而过，消失在了人潮中。</span
                        >
                        <br />
                        <div class="is-size-6">
                          <a href="#">#java</a> <a href="#">#nodejs</a>
                        </div>
                        <time class="is-size-7" datetime="2016-1-1"
                          >11:09 PM - 1 Jan 2016</time
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="column">
                  <div class="card">
                    <div class="card-image">
                      <figure class="image is-3by2">
                        <img src="img/cover1.jpg" alt="Placeholder image" />
                      </figure>
                    </div>
                    <div class="card-content">
                      <div class="media">
                        <div class="media-left">
                          <figure class="image is-24x24">
                            <img
                              :src="require('@/assets/logo.png')"
                              alt="Placeholder image"
                            />
                          </figure>
                        </div>
                        <div class="media-content">
                          <p class="title is-6">Garry Plus</p>
                          <p class="subtitle is-size-7">@garryplus</p>
                        </div>
                      </div>
                      <div class="content is-size-6">
                        <span class="custom-title"
                          >市集里最熟悉的陌生人，多年以后，我们又在繁华的市集相遇，伫立对视片刻，便擦肩而过，消失在了人潮中。</span
                        >
                        <br />
                        <div class="is-size-6">
                          <a href="#">#java</a> <a href="#">#nodejs</a>
                        </div>
                        <time class="is-size-7" datetime="2016-1-1"
                          >11:09 PM - 1 Jan 2016</time
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="column">
                  <div class="card">
                    <div class="card-image">
                      <figure class="image is-3by2">
                        <img src="img/cover1.jpg" alt="Placeholder image" />
                      </figure>
                    </div>
                    <div class="card-content">
                      <div class="media">
                        <div class="media-left">
                          <figure class="image is-24x24">
                            <img
                              :src="require('@/assets/logo.png')"
                              alt="Placeholder image"
                            />
                          </figure>
                        </div>
                        <div class="media-content">
                          <p class="title is-6">Garry Plus</p>
                          <p class="subtitle is-size-7">@garryplus</p>
                        </div>
                      </div>
                      <div class="content is-size-6">
                        <span class="custom-title"
                          >市集里最熟悉的陌生人，多年以后，我们又在繁华的市集相遇，伫立对视片刻，便擦肩而过，消失在了人潮中。</span
                        >
                        <br />
                        <div class="is-size-6">
                          <a href="#">#java</a> <a href="#">#nodejs</a>
                        </div>
                        <time class="is-size-7" datetime="2016-1-1"
                          >11:09 PM - 1 Jan 2016</time
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> -->
        <div class="tile">
          <div class="tile is-vertical is-8">
            <div class="tile is-parent">
              <div class="tile is-child">
                <div class="">
                  <div class="box" v-for="(item,index) in articleList" :key="index">
                    <article class="media">
                      <div
                        class="media-left is-flex is-justify-content-center is-align-items-center is-align-content-center"
                      >
                        <figure class="image is-128x128">
                          <img
                            class="is-rounded"
                            :src="require('@/assets/logo.png')"
                            alt="Image"
                          />
                        </figure>
                      </div>
                      <div class="media-content">
                        <div class="content">
                          <!-- <div class="title is-6">
                              Iconfont-国内功能很强大且图标
                          </div> -->
                          <p class="is-size-6">
                            <strong>{{ item.authorName }}</strong> <small>@{{ item.authorName }}</small>
                            <small>31m</small>
                            <br />
                            <router-link :to="'/article/'+item.id">{{ item.articleTitle?item.articleTitle:'Iconfont-国内功能很强大且图标内容很丰富的矢量图标库' }}</router-link>
                          </p>
                          <p class="is-size-7">{{ item.createTime }}</p>
                        </div>
                        <nav class="level is-mobile is-hidden-desktop">
                          <div class="level-left">
                            <a class="level-item" aria-label="reply">
                              <span class="icon is-small">
                                <i class="fa fa-reply" aria-hidden="true"></i>
                              </span>
                            </a>
                            <a class="level-item" aria-label="retweet">
                              <span class="icon is-small">
                                <i class="fa fa-retweet" aria-hidden="true"></i>
                              </span>
                            </a>
                            <a class="level-item" aria-label="like">
                              <span class="icon is-small">
                                <i class="fa fa-heart" aria-hidden="true"></i>
                              </span>
                            </a>
                          </div>
                        </nav>
                      </div>
                    </article>
                  </div>
                  <article class="box">
                    <p class="title">Two</p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin ornare magna eros, eu pellentesque tortor vestibulum
                      ut. Maecenas non massa sem. Etiam finibus odio quis feugiat
                      facilisis.
                    </p>
                  </article>
                  <article class="box">
                    <p class="title">Two</p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin ornare magna eros, eu pellentesque tortor vestibulum
                      ut. Maecenas non massa sem. Etiam finibus odio quis feugiat
                      facilisis.
                    </p>
                  </article>
                  <article class="box">
                    <p class="title">Two</p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin ornare magna eros, eu pellentesque tortor vestibulum
                      ut. Maecenas non massa sem. Etiam finibus odio quis feugiat
                      facilisis.
                    </p>
                  </article>
                </div>
              </div>
            </div>
          </div>
          <!-- </div> -->
          <div class="tile">
            <div class="tile is-parent">
              <div class="tile is-child">
                <div class="">
                  <article class="panel">
                    <p class="panel-heading">搜索</p>
                    <p class="panel-tabs">
                      <a class="is-active">All</a>
                      <a>Public</a>
                      <a>Private</a>
                      <a>Sources</a>
                      <a>Forks</a>
                    </p>
                    <div class="panel-block">
                      <p class="control has-icons-left has-icons-right">
                        <input
                          class="input is-info"
                          type="text"
                          placeholder="Search"
                        />
                        <span class="icon is-left">
                          <i class="fa fa-search" aria-hidden="true"></i>
                        </span>
                        <!-- <span class="icon is-right">
                          <button class="btn">GO!</button>
                          <i class="fa fa-long-arrow-alt-left" aria-hidden="true"></i>
                        </span> -->
                      </p>
                      <!-- <p class="control">
                        
                      </p> -->
                    </div>
                    <!-- <a class="panel-block">
                    <span class="panel-icon">
                      <i class="fas fa-book" aria-hidden="true"></i>
                    </span>
                    jgthms.github.io
                  </a> -->
                  </article>
                  <div class="panel is-info">
                    <p class="panel-heading">Info</p>
                    <div class="box">
                      <template>
                        <section>
                          <b-field grouped group-multiline>
                            <div class="control">
                              <b-taglist attached>
                                <b-tag type="is-dark">npm</b-tag>
                                <b-tag type="is-info">0.5.1</b-tag>
                              </b-taglist>
                            </div>
  
                            <div class="control">
                              <b-taglist attached>
                                <b-tag type="is-dark">downloads</b-tag>
                                <b-tag type="is-success">15k</b-tag>
                              </b-taglist>
                            </div>
                            <div class="control">
                              <b-tag
                                type="is-primary"
                                attached
                                aria-close-label="Close tag"
                                closable
                              >
                                Technology
                              </b-tag>
                            </div>
                            <div class="control">
                              <b-taglist attached>
                                <b-tag type="is-dark">chat</b-tag>
                                <b-tag type="is-primary">on discord</b-tag>
                              </b-taglist>
                            </div>
                          </b-field>
                          <b-taglist>
                            <b-tag type="is-info">First</b-tag>
                            <b-tag rounded>Tag label</b-tag>
                          </b-taglist>
                        </section>
                      </template>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import {getArticleCategoryList} from "@/api/geekplus/geekplus"
export default {
  name: "HomeView",
  // components: {
  //   HelloWorld
  // }
  data() {
    return {
      billboard: "版本更新",
      carousels: [
        { text: "Slide 1", color: "primary" },
        { text: "Slide 2", color: "info" },
        { text: "Slide 3", color: "success" },
        { text: "Slide 4", color: "warning" },
        { text: "Slide 5", color: "danger" },
      ],
      articleList:[],
    };
  },
  created(){
    this.getArticleListByCategory();
  },
  methods: {
    getImgUrl(value) {
      return `https://picsum.photos/id/43${value}/1230/500`;
    },
    getArticleListByCategory(){
      getArticleCategoryList().then(response=>{
        this.articleList=response.rows;
      }).catch(error=>{
        console.log(error)
      })
    }
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
.is-active .al img {
  filter: grayscale(0%);
}
.al img {
  filter: grayscale(100%);
}
#gp_banner {
  background-image: url("@/assets/banner.jpeg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0 auto;
  object-position: center;
  object-fit: cover;
  text-align: center;
  color: rgb(237, 237, 237);
  .title {
    color: rgb(36, 37, 37);
  }
}
.custom-title {
  width: 100%;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box; //对象作为伸缩盒子模型显示
  display: -moz-box;
  -webkit-box-orient: vertical; //设置或检索伸缩盒对象的子元素的排列方式
  -webkit-line-clamp: 2; // 显示的行数
  overflow: hidden; // 隐藏超出的内容
}
</style>
