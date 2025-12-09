import { Core } from "@strapi/strapi";
import { setUpGithubWebhook } from "./util";

export default {
  register() {},

  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    await setUpGithubWebhook(strapi);
  },
};
