<template>
  <div>
    <div class="info-box">
      <span class="info-box-icon bg-info">
        <i class="far fa-bookmark"></i>
      </span>
      <div class="info-box-content">
        <span class="info-box-text">Bookmarks</span>
        <span class="info-box-number">41,410</span>
        <div class="progress">
          <div class="progress-bar bg-info" style="width: 70%"></div>
        </div>
        <span class="progress-description">70% Increase in 30 Days</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

// export default {
//   name: "Home",
//   components: {
//     HelloWorld
//   }
// };
import { Component, Vue } from "vue-property-decorator";
// import "bootstrap";
// import "jquery";

// import "admin-lte";
// import "admin-lte/dist/css/adminlte.css";
@Component
export default class MyButton extends Vue {}
</script>
