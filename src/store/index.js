import Vue from 'vue';
import Vuex from 'vuex';
import dailyProgress from 'daily-progress';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    percentComplete: dailyProgress.todaysProgress() / 10,
  },
  mutations: {
    updateToPercentLeftover(state) {
      // eslint-disable-next-line no-param-reassign
      state.percentComplete = 50;
    },
  },
});
