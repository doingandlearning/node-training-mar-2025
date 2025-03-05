/**
 * Promises: 
 * 
 * Promise - pending
 * 
 * Settled states:
 * - rejected
 * - resolved
 * 
 */

import fs from "node:fs/promises"

let userData;
let regionsData;
let allNews;

fs.readFile("./user.json", "utf-8")
	.then(userString => {
		userData = JSON.parse(userString)
		return fs.readFile("./regions.json", "utf-8")
	}).then(regionsString => {
		regionsData = JSON.parse(regionsString)
		return fs.readFile("./news.json", "utf-8")
	}).then(newsString => {
		allNews = JSON.parse(newsString)
		const headlines = regionsData[userData.region]
		const userNews = allNews.filter((article) => headlines.includes(article.id))
		console.log(userNews)
	})
	.catch(err => {
		console.log(err)
		console.log("Something went wrong ... ")
	})