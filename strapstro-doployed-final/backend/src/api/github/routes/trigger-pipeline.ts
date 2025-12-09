// src/api/github/routes/trigger-pipeline.ts

export default {
  routes: [
    {
      method: "POST",
      path: "/github",
      handler: "trigger-pipeline.post",
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
  ],
};
