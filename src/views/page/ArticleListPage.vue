<template>
  <div class="is-fullhd">
    <div class="container">
      <div class="tile is-vertical">
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
import {getArticleCategoryList} from "@/api/geekplus/geekplus"
export default {
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

<style>
</style>