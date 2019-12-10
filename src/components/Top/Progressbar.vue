<template>
    <div>
        <meter min="0" max="100" low="25" high="75" optimum="1" :value="this.$store.state.progressValue" class="progress-meter"></meter>        
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

<style scoped>
.progress-meter {
  width: 40%;  
}
</style>