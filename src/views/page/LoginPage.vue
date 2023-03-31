<template>
  <div class="container">
    <div class="tile">
      <div class="tile is-parent is-vertical">
        <div class="tile is-child"></div>
      </div>
      <div class="tile is-parent is-4 is-vertical">
        <div class="tile is-child">
          <form class="box">
            <div class="field has-text-centered">登录</div>
            <div class="field">
              <label class="label">邮箱</label>
              <div class="control">
                <input
                  class="input"
                  v-model="userInfo.email"
                  type="email"
                  placeholder="e.g. alex@example.com"
                />
              </div>
            </div>

            <div class="field" hidden>
              <label class="label">账号</label>
              <div class="control">
                <input
                  class="input"
                  v-model="userInfo.username"
                  type="email"
                  placeholder="e.g. alex@example.com"
                />
              </div>
            </div>

            <div class="field">
              <label class="label">密码</label>
              <div class="control">
                <input
                  class="input"
                  v-model="userInfo.password"
                  type="password"
                  placeholder="********"
                />
              </div>
            </div>
            <div class="field is-horizontal">
              <label class="label">记住密码：</label>
              <div class="control">
                <label class="radio">
                  <input type="radio" name="answer" />
                  是
                </label>
                <label class="radio">
                  <input type="radio" name="answer" />
                  否
                </label>
              </div>
            </div>
            <div class="field has-text-centered">
              <button class="button is-primary">登录</button>
            </div>
            <div class="field">
              没有账号？请<a
                href="javascript:void(0);"
                @click="userRegister"
                class="plus-modal-trigger"
                data-target="plus-modal"
                >注册</a
              >
            </div>
          </form>
          <div :class="'modal ' + registerModel" id="plus-modal">
            <div class="modal-background"></div>
            <div class="modal-card">
              <header class="modal-card-head">
                <p class="modal-card-title">注册</p>
                <button class="delete" @click="registerModel=''" aria-label="close"></button>
              </header>
              <section class="modal-card-body">
                <!-- Content ... -->
                <div class="card">
                  <div class="card-content">
                    <div class="content">
                      <div class="field">
                        <label class="label">邮箱</label>
                        <div class="control">
                          <input
                            class="input"
                            v-model="userInfo.email"
                            type="text"
                            placeholder="请输入邮箱"
                          />
                        </div>
                      </div>
                      <div class="field">
                        <label class="label">邮箱验证码</label>
                        <div class="control">
                          <input
                            class="input"
                            v-model="userInfo.verifyCode"
                            type="text"
                            placeholder="请输入邮箱验证码"
                          />
                        </div>
                      </div>
                      <div class="field">
                        <label class="label">密码</label>
                        <div class="control">
                          <input
                            class="input"
                            v-model="userInfo.password"
                            type="password"
                            placeholder="********"
                          />
                        </div>
                      </div>
                      <div class="field">
                        <label class="label">确认密码</label>
                        <div class="control">
                          <input
                            class="input"
                            v-model="userInfo.okPassword"
                            type="password"
                            placeholder="********"
                          />
                        </div>
                      </div>
                      <div class="field has-text-centered">
                        <button class="button is-primary">注册</button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <footer class="modal-card-foot is-justify-content-end">
                <!-- <button class="button is-success">注册</button> -->
                <button class="button is-danger" @click="colseRegister" aria-label="close">
                  取消
                </button>
              </footer>
            </div>
          </div>
        </div>
      </div>
      <div class="tile is-parent is-vertical">
        <div class="tile is-child"></div>
      </div>
    </div>
  </div>
</template>

<script>
// import "@/assets/js/plusbulma.js";
export default {
  name: "LoginPage",
  data() {
    return {
      userInfo: {
        username: "",
        password: "",
        verifyCode: "",
        email: "",
      },
      registerModel: "",
    };
  },
  created() {},
  mounted() {},
  methods: {
    userRegister() {
      this.registerModel = "is-active";
    },
    colseRegister(){
      this.registerModel = "";
    },
  },
};
</script>

<style>
</style>