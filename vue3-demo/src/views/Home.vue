<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <HelloWorld
      @click="addOne"
      v-model="count"
    >You clicked me {{count}}</HelloWorld>
    <HelloWorld
      @click="addOne2"
      v-model="count2"
    >You clicked me {{count2}}</HelloWorld> -->
    <buttonadd></buttonadd>
    <buttonadd></buttonadd>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import buttonadd from '@/components/buttonadd.vue'

export default {
  name: 'home',
  data(){
    return {
      // count:1,
      // count2:1,
      // count3:0
    }
  },
  components: {
    HelloWorld,
    buttonadd
  },
  methods:{
    addOne(){
      this.count++
    },
    addOne2(){
      this.count2++
    }
  }
}
</script>
