<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- <button v-on:click="count++">You clicked me {{count}}</button> -->
    <button
     :type="type"
     @click="$emit('click')"><slot></slot>
     </button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    type: String
  },
  // data(){
  //   return {
  //     count: 0
  //   }
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
