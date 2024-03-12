const express = require("express");
const libaryRouter = require("../controllers/libaryRouter");
const authController = require("../controllers/authController");

const libaryRouter = express.Router();

// ACCESSABLE BY BOTH LOGGED IN AND NON LOGGED IN USERS
libaryRouter.get("/allBlog", libaryRouter.allBlog);
libaryRouter.get("/readBlog/:id", libaryRouter.readBlog);

// ONLY ACCESSABLE BY LOGGED IN USERS
_BonezzRouter.post(
  "/createBlog",
  authController.isAuthenticated,
  libaryRouter.createBlog
);
libaryRouter.get(
  "/myBlog",
  authController.isAuthenticated,
  libaryRouter.myBlog
);
libaryRouter.put(
  "/updateBlog/:id",
  authController.isAuthenticated,
  libaryRouter.updateBlog
);
libaryRouter.delete(
  "/deleteBlog/:id",
  authController.isAuthenticated,
  libaryRouter.deleteBlog
);
libaryRouter.put(
  "/publishBlog/:id",
  authController.isAuthenticated,
  libaryRouter.publishBlog
);

libaryRouter.use("/:blogId", authController.isAuthenticated);

module.exports = libaryRouter;
