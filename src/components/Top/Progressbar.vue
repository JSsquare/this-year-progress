<template>
    <div>        
        <meter v-bind:value="meterValue"></meter>
    </div>
</template>

<script>
export default {
  name: 'progressbar',
  data() {
    return {
      meterValue: 0.6,
    };
  },
};
</script>