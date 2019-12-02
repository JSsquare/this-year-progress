<template>
  <div>    
    <heading :percent-top="percentFromApp"></heading>    
    <progressbar :percent-top="percentFromApp"></progressbar>
  </div>
</template>

<script>
import Heading from './Top/Heading';
import Progressbar from './Top/Progressbar';

export default {
  name: 'top',
  props: {
    percentFromApp: Number,
  },
  components: {
    Heading,
    Progressbar,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->