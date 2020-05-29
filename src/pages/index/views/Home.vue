<template>
  <div>
    <div class="banner">
      <img src="../../../assets/img/banner/logo.png" height="80" width="980" />
    </div>
    <div></div>
    <div id='carousel'>
      <el-carousel :interval="40000" type="card">
        <el-carousel-item v-for="(item,index) in pictures" :key="index">
          <h3 class="medium" @click='imgClick'><img :src="item.url" height=300px width=100%></h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="item_all">
      <el-row :gutter="20">
        <el-col :span="4">
          <div class="grid-content bg-purple"> <img src="../../../assets/img/yewu/土地利用规划与设计.jpg" alt=""
              class="item_all_img">
            <p class="item_all_text">国土空间规划</p>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple"> <img src="../../../assets/img/yewu/软件.jpg" alt="" class="item_all_img">
            <p class="item_all_text">软件研发与系统集成</p>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple"> <img src="../../../assets/img/yewu/遥感.jpg" alt="" class="item_all_img">
            <p class="item_all_text">遥感应用于数据工程</p>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple"> <img src="../../../assets/img/yewu/测绘.jpg" alt="" class="item_all_img">
            <p class="item_all_text">调查测绘工程</p>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple"> <img src="../../../assets/img/yewu/地灾1.jpg" alt="" class="item_all_img">
            <p class="item_all_text">地质灾害防治</p>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple"> <img src="../../../assets/img/yewu/国土事务代理.jpg" alt=""
              class="item_all_img">
            <p class="item_all_text">自然资源事务代理</p>
          </div>
        </el-col>
      </el-row>
    </div>
    <div></div>
  </div>
</template>

<script>
  export default {
    name: "Home",
    data() {
      return {
        pictures: [{
            url: require('../../../assets/img/banner/b1001_1.jpg')
          },
          {
            url: require('../../../assets/img/banner/b1002_1.jpg')
          },
          {
            url: require('../../../assets/img/banner/b1003_1.jpg')
          },
          {
            url: require('../../../assets/img/banner/b1004_1.jpg')
          },
          {
            url: require('../../../assets/img/banner/b1005_1.jpg')
          }
        ]
      }
    },
    methods: {
      imgClick() {
        //通过路由点击事件跳转到另一个URL
        this.$router.push('/about')
      }
    }
  }
</script>
<style scoped>
  .banner {
    text-align: center;
  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .el-row {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .el-col {
    border-radius: 4px;
    text-align: center;
  }

  .bg-purple-dark {
    background: #99a9bf;
  }

  .bg-purple {
    background: #d3dce6;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

  .bg-purple {
    background-color: #fff;
  }

  .item_all img {
    width: 150px;
    height: 100px;
  }

  .item_all{
    width: 1300px;
    /* position: absolute; */
    margin: 0 auto;
  }
  .item_all_text{
    font-family:楷体;
  }
</style>