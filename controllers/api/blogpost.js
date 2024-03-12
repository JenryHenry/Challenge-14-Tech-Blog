const router = require("express").Router();
const { User, Blogpost } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  try {
    const dbBlogData = await Blogpost.create({
      title: req.body.title,
      content: req.body.content,
      authorId: req.session.user_id,
    });
    res.status(200).json("post created!");
    //                                          ?????????? >>>>>>>>>>>
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  console.log("put route called");
});

router.delete("/:id", async (req, res) => {
  console.log("blog deleted");
});

module.exports = router;
