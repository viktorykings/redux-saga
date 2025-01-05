import { useEffect } from "react";
import News from "../components/News";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { getLatestNews } from "../redux/reducers/setNewsSlice";

const LatestNews = () => {
    const latestNews = useAppSelector(state => state?.news?.latestNews || [])
    const latestNewsError = useAppSelector(state => state?.errors?.latestNewsError || '')
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch({ type: getLatestNews.type })
    }, [dispatch])

    return (
        <>
            <News news={latestNews} error={latestNewsError} title='Latest news' />
        </>
    );
}

export default LatestNews;
