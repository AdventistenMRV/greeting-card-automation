<template>
  <h2>Grußkarten generieren</h2>
  <p class="p-mb-4">
    Mithilfe des Grußkarten Generators können personalisierte PDFs für die
    Grußkarten erstellt werden.
  </p>
  <Steps :model="items" :readonly="true" class="p-mb-4" />
  <router-view />
</template>

<script lang="ts">
import { IAddressData } from "@/interfaces/IAddressData";
import { defineComponent } from "vue";
import { GreetingCardService } from "../classes/GreetingCardService";
export const greetingCardService = new GreetingCardService();

export default defineComponent({
  name: "Geburtstagskarten",
  data() {
    return {
      greetingCardService: greetingCardService,
      addressDataValid: false as boolean | IAddressData[],
      greetingCardText:
        "Liebe Schwester Mustermann,<br><br>zu Deinem Geburtstag wünschen wir Dir von Herzen alles Gute,<br>Gesundheit und Gottes reichen Segen.<br><br>Möge das neue Lebensjahr Dir viele Schöne Erlebnisse<br>und Augenblicke bereithalten.<br><br><br>Herzliche Grüße<br><strong>Dein Büro der Mittelrheinische Vereinigung</strong>",
      card: greetingCardService,
      showPDF: false,
      base64PDF: "",
      items: [
        {
          label: "Kartenart wählen",
          to: "/grusskarten/1",
        },
        {
          label: "Importieren & Prüfen",
          to: "/grusskarten/2",
        },
        {
          label: "Texte anpassen",
          to: "/grusskarten/3",
        },
        {
          label: "Generieren",
          to: "/grusskarten/4",
        },
      ],
    };
  },
  components: {},
});
</script>
