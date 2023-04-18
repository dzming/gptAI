<template>
	<view class="my">
		<view class="background_image">
			<image src="/static/my/bg_01.png" mode="" class="image_background"></image>
			<view class="title"  @click="login">
				<view class="t_left">
					<image src="/static/logo.png" mode=""></image>
				</view>
				<view class="t_right">
					<view class="r_left">
						<view class="r_text1">未登录</view>
						<view class="r_text2">请登录后使用</view>
					</view>
					<!-- <view class="r_right">
						<view class="r_image">
							<image src="/static/logo.png" mode=""></image>
						</view>
					</view> -->
				</view>
			</view>
			<!-- <view class="title" v-else>
				<view class="t_left">
					<image :src="avatar" mode=""></image>
				</view>
				<view class="t_right">
					<view class="r_left">
						<view class="r_textinfo" v-if='ownerType==3 && ownerBangDing==0' @click="boundUSER">
							<view class="r_textinfo1">
								<view class="name1">{{myinfo.name || myinfo.username}}</view>
								<view class="unbounded">未绑定</view>
							</view>
							<view class="r_text2">点击绑定住户信息</view>
						</view>
						<navigator class="r_textinfo" hover-class="none" v-else
							:url='"./BindOwner?code="+JSON.stringify(myinfo)'>
							<view class="r_textinfo1">
								<view class="name1">{{myinfo.name || myinfo.username}}</view>
								<view>
									<view class="binding">{{changeOwnerType(ownerType)}}</view>
								</view>
							</view>
							<view class="r_text2">{{ myinfo.house_name}}</view>
						</navigator>
		
					</view>
					<navigator class="r_right" hover-class="none" v-if='ownerType==1'
						:url='"./BindOwner?code="+JSON.stringify(myinfo)'>
						<view class="r_image">
							<image src="../../static/my/btn_01.png" mode=""></image>
						</view>
					</navigator>
					<navigator class="r_right" hover-class="none" v-else url='./boundUSER'>
						<view class="r_image">
							<image src="../../static/my/btn_01.png" mode=""></image>
						</view>
					</navigator>
				</view>
			</view> -->
			
			<view class="my_banner">
				<view class="" @click="onlaunch">
					<image src="/static/my/btn_17.png" mode=""></image>
				</view>
				<view class="" @click="repair">
					<image src="/static/my/btn_18.png" mode=""></image>
				</view>
			</view>
			
			<view class="test">
				<text>我的操作</text>
			</view>
			
			<view class="my_tabs" @click="feedback">
				<view class="tabs_left">
					<image src="/static/my/icon4.png" mode=""></image>
				</view>
				<view class="tabs_right">
					<text>意见反馈</text>
					<image src="/static/my/btn_01.png" mode=""></image>
				</view>
			</view>
			
			<view class="my_tabs" @click="About">
				<view class="tabs_left">
					<image src="/static/my/icon5.png" mode=""></image>
				</view>
				<view class="tabs_right">
					<text>关于</text>
					<image src="/static/my/btn_01.png" mode=""></image>
				</view>
			</view>
		</view>
	<!-- 	<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
			<text>my</text>
		</view> -->
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
			login(){
				console.log(123)
				uni.getUserInfo({
					provider: "weixin",
					success: (infoRes) => {
						console.log(infoRes)
					}
				})
			},
			onlaunch(){
				uni.checkSession({
					success: (res) => {
						console.log(res,123)
					},
					fail: (err) => {
						console.log(err,456)
						uni.login({
							success: (infoRes) => {
								console.log(infoRes,789)
							}
						})
					}
				})
			}
		}
	}
</script>

<style lang="less">
	.background_image {
		position: relative;
		margin-top: 40rpx;

		.image_background {
			position: absolute;
			z-index: -999;
			width: 100%;
			height: 140rpx;
		}
	}

	.title {
		margin-left: 36rpx;
		display: flex;
		margin-top: 124rpx;
		height: 140rpx;

		.t_left {
			margin-right: 40rpx;
			height: 140rpx;
			width: 136rpx;
			margin: 0 auto;
			text-align: center;

			image {
				height: 140rpx;
				width: 128rpx;
				border-radius: 12rpx;
			}
		}

		.t_right {
			flex: 1;
			display: flex;

			.r_left {
				margin-left: 30rpx;
				flex: 1;
				display: flex;
				align-items: center;
				flex-wrap: wrap;

				.r_text1 {
					width: 100%;
					font-size: 40rpx;
					color: #333333;
					font-weight: 900;
					margin-bottom: 24rpx;
				}

				.r_text2 {
					width: 100%;
					margin-top: 20rpx;
					font-size: 24rpx;
					color: #999999;
				}
			}

			.r_right {
				margin-right: 46rpx;
				display: flex;
				align-items: center;

				.r_image {
					image {
						height: 36rpx;
						width: 36rpx;
					}
				}
			}
		}
	}

	// banner
	.my_banner {
		margin-top: 24rpx;
		height: 188rpx;
		display: flex;
		margin-bottom: 28rpx;
		margin-left: 26rpx;

		image {
			width: 346rpx;
			height: 188rpx;
		}
	}

	.my_tabs {
		display: flex;
		margin: 0 20rpx;
		box-sizing: border-box;
		border-bottom: 0.5px solid #28b07c;

		.tabs_left {
			margin: 34rpx 0;
			margin-left: 40rpx;
			margin-right: 36rpx;

			image {
				width: 48rpx;
				height: 48rpx;
			}
		}

		.tabs_right {
			flex: 1;
			display: flex;
			align-items: center;
			justify-content: space-between;

			text {
				margin: 44rpx 0;
				font-size: 28rpx;
				color: #262626;
			}

			image {
				margin-right: 38rpx;
				width: 30rpx;
				height: 30rpx;
			}
		}
	}

	.r_textinfo {
		flex: 1;

		.name1 {
			font-size: 40rpx;
			font-weight: 700;
		}

		.binding {
			margin-left: 22rpx;
			font-size: 20rpx;
			color: #60C49A;
			height: 32rpx;
			line-height: 32rpx;
			text-align: center;
			margin-top: 10rpx;
			border: 1rpx solid #60C49A;
			border-radius: 20rpx;
			width: 90%;
		}

		.unbounded {
			margin-left: 22rpx;
			font-size: 20rpx;
			color: #ffb726;
			height: 32rpx;
			line-height: 32rpx;
			text-align: center;
			margin-top: 10rpx;
			width: 70rpx;
			border: 1rpx solid #ffb726;
			border-radius: 20rpx;
		}
	}

	.test {
		margin-left: 42rpx;
		font-size: 34rpx;
		color: #262626;
		font-weight: 900;
	}

	.r_textinfo1 {
		display: flex;
		width: 100%;
	}

	.fengexian {
		border-bottom: 1rpx solid #e6e6e6;
		width: 88%;
		margin: 0 auto;
		height: 1rpx;
	}
</style>
