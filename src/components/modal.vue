<template>
  <div class="tw" v-if="counterStore.showModal">
    <div
      @click="counterStore.showModal = false"
      class="fixed inset-0 z-10 flex backdrop-blur-[16px] min-h-screen"
      style="z-index: 99"
    >
      <div
        class="nav-modal-container"
        @click.stop
        tabindex="-1"
        role="dialog"
        aria-modal="true"
      >
        <nav role="navigation" id="navigation">
          <div
            class="text-black px-[17px] border-[2px] border-solid border-[#BCFF2F] shadow-[inset_0_0_20px_#BCFF2F] rounded-[20px] bg-black py-[45px] md:px-[38px] md:py-[50px] max-w-xs w-[calc(100%_-_4rem)] h-min fixed top-1/2 left-1/2 right-0 bottom-0 transform -translate-x-1/2 -translate-y-1/2 z-10 not-sr-only nav-modal-redesign transition-all duration-100 ease-out"
          >
            <button
              @click="counterStore.showModal = false"
              class="absolute right-3 top-3 lg:right-5 lg:top-5 cursor-pointer appearance-none border-0 bg-white/[.17] hover:bg-white/[.27] text-white rounded-3xl p-2 flex"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                class="h-3 w-3 lg:h-6 lg:w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            <div class="m-[0_auto] p-0 flex justify-center w-[125px] h-[75px]">
              <img class="w-full h-full" src="@/assets/img/DAO.png" alt="" />
            </div>
            <div class="my-[73px]"></div>
            <ul
              class="ul_list [&_*]:font-[inherit] list-none list-inside m-0 p-0 gap-y-4 md:gap-y-3 flex flex-col text-center [&_li]:bg-[#BCFF2F] [&_li]:rounded-[10px] [&_li]:text-[12px] [&_li]:flex [&_li_a]:no-underline [&_li_a]:uppercase [&_li_a]:leading-none [&_li_a]:w-full [&_li_a]:px-[97px] [&_li_a]:py-[9px] [&_li_a]:flex [&_li_a]:justify-center transition-colors duration-200 ease-out"
            >
              <li v-for="item in navList">
                <a :data-text="item.link" :href="item.link">{{ item.name }}</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useCounterStore } from "@/store/counter";
const counterStore = useCounterStore();
const navList = ref([
  {
    name: "HOME",
    link: "/",
  },
  {
    name: "ABOUT",
    link: "/about",
  },
  {
    name: "MEMBERS",
    link: "/members",
  }
]);
</script>

<style lang="less" scoped></style>
