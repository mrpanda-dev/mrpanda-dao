<template>
  <div class="w-full h-[100vh] overflow-y-auto">
    <div class="relative min-h-[100vh] flex text-[#fff] flex-col">
      <Head :page="'about'" />
      <div class="mainBox px-4 pb-[8%] flex flex-col items-center mx-auto">
        <main>
          <div
            class="border-[2px] border-solid border-[#BCFF2F] shadow-[inset_0_0_20px_#BCFF2F] rounded-[20px] relative flex flex-col !pb-0 p-4 md:p-10 mx-auto box-border max-w-[94.5rem]"
          >
            <div
              class="box-border flex flex-col md:flex-row md:items-center md:justify-between gap-x-12 sm:rounded-3xl p-[17px_0_0_27px] md:px-8 lg:py-16 lg:px-28"
            >
              <h1
                class="m-0 text-[36px] md:text-7xl font-sans font-normal leading-none tracking-normal"
              >
                ABOUT
              </h1>
            </div>
            <div
              class="[&amp;_*]:font-sans [&amp;_*]:tracking-normal flex flex-col gap-y-1 lg:gap-y-8 mt-[10px] p-[27px] lg:py-16 lg:px-28 l from-stone-950 to-neutral-800"
            >
              <div
                v-for="item in aboutList"
                class="w-full flex items-start gap-x-8 flex-col lg:flex-row justify-center"
              >
                <div class="flex w-full basis-full md:basis-1/2">
                  <h2
                    class="flex flex-col text-[16px] font-bold lg:text-4xl my-0"
                  >
                    <span class="tracking-[-0.05rem]">{{ item.title }}</span>
                  </h2>
                </div>
                <div
                  class="w-full basis-full md:basis-1/2 mb-2 [&>article>*]:text-left [&_p:not(:first-of-type)]:mt-[1.25em] [&_a]:underline [&_a]:underline-offset-4 [&>article>p]:text-[12px] md:[&>article>p]:text-[16px] lg:[&>article>p]:text-lg [&>article>p]:mt-0"
                >
                  <article>
                    <p v-html="item.content"></p>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </main>
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
import { ref } from "vue";
import modal from "@/components/modal.vue";
import Head from "@/components/header.vue";
const aboutList = ref([
  {
    title: "EXPLORING THE WORLD THROUGH WEB3",
    content: `MR.PANDA! is a Web3 exploration community rooted in the original spirit of Ethereum's DAO. Leveraging Ethereum's transformative power, we are building a decentralized and equitable digital innovation community based on global culture and tourism. With merchants from various industries onboard, we encourage users to complete tasks and explore the world, promoting the philosophy of "Consumption as Investment." As a decentralized DAO, our members co-govern to incubate the MR.PANDA! project and drive the successful launch of Panda Coin, sharing benefits collectively.`,
  },
  {
    title: "ONE TASK, ONE REWARD",
    content: `MR.PANDA! DAO is a legally protected DAO registered in Hong Kong. We embody the spirit of decentralized collaboration, combining smart contracts and community governance to ensure transparency and fairness. Since its inception, we have connected explorers, investors, and businesses worldwide, fostering a vibrant ecosystem where every contribution is valued. Our vision is to build a borderless network where culture, commerce, and blockchain innovation thrive together. `,
  },
  {
    title: "JOIN THE DECENTRALIZED EXPLORATION",
    content: `For those interested in joining our community or learning more about our initiatives, we welcome you to reach out via email at contact&nbsp<a href="http://www.mrpanda.ai">http://www.mrpanda.ai</a>&nbsp connect directly with our members. Teams and individuals who share our vision for a decentralized future and are committed to building innovative technologies are encouraged to collaborate with us.`,
  },
]);
</script>

<style lang="less" scoped></style>
