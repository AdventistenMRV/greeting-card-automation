import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Grußkarten from "../views/Grußkarten.vue";
import Step1 from "../views/card-steps/step1.vue";
import Step2 from "../views/card-steps/step2.vue";
import Step3 from "../views/card-steps/step3.vue";
import Step4 from "../views/card-steps/step4.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    redirect: "/grusskarten/1",
  },
  {
    path: "/grusskarten",
    name: "Grußkarten",
    component: Grußkarten,
    children: [
      {
        name: "Grußkarten-Step-1",
        path: "1",
        component: Step1,
      },
      {
        name: "Grußkarten-Step-2",
        path: "2",
        component: Step2,
      },
      {
        name: "Grußkarten-Step-3",
        path: "3",
        component: Step3,
      },
      {
        name: "Grußkarten-Step-4",
        path: "4",
        component: Step4,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
