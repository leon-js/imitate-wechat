<template>
    <div>
        <h1>{{post.title}}</h1>
            <button @click="$emit('enlarge-text')">
                <!-- @click="$emit('enlarge-text') 或者 @click="$emit('click')" -->
                <slot></slot>
            </button>
        <h2>{{post.href}}</h2>
    </div>
</template>

<script>
export default {
    props:{
        post: Object
    }
}
</script>

