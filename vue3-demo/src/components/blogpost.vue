<template>
    <div>
        <h1><a :href="href">{{title}}</a></h1>
    </div>
</template>

<script>
export default {
    props:{
        title: String,
        href: String
    }
}
</script>

