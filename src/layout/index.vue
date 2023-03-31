<template>
    <div id="app">
        <!-- <nav>
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link>
        </nav> -->
        <b-navbar
        type="is-white"
        :spaced="true"
        :shadow="true"
        :transparent="true">
          <template #brand>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
              <img
                :src="require('@/assets/logo.png')"
                alt="极客普拉斯"
              />极客普拉斯
            </b-navbar-item>
          </template>
          <template #start>
            <b-navbar-item href="javascript:void(0);" @click="$router.push('/')"> 首页 </b-navbar-item>
            <b-navbar-item href="javascript:void(0);" @click="$router.push('/articlelist')"> 编程技术 </b-navbar-item>
            <b-navbar-dropdown label="大屏">
              <b-navbar-item href="javascript:void(0);" @click="$router.push('/home')"> 首页 </b-navbar-item>
              <b-navbar-item href="javascript:void(0);" @click="$router.push('/home/articlelist')"> 技术探新 </b-navbar-item>
            </b-navbar-dropdown>
            <b-navbar-dropdown label="单列">
              <b-navbar-item href="javascript:void(0);" @click="$router.push('/homeindex')"> 首页 </b-navbar-item>
              <b-navbar-item href="javascript:void(0);" @click="$router.push('/homeindex/articlelist')"> 技术探新 </b-navbar-item>
            </b-navbar-dropdown>
            <b-navbar-item href="javascript:void(0);" @click="$router.push('/leavecomment')"> 给我留言 </b-navbar-item>
            <b-navbar-dropdown label="有关信息">
              <b-navbar-item href="#"> 关于我 </b-navbar-item>
              <b-navbar-item href="#"> 联系我 </b-navbar-item>
            </b-navbar-dropdown>
          </template>
          <template #end>
            <b-navbar-item tag="div">
              <div class="level-item">
                <!-- <div class="field has-addons">
                  <p class="control">
                    <input class="input" type="text" placeholder="输入搜索关键词">
                  </p>
                  <p class="control">
                    <button class="button">
                      Search
                    </button>
                  </p>
                </div> -->
                <b-field>
                  <b-input placeholder="搜索..."
                      type="search"
                      icon-pack="fa"
                      icon="search">
                  </b-input>
                  <p class="control">
                      <b-button type="is-primary" label="搜索" />
                  </p>
                </b-field>
              </div>
            </b-navbar-item>
            <b-navbar-item tag="div">
              <div class="buttons">
                <!-- <a class="button is-primary">
                  <strong>注册</strong>
                </a> -->
                <a class="button is-light" href="javascript:void(0);" @click="$router.push('/login')"> 登录 </a>
              </div>
            </b-navbar-item>
          </template>
        </b-navbar>
        <section id="gp_banner" class="hero is-hidden-mobile">
          <div class="hero-body">
            <nav class="level">
              <div class="level-item has-text-centered">
                <div>
                  <div class="heading">
                    <div class="level">
                      <div class="level-item">
                        <figure class="image is-128x128">
                          <img class="is-rounded" :src="require('@/assets/logo.png')">
                        </figure>
                        <!-- <b-image
                          :src="require('@/assets/logo.png')"
                          alt="geekplus"
                          rounded="true"
                          lazy
                          placeholder="加载中。。。"
                          >
                        </b-image> -->
                      </div>
                    </div>
                  </div>
                  <p class="title">极客普拉斯</p>
                  <div class="card has-background-grey-dark has-text-light">
                    <div class="card-content">
                      <!-- <p class="title">
                        极客普拉斯
                      </p>
                      <p class="subtitle">
                        “技术人生，科技改变生活，创新革命”
                      </p> -->
                      <p class="">
                        “技术人生，科技改变生活，创新革命”
                      </p>
                    </div>
                    <footer class="card-footer">
                      <p class="card-footer-item">
                        <span>
                          <a style="color:aliceblue;" href="https://blog.csdn.net/waiter456">CSDN</a>
                        </span>
                      </p>
                      <p class="card-footer-item">
                        <span>
                          <a style="color:aliceblue;" href="javascript:void(0);">分享</a>
                        </span>
                      </p>
                    </footer>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </section>
        <section class="hero is-small is-hidden-touch">
          <div class="hero-body">
            <div class="level">
              <div class="level-item has-text-centered">
                <div>
                  <p class="heading">文章</p>
                  <p class="title">3,456</p>
                </div>
              </div>
              <div class="level-item has-text-centered">
                <div>
                  <p class="heading">浏览</p>
                  <p class="title">123</p>
                </div>
              </div>
              <div class="level-item has-text-centered">
                <div>
                  <p class="heading">喜欢</p>
                  <p class="title">456K</p>
                </div>
              </div>
              <div class="level-item has-text-centered">
                <div>
                  <p class="heading">留言</p>
                  <p class="title">789</p>
                </div>
              </div>
            </div>
            <!-- <p class="title">Info hero</p>
              <p class="subtitle">Info subtitle</p> -->
          </div>
        </section>
        <app-main></app-main>
        <footer class="footer">
          <div class="container"></div>
          <div class="content has-text-centered">
            <p>
              <strong>geekplus</strong> by <a href="https://www.geekplus.xyz">geekplus.xyz</a>. The source code is licensed
              <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
              is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
            </p>
            <p>
              Copyright © 2023 | <a href="https://www.geekplus.xyz" target="_blank">geekplus</a> | All Rights Reserved
            </p>
          </div>
        </footer>
      </div>
</template>

<script>
import AppMain from "@/layout/component/AppMain.vue"
export default {
    name:'AppLayout',
    components:{
      AppMain
    },
    data(){
        return {

        }
    },
    created(){

    },
    mounted(){

    },

}
</script>

<style lang="scss">
#gp_banner{
  background-image: url("@/assets/banner.jpeg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0 auto;
  object-position: center;
  object-fit: cover;
  text-align: center;
  color: rgb(237, 237, 237);
  .title{
    color: rgb(36, 37, 37);
  }
}
</style>