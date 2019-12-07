import Vue from 'vue';
import Vuex from 'vuex';
import dailyProgress from 'daily-progress';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    percentComplete: dailyProgress.todaysProgress() / 10,
    date: new Date(),
    text: `Today: This Year Is ${dailyProgress.todaysProgress()}% Complete`,
  },
  mutations: {
    updateToPercentLeftover(state, newDate) {
      // eslint-disable-next-line no-param-reassign
      state.percentComplete = dailyProgress.fromThisDaysProgress(newDate) / 10;
      // eslint-disable-next-line no-param-reassign
      state.text = `From Date Selected: ${state.percentComplete * 10}% Remaining in ${newDate.getFullYear()}`;
    },
  },
});
