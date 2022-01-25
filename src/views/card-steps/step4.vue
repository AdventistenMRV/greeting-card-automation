<template>
  <div style="text-align: center">
    <h2>🎉 Fast geschafft!</h2>
    <p>
      Lade die PDF herunter und drucke Sie mit den entsprechend Einstellungen
      aus.
    </p>
    <Button
      class="p-mr-2 p-button-secondary"
      type="submit"
      label="Zurück"
      @click="$router.push('3')"
    />
    <Button
      class="p-mt-4 p-button-success"
      type="submit"
      label="PDF herunterladen"
      @click="generatePDF()"
    />
  </div>
  <Accordion class="p-mt-4">
    <AccordionTab
      header="Anleitung: Druckereinstellungen damit die Karten gedruckt werden können"
    >
      <div>
        <p>
          <!-- <Badge value="1"></Badge>  -->
          <strong>MRV:</strong> Du findest eine Druck-Anleitung im
          <a
            href="http://wiki.mrv-net.local/de/B%C3%BCro/Gru%C3%9Fkarten"
            target="_blank"
            >Wiki</a
          >.
        </p>
        <!-- <ul>
          <li>Selektion: MRV-Geburtstage ab 75</li>
          <li>Filter: MRV-Geburtstage ab 75</li>
          <li>Liste: MRV-Geburtstage ab 75</li>
          <li>Ausgabe: Standardausgabe</li>
        </ul> -->
      </div>
    </AccordionTab>
  </Accordion>
</template>

<script lang="ts">
import { GreetingCardService } from "@/classes/GreetingCardService";
import router from "@/router";
import { defineComponent } from "vue";
import { greetingCardService } from "../Grußkarten.vue";

export default defineComponent({
  name: "Step4",
  data() {
    return {
      greetingCardService: greetingCardService as GreetingCardService,
    };
  },
  mounted: function () {
    if (!greetingCardService.cardType) {
      router.push("1");
    }
  },
  components: {},
  methods: {
    generatePDF: async function () {
      await greetingCardService
        .createPdf(this.greetingCardService.addressData)
        .then((status) => {
          console.log(status);
          this.$toast.add({
            severity: "success",
            summary: "Success Message",
            detail: "Order submitted",
            life: 3000,
          });
        });
    },
  },
});
</script>
