<template>
	<div>
		<h1>Footer</h1>
		<h1>{{ msg }}</h1>
	</div>
</template>

<script>
import bus from "@/common/bus";
export default {
	data() {
		return {
			msg: "",
      name: "李小龙"
		};
	},
	mounted() {
		bus.$on("toFooter", (data) => {
			this.msg = data;
		});
	},
};
</script>

<style>
</style>