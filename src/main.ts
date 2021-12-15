import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import router from "./router";
import Dialog from "primevue/dialog";
import Button from "primevue/button";
import Textarea from "primevue/textarea";
import Editor from "primevue/editor";
import ToastService from "primevue/toastservice";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Steps from "primevue/steps";
import Badge from "primevue/badge";
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
import InputText from "primevue/inputtext";

import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

import Menubar from "primevue/menubar";

import Navigation from "./components/Navigation.vue";
import GetClipboard from "./components/GetClipboard.vue";

const app = createApp(App);
app.use(router);
app.use(PrimeVue);
app.use(ToastService);
app.component("Dialog", Dialog);
app.component("Button", Button);
app.component("Navigation", Navigation);
app.component("GetClipboard", GetClipboard);
app.component("Menubar", Menubar);
app.component("Textarea", Textarea);
app.component("Editor", Editor);
app.component("DataTable", DataTable);
app.component("Column", Column);
app.component("Steps", Steps);
app.component("Badge", Badge);
app.component("Accordion", Accordion);
app.component("AccordionTab", AccordionTab);
app.component("InputText", InputText);
app.mount("#app");
