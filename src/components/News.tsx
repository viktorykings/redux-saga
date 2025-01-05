import { TNews } from "../types/TNews";
import NewsItem from "./NewsItem";

type TNewsContainer = {
    news: TNews[]
    title: string
    error: string
}

const News = ({ news, title, error }: TNewsContainer) => {
    if (error) return <p>{error} {title}</p>
    if (!news || news.length === 0) {
        return null;
    }

    return (
        <section>
            <h3>{title}</h3>
            {news.map(n => <NewsItem key={n.objectID} title={n.title} points={n.points} num_comments={n.num_comments} created_at={n.created_at} author={n.author} url={n.url} />)}
        </section>
    );
}

export default News;