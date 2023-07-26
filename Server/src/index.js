const express = require("express");
const router = require("./routes/index")
const morgan = require("morgan");
const cors = require("cors");

const server = express();
const PORT = 3001;

server.use(morgan("dev"));
server.use(cors());

server.use(express.json());

server.use("/rickandmorty", router);


server.listen(PORT, () => {
  console.log(`Server raised in port: ${PORT}`);
});








// const http = require("http");
// const getCharById = require("/Users/Administrator/Desktop/Rick_and_Morty/Server/src/controllers/getCharById");

// http
//   .createServer((req, res) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");

//     const { url } = req;

//     if (url.includes("/rickandmorty/character")) {
//       const id = url.split("/").pop();
//       getCharById(res, parseInt(id))
//     }
//   })
//   .listen(3001, "localhost");
