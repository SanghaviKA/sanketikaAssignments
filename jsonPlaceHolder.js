const express = require("express");
const app = express();
let responseData;

async function getPosts() {
  return fetch(`https://jsonplaceholder.typicode.com/posts`).then((response) =>
    response.json()
  );
}
async function getPost(id) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    responseData = await response.json();
    return responseData;
  } catch (error) {
    return { error: "enter valid username" };
  }
}

app.get("/posts/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const data = await getPost(id);
    res.json({
      status: "ok",
      id,
      data,
    });
  } catch (error) {
    res.json({ error: "invalid user id" });
  }
});

app.post("/posts", async (req, res) => {
  try {
    const data = await getPosts();
    res.json({
      status: "Ok",
      data,
    });
  } catch (error) {
    res.json({ error: error.message });
  }
});

app.listen(3003, () => console.log("server is running on port 3003"));


