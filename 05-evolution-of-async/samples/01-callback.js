import fs from "node:fs"

// Callback Hell!
fs.readFile("./user.json", "utf-8", (err, userString) => {
	if (err) {
		console.log(err)
		return
	}
	const userData = JSON.parse(userString)
	fs.readFile("./regions.json", "utf-8", (err, regionsString) => {
		if (err) {
			console.log(err)
			return
		}
		const regionsData = JSON.parse(regionsString)
		const headlines = regionsData[userData.region]
		fs.readFile("./news.json", "utf-8", (err, newsString) => {
			if (err) {
				console.log(err)
				return
			}
			const allNews = JSON.parse(newsString)
			const userNews = allNews.filter((article) => headlines.includes(article.id))
			console.log(userNews)
		})
	})
})


