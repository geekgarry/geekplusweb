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
      <div class="tile ">
        <!-- <div class="tile is-vertical"></div> -->
        <!-- <div class="tile"> -->
        <div class="tile is-vertical">
          <div class="tile is-parent">
            <div class="tile is-child">
              <div
                class="columns is-variable is-1-mobile is-1-tablet is-1-desktop is-1-widescreen is-1-fullhd is-multiline is-mobile is-desktop is-centered is-vcentered"
              >
                <div class="column is-12-mobile is-half-tablet is-half-desktop is-half-widescreen is-half-fullhd">
                  <div class="columns is-variable is-1-mobile is-1-tablet is-1-desktop is-1-widescreen is-1-fullhd is-multiline is-mobile is-desktop is-centered is-vcentered">
                    <div class="column is-half-mobile is-half-tablet is-half-desktop is-half-widescreen is-half-fullhd pt-1 pb-1">
                      <div class="card">
                        <div class="overlay-layer-stable">
                          <div class="overlay-inner-div">
                            <div class="overlay-title">
                              <router-link to="#">标题</router-link>
                            </div>
                            <a class="info" href="#">阅读</a>
                          </div>
                        </div>
                        <div class="card-image">
                          <figure class="image is-3by2">
                            <img src="img/cover2.jpg" alt="Placeholder image" />
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div class="column is-half-mobile is-half-tablet is-half-desktop is-half-widescreen is-half-fullhd pt-1 pb-1">
                      <div class="card">
                        <div class="overlay-layer-stable">
                          <div class="overlay-inner-div">
                            <div class="overlay-title">
                              <router-link to="#">标题</router-link>
                            </div>
                            <a class="info" href="#">阅读</a>
                          </div>
                        </div>
                        <div class="card-image">
                          <figure class="image is-3by2">
                            <img src="img/cover2.jpg" alt="Placeholder image" />
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div class="column is-half-mobile is-half-tablet is-half-desktop is-half-widescreen is-half-fullhd pt-1 pb-1">
                      <div class="card">
                        <div class="overlay-layer-stable">
                          <div class="overlay-inner-div">
                            <div class="overlay-title">
                              <router-link to="#">标题</router-link>
                            </div>
                            <a class="info" href="#">阅读</a>
                          </div>
                        </div>
                        <div class="card-image">
                          <figure class="image is-3by2">
                            <img src="img/cover2.jpg" alt="Placeholder image" />
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div class="column is-half-mobile is-half-tablet is-half-desktop is-half-widescreen is-half-fullhd pt-1 pb-1">
                      <div class="card">
                        <div class="overlay-layer-stable">
                          <div class="overlay-inner-div">
                            <div class="overlay-title">
                              <router-link to="#">标题</router-link>
                            </div>
                            <a class="info" href="#">阅读</a>
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
                <div class="column is-12-mobile is-half-tablet is-half-desktop is-half-widescreen is-half-fullhd">
                  <div class="card my-auto">
                    <div class="overlay-layer-stable">
                      <div class="overlay-inner-div">
                        <div class="overlay-title">
                          <router-link to="#">标题</router-link>
                        </div>
                        <a class="info" href="#">阅读</a>
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

          <div class="tile is-parent is-hidden-mobile">
            <div class="tile is-child">
              <div
                class="columns is-variable is-1-mobile is-1-tablet is-2-desktop is-2-widescreen is-2-fullhd is-multiline is-mobile is-desktop is-centered"
              >
                <div class="column is-half-mobile is-half-tablet is-one-fifth-desktop is-one-fifth-widescreen is-one-fifth-fullhd">
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
                <div class="column is-half-mobile is-half-tablet is-one-fifth-desktop is-one-fifth-widescreen is-one-fifth-fullhd">
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
                <div class="column is-half-mobile is-half-tablet is-one-fifth-desktop is-one-fifth-widescreen is-one-fifth-fullhd">
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
                <div class="column is-half-mobile is-half-tablet is-one-fifth-desktop is-one-fifth-widescreen is-one-fifth-fullhd">
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
                <div class="column is-half-mobile is-half-tablet is-one-fifth-desktop is-one-fifth-widescreen is-one-fifth-fullhd">
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
          <div class="tile is-parent">
            <div class="tile is-child">
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
                    <div class="control">
                      <b-taglist>
                        <b-tag type="is-info">First</b-tag>
                        <b-tag rounded>Tag label</b-tag>
                      </b-taglist>
                    </div>
                  </b-field>
                </section>
              </template>
            </div>
          </div>
          <div class="tile is-parent">
            <div class="tile is-child">
              <div class="columns is-multiline">
                <div class="column is-half">
                  <div class="box">
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
                            <strong>Garry Chan</strong>
                            <small>@garryplus</small>
                            <small>31m</small>
                            <br />
                            Iconfont-国内功能很强大且图标内容很丰富的矢量图标库,
                            提供矢量图标下载、在快照
                            在小程序中使用阿里文字图标在小程序中使用阿里文字图标库前在小程序中使用阿里文字图标库前库前端开发的便捷工具
                            - AndrewNeo - CSDN博客
                          </p>
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
                </div>
                <div class="column is-half">
                  <div class="box">
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
                            <strong>Garry Chan</strong>
                            <small>@garryplus</small>
                            <small>31m</small>
                            <br />
                            Iconfont-国内功能很强大且图标内容很丰富的矢量图标库,
                            提供矢量图标下载、在快照
                            在小程序中使用阿里文字图标在小程序中使用阿里文字图标库前在小程序中使用阿里文字图标库前库前端开发的便捷工具
                            - AndrewNeo - CSDN博客
                          </p>
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
                </div>
                <div class="column is-half">
                  <div class="box">
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
                            <strong>Garry Chan</strong>
                            <small>@garryplus</small>
                            <small>31m</small>
                            <br />
                            Iconfont-国内功能很强大且图标内容很丰富的矢量图标库,
                            提供矢量图标下载、在快照
                            在小程序中使用阿里文字图标在小程序中使用阿里文字图标库前在小程序中使用阿里文字图标库前库前端开发的便捷工具
                            - AndrewNeo - CSDN博客
                          </p>
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
                </div>
                <div class="column is-half">
                  <div class="box">
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
                            <strong>Garry Chan</strong>
                            <small>@garryplus</small>
                            <small>31m</small>
                            <br />
                            Iconfont-国内功能很强大且图标内容很丰富的矢量图标库,
                            提供矢量图标下载、在快照
                            在小程序中使用阿里文字图标在小程序中使用阿里文字图标库前在小程序中使用阿里文字图标库前库前端开发的便捷工具
                            - AndrewNeo - CSDN博客
                          </p>
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
                </div>
              </div>
            </div>
            <!-- <div class="tile is-6">
              <article class="box">
                <p class="title">Two</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  ornare magna eros, eu pellentesque tortor vestibulum ut.
                  Maecenas non massa sem. Etiam finibus odio quis feugiat
                  facilisis.
                </p>
              </article>
            </div>
            <div class="tile is-6">
              <article class="box">
                <p class="title">Two</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  ornare magna eros, eu pellentesque tortor vestibulum ut.
                  Maecenas non massa sem. Etiam finibus odio quis feugiat
                  facilisis.
                </p>
              </article>
            </div>
            <div class="tile is-6">
              <article class="box">
                <p class="title">Two</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  ornare magna eros, eu pellentesque tortor vestibulum ut.
                  Maecenas non massa sem. Etiam finibus odio quis feugiat
                  facilisis.
                </p>
              </article>
            </div> -->
          </div>
          <div class="tile is-parent">
            <div class="tile is-child">
              <div
                class="columns is-variable is-1-mobile is-1-tablet is-2-desktop is-2-widescreen is-2-fullhd is-multiline is-mobile is-desktop is-centered"
              >
                <div class="column is-half-mobile is-half-tablet is-one-quarter-desktop is-one-quarter-widescreen is-one-quarter-fullhd">
                  <div class="card">
                    <div class="card-image">
                      <figure class="image is-3by2">
                        <img src="img/cover1.jpg" alt="Placeholder image" />
                      </figure>
                    </div>
                    <div class="card-content">
                      <div class="media is-hidden-mobile">
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
                <div class="column is-half-mobile is-half-tablet is-one-quarter-desktop is-one-quarter-widescreen is-one-quarter-fullhd">
                  <div class="card">
                    <div class="card-image">
                      <figure class="image is-3by2">
                        <img src="img/cover1.jpg" alt="Placeholder image" />
                      </figure>
                    </div>
                    <div class="card-content">
                      <div class="media is-hidden-mobile">
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
                <div class="column is-half-mobile is-half-tablet is-one-quarter-desktop is-one-quarter-widescreen is-one-quarter-fullhd">
                  <div class="card">
                    <div class="card-image">
                      <figure class="image is-3by2">
                        <img src="img/cover1.jpg" alt="Placeholder image" />
                      </figure>
                    </div>
                    <div class="card-content">
                      <div class="media is-hidden-mobile">
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
                <div class="column is-half-mobile is-half-tablet is-one-quarter-desktop is-one-quarter-widescreen is-one-quarter-fullhd">
                  <div class="card">
                    <div class="card-image">
                      <figure class="image is-3by2">
                        <img src="img/cover1.jpg" alt="Placeholder image" />
                      </figure>
                    </div>
                    <div class="card-content">
                      <div class="media is-hidden-mobile">
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
        </div>
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>
  
  <script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "BigHome",
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
.card {
  position: relative;
}
.card-image img{
  background-size: cover;
  background-position: center center;
  object-fit: cover;
  position: relative;
  -webkit-transition: all 0.4s linear;
  -ms-transition: all 0.4s linear;
  -moz-transition: all 0.4s linear;
  -o-transition: all 0.4s linear;
  transition: all 0.4s linear;
  border-radius: 5px;
  -moz-border-radius: 5px;
  -o-border-radius: 5px;
  -webkit-border-radius: 5px;
  -ms-border-radius: 5px;
}
/*********************常规遮罩层显示***************************/
.overlay-layer-stable {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: auto;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.35); /*暗淡的背景*/
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
  display: flex;
  justify-content: center;
  align-items:flex-end;
  border-radius: 5px;
  -moz-border-radius: 5px;
  -o-border-radius: 5px;
  -webkit-border-radius: 5px;
  -ms-border-radius: 5px;
}
.overlay-layer-stable .overlay-inner-div{
  vertical-align:bottom;
  text-align:center;
  height: fit-content;
  display: table;
  padding-bottom:2px;
}
.overlay-layer-stable a{
  display: flex;
  width:max-content;
  color: #fff;
}
.overlay-layer-stable .overlay-title {
  display: table-caption;
  vertical-align:bottom;
  text-align:center;
  text-transform: uppercase;
  color: #fff;
  font-size: 1.1em;
  background: rgba(0, 0, 0, 0);
  -webkit-transition: all 0.2s ease-in-out;
  -moz-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  padding: 3px;
  height: 44px;
  line-height: 22px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space:pre-line;
  word-wrap: break-word;
  word-spacing: normal;
  word-break: break-word;
}
.overlay-layer-stable a.info {
  display: table-cell;
  text-decoration: none;
  vertical-align:baseline;
  text-align:center;
  text-transform: uppercase;
  color: #fff;
  font-size: 0.8em;
  background-color: transparent;
  filter: alpha(opacity=0);
  -webkit-transition: all 0.2s ease-in-out;
  -moz-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  padding: 3px 5px;
}
.overlay-layer-stable:hover .overlay-title a {
  /** box-shadow: 0 0 5px #fff; **/
  color: rgb(133, 182, 166);
  background-color: #54535357;
}
/**.overlay-layer-stable a.info:hover {
  box-shadow: 0 0 5px #fff;
}*/
.overlay-layer-stable a:hover h2,
.overlay-layer-stable a:hover a.info {
  opacity: 1;
  filter: alpha(opacity=100);
  -ms-transform: translatey(0);
  -webkit-transform: translatey(0);
  transform: translatey(0);
}

