import express, { Express, Request, Response } from "express";
const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.send("hello 555");
});
app.get("/hi", (req: Request, res: Response) => {
  res.send("hi");
});

app.listen(3000, () => {
  console.log(`server started`);
});
