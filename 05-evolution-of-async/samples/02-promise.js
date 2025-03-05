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

// let userData;
// let regionsData;
// let allNews;

// fs.readFile("./user.json", "utf-8")
// 	.then(userString => {
// 		userData = JSON.parse(userString)
// 		return fs.readFile("./regions.json", "utf-8")
// 	}).then(regionsString => {
// 		regionsData = JSON.parse(regionsString)
// 		return fs.readFile("./news.json", "utf-8")
// 	}).then(newsString => {
// 		allNews = JSON.parse(newsString)
// 		const headlines = regionsData[userData.region]
// 		const userNews = allNews.filter((article) => headlines.includes(article.id))
// 		console.log(userNews)
// 	})
// 	.catch(err => {
// 		console.log(err)
// 		console.log("Something went wrong ... ")
// 	})

// Promise.all([
// 	fs.readFile("./user.json", "utf-8"),
// 	fs.readFile("./regions.json", "utf-8"),
// 	fs.readFile("./news.json", "utf-8")
// ]).then(([userString, regionsString, newsString]) => {
// 	const userData = JSON.parse(userString)
// 	const regionsData = JSON.parse(regionsString)
// 	const allNews = JSON.parse(newsString)
// 	const headlines = regionsData[userData.region]
// 	const userNews = allNews.filter((article) => headlines.includes(article.id))
// 	console.log(userNews)
// }).catch(err => console.log(err))

Promise.allSettled([
	fs.readFile("./user.json", "utf-8"),
	fs.readFile("./regions.json", "utf-8"),
	fs.readFile("./news.json", "utf-8")
]).then(([userResult, regionsResult, newsResult]) => {
	// may have rejected {status: rejected, reason: string} or resolved {status: fulfilled, value: string}!
	let userString, regionsString, newsString

	if (userResult.status === "fulfilled") {
		userString = userResult.value
	} else {
		userString = "{'region': 'SE'}"
	}
	if (regionsResult.status === "fulfilled") {
		regionsString = regionsResult.value
	} else {
		regionsString = "{}"
	}
	if (newsResult.status === "fulfilled") {
		newsString = newsResult.value
	} else {
		newsString = "{}"
	}

	const userData = JSON.parse(userString)
	const regionsData = JSON.parse(regionsString)
	const allNews = JSON.parse(newsString)
	const headlines = regionsData[userData.region]
	const userNews = allNews.filter((article) => headlines.includes(article.id))
	console.log(userNews)
}).catch(err => console.log(err))