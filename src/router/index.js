import Vue from "vue";
import VueRouter from "vue-router";
import ParticipantID from "../views/ParticipantID.vue";
import ScreenCalibration from "../views/ScreenCalibration.vue";
import ThankYou from "../views/ThankYou.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "ParticipantID",
    component: ParticipantID,
  },
  {
    path: "/screen-calibration",
    name: "ScreenCalibration",
    component: ScreenCalibration,
  },
  {
    path: "/thank-you",
    name: "ThankYou",
    component: ThankYou,
  },

  {
    path: "/video",
    name: "SpanSelection",
    component: () =>
      import(
        /* webpackChunkName: "spanselection" */ "../views/SpanSelection.vue"
      ),
  },
  {
    path: "/json",
    name: "JsonMake",
    component: () =>
      import(/* webpackChunkName: "jsonmaker" */ "../views/JsonMaker.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
