<template>
  <div class="container">
    <div class="tile">
        <div class="tile is-parent is-8 is-vertical">
            <div class="tile is-child">
                <form class="box">
                    <div class="field">
                      <label class="label">Email</label>
                      <div class="control">
                        <input class="input" type="email" placeholder="e.g. alex@example.com">
                      </div>
                    </div>
                  
                    <div class="field">
                      <label class="label">Password</label>
                      <div class="control">
                        <input class="input" type="password" placeholder="********">
                      </div>
                    </div>
                  
                    <button class="button is-primary">Sign in</button>
                  </form>
                  <div class="card">
                    <div class="card-content">
                      <div class="content">
                        Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras mattis consectetur purus sit amet fermentum.
                      </div>
                    </div>
                  </div>
            </div>
        </div>
        <div class="tile is-parent is-vertical">
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
</template>

<script>
export default {

}
</script>

<style>

</style>