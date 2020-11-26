<template>
    <div class="page">
        <div class="submit-info">
            <div class="submit-content"  v-loading="loading">
                <div class="conten-top">
                    <img class="logo-img" src="../assets/brand-logo.png"/>
                    <div class="logo-notice">Property Revenue Management System</div>
                </div>
                <div class="conten-middle">
                    <div class="middle-item">
                        <div class="content-notice">Email：</div>
                        <div class="content-value">
                            <input class="value-info" v-model="email" />
                        </div>
                    </div>
                    <div class="middle-item" >
                        <div class="content-notice-small"></div>
                        <div class="erro-value">
                            {{emailErro.name}}
                        </div>
                    </div>
                    <div class="middle-item">
                        <div class="content-notice">Unique Reference Number (URN)：</div>
                        <div class="content-value">
                            <input class="value-info" v-model="referNum"  />
                        </div>
                    </div>
                    <div class="middle-item">
                        <div class="content-notice-small"></div>
                        <div class="erro-value">
                            {{propErro.name}}
                        </div>
                    </div>
                    <div class="middle-item">
                        <div class="content-notice">Calendar (select a week)：</div>
                        <div class="content-value">
                            <el-date-picker
                                    class="value-info-time"
                                    style="width: 280px;height: 40px;"
                                    v-model="chooseTime"
                                    type="week"
                                    placeholder="select a week"
                                    :format="startTime"
                                    value-format="yyyy-MM-dd"
                                    :picker-options="pickerOption"
                                    @change="changeTime">
                            </el-date-picker>
                        </div>
                    </div>
                    <div class="middle-item" >
                        <div class="content-notice-small"></div>
                        <div class="erro-value">
                            {{timeErro.name}}
                        </div>
                    </div>
                    <div class="middle-item">
                        <div class="content-notice">Weekly Turnover (£)：</div>
                        <div class="content-value">
                            <input class="value-info" v-model="weekNum"  @input="changeNum"/>
                        </div>
                    </div>
                    <div class="middle-item" >
                        <div class="content-notice-small"></div>
                        <div class="erro-value">
                            {{weekErro.name}}
                        </div>
                    </div>

                </div>
                <div class="content-bottom">
                    <div class="action-info">
                        <div class="cancel" @click="resetInfo">Clear</div>
                        <div class="sure" @click="makeSure">Submit</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="dialog-window" v-if="showSure">
            <div class="submit-content">
                <!--<div class="close-area" @click="closeSure">-->
                    <!--<img src="../assets/close.png"/>-->
                <!--</div>-->
                <div class="conten-top">
                    <img class="logo-img" src="../assets/brand-logo.png"/>
                    <!--<div  style="height: 100px;"><span class="close-btn" @click="closeSure">Cancel</span></div>-->
                </div>
                <div class="conten-middle">
                    <div class="sure-notice">You are about to submit</div>
                    <div class="sure-notice">your weekly revenue update.</div>
                    <div class="sure-notice" style="font-weight: bold;">Would you like to proceed?</div>
                </div>
                <div class="content-bottom-two">
                    <div class="action-info-two">
                        <div class="cancel-two" @click="closeSure" >No</div>
                        <div class="sure" @click="submit">Yes</div>
                    </div>
                </div>
                <!--<div class="sure-agein" @click="submit">Yes<img src="../assets/right-arrow.png" style="width: 21px;height: 13px;margin-left: 10px;"/></div>-->
            </div>
        </div>
        <div class="dialog-window" v-if="showOkay">
            <div class="submit-content">
                <div class="conten-top">
                    <img class="logo-img" src="../assets/brand-logo.png"/>
                    <!--<div  style="height: 100px;"><span class="close-btn">Cancel</span></div>-->
                </div>
                <div class="conten-middle">
                    <div class="sure-notice" style="font-weight: bold;">Thank you for submitting</div>
                    <div class="sure-notice" style="font-weight: bold;">your weekly update.</div>
                    <div class="sure-notice" style="font-weight: bold;">You will receive a</div>
                    <div class="sure-notice" style="font-weight: bold;">confirmation email shortly.</div>
                </div>
                <div class="sure-agein" @click="goHome">Ok</div>
            </div>
        </div>
    </div>
