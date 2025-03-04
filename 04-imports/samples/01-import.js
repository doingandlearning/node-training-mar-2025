// const fs = require("node:fs")  // Common JavaScript - CJS
import fs from "node:fs"  // ECMAScript Module - ESM
// const { add } = require("./utils")
import { add as addFunction, subtract } from "./utils.js"
import mySpecialAddFunction from "./utils.js"
// 2009! 
// fs.readFile()

console.log(addFunction(1, 3))
console.log(mySpecialAddFunction(1, 2))
console.log(subtract(10, 9))


const user = { name: "Antonie", role: "SWE", usedNodeFor: ["Automation", "site"] }


const { name, role } = user

console.log(name)
console.log(role)