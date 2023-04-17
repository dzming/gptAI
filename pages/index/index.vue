<template>
	<view class="content">
		<image class="logo" src="/static/logo.png" @tap="runAdd"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			runAdd(){
				console.log(123)
				uniCloud.callFunction({
					name:"add",
					data:{
						name:"text" + new Date(),
						subType: "uniCloud",
						createTime: new Date()
					},
					success: (res) => {
						console.log(456,res)
					},
					
				})
				// return db.collection(dbCollectionName).add(value).then((res) => {
				//   uni.showToast({
				//     icon: 'none',
				//     title: '新增成功'
				//   })
				//   this.getOpenerEventChannel().emit('refreshData')
				//   setTimeout(() => uni.navigateBack(), 500)
				// }).catch((err) => {
				//   uni.showModal({
				//     content: err.message || '请求服务失败',
				//     showCancel: false
				//   })
				// })
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
