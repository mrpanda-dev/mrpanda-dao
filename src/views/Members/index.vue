<template>
  <div class="w-full h-[100vh] overflow-y-auto">
    <div class="relative min-h-[100vh] flex text-[#fff] flex-col">
      <Head :page="'members'" />

      <main>
        <div
          class="relative flex flex-col !pb-0 p-4 md:p-10 mx-auto box-border max-w-[94.5rem] text-current"
        >
          <div
            class="border-[2px] border-solid border-[#BCFF2F] shadow-[inset_0_0_20px_#BCFF2F] rounded-[20px]"
          >
            <div
              class="box-border flex flex-col text-[36px] md:flex-row md:items-center md:justify-between p-6 md:py-10 lg:py-10"
            >
              <h1
                class="m-0 text-[36px] md:text-7xl font-sans font-normal leading-none tracking-normal"
              >
                MEMBERS
              </h1>
            </div>
            <div
              class="mt-6 lg:mt-12 box-border grid w-full max-w-full grid-cols-2 gap-x-4 gap-12 p-[12px_24px] lg:items-center lg:justify-between lg:py-10 xl:grid-cols-4"
            >
              <div class="flex flex-col" v-for="item in Members">
                <span class="text-[16px] font-bold lg:text-xl">{{
                  item.members
                }}</span
                ><span
                  class="font-bold lg:text-3xl text-[#BCFF2F] text-[20px]"
                  >{{ item.count }}</span
                >
              </div>
            </div>
          </div>
          <div
            class="flex flex-col lg:mt-[72px] mt-[32px] [&_*]:font-sans [&_*]:tracking-normal"
          >
            <section class="mb-6 lg:mb-8">
              <h2
                class="flex items-center text-[16px] font-bold leading-none text-white lg:text-4xl"
              >
                Public Members
                <span
                  class="text-[#BCFF2F] ml-4 rounded-3xl bg-white/[.20] px-2 py-1 text-[8px] font-normal leading-none lg:px-3 lg:py-1 lg:text-xl"
                  >{{ PublicMembers.length }} Member</span
                >
              </h2>
              <div
                class="mt-6 grid w-full max-w-full gap-4 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              >
                <a
                  v-for="item in PublicMembers"
                  class="relative box-border flex h-full flex-col justify-between rounded-[20px] border-[2px] border-solid border-[#BCFF2F] shadow-[inset_0_0_20px_#BCFF2F] p-3 text-white transition-all duration-200 ease-in-out lg:p-6"
                >
                  <div>
                    <div
                      class="py-2.5 px-3 text-xs leading-none !opacity-100 before:hidden"
                      id=""
                      data-id="tooltip"
                    ></div>
                    <div
                      class="mb-2 box-border inline-flex h-[52px] w-[52px] overflow-hidden rounded-[5px] border !border-[#646464] lg:mb-4 lg:h-[128px] lg:w-[128px]"
                    >
                      <div class="relative h-[100%] w-[100%]">
                        <img
                          class="h-[100%] w-[100%]"
                          srcset="/src/assets/img/member_icon.png"
                        />
                      </div>
                    </div>
                    <div class="flex flex-col items-start justify-start gap-2">
                      <div
                        class="block w-full overflow-hidden truncate text-ellipsis text-[12px] lg:text-xl font-bold leading-7"
                      >
                        {{ item.name }}
                      </div>
                      <div class="h-[67px] font-normal leading-tight w-full">
                        <p
                          class="text-[10px] lg:text-sm line-clamp-4 break-words"
                        >
                          {{ item.describes }}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div
                      class="inline-flex items-center justify-center gap-2 rounded-[5px] bg-[#BCFF2F] px-2 py-1 lg:px-4 lg:py-2"
                    >
                      <img
                        class="w-[11px] h-[13px] lg:w-[22px] lg:h-[26px]"
                        src="@/assets/img/icon.png"
                        alt=""
                      />
                      <div
                        class="text-center text-[10px] font-normal leading-normal text-[#000000] lg:text-lg"
                      >
                        View Profile
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </section>
            <section class="mb-6 lg:mb-8">
              <h2
                class="flex items-center text-[16px] font-bold leading-none text-white lg:text-4xl"
              >
                Private Members
                <span
                  class="flex-inline ml-4 rounded-3xl bg-[#3D3D3D] px-2 py-1 text-[8px] text-[#BCFF2F] font-normal leading-none lg:px-3 lg:py-1 lg:text-xl"
                  >{{ memberList.length }} Members</span
                >
              </h2>
              <div
                class="mt-6 grid w-full max-w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              >
                <div
                  v-for="item in memberList"
                  class="box-border rounded-[10px] bg-[#BCFF2F] px-[19px] py-[9px] text-[#000] text-[12px] md:text-[14px] lg:text-[16px]"
                >
                  <span
                    class="block w-full overflow-hidden truncate text-ellipsis"
                    >{{shortAddress(item.walletid ) }}</span
                  >
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
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
import { ref, onMounted } from "vue";
import { ethers } from "ethers";
import MembersApi from "@/api/models/members";
const provider = new ethers.providers.JsonRpcProvider(
  "https://rpc.ankr.com/eth/ebd1b7836ca23305ecc8dd5cccdfe9ad4d47e07c294cc9e879a8d56b73f0ffef"
); //主网 RPC
import modal from "@/components/modal.vue";
import Head from "@/components/header.vue";
const targetAddress = "0x"; //钱包地址
const memberList = ref([]); //会员数据
const PublicMembers = ref([]); //管理员数据
const Members = ref([
  { key: 1, members: "Total Members", count: 0 },
  { key: 2, members: "ETH Contributed", count: 0 },
  { key: 3, members: "Private Members", count: 0 },
  { key: 4, members: "Public Members", count: 0 },
]);
const getMemberList = async () => {
  try {
    const res = await MembersApi.queryList({});
    if (res.code === 200 && Array.isArray(res.data)) {
      // 清空旧数据
      PublicMembers.value = [];
      memberList.value = [];
      res.data.forEach((item) => {
        item.isadmin
          ? PublicMembers.value.push(item)
          : memberList.value.push(item);
      });

      // 更新成员计数
      const counts = {
        1: res.data.length,
        3: memberList.value.length,
        4: PublicMembers.value.length,
      };

      Members.value.forEach((item) => {
        if (counts[item.key] !== undefined) {
          item.count = counts[item.key];
        }
      });
    } else {
      console.warn("获取成员数据失败:", res);
    }
  } catch (error) {
    console.error("接口请求失败:", error);
  }
};
const shortAddress = (walletid) => {
  if (!walletid) return '';
  return walletid.slice(0, 18) + '......' + walletid.slice(-18);
};

// **获取余额**
const getUSDTBalance = async () => {
  try {
    const balance = await provider.getBalance(targetAddress);
    const formatted = ethers.utils.formatUnits(balance);
    const target = Members.value.find((m) => m.key === 2);
    if (target) {
      target.count = formatted;
    }
  } catch (error) {
    console.error("❌ 查询 USDT 余额失败:", error);
  }
};

onMounted(() => {
  getMemberList();
  getUSDTBalance();
});
</script>

<style lang="less" scoped></style>
