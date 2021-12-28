<template>
  <div class="vr-container">
    <Pano
      :source="url"
      class="pano"
    ></Pano>
    <!-- <img src="../assets/pano.png" alt="pano" /> -->
  </div>
</template>
<script>
import { Pano } from "vuejs-vr";
export default {
  components: { Pano },
  data() {
    return {
      url: "/assets/pano.png",
    //   url: "https://t4.ftcdn.net/jpg/02/09/58/11/360_F_209581186_UIHxT8WvyXZbTbHnNeEu4SFRQ3TdqBHA.jpg",
    };
  },
};
</script>

<style scoped>
body {
  height: 1080px;
}
.vr-container {
    height: 100vh;
    width: 100vw;
}
.pano {
    height: 80%;
    width: 80%;
}
</style>