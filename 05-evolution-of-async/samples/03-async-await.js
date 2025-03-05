import fs from "node:fs/promises"

async function run() {
	try {
		const userString = await fs.readFile("./user.json", "utf-8")

		const regionsPromise = fs.readFile("./regions.json", "utf-8")
		const newsPromise = fs.readFile("./news.json", "utf-8")

		const userData = JSON.parse(userString)

		const [regionsString, newsString] = await Promise.all([regionsPromise, newsPromise])

		const regionsData = JSON.parse(regionsString)
		const allNews = JSON.parse(newsString)
		const headlines = regionsData[userData.region]
		const userNews = allNews.filter((article) => headlines.includes(article.id))
		console.log(userNews)
	} catch (error) {
		console.log(error)
	}
}

run().catch()