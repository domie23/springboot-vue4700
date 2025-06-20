<template>
<div class="home-preview" :style='{"width":"100%","margin":"10px auto"}'>
	<el-row type="flex" :gutter="5" justify="center" style="width: 100%">
		<el-col :span="3" v-if="queryList.length>1">
			<el-select v-model="queryIndex">
				<el-option
				  v-for="(item,index) in queryList"
				  :key="index"
				  :label="item.queryName"
				  :value="index"
				></el-option>
			</el-select>
		</el-col>
		<el-col :span="3" v-if="queryIndex==0">
			<el-input v-model="dianyingxinxidianyingmingcheng" placeholder="电影名称"></el-input>
		</el-col>
		<el-col :span="3" v-if="queryIndex==0">
			<el-button type="primary" @click="search('dianyingxinxi')">搜索</el-button>
		</el-col>
	</el-row>



<div class="recommend" :style='{"width":"1200px","margin":"0 auto 10px"}'>
	<div v-if="false" class="idea recommendIdea" :style='{"padding":"20px","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
		<div class="box1" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box2" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box3" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box4" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
	</div>
	
    <div class="title" :style='{"width":"200px","margin":"40px auto","lineHeight":"54px","textAlign":"center"}'>
		<span :style='{"color":"rgba(0, 0, 0, 1)","fontSize":"28px"}'>电影信息推荐</span>
	</div>
	
	
	
	
	
	<!-- 样式四 -->
	<div class="list list4 index-pv1" :style='{"width":"100%","padding":"10px","position":"relative","flexWrap":"wrap","display":"flex","height":"auto"}'>
		<div v-if="dianyingxinxiRecommend.length>0" class="list-item animation-box" @click="toDetail('dianyingxinxiDetail', dianyingxinxiRecommend[0])" :style='{"border":"1px solid #707070","boxShadow":"50px -50px 0px -0px rgba(63,55,168,0.75)","margin":"0 20px 0 0","overflow":"hidden","borderRadius":"25px","width":"400px","position":"absolute","right":"0","height":"870px"}'>
			<img :style='{"objectFit":"cover","width":"100%","height":"810px"}' v-if="preHttp(dianyingxinxiRecommend[0].haibao)" :src="dianyingxinxiRecommend[0].haibao.split(',')[0]" alt="" />
			<img :style='{"objectFit":"cover","width":"100%","height":"810px"}' v-else :src="baseUrl + (dianyingxinxiRecommend[0].haibao?dianyingxinxiRecommend[0].haibao.split(',')[0]:'')" alt="" />
			<div class="title line1" :style='{"color":"rgba(0, 0, 0, 1)","textAlign":"center","background":"rgba(233, 242, 255, 1)","width":"100%","lineHeight":"60px","fontSize":"18px","height":"60px"}'>
                <div>{{dianyingxinxiRecommend[0].dianyingmingcheng}}</div>
                <div>{{dianyingxinxiRecommend[0].leixing}}</div>
                <div>{{dianyingxinxiRecommend[0].daoyan}}</div>
            </div>
		</div>
		<div class="list-body" :style='{"width":"750px","margin":"0 0 35px","display":"flex","height":"400px"}'>
			<div v-if="dianyingxinxiRecommend.length>1" @click="toDetail('dianyingxinxiDetail', dianyingxinxiRecommend[1])" class="list-item animation-box" :style='{"border":"1px solid #707070","margin":"0 10px","overflow":"hidden","borderRadius":"25px","width":"342px","position":"relative","height":"400px"}'>
				<img :style='{"objectFit":"cover","width":"100%","height":"340px"}' v-if="preHttp(dianyingxinxiRecommend[1].haibao)" :src="dianyingxinxiRecommend[1].haibao.split(',')[0]" alt="" />
				<img :style='{"objectFit":"cover","width":"100%","height":"340px"}' v-else :src="baseUrl + (dianyingxinxiRecommend[1].haibao?dianyingxinxiRecommend[1].haibao.split(',')[0]:'')" alt="" />
				<div class="title line1" :style='{"color":"rgba(0, 0, 0, 1)","textAlign":"center","background":"rgba(233, 242, 255, 1)","width":"100%","lineHeight":"60px","fontSize":"18px","height":"60px"}'>
                    <div>{{dianyingxinxiRecommend[1].dianyingmingcheng}}</div>
                    <div>{{dianyingxinxiRecommend[1].leixing}}</div>
                    <div>{{dianyingxinxiRecommend[1].daoyan}}</div>
                </div>
			</div>
			<div v-if="dianyingxinxiRecommend.length>2" @click="toDetail('dianyingxinxiDetail', dianyingxinxiRecommend[2])" class="list-item animation-box" :style='{"border":"1px solid #707070","margin":"0 10px","overflow":"hidden","borderRadius":"25px","width":"342px","position":"relative","height":"400px"}'>
				<img :style='{"objectFit":"cover","width":"100%","height":"340px"}' v-if="preHttp(dianyingxinxiRecommend[2].haibao)" :src="dianyingxinxiRecommend[2].haibao.split(',')[0]" alt="" />
				<img :style='{"objectFit":"cover","width":"100%","height":"340px"}' v-else :src="baseUrl + (dianyingxinxiRecommend[2].haibao?dianyingxinxiRecommend[2].haibao.split(',')[0]:'')" alt="" />
				<div class="title line1" :style='{"color":"rgba(0, 0, 0, 1)","textAlign":"center","background":"rgba(233, 242, 255, 1)","width":"100%","lineHeight":"60px","fontSize":"18px","height":"60px"}'>
                    <div>{{dianyingxinxiRecommend[2].dianyingmingcheng}}</div>
                    <div>{{dianyingxinxiRecommend[2].leixing}}</div>
                    <div>{{dianyingxinxiRecommend[2].daoyan}}</div>
                </div>
			</div>
		</div>
		<div class="list-body" :style='{"width":"750px","margin":"35px 0 40px","display":"flex","height":"400px"}'>
			<div v-if="dianyingxinxiRecommend.length>3" @click="toDetail('dianyingxinxiDetail', dianyingxinxiRecommend[3])" class="list-item animation-box" :style='{"border":"1px solid #707070","margin":"0 10px","overflow":"hidden","borderRadius":"25px","width":"340px","position":"relative","height":"400px"}'>
				<img :style='{"objectFit":"cover","width":"100%","height":"340px"}' v-if="preHttp(dianyingxinxiRecommend[3].haibao)" :src="dianyingxinxiRecommend[3].haibao.split(',')[0]" alt="" />
				<img :style='{"objectFit":"cover","width":"100%","height":"340px"}' v-else :src="baseUrl + (dianyingxinxiRecommend[3].haibao?dianyingxinxiRecommend[3].haibao.split(',')[0]:'')" alt="" />
				<div class="title line1" :style='{"color":"rgba(0, 0, 0, 1)","textAlign":"center","background":"rgba(233, 242, 255, 1)","width":"100%","lineHeight":"60px","fontSize":"18px","height":"60px"}'>
                    <div>{{dianyingxinxiRecommend[3].dianyingmingcheng}}</div>
                    <div>{{dianyingxinxiRecommend[3].leixing}}</div>
                    <div>{{dianyingxinxiRecommend[3].daoyan}}</div>
                </div>
			</div>
			<div v-if="dianyingxinxiRecommend.length>4" @click="toDetail('dianyingxinxiDetail', dianyingxinxiRecommend[4])" class="list-item animation-box" :style='{"border":"1px solid #707070","margin":"0 10px","overflow":"hidden","borderRadius":"25px","width":"340px","position":"relative","height":"400px"}'>
				<img :style='{"objectFit":"cover","width":"100%","height":"340px"}' v-if="preHttp(dianyingxinxiRecommend[4].haibao)" :src="dianyingxinxiRecommend[4].haibao.split(',')[0]" alt="" />
				<img :style='{"objectFit":"cover","width":"100%","height":"340px"}' v-else :src="baseUrl + (dianyingxinxiRecommend[4].haibao?dianyingxinxiRecommend[4].haibao.split(',')[0]:'')" alt="" />
				<div class="title line1" :style='{"color":"rgba(0, 0, 0, 1)","textAlign":"center","background":"rgba(233, 242, 255, 1)","width":"100%","lineHeight":"60px","fontSize":"18px","height":"60px"}'>
                    <div>{{dianyingxinxiRecommend[4].dianyingmingcheng}}</div>
                    <div>{{dianyingxinxiRecommend[4].leixing}}</div>
                    <div>{{dianyingxinxiRecommend[4].daoyan}}</div>
                </div>
			</div>
		</div>
	</div>
	
	
	
	
	
	
	<div @click="moreBtn('dianyingxinxi')" :style='{"border":"0","margin":"10px auto","borderRadius":"10px","textAlign":"center","background":"#6f69be","display":"block","width":"100px","lineHeight":"32px"}'>
		<span :style='{"color":"#f5f5f5","fontSize":"12px"}'>查看更多</span>
		<i v-if="true" :style='{"color":"#f5f5f5","fontSize":"12px"}' class="el-icon-d-arrow-right"></i>
	</div>
	
