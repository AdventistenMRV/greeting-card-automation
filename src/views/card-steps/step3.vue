<template>
  <h2>Grußkartentext</h2>
  <Editor
    v-model="greetingCardService.currentGreetingCardText"
    editorStyle="height: 320px"
    class="p-mb-4"
  >
    <template #toolbar>
      <span class="ql-formats">
        <button class="ql-bold"></button>
      </span>
    </template>
  </Editor>

  <Button
    class="p-mr-2 p-button-secondary"
    type="submit"
    label="Zurück"
    @click="$router.push('2')"
  />
  <Button
    class="p-mr-2"
    :disabled="!greetingCardService.addressData"
    type="submit"
    label="Weiter"
    @click="$router.push('4')"
  />
</template>

<script lang="ts">
import { GreetingCardService } from "@/classes/GreetingCardService";
import router from "@/router";
import { defineComponent } from "vue";
import { greetingCardService } from "../Grußkarten.vue";

export default defineComponent({
  name: "Step3",
  data() {
    return {
      greetingCardService: greetingCardService as GreetingCardService,
      greetingCardText: "init",
    };
  },
  mounted: function () {
    if (!greetingCardService.cardType) {
      router.push("1");
    }
  },
  components: {},
});
</script>
