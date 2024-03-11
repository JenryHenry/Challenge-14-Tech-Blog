const newBlogHandler = async (event) => {
  // TODO: Add a comment describing the functionality of this statement
  event.preventDefault();

  // TODO: Add a comment describing the functionality of these expressions
  const title = document.querySelector("#title").value.trim();
  const content = document.querySelector("#content").value.trim();
  // add variable to store the currently logged in user                         !!!!!!! >>>>>>>>>>>
  const user = "";

  if (title && content) {
    // TODO: Add a comment describing the functionality of this expression
    const response = await fetch("/api/users/newBlog", {
      method: "POST",
      body: JSON.stringify({ title, content, user }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to create post");
    }
  }
};

document.querySelector(".blog-form").addEventListener("submit", newBlogHandler);
