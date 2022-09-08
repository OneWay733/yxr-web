<template>
  <div class="box">
    <van-tabbar v-model="active" route active-color="#F23040">
      <van-tabbar-item to="/index">
        <span>首页</span>
        <!--<template #icon="props">-->
        <!--  <img :src="props.active ? icon.active : icon.inactive" />-->
        <!--</template>-->
      </van-tabbar-item>
      <van-tabbar-item to="/cart">
        <span>产品超市</span>
        <template #icon="props">
          <img :src="props.active ? icon.active : icon.inactive" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="my">
        <span>我的</span>
        <template #icon="props">
          <img :src="props.active ? icon.active : icon.inactive" />
        </template>
      </van-tabbar-item>

    </van-tabbar>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

let active = ref(1)
</script>

<style lang="sass">
@import "./assets/base"
</style>

