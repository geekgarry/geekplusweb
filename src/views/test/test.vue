<template>
    <div class="container">
        <div class="notification is-primary">
          This container is <strong>centered</strong> on desktop and larger viewports.
        </div>
      </div>
</template>

<script>
export default {
    name: "test",
    components: {
    },
    data () {
        return {
        username: '',
        password: ''
        }
    },
    methods: {
        login () {
        // 登陆方法
        }
    },
    components:{
                "buttonComponent":btnComponent
            },
    computed:{
        fullName(){
            return this.firstName+" "+this.lastName;     
        }
    }
}
</script>
