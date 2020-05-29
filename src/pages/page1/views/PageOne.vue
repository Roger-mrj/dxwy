<template>
  <div id='game'>
    <div class="game_title">2048</div>
    <div class="game_score">score:{{score}}
      </div>
    <div class="game_start">
      <el-button type='primary' round @click='newGame'>New Game</el-button>
    </div>
    <div class="game_content">
      <div class="grid_cell grid_cell_1_1"></div>
      <div class="grid_cell grid_cell_1_2"></div>
      <div class="grid_cell grid_cell_1_3"></div>
      <div class="grid_cell grid_cell_1_4"></div>
      <div class="grid_cell grid_cell_2_1"></div>
      <div class="grid_cell grid_cell_2_2"></div>
      <div class="grid_cell grid_cell_2_3"></div>
      <div class="grid_cell grid_cell_2_4"></div>
      <div class="grid_cell grid_cell_3_1"></div>
      <div class="grid_cell grid_cell_3_2"></div>
      <div class="grid_cell grid_cell_3_3"></div>
      <div class="grid_cell grid_cell_3_4"></div>
      <div class="grid_cell grid_cell_4_1"></div>
      <div class="grid_cell grid_cell_4_2"></div>
      <div class="grid_cell grid_cell_4_3"></div>
      <div class="grid_cell grid_cell_4_4"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Home",
    data() {
      return {
        score:0
      }
    },
    methods: {
      newGame(){
        this.score=0;
      }
    }
  }
</script>

<style scoped>
  #game div {
    text-align: center;
  }

  .game_title {
    margin: 30px 0;
    font-size: 20px;
    font-family: 微软雅黑;
  }

  .game_score {
    margin: 10px 0;
    font-size: medium;
  }

  .game_start {
    margin: 30px 0;
    font-size: x-large;
  }
  .game_content{
    margin: 0 auto;
    height: 440px;
    width: 440px;
    display: flex;
    flex-wrap: wrap;
    background-color: rgb(111, 218, 245);
  }
  .grid_cell{
    margin: 5px;
    border-radius: 30%;
    border:solid 1px;
    width: 98px;
    height: 98px;
    background-color: #f6f6f6;
  }
</style>