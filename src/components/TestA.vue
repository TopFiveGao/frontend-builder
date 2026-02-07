<script setup lang="ts">
const count = ref<number>(0)

function handleClick() {
  count.value++
}
</script>

<template>
  <div class="w-100 h-100 bg-[#e7b18a] flex items-center justify-center gap-10">
    <el-button style="font-size: 18px;color:purple;" @click="handleClick" >按钮A{{ count }}</el-button>
    <span class="customA">对照组A</span>
  </div>
</template>

<style scoped>
.customA{
  font-size: 2rem;
  font-weight: bolder;
  color: purple;
  background-color: green;
}
</style>
