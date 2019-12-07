<template>
    <div>
        <meter :value="this.$store.state.percentComplete / 10"></meter>        
    </div>
</template>

<script>

export default {
  name: 'progressbar',
  props: {
    percentTop: Number,
  },
};
</script>