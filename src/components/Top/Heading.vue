<template>    
        <h1>This Year Is {{percentTop * 10}}% Complete</h1>
</template>

<script>
export default {
  name: 'heading',
  props: {
    percentTop: Number,
  },
};
</script>