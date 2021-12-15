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
        path: "1",
        component: Step1,
      },
      {
        path: "2",
        component: Step2,
      },
      {
        path: "3",
        component: Step3,
      },
      {
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
