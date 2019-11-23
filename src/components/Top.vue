<template>
  <div class="hello">
    <heading></heading>    
    <progressbar></progressbar>
  </div>
</template>

<script>
import Heading from './Top/Heading';
import Progressbar from './Top/Progressbar';

export default {
  name: 'top',
  components: {
    Heading,
    Progressbar,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
