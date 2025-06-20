<template>
<div :style='{"width":"1100px","padding":"20px","boxShadow":"0px 4px 10px 0px rgba(0,0,0,0.302)","margin":"10px auto","position":"relative","background":"#fff"}'>
    <el-form
      class="add-update-preview"
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="80px"
    >
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px"}' label="电影名称" prop="dianyingmingcheng">
            <el-input v-model="ruleForm.dianyingmingcheng" 
                placeholder="电影名称" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px"}'  label="类型" prop="leixing">
            <el-select v-model="ruleForm.leixing" placeholder="请选择类型"  >
              <el-option
                  v-for="(item,index) in leixingOptions"
                  :key="index"
                  :label="item"
                  :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px"}' label="海报" v-if="type!='cross' || (type=='cross' && !ro.haibao)" prop="haibao">
            <file-upload
            tip="点击上传海报"
            action="file/upload"
            :limit="3"
            :multiple="true"
            :fileUrls="ruleForm.haibao?ruleForm.haibao:''"
            @change="haibaoUploadChange"
            ></file-upload>
          </el-form-item>
            <el-form-item :style='{"padding":"10px","margin":"0 0 10px"}' class="upload" v-else label="海报" prop="haibao">
                <img v-if="ruleForm.haibao.substring(0,4)=='http'" class="upload-img" style="margin-right:20px;" v-bind:key="index" :src="ruleForm.haibao.split(',')[0]" width="100" height="100">
                <img v-else class="upload-img" style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in ruleForm.haibao.split(',')" :src="baseUrl+item" width="100" height="100">
            </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px"}' label="导演" prop="daoyan">
            <el-input v-model="ruleForm.daoyan" 
                placeholder="导演" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px"}' label="主演" prop="zhuyan">
            <el-input v-model="ruleForm.zhuyan" 
                placeholder="主演" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px"}' label="上映日期" prop="shangyingriqi" >
              <el-date-picker
                  value-format="yyyy-MM-dd HH:mm:ss"
                  v-model="ruleForm.shangyingriqi" 
                  type="datetime"
                  placeholder="上映日期">
              </el-date-picker>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px"}' label="片长" prop="pianzhang">
            <el-input v-model="ruleForm.pianzhang" 
                placeholder="片长" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px"}' label="电影预告" prop="dianyingyugao">
            <file-upload
            tip="点击上传电影预告"
            action="file/upload"
            :limit="1"
            :multiple="true"
            :fileUrls="ruleForm.dianyingyugao?ruleForm.dianyingyugao:''"
            @change="dianyingyugaoUploadChange"
            ></file-upload>
          </el-form-item> 
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px"}' label="影院地址" prop="yingyuandizhi">
            <el-input v-model="ruleForm.yingyuandizhi" 
                placeholder="影院地址" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px"}' label="场次" prop="changci" >
              <el-date-picker
                  value-format="yyyy-MM-dd HH:mm:ss"
                  v-model="ruleForm.changci" 
                  type="datetime"
                  placeholder="场次">
              </el-date-picker>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px"}' label="单限" prop="onelimittimes">
            <el-input v-model="ruleForm.onelimittimes" 
                placeholder="单限" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px"}' label="库存" prop="alllimittimes">
            <el-input v-model="ruleForm.alllimittimes" 
                placeholder="库存" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px"}' label="价格" prop="price">
            <el-input v-model="ruleForm.price" 
                placeholder="价格" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px"}' label="电影简介" prop="dianyingjianjie">
            <el-input
              type="textarea"
              :rows="8"
              placeholder="电影简介"
              v-model="ruleForm.dianyingjianjie">
            </el-input>
          </el-form-item>

      <el-form-item :style='{"padding":"0","margin":"0"}'>
        <el-button :style='{"border":"0","cursor":"pointer","padding":"0","margin":"0 20px 0 0","outline":"none","color":"rgba(255, 255, 255, 1)","borderRadius":"4px","background":"rgba(252, 190, 75, 1)","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}'  type="primary" @click="onSubmit">提交</el-button>
        <el-button :style='{"border":"0px solid rgba(64, 158, 255, 1)","cursor":"pointer","padding":"0","margin":"0","outline":"none","color":"#fff","borderRadius":"4px","background":"#00b9ea","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}' @click="back()">返回</el-button>
      </el-form-item>
    </el-form>
