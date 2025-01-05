import { TNews } from "../types/TNews";

type TNewsItem = Omit<TNews, 'objectID'>

const NewsItem = ({ title, points, num_comments, created_at, author }: TNewsItem) => {
    return (
        <div className="newsItem">
            <h3>
                {title}
            </h3>
            <div className="newsStats">
                <span>{points} points</span>
                <span>{num_comments} comments</span>
                <span>{created_at}</span>
                <span>{author}</span>
            </div>
        </div>
    );
}

export default NewsItem;