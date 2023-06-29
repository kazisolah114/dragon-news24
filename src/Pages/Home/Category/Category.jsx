import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Category = () => {
    const {id} = useParams()
    const newsCategory = useLoaderData()
    // console.log(newsCategory)
    return (
        <div>
            <h5>Dragon News Home</h5>
            {
                newsCategory.map(news => <NewsCard key={news._id} news={news}>

                </NewsCard>)
            }
        </div>
    );
};

export default Category;