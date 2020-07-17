"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const { router, controller } = app;
  console.log(controller.users)
  router.get("/", controller.home.index);
  router.get("/users", controller.users.index);
  router.resources("users", "/users/create", controller.users.create);
};
