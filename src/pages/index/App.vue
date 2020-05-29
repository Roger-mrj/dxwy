<template>
	<div id="index">
<!--		<router-link to="/home">home</router-link>
		<router-link to="/page1">page1</router-link>-->
		<home/>
		<router-view/>
	</div>
</template>

<script>
	import home from './views/Home.vue'
	export default{
		name:'index',
		components:{
			home,
		}
	}
</script>

<style>
</style>
