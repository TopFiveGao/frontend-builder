<script setup lang="ts">
import { ElMessage } from 'element-plus'

const count = ref<number>(10)

function handleClick() {
  count.value += 10
  ElMessage({
    duration: 3000,
    message: `${count.value}`,
    type: 'warning',
  })
}
</script>

<template>
  <div class="w-100 h-100 bg-[#a23456] flex items-center justify-center gap-10">
    <el-button type="success" @click="handleClick">按钮B{{ count }}</el-button>
    <span>对照组B</span>
  </div>
</template>

<style scoped></style>
