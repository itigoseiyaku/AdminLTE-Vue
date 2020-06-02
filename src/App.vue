<template>
  <div>
    <Header />
    <SideMenu />
    <div class="content-wrapper">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import SideMenu from "@/components/SideMenu.vue";

@Component({
  components: {
    Header,
    SideMenu
  }
})
export default class App extends Vue {}
</script>

<style></style>