</div>
</template>

<script>
  export default {
    data() {
      return {
        id: '',
        baseUrl: '',
        ro:{
            dianyingmingcheng : false,
            leixing : false,
            haibao : false,
            daoyan : false,
            zhuyan : false,
            shangyingriqi : false,
            pianzhang : false,
            dianyingyugao : false,
            dianyingjianjie : false,
            yingyuandizhi : false,
            changci : false,
            onelimittimes : false,
            alllimittimes : false,
            thumbsupnum : false,
            crazilynum : false,
            clicktime : false,
            clicknum : false,
            price : false,
        },
        type: '',
        userTableName: localStorage.getItem('UserTableName'),
        ruleForm: {
          dianyingmingcheng: '',
          leixing: '',
          haibao: '',
          daoyan: '',
          zhuyan: '',
          shangyingriqi: '',
          pianzhang: '',
          dianyingyugao: '',
          dianyingjianjie: '',
          yingyuandizhi: '',
          changci: '',
          onelimittimes: '-1',
          alllimittimes: '-1',
          thumbsupnum: '',
          crazilynum: '',
          clicktime: '',
          clicknum: '',
          price: '',
        },
        leixingOptions: [],
        rules: {
          dianyingmingcheng: [
            { required: true, message: '电影名称不能为空', trigger: 'blur' },
          ],
          leixing: [
            { required: true, message: '类型不能为空', trigger: 'blur' },
          ],
          haibao: [
          ],
          daoyan: [
          ],
          zhuyan: [
          ],
          shangyingriqi: [
          ],
          pianzhang: [
          ],
          dianyingyugao: [
          ],
          dianyingjianjie: [
          ],
          yingyuandizhi: [
          ],
          changci: [
          ],
          onelimittimes: [
            { validator: this.$validate.isIntNumer, trigger: 'blur' },
          ],
          alllimittimes: [
            { validator: this.$validate.isIntNumer, trigger: 'blur' },
          ],
          thumbsupnum: [
            { validator: this.$validate.isIntNumer, trigger: 'blur' },
          ],
          crazilynum: [
            { validator: this.$validate.isIntNumer, trigger: 'blur' },
          ],
          clicktime: [
          ],
          clicknum: [
            { validator: this.$validate.isIntNumer, trigger: 'blur' },
          ],
          price: [
            { required: true, message: '价格不能为空', trigger: 'blur' },
            { validator: this.$validate.isNumber, trigger: 'blur' },
          ],
        },
      };
    },
    computed: {



    },
    created() {
	  //this.bg();
      let type = this.$route.query.type ? this.$route.query.type : '';
      this.init(type);
      this.baseUrl = this.$config.baseUrl;
    },
    methods: {
      getMakeZero(s) {
          return s < 10 ? '0' + s : s;
      },
      // 下载
      download(file){
        window.open(`${file}`)
      },
      // 初始化
      init(type) {
        this.type = type;
        if(type=='cross'){
          var obj = JSON.parse(localStorage.getItem('crossObj'));
          for (var o in obj){
            if(o=='dianyingmingcheng'){
              this.ruleForm.dianyingmingcheng = obj[o];
              this.ro.dianyingmingcheng = true;
              continue;
            }
            if(o=='leixing'){
              this.ruleForm.leixing = obj[o];
              this.ro.leixing = true;
              continue;
            }
            if(o=='haibao'){
              this.ruleForm.haibao = obj[o].split(",")[0];
              this.ro.haibao = true;
              continue;
            }
            if(o=='daoyan'){
              this.ruleForm.daoyan = obj[o];
              this.ro.daoyan = true;
              continue;
            }
            if(o=='zhuyan'){
              this.ruleForm.zhuyan = obj[o];
              this.ro.zhuyan = true;
              continue;
            }
            if(o=='shangyingriqi'){
              this.ruleForm.shangyingriqi = obj[o];
              this.ro.shangyingriqi = true;
              continue;
            }
            if(o=='pianzhang'){
              this.ruleForm.pianzhang = obj[o];
              this.ro.pianzhang = true;
              continue;
            }
            if(o=='dianyingyugao'){
              this.ruleForm.dianyingyugao = obj[o];
              this.ro.dianyingyugao = true;
              continue;
            }
            if(o=='dianyingjianjie'){
              this.ruleForm.dianyingjianjie = obj[o];
              this.ro.dianyingjianjie = true;
              continue;
            }
            if(o=='yingyuandizhi'){
              this.ruleForm.yingyuandizhi = obj[o];
              this.ro.yingyuandizhi = true;
              continue;
            }
            if(o=='changci'){
              this.ruleForm.changci = obj[o];
              this.ro.changci = true;
              continue;
            }
            if(o=='onelimittimes'){
              this.ruleForm.onelimittimes = obj[o];
              this.ro.onelimittimes = true;
              continue;
            }
            if(o=='alllimittimes'){
              this.ruleForm.alllimittimes = obj[o];
              this.ro.alllimittimes = true;
              continue;
            }
            if(o=='thumbsupnum'){
              this.ruleForm.thumbsupnum = obj[o];
              this.ro.thumbsupnum = true;
              continue;
            }
            if(o=='crazilynum'){
              this.ruleForm.crazilynum = obj[o];
              this.ro.crazilynum = true;
              continue;
            }
            if(o=='clicktime'){
              this.ruleForm.clicktime = obj[o];
              this.ro.clicktime = true;
              continue;
            }
            if(o=='clicknum'){
              this.ruleForm.clicknum = obj[o];
              this.ro.clicknum = true;
              continue;
            }
            if(o=='price'){
              this.ruleForm.price = obj[o];
              this.ro.price = true;
              continue;
            }
          }
        }
        // 获取用户信息
        this.$http.get(this.userTableName + '/session', {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            var json = res.data.data;
          }
        });
        this.$http.get('option/dianyingfenlei/leixing', {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            this.leixingOptions = res.data.data;
          }
        });
      },

    // 多级联动参数
      // 多级联动参数
      info(id) {
        this.$http.get('dianyingxinxi/detail/${id}', {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            this.ruleForm = res.data.data;
          }
        });
      },
      // 提交
      onSubmit() {

        //更新跨表属性
        var crossuserid;
        var crossrefid;
        var crossoptnum;
        this.$refs["ruleForm"].validate(valid => {
          if(valid) {
            if(this.type=='cross'){
                 var statusColumnName = localStorage.getItem('statusColumnName');
                 var statusColumnValue = localStorage.getItem('statusColumnValue');
                 if(statusColumnName && statusColumnName!='') {
                     var obj = JSON.parse(localStorage.getItem('crossObj'));
                     if(!statusColumnName.startsWith("[")) {
                         for (var o in obj){
                             if(o==statusColumnName){
                                 obj[o] = statusColumnValue;
                             }
                         }
                         var table = localStorage.getItem('crossTable');
                         this.$http.post(table+'/update', obj).then(res => {});
                     } else {
                            crossuserid=Number(localStorage.getItem('userid'));
                            crossrefid=obj['id'];
                            crossoptnum=localStorage.getItem('statusColumnName');
                            crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
                     }
                 }
            }
            if(crossrefid && crossuserid) {
                 this.ruleForm.crossuserid=crossuserid;
                 this.ruleForm.crossrefid=crossrefid;
                 var params = {
                     page: 1,
                     limit: 10,
                     crossuserid:crossuserid,
                     crossrefid:crossrefid,
                 }
                 this.$http.get('dianyingxinxi/list', {
                  params: params
                 }).then(res => {
                     if(res.data.data.total>=crossoptnum) {
                         this.$message({
                          message: localStorage.getItem('tips'),
                          type: 'success',
                          duration: 1500,
                         });
                          return false;
                     } else {
                         // 跨表计算


                          this.$http.post('dianyingxinxi/add', this.ruleForm).then(res => {
                              if (res.data.code == 0) {
                                  this.$message({
                                      message: '操作成功',
                                      type: 'success',
                                      duration: 1500,
                                      onClose: () => {
                                          this.$router.go(-1);
                                      }
                                  });
                              } else {
                                  this.$message({
                                      message: res.data.msg,
                                      type: 'error',
                                      duration: 1500
                                  });
                              }
                          });
                     }
                 });
             } else {


                  this.$http.post('dianyingxinxi/add', this.ruleForm).then(res => {
                     if (res.data.code == 0) {
                          this.$message({
                              message: '操作成功',
                              type: 'success',
                              duration: 1500,
                              onClose: () => {
                                  this.$router.go(-1);
                              }
                          });
                      } else {
                          this.$message({
                              message: res.data.msg,
                              type: 'error',
                              duration: 1500
                          });
                      }
                  });
             }
          }
        });
      },
      // 获取uuid
      getUUID () {
        return new Date().getTime();
      },
      // 返回
      back() {
        this.$router.go(-1);
      },
      haibaoUploadChange(fileUrls) {
          this.ruleForm.haibao = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");;
      },
      dianyingyugaoUploadChange(fileUrls) {
          this.ruleForm.dianyingyugao = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");;
      },
    }
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.el-date-editor.el-input {
		width: auto;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__label {
	  padding: 0 10px 0 0;
	  color: #666;
	  font-weight: 500;
	  width: 80px;
	  font-size: 14px;
	  line-height: 40px;
	  text-align: right;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__content {
	  margin-left: 80px;
	}
	
	.add-update-preview .el-input /deep/ .el-input__inner {
	  border: 1px solid #00B9EA;
	  border-radius: 4px;
	  padding: 0 12px;
	  outline: none;
	  color: #000;
	  background: #f6f6f6;
	  width: 300px;
	  font-size: 14px;
	  height: 40px;
	}
	
	.add-update-preview .el-select /deep/ .el-input__inner {
	  border: 1px solid #00B9EA;
	  border-radius: 4px;
	  padding: 0 10px;
	  outline: none;
	  color: #000;
	  background: #f6f6f6;
	  width: 200px;
	  font-size: 14px;
	  height: 40px;
	}
	
	.add-update-preview .el-date-editor /deep/ .el-input__inner {
	  border: 1px solid #00B9EA;
	  border-radius: 4px;
	  padding: 0 10px 0 30px;
	  outline: none;
	  color: #000;
	  background: #f6f6f6;
	  width: 200px;
	  font-size: 14px;
	  height: 40px;
	}
	
	.add-update-preview /deep/ .el-upload--picture-card {
		background: transparent;
		border: 0;
		border-radius: 0;
		width: auto;
		height: auto;
		line-height: initial;
		vertical-align: middle;
	}
	
	.add-update-preview /deep/ .upload .upload-img {
	  border: 1px dashed #00B9EA;
	  cursor: pointer;
	  border-radius: 6px;
	  color: #00B9EA;
	  background: #f6f6f6;
	  width: 80px;
	  font-size: 32px;
	  line-height: 80px;
	  text-align: center;
	  height: 80px;
	}
	
	.add-update-preview /deep/ .el-upload-list .el-upload-list__item {
	  border: 1px dashed #00B9EA;
	  cursor: pointer;
	  border-radius: 6px;
	  color: #00B9EA;
	  background: #f6f6f6;
	  width: 80px;
	  font-size: 32px;
	  line-height: 80px;
	  text-align: center;
	  height: 80px;
	}
	
	.add-update-preview /deep/ .el-upload .el-icon-plus {
	  border: 1px dashed #00B9EA;
	  cursor: pointer;
	  border-radius: 6px;
	  color: #00B9EA;
	  background: #f6f6f6;
	  width: 80px;
	  font-size: 32px;
	  line-height: 80px;
	  text-align: center;
	  height: 80px;
	}
	
	.add-update-preview .el-textarea /deep/ .el-textarea__inner {
	  border: 1px solid #00B9EA;
	  border-radius: 4px;
	  padding: 12px;
	  outline: none;
	  color: #000;
	  background: #f6f6f6;
	  width: 400px;
	  font-size: 14px;
	  height: 120px;
	}
</style>
