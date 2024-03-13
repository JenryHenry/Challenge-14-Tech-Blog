const router = require('express').Router();
const { User, Blogpost } = require('../models');
const withAuth = require('../utils/auth');

// Prevent non logged in users from viewing the homepage
router.get('/', async (req, res) => {
  try {
    const blogData = await Blogpost.findAll({
      include: [{ model: User }],
      // order: [['created', 'DESC']],
    });

    const blogs = blogData.map((post) => post.get({ plain: true }));
    console.log(blogs);
    res.render('homepage', {
      blogs,
      // Pass the logged in flag to the template
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

// router.get("/blog/:id", (req, res) => {
//   //What is data structure we're sending to the template?
//   try {
//     const exampleData = {
//       title: "something",
//       author: "name",
//       postedOn: "date",
//       content: "content",
//       comments: [
//         {
//           author: "name",
//           postedOn: "date",
//           content: "content",
//         },
//         {
//           author: "name",
//           postedOn: "date",
//           content: "content",
//         },
//       ],
//     };
//     const blogData = "";
//   } catch {}
// });

router.get('/dashboard', withAuth, (req, res) => {
  try {
    res.redirect('/');
    // pass loggedIn user data to blogForm???
    res.render('dashboard');
  } catch (err) {
    res.status(500).json(err);
  }
});
// When user clicks "Create New Blog:"
//1. define a get route to render a new blog form.
//2. create the newblog form template(view)
//3. write client side javascript to submit a new blog post(fetch request)(takes client back to page(possibly dashboard) on success)
//4. write an api post route handler to handle new blog post.

module.exports = router;