</template>
<script>
    import {userUpload,userCheck} from '@/api/api'
    import { Loading} from 'element-ui';
    export default {
        name: "Home",
        data(){
            return {
                showSure:false,
                showOkay:false,
                email:'',
                referNum:'',
                weekNum:'',
                chooseTime:'',
                pickerOption:{
                    firstDayOfWeek: 1
                },
                startTime:'',
                emailErro:{
                    show:false,
                    name:''
                },
                propErro:{
                    show:false,
                    name:''
                },
                timeErro:{
                    show:false,
                    name:''
                },
                weekErro:{
                    show:false,
                    name:''
                },
                loading:false

            }
        },
        created(){

        },
        methods:{
            checkNum(str){
                var reg = /^(([1-9][0-9]*\.[0-9][0-9]*)|([0]\.[0-9][0-9]*)|([1-9][0-9]*)|([0]{1}))$/;
                return reg.test(str)
            },
            changeNum(event){
                let  str =  event.currentTarget.value.replace(/,/g,'')
                const hasUnit = str.indexOf('£')!==-1
                str = str.replace(/£/g,'')
                if (!this.checkNum(str)){
                    console.log("gooood",str)
                    this.weekErro.name = 'Please input correct weekly turnover!'
                    return
                }else{
                    this.weekErro.name = ''
                }
                // if (str.indexOf(',')!==-1){
                //     console.log("gooood",str)
                //     str =  event.currentTarget.value.replace(/,/g,'')
                // }
                console.log(str)
                if (str && str.length){
                    this.weekNum = parseFloat(str).toLocaleString('en-US')
                }
                if (hasUnit){
                    this.weekNum = this.weekNum + '£'
                }

            },
            changeTime(val){
                this.startTime = this.getNextDate(val,-1)
                this.chooseTime = this.getNextDate(val,-1) + 'T00:00:00+08:00'
            },
            getNextDate(date, day) {
                var dd = new Date(date);
                dd.setDate(dd.getDate() + day);
                var y = dd.getFullYear();
                var m = dd.getMonth() + 1 < 10 ? "0" + (dd.getMonth() + 1) : dd.getMonth() + 1;
                var d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();
                return y + "-" + m + "-" + d;
            },
            resetInfo(){
                this.email = '';
                this.chooseTime = '';
                this.referNum = '';
                this.weekNum = '';
                this.emailErro.name = ''
                this.propErro.name = ''
                this.timeErro.name = ''
                this.weekErro.name = ''
            },
            makeSure(){
                if (this.email.length == 0){
                    this.emailErro.name = 'Please input your eamil!'
                    this.emailErro.show = true
                    // this.$message.error('Please input your eamil!')
                }else{
                    this.emailErro.name = ''
                    this.emailErro.show = false
                }
                if (this.referNum.length == 0){
                    this.propErro.name = 'Please input  reference number!'
                    this.propErro.show = true
                    // this.$message.error('Please input  reference number!')
                }else{
                    this.propErro.name = ''
                    this.propErro.show = false
                }
                if (this.chooseTime.length == 0){
                    this.timeErro.name = 'Please select a week!'
                    this.timeErro.show = true
                    // this.$message.error('Please choose  time!')
                }else{
                    this.timeErro.name = ''
                    this.timeErro.show = false
                }
                if (this.weekNum.length == 0){
                    this.weekErro.name = 'Please input weekly turnover!'
                    this.weekErro.show = true
                    // this.$message.error('Please input weekly turnover!')
                }else{
                    this.weekErro.name = ''
                    this.weekErro.show = false
                }
                if (this.email.length == 0 || this.referNum.length == 0 || this.chooseTime.length == 0 || this.weekNum.length == 0){
                    return
                }
                let  str =  this.weekNum.replace(/,/g,'')
                str = str.replace(/£/g,'')
                if (!this.checkNum(str)){
                    this.weekErro.name = 'Please input right weekly turnover!'
                    return
                }
                let that = this
                const params = {
                    email:this.email,
                    shop_union_id:this.referNum,
                    turnover:parseFloat(str),
                    week_time:this.chooseTime
                }
                this.loading = true
                userCheck(params).then(res=>{
                    if(res.error_item.length == 0){
                        that.showSure = true;
                    }
                    if (res.error_item === 'week_time'){
                        that.timeErro.name = res.err_desc
                    }
                    if (res.error_item === 'email'){
                        that.emailErro.name = 'Please check your email address'
                    }
                    if (res.error_item === 'shop_union_id'){
                        that.propErro.name = 'Please check your URN'
                    }
                    if (res.error_item === 'turnover'){
                        that.weekErro.name = 'Please input correct weekly turnover'
                    }
                    that.loading = false

                },error =>{
                    that.loading = false
                })

            },
            submit(){
                let that = this
                const params = {
                    email:this.email,
                    shop_union_id:this.referNum,
                    turnover:parseFloat(this.weekNum),
                    week_time:this.chooseTime
                }
                this.loading = true
                userUpload(params).then(res=>{
                    that.showSure = false;
                    that.showOkay = true;
                    that.loading = false
                },error =>{
                    if (error.data.err_desc){
                        that.$message.error(error.data.err_desc)
                    }
                    that.loading = false
                })

            },
            goHome(){
                this.resetInfo()
                this.showOkay = false;
            },
            closeSure(){
                this.showSure = false;
            }

        }
    }
