<template>
  <div style="text-align: center">
    <h2>Wähle eine Kartenart</h2>
    <Button
      class="p-mr-2"
      type="submit"
      label="Geburtstagskarten"
      @click="this.nextStep('Geburtstagskarte')"
    />
    <Button
      class="p-mr-2"
      type="submit"
      label="Taufjubiläumskarten"
      @click="this.nextStep('Taufjubiläumskarte')"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { greetingCardService } from "@/views/Grußkarten.vue";
import { GreetingCardService } from "@/classes/GreetingCardService";
import router from "@/router";

export default defineComponent({
  name: "Step1",
  data() {
    return {
      greetingCardService: greetingCardService as GreetingCardService,
    };
  },
  methods: {
    nextStep: function (cardType: "Geburtstagskarte" | "Taufjubiläumskarte") {
      this.$toast.add({
        severity: "success",
        summary: "Success Message",
        detail: "Order submitted",
        life: 3000,
      });
      this.greetingCardService.setGreetingCardType(cardType);
      router.push("2");
    },
  },
  components: {},
});
</script>
