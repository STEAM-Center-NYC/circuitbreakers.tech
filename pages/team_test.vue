<script setup>
const { data } = await useAsyncData('home', () => queryContent('/team').find())
</script>

<template>    

<h1>people:</h1>
<div v-for="values in data">
    <img :src="values.picture">
    {{ values.name }}
    {{ values.websites }}
    {{ values.linkedin }}
    {{ values.description }}
</div>

</template>

<style scoped>
h1 {
    margin-top: 72px;
}

div{
padding-bottom:15px;

}
</style>

