<template>
    <div>
        <h1>{{title}}</h1>
        <button v-on:click="count++">You clicked me {{ count }} times.</button>
    </div>
</template>

<script>
export default {
    name:"button-counter",
//     data: function () {
//     return {
//       count: 0
//     }
//   },
    data(){
        return {
            count: 0
        }
    },
    props:{
        title: String
    }
}
</script>
