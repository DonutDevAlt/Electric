import express from "express";
import http from "node:http";
import {createBareServer} from "@tomphttp/bare-server-node";
import path from "node:path";

const __dirname = process.cwd();
const server = http.createServer();
const app = express(server);
const bareServer = createBareServer("/v/");
const PORT = process.env.PORT || 8080;
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));


server.on("request", (req, res) => {
	if (bareServer.shouldRoute(req)) {
		bareServer.routeRequest(req, res);
	} else {
		app(req, res);
	}
});

server.on("upgrade", (req, socket, head) => {
	if (bareServer.shouldRoute(req)) {
		bareServer.routeUpgrade(req, socket, head);
	} else {
		socket.end();
	}
});

server.on("listening", () => {
	console.log(`Running at http://localhost:${PORT}`);
});

server.listen({
	port: PORT,
});
