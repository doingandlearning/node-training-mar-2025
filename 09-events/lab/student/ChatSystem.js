import { EventEmitter } from "events";
import readline from "readline";

class ChatSystem extends EventEmitter {

  constructor() {
    super();
    this.users = [];
    this.chatHistory = [];
  }

  join(username) {
    // Add the user to the users array
    // Emit an appropriate event with the username as the payload
    // Log the current chat history
  }

  leave(username) {
    // remove the user from the users array
    // Emit an approriate event with the username as the payload
  }

  sendMessage(username, message) {
    // Format the message
    // Add it to the chat history
    // If the chat history is greater than 10, then remove the oldest
    // Emit an approriate event with the inputs as the payload
  }

  listUsers() {
    // Emit an appropraite event with the users array as the payload
  }
}

// Instantiate a new instance of your chat system and register you listeners.
const chat = new ChatSystem();

// This is the CLI that will use your code

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log(
  "Commands:\n/join [username]\n/leave [username]\n/message [username] [message]\n/list\n"
);
rl.prompt(); // input()

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
