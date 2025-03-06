/**
 * JavaScript runs on events - event-driven!
 *  * User clicking a button
 *  * Tabbing into a field
 *  * Input updating
 *
 * - Server has started
 * - Upload has finished
 * - Database connection open/dropped
 * - File system is full
 * - Process has finished ...
 *
 * EventEmitter
 * - emit named events
 * - subscribe to named events
 *
 */

import { EventEmitter } from "node:events";

const ee = new EventEmitter();

const events = {
  UserConnected: "user-connected",
  MessageSent: "message-sent"
};

ee.once(events.UserConnected, () => {
  console.log("User connection process is working.")
})

ee.on(events.UserConnected, (userName) => {
  console.log(`Hello, ${userName}.`);
});
ee.on(events.UserConnected, (userName) => {
  console.log(`${userName} is connected!`);
});

ee.prependOnceListener(events.UserConnected, () => {
  console.log("I was called first!")
})

ee.prependListener(events.UserConnected, () => {
  console.log("I was called first!")
})

ee.emit(events.UserConnected, "Kevin");
ee.emit(events.UserConnected, "Tyra");

ee.emit(events.MessageSent)



ee.on("error", (err) => {
  console.log("Something went wrong")
  console.log(err)
})
ee.emit("error", new Error("It's too cloudy."))
ee.emit("this-does-not-exist-yet")

// 