</div>

	<!-- 关于我们 -->
	<div :style='{"padding":"30px 260px","boxShadow":"0 1px 6px rgba(255, 255, 255, .3)","margin":"0 0 10px","flexWrap":"wrap","background":"rgba(233, 242, 255, 1)","display":"flex","width":"100%","position":"relative","height":"960px"}'>
	  <div :style='{"width":"100%","margin":"0px 0 20px","lineHeight":"1.5","fontSize":"40px","color":"#333","textAlign":"center"}'>{{aboutUsDetail.title}}</div>
	  <div :style='{"margin":"0 0 10px","color":"#999","textAlign":"center","display":"none","width":"100%","lineHeight":"1.5","fontSize":"20px"}'>{{aboutUsDetail.subtitle}}</div>
	  <div :style='{"padding":"0 10px","flexDirection":"column","display":"flex","width":"100%","position":"relative","justifyContent":"space-between","height":"810px"}'>
	    <img :style='{"width":"620px","margin":"0 10px","objectFit":"cover","borderRadius":"25px","display":"block","height":"350px"}' :src="baseUrl + aboutUsDetail.picture1">
	    <img :style='{"width":"620px","margin":"0 10px","objectFit":"cover","borderRadius":"25px","display":"block","height":"350px"}' :src="baseUrl + aboutUsDetail.picture2">
	    <img :style='{"margin":"0 10px","objectFit":"cover","borderRadius":"25px","left":"720px","bottom":"0","display":"block","width":"620px","position":"absolute","height":"350px"}' :src="baseUrl + aboutUsDetail.picture3">
	  </div>
	  <div :style='{"padding":"0 260px 0 50px","margin":"0 0 10px 0","overflow":"hidden","color":"rgb(102, 102, 102)","top":"120px","width":"50%","lineHeight":"30px","fontSize":"16px","position":"absolute","right":"0","height":"390px"}' v-html="aboutUsDetail.content"></div>
	  <div :style='{"width":"285px","background":"url(\"http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg\") 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
	  <div :style='{"width":"285px","background":"url(\"http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg\") 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
	  <div :style='{"width":"285px","background":"url(\"http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg\") 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
	  <div :style='{"width":"285px","background":"url(\"http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg\") 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
	</div>
	<!-- 系统简介 -->
	<div :style='{"padding":"30px 260px","boxShadow":"0 1px 6px rgba(255, 255, 255, .3)","margin":"0 0 10px","flexWrap":"wrap","background":"#fff","display":"flex","width":"100%","height":"auto"}'>
	  <div :style='{"width":"100%","lineHeight":"1.5","fontSize":"40px","color":"#333","textAlign":"center"}'>{{systemIntroductionDetail.title}}</div>
	  <div :style='{"width":"100%","margin":"10px 0 20px","lineHeight":"1.5","fontSize":"20px","color":"#999","textAlign":"center"}'>{{systemIntroductionDetail.subtitle}}</div>
	  <div :style='{"width":"60%","padding":"0 10px","flexWrap":"wrap","flexDirection":"column","display":"flex","height":"auto"}'>
	    <img :style='{"border":"5px solid #FFFFFF","margin":"0 10px 0 0","objectFit":"cover","borderRadius":"25px","display":"block","width":"60%","height":"320px"}' :src="baseUrl + systemIntroductionDetail.picture1">
	    <img :style='{"border":"5px solid #FFFFFF","margin":"-150px 0 0 15%","objectFit":"cover","borderRadius":"25px","display":"block","width":"60%","height":"320px"}' :src="baseUrl + systemIntroductionDetail.picture2">
	    <img :style='{"border":"5px solid #FFFFFF","margin":"-150px 0 0 30%","objectFit":"cover","borderRadius":"25px","display":"block","width":"60%","height":"320px"}' :src="baseUrl + systemIntroductionDetail.picture3">
	  </div>
	  <div :style='{"padding":"30px","boxShadow":" 0px 4px 10px 0px rgba(0,0,0,0.302)","margin":"0 0 10px 0","overflow":"hidden","color":"rgb(102, 102, 102)","width":"40%","lineHeight":"30px","fontSize":"16px","height":"690px"}' v-html="systemIntroductionDetail.content"></div>
	  <div :style='{"width":"285px","background":"url(\"http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg\") 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
	  <div :style='{"width":"285px","background":"url(\"http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg\") 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
	  <div :style='{"width":"285px","background":"url(\"http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg\") 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
	  <div :style='{"width":"285px","background":"url(\"http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg\") 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
	</div>
	
