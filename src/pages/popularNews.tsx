import { useEffect } from "react";
import News from "../components/News";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getPopularNews } from "../redux/reducers/setNewsSlice";

const PopularNews = () => {
    const popularNews = useAppSelector(state => state?.news?.popularNews || [])
    const popularNewsError = useAppSelector(state => state?.errors?.popularNewsError || '')
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch({ type: getPopularNews.type })
    }, [dispatch])

    return (
        <News news={popularNews} error={popularNewsError} title='Popular news' />
    );
}

export default PopularNews;
