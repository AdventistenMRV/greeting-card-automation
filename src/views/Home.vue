<template>
  <div class="home">
    <h1>Hello World</h1>
    <iframe :src="base64PDF" v-show="showPDF"></iframe>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GreetingCard from "../classes/GreetingCard";
//import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Home",
  data() {
    return {
      card: new GreetingCard(),
      showPDF: false,
      base64PDF: "",
    };
  },
  components: {},
  async mounted() {
    this.card.sayHello("Vivian");
    await this.card.createPdf().then((status) => {
      this.showPDF = true;
      console.log(status);
    });
  },
});
</script>