.overlay-layer-stable a:hover a.info {
  -webkit-transition-delay: 0.2s;
  transition-delay: 0.2s;
}
/****************鼠标停留遮罩层********************/
.overlay-layer {
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.526); /*暗淡的背景*/
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
  display: flex;
  justify-content: center;
  align-items:center;
  border-radius: 5px;
  -moz-border-radius: 5px;
  -o-border-radius: 5px;
  -webkit-border-radius: 5px;
  -ms-border-radius: 5px;
}
.overlay-layer .overlay-inner-div{
  vertical-align: middle;
  text-align:center;
  height: fit-content;
  display: table;
}
.overlay-layer .overlay-title {
  display: table-caption;
  vertical-align: middle;
  text-align:center;
  text-transform: uppercase;
  color: #fff;
  font-size: 1.2em;
  background: rgba(0, 0, 0, 0);
  /**-o-transform: translatey(50%);
  -moz-transform: translatey(50%);
  -webkit-transform: translatey(50%);
  -ms-transform: translatey(50%);
  transform: translatey(50%);*/
  -webkit-transition: all 0.2s ease-in-out;
  -moz-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  padding: 3px;
}

.overlay-layer a.info {
  display: table-cell;
  text-decoration: none;
  vertical-align: middle;
  text-align:center;
  text-transform: uppercase;
  color: #fff;
  border: 1px solid #fff;
  background-color: transparent;
  /*-o-transform: translatex(150%);
  -moz-transform: translatex(150%);
  -webkit-transform: translatex(150%);
  -ms-transform: translatex(150%);
  transform: translatex(150%);*/
  filter: alpha(opacity=0);
  -webkit-transition: all 0.2s ease-in-out;
  -moz-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  padding: 3px 5px;
}

.overlay-layer:hover {
  opacity: 1;
}

.overlay-layer a.info:hover {
  box-shadow: 0 0 5px #fff;
}
.overlay-layer a:hover h2,
.overlay-layer a:hover a.info {
  opacity: 1;
  filter: alpha(opacity=100);
  -ms-transform: translatey(0);
  -webkit-transform: translatey(0);
  transform: translatey(0);
}

.overlay-layer a:hover a.info {
  -webkit-transition-delay: 0.2s;
  transition-delay: 0.2s;
}
</style>
  