<div class="news" :style='{"padding":"20px 260px","margin":"0 0 10px","background":"rgba(233, 242, 255, 1)"}'>
	<div v-if="false" class="idea newsIdea" :style='{"padding":"20px","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
		<div class="box1" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box2" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box3" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box4" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
	</div>
	
	<div class="title" :style='{"width":"200px","margin":"10px auto 20px","lineHeight":"54px","textAlign":"center"}'>
		<span :style='{"color":"#000","fontSize":"28px"}'>电影资讯</span>
	</div>
	
	
	
	
	
	<!-- 样式四 -->
	<div v-if="newsList.length" class="list list4 index-pv1" :style='{"width":"100%","padding":"10px","flexWrap":"wrap","justifyContent":"center","display":"flex","height":"auto"}'>
	    <div @click="toDetail('newsDetail', newsList[0])" v-if="newsList.length>0" class="new-list-item animation-box" :style='{"width":"390px","padding":"20px","height":"300px"}'>
			<div :style='{"margin":"0 0 10px","overflow":"hidden","color":"rgba(0, 0, 0, 1)","textAlign":"center","fontSize":"16px","lineHeight":"25px","height":"50px"}' class="new-list-item-title line1">{{newsList[0].title}}</div>
			<div :style='{"padding":"0 20px","margin":"0 0 10px","overflow":"hidden","color":"#666","fontSize":"14px","lineHeight":"25px","height":"125px"}' class="descript  line3">{{newsList[0].introduction}}</div>
			<div :style='{"width":"100%","padding":"10px","fontSize":"12px","color":"#000","textAlign":"center","background":"rgba(252, 190, 75, 1)"}' class="time">{{newsList[0].addtime}}</div>
	    </div>
	    <div @click="toDetail('newsDetail', newsList[0])" v-if="newsList.length>0" class="new-list-item animation-box" :style='{"width":"390px","background":"#fcbe4b","height":"300px"}'>
			<img :style='{"objectFit":"cover","width":"100%","height":"100%"}' :src="baseUrl + newsList[0].picture" alt="">
	    </div>
	    <div @click="toDetail('newsDetail', newsList[1])" v-if="newsList.length>1" class="new-list-item animation-box" :style='{"width":"390px","padding":"20px","height":"300px"}'>
			<div :style='{"margin":"0 0 10px","overflow":"hidden","color":"#000","textAlign":"center","fontSize":"16px","lineHeight":"25px","height":"50px"}' class="new-list-item-title line1">{{newsList[1].title}}</div>
			<div :style='{"margin":"0 0 10px","fontSize":"14px","lineHeight":"25px","overflow":"hidden","color":"#666","height":"125px"}' class="descript  line3">{{newsList[1].introduction}}</div>
			<div :style='{"padding":"10px","fontSize":"12px","color":"#000","textAlign":"center","background":"#fcbe4b"}' class="time">{{newsList[1].addtime}}</div>
	    </div>
	    <div @click="toDetail('newsDetail', newsList[1])" v-if="newsList.length>1" class="new-list-item animation-box" :style='{"width":"390px","background":"#fcbe4b","height":"300px"}'>
			<img :style='{"objectFit":"cover","width":"100%","height":"100%"}' :src="baseUrl + newsList[1].picture" alt="">
	    </div>
	    <div @click="toDetail('newsDetail', newsList[2])" v-if="newsList.length>2" class="new-list-item animation-box" :style='{"width":"390px","padding":"20px","height":"300px"}'>
			<div :style='{"margin":"0 0 10px","overflow":"hidden","color":"#000","textAlign":"center","fontSize":"16px","lineHeight":"25px","height":"50px"}' class="new-list-item-title  line1">{{newsList[2].title}}</div>
			<div :style='{"margin":"0 0 10px","fontSize":"14px","lineHeight":"25px","overflow":"hidden","color":"#666","height":"125px"}' class="descript  line3">{{newsList[2].introduction}}</div>
			<div :style='{"padding":"10px","fontSize":"12px","color":"#000","textAlign":"center","background":"#fcbe4b"}' class="time">{{newsList[2].addtime}}</div>
	    </div>
	    <div @click="toDetail('newsDetail', newsList[2])" v-if="newsList.length>2" class="new-list-item animation-box" :style='{"width":"390px","background":"#fcbe4b","height":"300px"}'>
			<img :style='{"objectFit":"cover","width":"100%","height":"100%"}' :src="baseUrl + newsList[2].picture" alt="">
	    </div>
	</div>
	
	
	
	
	
	
	
	<div @click="moreBtn('news')" :style='{"border":"0","margin":"10px auto","borderRadius":"10px","textAlign":"center","background":"#fcbe4b","display":"block","width":"100px","lineHeight":"32px"}'>
		<span :style='{"color":"#000","fontSize":"12px"}'>查看更多</span>
		<i v-if="true" :style='{"color":"#000","fontSize":"12px"}' class="el-icon-d-arrow-right"></i>
	</div>
	
