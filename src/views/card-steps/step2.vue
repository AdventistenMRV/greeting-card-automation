<template>
  <div style="text-align: center">
    <h2>Importiere die Daten für die {{ greetingCardService.cardType }}</h2>
    <p>
      Um die Daten für die {{ greetingCardService.cardType }} zu importieren,<br />
      kopiere die Adressdaten aus WAVE in deine Zwischenablage (Copy &amp;
      Paste) in dieses Feld:
    </p>
    <p>
      <GetClipboard
        v-on:data-valid="greetingCardService.addressData = $event"
      ></GetClipboard>
    </p>
    <Button
      class="p-mr-2 p-button-secondary"
      type="submit"
      label="Zurück"
      @click="$router.push('1')"
    />
    <Button
      class="p-mr-2"
      :class="{
        'p-button-secondary': !greetingCardService.addressData.length,
      }"
      :disabled="!greetingCardService.addressData.length"
      type="submit"
      label="Weiter"
      @click="$router.push('3')"
    />
    <p></p>
  </div>
  <Accordion v-if="!greetingCardService.addressData.length">
    <AccordionTab header="Anleitung: So kommst du an die Adressdaten aus WAVE">
      <div>
        <p><Badge value="1"></Badge> Öffne WAVE auf deinem Computer.</p>
        <p>
          <Badge value="2"></Badge> Klicke bei
          <i>Mitgliederverwaltung > Mitglied</i> auf das Auswahl Icon
        </p>
        <p></p>
        <Badge value="3"></Badge> Wähle folgende Einstellung
        <ul v-if="greetingCardService.cardType == 'Geburtstagskarte'">
          <li>Selektion: MRV-Geburtstagskartengenerator</li>
        </ul>
        <ul v-if="greetingCardService.cardType == 'Taufjubiläumskarte'">
          <li>Selektion: MRV-Taufjubiläumskartengenerator</li>
        </ul>
        <p>
          <Badge value="4"></Badge> Markiere die ganze Ausgabe (Eine Zeile
          anklicken, dann Strg-A)
        </p>
        <p>
          <Badge value="4"></Badge> Kopiere die ganze Ausgabe (Rechtsklick >
          Markierte Datensätze kopieren)
        </p>
      </div>
      <Button
        class="p-mr-2 clipboard-btn"
        type="submit"
        :data-clipboard-text="greetingCardService.exampleRawData"
        icon="pi pi-copy"
        label="Kopiere Beispieldaten in die Zwischenablage"
      />
    </AccordionTab>
  </Accordion>

  <div v-if="greetingCardService.addressData.length">
    <h2>Datenvorschau</h2>
    <DataTable
      :value="greetingCardService.addressData"
      responsiveLayout="scroll"
    >
      <Column field="vorname" header="Vorname"></Column>
      <Column field="name" header="Nachname"></Column>
      <Column field="geburtsdatum" header="Geburtstag"></Column>
      <Column field="plzNavi" header="Postleitzahl"></Column>
    </DataTable>
  </div>
</template>

<style></style>

<script lang="ts">
import { GreetingCardService } from "@/classes/GreetingCardService";
import { defineComponent } from "vue";
import { greetingCardService } from "../Grußkarten.vue";
import router from "@/router";
import ClipboardJS from "clipboard";

export default defineComponent({
  name: "Step2",
  data() {
    return {
      greetingCardService: greetingCardService as GreetingCardService,
    };
  },
  mounted: function () {
    if (!greetingCardService.cardType) {
      router.push("1");
    }
    new ClipboardJS(".clipboard-btn");
  },
  components: {},
});
</script>
