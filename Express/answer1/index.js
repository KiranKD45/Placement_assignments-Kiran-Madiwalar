import express, { urlencoded } from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const port = 3000;

const posts = [
  { id: 1, title: "Post 1", content: "the content of post 1" },
  { id: 2, title: "Post 2", content: "the content of post 2" },
  { id: 3, title: "Post 3", content: "the content of post 3" },
  { id: 4, title: "Post 4", content: "the content of post 4" },
  { id: 5, title: "Post 5", content: "the content of post 5" },
  { id: 6, title: "Post 6", content: "the content of post 6" },
  { id: 7, title: "Post 7", content: "the content of post 7" },
  { id: 8, title: "Post 8", content: "the content of post 8" },
  { id: 9, title: "Post 9", content: "the content of post 9" },
  { id: 10, title: "Post 10", content: "the content of post 10" },
  { id: 11, title: "Post 11", content: "the content of post 11" },
  { id: 12, title: "Post 12", content: "the content of post 12" },
  { id: 13, title: "Post 13", content: "the content of post 13" },
  { id: 14, title: "Post 14", content: "the content of post 14" },
  { id: 15, title: "Post 15", content: "the content of post 15" },
  { id: 16, title: "Post 16", content: "the content of post 16" },
  { id: 17, title: "Post 17", content: "the content of post 17" },
  { id: 18, title: "Post 18", content: "the content of post 18" },
  { id: 19, title: "Post 19", content: "the content of post 19" },
  { id: 20, title: "Post 20", content: "the content of post",}
];


  app.get("/post", (req, res) => {
    res.json(posts);
  });
  
  app.listen(port, () => {
    console.log(`server is listening to port ${port}`);
  });