<template>
  <header class="header relative items-start flex mt-[84px] p-[24px 0] z-10">
    <a
      v-if="props.page !== 'home'"
      class="shrink-0 m-[0_0_0_16px] transform -translate-y-4"
      href="/"
      ><div class="logo-container w-[112px] h-[67px]">
        <img
          class="w-[100%] h-[100%]"
          src="@/assets/img/logo.png"
          alt=""
        /></div
    ></a>
    <div
      class="header__nav-container flex-[70%] p-[0_16px] md:pl-6 lg:pr-4 relative z-[2]"
    >
      <div class="items-end flex flex-col">
        <div
          class="nav-header__menu-container items-center flex justify-end w-full transition-[opacity] duration-[0.25s] ease-in-out"
        >
          <nav class="sr-only lg:not-sr-only" role="navigation" id="navigation">
            <ul class="list-none m-0 p-0">
              <li
                :tabindex="index"
                v-for="(item, index) in navList"
                class="inline-block m-[9.6px_0] relative mr-12"
              >
                <a :data-text="item.link" class="active" :href="item.link">{{
                  item.name
                }}</a>
              </li>
            </ul>
          </nav>
          <div tabindex="0" @click="store.showModal = true">
            <div
              aria-label="Menu"
              aria-controls="navigation"
              class="w-[26px] h-6"
            >
              <img class="w-full h-full" src="@/assets/img/menu.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { useCounterStore } from "@/store/counter";
const store = useCounterStore();
const props = defineProps({
  page: {
    type: String,
    default: "home",
  },
});
const navList = ref([
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Members",
    link: "/members",
  }
]);
</script>

<style lang="less" scoped></style>
