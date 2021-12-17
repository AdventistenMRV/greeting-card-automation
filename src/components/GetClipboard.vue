<template>
  <InputText
    v-model="value"
    v-if="!hidePasteField"
    v-on:input="dataChanged($event.data)"
  />

  <Button
    v-if="hidePasteField"
    label="Adressdaten löschen und neu einfügen"
    class="p-button-secondary"
    @click="this.resetData()"
  />
</template>

<script lang="ts">
import { IAddressData } from "@/interfaces/IAddressData";
import { defineComponent } from "vue";
import { AddressData } from "../classes/AddressData";

export default defineComponent({
  name: "get-clipboard",
  data() {
    return {
      value: "",
      placeholderText:
        'Hier die kopierten Excel Daten einfügen (Rechtsklick > "Einfügen" auswählen)',
      hidePasteField: false,
    };
  },
  emits: ["data-valid"],
  methods: {
    dataChanged: function (data: string) {
      const parser = new AddressData();
      if (parser.parseData(data)) {
        this.onDataValid(parser.parsedAddressData);
      }
    },
    resetData: function () {
      this.value = "";
      this.$emit("data-valid", false);
      this.hidePasteField = false;
    },
    onDataValid: function (data: IAddressData[]) {
      this.$emit("data-valid", data);
      this.hidePasteField = true;
    },
  },
  components: {},
});
</script>
