import Vue from 'vue';
import Vuex from 'vuex';
import dailyProgress from 'daily-progress';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    progressValue: dailyProgress.todaysProgress(),
    date: new Date(),
    text: `This Year is ${dailyProgress.todaysProgress()}% Complete`,
  },
  mutations: {
    updateToPercentLeftover(state, newDate) {      
      state.progressValue = dailyProgress.fromThisDaysProgress(newDate);
      state.text = `From Date Selected: ${state.progressValue}% Remaining in ${newDate.getFullYear()}`;
    },
  },
});
