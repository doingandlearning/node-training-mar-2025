import { EventEmitter } from "node:events";
import readline from "node:readline";

class ChatSystem extends EventEmitter {
  constructor() {
    super();
    this.users = [];
    this.chatHistory = [];
  }

  join(username) {
    this.users.push(username);
    this.emit("user-joined", username);
    this.chatHistory.forEach((msg) => {
      console.log(msg);
    });
  }

  leave(username) {
    const index = this.users.indexOf(username);
    if (index > -1) {
      this.users.splice(index, 1);
      this.emit("user-left", username);
    }
  }

  sendMessage(username, message) {
    const formattedMessage = `${username}: ${message}`;
    this.chatHistory.push(formattedMessage);
    if (this.chatHistory.length > 10) this.chatHistory.shift();
    this.emit("message", { username, message });
  }

  listUsers() {
    this.emit("list-users", this.users);
  }
}

const chat = new ChatSystem();

chat.on("user-joined", (username) => {
  console.log(`${username} joined the chat!`);
});

chat.on("user-left", (username) => {
  console.log(`${username} left the chat.`);
});

chat.on("message", (data) => {
  console.log(`${data.username}: ${data.message}`);
});

chat.on("list-users", (users) => {
  console.log(`Online Users: ${users.join(", ")}`);
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log(
  "Commands:\n/join [username]\n/leave [username]\n/message [username] [message]\n/list\n"
);
rl.prompt();

rl.on("line", (input) => {
  const [command, ...args] = input.split(" ");

  switch (command) {
    case "/join":
      chat.join(args[0]);
      break;
    case "/leave":
      chat.leave(args[0]);
      break;
    case "/message":
      chat.sendMessage(args[0], args.slice(1).join(" "));
      break;
    case "/list":
      chat.listUsers();
      break;
    default:
      console.log("Unknown command!");
  }

  rl.prompt();
});
