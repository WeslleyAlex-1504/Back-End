import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 9666 });

wss.on("connection", (ws) => {
  ws.on("message", (message) => {
    wss.clients.forEach((client) => {
      if (client.readyState === ws.OPEN) {
        client.send(message.toString());
      }
    });
  });
});

console.log("WebSocket rodando porta 9666");
