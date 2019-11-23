<template>    
        <h1>{{ headerMsg }}</h1>            
</template>

<script>
export default {
  name: 'heading',
  data() {
    return {
      headerMsg: "Today's Progress",
    };
  },
};
</script>