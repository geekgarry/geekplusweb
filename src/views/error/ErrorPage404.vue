<template>
  <div class="container">
    <div class="tile ">
        <div class="tile is-1"></div>
        <div class="tile is-parent is-10 is-vertical">
            <div class="tile is-child">
              <figure class="image is-5by3">
                <img src="../../assets/img/error/error404.jpg">
              </figure>
            </div>
        </div>
        <div class="tile is-1"></div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
    return {
      timer: null, //定时器
    };
  },
  mounted() {},
  computed: {
    // ...mapGetters(['pageIndex']),
    // userInfo(){
    // return getStore({name: 'userInfo'})
    // }
  },
  created() {
    this.initTimer();
    //this.countDown(5)
  },
  methods: {
    //5秒刷新数据
    initTimer: () => {
      setInterval(() => {
        //this.initData()
        window.location.href = "/";
      }, 4000);
    },
    // countDown(secs) {
    //     if(--secs>0) {
    //         document.getElementById("num").innerText=secs;
    //         setTimeout(() => {countDown(secs)},1000);
    //     }
    //     else{
    //         window.location.href='/';
    //     }
    // },
  },

}
</script>

<style>

</style>