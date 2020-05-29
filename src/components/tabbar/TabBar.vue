<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabBar"
  }
</script>

<style scoped>

  .tab-bar {
    display: flex;
    background-color: #f6f6f6;
    box-shadow: 0 -3px 1px rgba(100, 100, 100, .1);
    height: 49px;
    text-align: center;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }

</style>