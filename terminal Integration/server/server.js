const express = require("express");
const WebSocket = require("ws");
const path = require("path");

const app = express();
const server = require("http").createServer(app);
const wss = new WebSocket.server({ server });

app.use(express.static(path.join(__dirname, "..", "dist")));
