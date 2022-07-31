//state :仓库存储数据的地方
const state = {
  isCollapse: false,
  // 面包屑初始数据
  tabsList: [
    {
      path: "/",
      name: "home",
      label: "首页",
      icon: "home",
    },
  ],
  currentMeun: null,
};
//mutations :修改state的唯一手段
const mutations = {
  COLLAPSEMEUN(state) {
    state.isCollapse = !state.isCollapse;
  },
  SELECTMEUN(state, val) {
    if (val.name !== "home") {
      state.currentMeun = val;
      const result = state.tabsList.findIndex((item) => item.name === val.name);
      if (result === -1) {
        state.tabsList.push(val);
      } else {
        state.currentMeun = null;
      }
    }
  },
  CLOSETAG(state, val) {
    const result = state.tabsList.findIndex((item) => item.name === val.name);
    state.tabsList.splice(result, 1);
  },
};
// action:处理action，可以书写自己的业务逻辑，也可以处理异步
const actions = {};
const getters = {};
export default {
  state,
  mutations,
  actions,
  getters,
};
