import Vue from 'vue';
import Vuex from 'vuex';
import dailyProgress from 'daily-progress';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    progressValue: dailyProgress.todaysProgress(),
    date: new Date(),
    text: `Today: This Year is ${dailyProgress.todaysProgress()}% Complete`,
  },
  mutations: {
    updateToPercentLeftover(state, newDate) {
      // eslint-disable-next-line no-param-reassign
      state.progressValue = dailyProgress.fromThisDaysProgress(newDate);
      // eslint-disable-next-line no-param-reassign
      state.text = `From Date Selected: ${state.progressValue}% Remaining in ${newDate.getFullYear()}`;
    },
  },
});
