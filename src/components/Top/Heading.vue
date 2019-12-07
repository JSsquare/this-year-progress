<template>    
        <h1>{{this.$store.state.text}}</h1>
</template>

<script>
export default {
  name: 'heading',
  props: {
    percentTop: Number,
  },
};
</script>