</script>
<style scoped>
    .logo-img{
        width: 100px;
        height: 40px;
    }
    .page{
        width: 100%;
        height: 100%;
        min-width: 1200px;
        position: absolute;

    }
    .submit-info{
        width: 100%;
        height: 100%;
        background-image: url("../assets/about-header-bg.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .submit-content{
        width: 620px;
        height: 430px;
        background: #ffffff;
        padding-left: 40px;
        padding-right: 40px;
        position: relative;
        border-bottom: solid 17px #006B42;

    }
    .conten-top{
        display: flex;
        width: 100%;
        height: 100px;
        justify-content: space-between;
        align-items: center;
    }
    .logo-notice{
        font-family: Arial;
        font-weight: bold;
        color: #232323;
        font-size: 18px;
    }
    .conten-middle{
        width: 100%;
        height: auto;
    }
    .middle-item{
        display: flex;
        align-items: center;
    }
    .content-notice{
        width: 40%;
        height: 40px;
        text-align: right;
        font-size: 14px;
        color: #006B42;
        line-height: 40px;
    }
    .content-notice-small{
        width: 40%;
        height: 12px;
        text-align: right;
        font-size: 14px;
        color: #006B42;
        line-height: 20px;
    }
    .erro-value{
        font-size: 12px;
        color: #ff4d51;
        margin-left: 10px;
        line-height: 20px;
    }
    .value-info-time{
        width: 280px;
        height: 40px;
        background: #f0f0f0;
        border: none;
    }
    .content-value{
        height: 40px;
    }
    .value-info{
        width: 280px;
        height: 40px;
        background: #f0f0f0;
        border: none;
        border-radius: 8px;
        padding-left: 5px;
        font-size: 16px;
    }
    .content-bottom{
        margin-left: 40%;
        height: 80px;
    }
    .content-bottom-two{
        width: 100%;
        height: 80px;
        margin-top: 40px;
    }
    .action-info{
        width: 100%;
        height: 80px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .action-info-two{
        width: 100%;
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .cancel{
        width: 150px;
        height: 50px;
        background: #f0f0f0;
        color: #333333;
        font-size: 16px;
        text-align: center;
        line-height: 50px;
        border-radius: 8px;
    }
    .cancel-two{
        width: 150px;
        height: 50px;
        background: #4e6ef2;
        color: #ffffff;
        font-size: 16px;
        text-align: center;
        line-height: 50px;
        border-radius: 8px;
        margin-right: 40px;
    }
    .sure{
        width: 150px;
        height: 50px;
        background: #CC397F;
        color: #ffffff;
        font-size: 16px;
        text-align: center;
        line-height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
    }
    .close-area{
        border-radius: 50%;
        position: absolute;
        right: -20px;
        top: -20px;
        width: 40px;
        height: 40px;
        background: #bd2c00;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            width: 30px;
            height: 30px;
        }
        z-index: 10;
    }
    .dialog-window{
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        left: 0;
        top: 0;
    }
    .close-btn{
        font-size: 14px;
        color: #333333;
        line-height: 18px;
    }
    .sure-notice{
        font-size: 32px;
        color: #333333;
        text-align: center;
        line-height: 50px;
        font-family: Arial;
        font-weight: 400;
        color: #232323;
    }
    .sure-agein{
        width: 160px;
        height: 50px;
        background: #CC397F;
        color: #ffffff;
        font-size: 16px;
        text-align: center;
        line-height: 50px;
        margin: 0 auto;
        margin-top: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
    input[type="number"] {
        -moz-appearance: textfield;
    }
</style>
