<template>
  <Pano source="pano.jpg"></Pano>
</template>
<script>
import { Pano } from "vuejs-vr";
export default {
  components: { Pano },
};
</script>

<style scoped>
body {
  background: red;
}
</style>