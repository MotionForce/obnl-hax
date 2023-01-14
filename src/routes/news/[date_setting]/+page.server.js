import * as dotenv from "dotenv"
import NewsAPI from "newsapi"
import error from "@sveltejs/kit"

export async function load({ params }) {
    const date_setting = params.date_setting;
    const config = dotenv.config()
    const api_key = process.env.NEWS_API_KEY
    const newsapi = new NewsAPI(api_key)
    let date = new Date()
    switch(date_setting){
        case "week":
            date.setDate(date.getDay() - 7)
            break;
        case "month":
            date.setMonth(date.getMonth() - 1)
            break;
        case "sixmonths":
            date.setMonth(date.getMonth() - 6)
            break;
        case "year":
            date.setYear(date.getYear() - 1)
            break;
    }

    newsapi.v2.topHeadlines({
        q: "child",
        pageSize: 100,
        page: 1,
    }).then(response => {

    })
}

function format_date(date){
    return date.toLocaleDateString(
        "en-US",
        { year: "numeric"} + "-" + date.toLocaleDateString(
            "en-US",
            { month: "numeric" } + "-" + date.toLocaleDateString(
                "en-US",
                { day: "numeric"}
            )
        )
    )
}