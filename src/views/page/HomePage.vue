<template>
    <!-- <div class="home">
      <img alt="Vue logo" src="../assets/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div> -->
    <!-- 是Buefy中的一个类，页面以白色为背景 -->
    <div class="container">
      <section class="hero">
        <div class="hero-body">
          <b-carousel
            :indicator-inside="true"
            indicator-style="is-boxes"
            icon-size="is-small"
          >
            <b-carousel-item v-for="(item, i) in 6" :key="i">
              <b-image class="image" :src="getImgUrl(i)"></b-image>
            </b-carousel-item>
            <!-- <template #indicators="props">
                  <b-image class="al image" :src="getImgUrl(props.i)" :title="props.i"></b-image>
                </template> -->
          </b-carousel>
          <p class="title">Info hero</p>
          <p class="subtitle">Info subtitle</p>
        </div>
      </section>
      <div class="tile">
        <!-- <div class="tile is-vertical"></div> -->
        <div class="tile is-parent">
          <div class="tile is-vertical is-8">
            <div class="tile is-parent">
              <div class="tile is-child box">
                <!-- <p class="title">Two</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  ornare magna eros, eu pellentesque tortor vestibulum ut.
                  Maecenas non massa sem. Etiam finibus odio quis feugiat
                  facilisis.
                </p> -->
                <b-carousel>
                  <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
                    <section :class="`hero is-medium is-${carousel.color}`">
                      <div class="hero-body has-text-centered">
                        <h1 class="title">{{ carousel.text }}</h1>
                      </div>
                    </section>
                  </b-carousel-item>
                </b-carousel>
              </div>
            </div>
            <div class="tile">
              <div class="tile is-parent is-vertical">
                <article class="tile is-child box">
                  <!-- Put any content you want -->
                  🔔 {{ billboard }}
                </article>
                <article class="tile is-child box">
                  <!-- Put any content you want -->
                  demo22
                </article>
              </div>
              <div class="tile is-parent">
                <article class="tile is-child box">
                  <!-- Put any content you want -->
                  demo33
                </article>
              </div>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child box">
                <!-- Put any content you want -->
                demo44
              </article>
            </div>
          </div>
          <div class="tile is-parent is-vertical">
            <article class="tile is-child panel is-info">
              <p class="panel-heading">
                搜索
              </p>
              <p class="panel-tabs">
                <a class="is-active">All</a>
                <a>Public</a>
                <a>Private</a>
                <a>Sources</a>
                <a>Forks</a>
              </p>
              <div class="panel-block">
                <p class="control has-icons-left">
                  <input class="input is-info" type="text" placeholder="Search">
                  <span class="icon is-left">
                    <i class="fas fa-search" aria-hidden="true"></i>
                  </span>
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
            <article class="tile is-child box">
              <!-- Put any content you want -->
              <p class="title">Two</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                ornare magna eros, eu pellentesque tortor vestibulum ut.
                Maecenas non massa sem. Etiam finibus odio quis feugiat
                facilisis.
              </p>
            </article>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  //import HelloWorld from '@/components/HelloWorld.vue'
  
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
      };
    },
    methods: {
      getImgUrl(value) {
        return `https://picsum.photos/id/43${value}/1230/500`;
      },
    },
  };
  </script>
  
  <style>
  body{
    margin: 0;
    padding: 0;
  }
  .is-active .al img {
    filter: grayscale(0%);
  }
  .al img {
    filter: grayscale(100%);
  }
  </style>
  