</div>




</div>
</template>

<script>
  export default {
    //数据集合
    data() {
      return {
        baseUrl: '',
        aboutUsDetail: {},
        systemIntroductionDetail: {},
        queryList:[
          {
              queryName:"电影名称",
          },
        ],
        queryIndex: 0,
        dianyingxinxidianyingmingcheng: '',
        newsList: [],
        dianyingxinxiRecommend: [],

      }
    },
    created() {
      this.baseUrl = this.$config.baseUrl;
      this.getNewsList();
      this.getAboutUs();
      this.getSystemIntroduction();
      this.getList();
    },
    //方法集合
    methods: {
      preHttp(str) {
          return str && str.substr(0,4)=='http';
      },
      getAboutUs() {
          this.$http.get('aboutus/detail/1', {}).then(res => {
            if(res.data.code == 0) {
              this.aboutUsDetail = res.data.data;
            }
          })
      },
      getSystemIntroduction() {
          this.$http.get('systemintro/detail/1', {}).then(res => {
            if(res.data.code == 0) {
              this.systemIntroductionDetail = res.data.data;
            }
          })
      },
      search(tablename) {
        if (this.queryIndex == 0 && this.dianyingxinxidianyingmingcheng) {
          this.$router.push({path: '/index/' + tablename, query: {indexQueryCondition: this.dianyingxinxidianyingmingcheng}});
        }
      },
		getNewsList() {
			this.$http.get('news/list', {params: {
				page: 1,
				limit: 6,
			order: 'desc'}}).then(res => {
				if (res.data.code == 0) {
					this.newsList = res.data.data.list;
					
					
				}
			});
		},
		getList() {
          let autoSortUrl = "";
          autoSortUrl = "dianyingxinxi/autoSort";
          if(localStorage.getItem('Token')) {
              autoSortUrl = "dianyingxinxi/autoSort2";
          }
			this.$http.get(autoSortUrl, {params: {
				page: 1,
				limit: 6,
			}}).then(res => {
				if (res.data.code == 0) {
					this.dianyingxinxiRecommend = res.data.data.list;
					
					
					// 商品列表样式五
					
				}
			});
			
		},
		toDetail(path, item) {
			this.$router.push({path: '/index/' + path, query: {detailObj: JSON.stringify(item)}});
		},
		moreBtn(path) {
			this.$router.push({path: '/index/' + path});
		}
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.home-preview {
	
		.recommend {
			.list3 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list3 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list3 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list5 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
        }
        
        .list5 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list5 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 {
				.swiper-slide-prev {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-next {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-active {
					position: relative;
					z-index: 5;
				}
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				transform: scale(1.02) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				transform: skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
			}
		}
		
		.news {
			.list3 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list3 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list3 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list6 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list6 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list6 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list6 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				transform: scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				transform: scale(0.9) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
			}
		}
	
		.lists {
			.list3 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list3 .swiper-button-next {
				left: auto;
				right: 10px;
        }
        
        .list3 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list5 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 .swiper-button-next {
            left: auto;
            right: 10px;
			}
			
			.list5 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 {
				.swiper-slide-prev {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-next {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-active {
					position: relative;
					z-index: 5;
				}
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				transform: scale(1) skew(0deg, 0deg) translate3d(0px, -30px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				transform: skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
			}
		}
	}
</style>
