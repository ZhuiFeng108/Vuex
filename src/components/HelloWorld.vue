<template>
	<div class="hello">
		<h1>子组件</h1>
		<h1>{{ $store.state.sum }}</h1>
		<h1>{{ msg }}</h1>
		<h1>{{ lover }}</h1>
		<h1>现在的时间是：{{ nowTime }}</h1>
		<el-button type="primary" @click="goFooter">传值</el-button>
	</div>
</template>

<script>
import bus from '@/common/bus'
export default {
	name: "HelloWorld",
	props: ["msg", "lover"],
	data() {
		return {
			nowTime: "777",
		};
	},
	watch: {
		nowTime() {
			this.$emit("childTime", this.nowTime);
		},
	},
	methods: {
		goFooter() {
      setInterval(() => {
        bus.$emit("toFooter", this.nowTime)
      }, 1000);
    },
	},
	mounted() {
		setInterval(() => {
			this.nowTime = new Date().getSeconds();
		}, 1000);
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
	margin: 40px 0 0;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
</style>
