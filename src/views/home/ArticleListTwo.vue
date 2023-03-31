<template>
    <div class="container my-auto mx-auto">
        <div class="tile ">
            <div class="tile is-vertical">
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
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name:'ArticleListTwo'

}
</script>

<style>

</style>