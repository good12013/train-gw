<template>
    <div class="page">
        <div class="submit-info">
            <div class="submit-content">
                <div class="conten-top">
                    <img class="logo-img" src="../assets/brand-logo.png"/>
                    <div >Property Revenue Management System</div>
                </div>
                <div class="conten-middle">
                    <div class="middle-item">
                        <div class="content-notice">Email：</div>
                        <div class="content-value">
                            <input class="value-info" v-model="email" />
                        </div>
                    </div>
                    <div class="middle-item">
                        <div class="content-notice">Unique reference number(URN)：</div>
                        <div class="content-value">
                            <input class="value-info" v-model="referNum" />
                        </div>
                    </div>
                    <div class="middle-item">
                        <div class="content-notice">Calendar(select a week)：</div>
                        <div class="content-value">
                            <el-date-picker
                                    class="value-info"
                                    style="width: 280px;height: 40px;"
                                    v-model="chooseTime"
                                    type="week"
                                    placeholder="choose a week"
                                    :format="startTime"
                                    value-format="yyyy-MM-dd"
                                    :picker-options="pickerOption"
                                    @change="changeTime">
                            </el-date-picker>
                        </div>
                    </div>
                    <div class="middle-item">
                        <div class="content-notice">Weekly turnover(£)：</div>
                        <div class="content-value">
                            <input class="value-info" v-model="weekNum" />
                        </div>
                    </div>

                </div>
                <div class="content-bottom">
                    <div class="action-info">
                        <div class="cancel" @click="resetInfo">Reset</div>
                        <div class="sure" @click="makeSure">Submit →</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="dialog-window" v-if="showSure">
            <div class="submit-content">
                <div class="close-area" @click="closeSure">
                    <img src="../assets/close.png"/>
                </div>
                <div class="conten-top">
                    <img class="logo-img" src="../assets/brand-logo.png"/>
                    <div  style="height: 100px;"><span class="close-btn" @click="closeSure">Cancel</span></div>
                </div>
                <div class="conten-middle">
                    <div class="sure-notice">You are about to submit</div>
                    <div class="sure-notice">your weekly revenue</div>
                    <div class="sure-notice" style="color: #111111;">Area you sure?</div>
                </div>
                <div class="sure-agein" @click="submit">Yes →</div>
            </div>
        </div>
        <div class="dialog-window" v-if="showOkay">
            <div class="submit-content">
                <div class="conten-top">
                    <img class="logo-img" src="../assets/brand-logo.png"/>
                    <!--<div  style="height: 100px;"><span class="close-btn">Cancel</span></div>-->
                </div>
                <div class="conten-middle">
                    <div class="sure-notice" style="color: #111111;">Thank you!</div>
                    <div class="sure-notice" style="color: #111111;">We have received</div>
                    <div class="sure-notice" style="color: #111111;">your submission</div>
                </div>
                <div class="sure-agein" @click="goHome">Okay →</div>
            </div>
        </div>
    </div>
</template>
<script>
    import {userUpload} from '@/api/api'
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
                startTime:''

            }
        },
        created(){

        },
        methods:{
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
            },
            makeSure(){
                if (this.email.length == 0){
                    this.$message.error('Please input your eamil!')
                    return
                }
                if (this.referNum.length == 0){
                    this.$message.error('Please input  reference number!')
                    return
                }
                if (this.chooseTime.length == 0){
                    this.$message.error('Please choose  time!')
                    return
                }
                if (this.weekNum.length == 0){
                    this.$message.error('Please input weekly turnover!')
                    return
                }
                this.showSure = true;
            },
            submit(){
                let that = this
                const params = {
                    email:this.email,
                    shop_union_id:this.referNum,
                    turnover:this.weekNum,
                    week_time:this.chooseTime
                }
                userUpload(params).then(res=>{
                    this.showSure = false;
                    this.showOkay = true;
                },error =>{
                    if (error.data.err_desc){
                        that.$message.error(error.data.err_desc)
                    }
                })

            },
            goHome(){
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
        height: 400px;
        background: #ffffff;
        padding-left: 40px;
        padding-right: 40px;
        position: relative;

    }
    .conten-top{
        display: flex;
        width: 100%;
        height: 100px;
        justify-content: space-between;
        align-items: center;
        img{
            width: 80px;
            height: 40px;
        }
        font-size: 24px;
        color: #333333;
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
        height: 50px;
        text-align: right;
        font-size: 14px;
        color: #55a532;
        line-height: 50px;
    }
    .content-value{
        height: 50px;
        padding-top: 5px;
    }
    .value-info{
        width: 280px;
        height: 40px;
        background: #f0f0f0;
        border: none;
    }
    .content-bottom{
        margin-left: 40%;
        height: 80px;
    }
    .action-info{
        width: 100%;
        height: 80px;
        display: flex;
        justify-content: space-between;
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
    }
    .sure{
        width: 150px;
        height: 50px;
        background: #CC397F;
        color: #ffffff;
        font-size: 16px;
        text-align: center;
        line-height: 50px;
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
        margin-top: 50px;
    }
</style>
