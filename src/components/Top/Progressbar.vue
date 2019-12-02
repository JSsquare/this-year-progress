<template>
    <div>        
        <meter :value="percentTop / 10"></meter>
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