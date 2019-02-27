<template>
  <div class="about">
    <blogpost
      v-for="post in posts"
      v-bind:key="post.id"
      v-bind:title="post.title"
      v-bind:href="post.href"
    ></blogpost>

    <hr>

    <div :style="{fontSize: postFontSize + 'em'}">
        <blogpost2
          v-for="post in posts"
          v-bind:key="post.index"
          v-bind:post="post"
          v-on:enlarge-text="add"
        >
        Enlarge text
        <!-- v-on:enlarge-text="postFontSize += 0.1" 或者 @click="add" -->
        </blogpost2>
    </div>
  </div>
</template>

<script>
import blogpost from '../components/blogpost'
import blogpost2 from '../components/blogpost2'
export default {
  components:{
    blogpost,
    blogpost2
  },
  data(){
    return {
      posts: [
        { id: 1, title: 'My journey with Vue' , href: 'https://www.baidu.com'},
        { id: 2, title: 'Blogging with Vue' , href: 'http://www.hjslihaoaijiaqi.club/'},
        { id: 3, title: 'Why Vue is so fun' , href: 'http://www.4399.com'}
      ],
      postFontSize: 1
    }
  },
  methods:{
    add(){
      this.postFontSize += 0.1
    }
  }
}
</script>

<style>
about{
  
}
</style>
