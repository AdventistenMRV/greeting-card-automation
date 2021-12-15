<template>
  <Menubar :model="items" class="p-mt-4">
    <template #start> <strong>Kartengenerator</strong> </template>
  </Menubar>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Navigation",
  data() {
    return {
      items: [
        {
          label: "Grußkarten",
          icon: "pi pi-fw pi-file",
          to: "/grusskarten/1",
        },
      ],
    };
  },
  components: {},
});
</script>
