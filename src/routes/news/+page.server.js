import * as dotenv from "dotenv"
import NewsAPI from "newsapi"

export async function load({ params }) {
    const config = dotenv.config()
    const api_key = process.env.NEWS_API_KEY
    const newsapi = new NewsAPI(api_key)
    let apiRes
    await newsapi.v2.topHeadlines({
        q: "child",
        pageSize: 100,
        page: 1,
    }).then((response) => {
        apiRes = response
    })
    return {
        post: {
            apiRes: apiRes
        }
    }
}