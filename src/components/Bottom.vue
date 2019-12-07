<template>
  <div>    
   <datepicker :inline="true" @selected="updateDate" :value="computedDate" :disabled-dates="disabledDates"></datepicker>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';

export default {
  name: 'bottom',
  props: {
    percentFromApp: Number,
  },
  data() {
    const today = new Date();
    const yesterday = new Date(today);
    return {
      disabledDates: {
        to: new Date(yesterday.setDate(today.getDate() - 1)),
      },
    };
  },
  components: {
    Datepicker,
  },
  methods: {
    updateDate(newDate) {
      this.$store.commit('updateToPercentLeftover', newDate);
    },
  },
  computed: {
    computedDate() {
      return this.$store.state.date;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->