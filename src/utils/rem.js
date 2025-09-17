//rem适配
const baseSize = 16;
function setRem() {
  const scale = document.documentElement.clientWidth / 375;
  document.documentElement.style.fontSize =
    baseSize * Math.min(scale, 1) + "px";
}
//初始化
setRem();
//浏览器窗口变化触发
window.onresize = function () {
  setRem();
};
export default baseSize;
