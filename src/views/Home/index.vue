<template>
  <div class="tw">
    <div class="min-h-[100vh] relative flex flex-col text-[#ffffff]">
      <Head :page="'home'" />

      <div class="px-4 pb-[8%] flex flex-col items-center m-auto">
        <div class="flex w-[125px] h-[75]">
          <img class="w-[100%] h-[100%]" src="@/assets/img/DAO.png" alt="" />
        </div>
        <div class="text-[16px] m-[75px_0_70px_0] font-pingfang">
          去中心化DAO社区，成员共同治理
        </div>
        <div
          class="text-[12px] text-[#1E1E1E] bg-[#bcff2f] rounded-[20px] p-[9px_56px] font-siyuan"
        >
          <a data-text="about" href="/about">详情</a>
        </div>
      </div>
      <div class="m-[auto_0_17px_0] flex justify-between items-end p-[0_16px]">
        <div class="w-[101px] h-[31px]">
          <img class="w-[100%] h-[100%]" src="@/assets/img/panda.png" alt="" />
        </div>
        <div class="text-[12px] font-siyuan">© 2025 MR.PANDA!</div>
      </div>
    </div>
  </div>
  <modal />
</template>

<script setup>
import modal from "@/components/modal.vue";
import Head from "@/components/header.vue";
</script>

<style lang="less" scoped></style>
