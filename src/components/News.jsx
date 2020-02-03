import React from 'react';

export default function News(props) {

    let articleToImage;

    return (
        <div className="news">
            {props.news && props.news.map((article, index) => {
                if (index > 5) {
                    return null;
                }
                (article.urlToImage === null ? articleToImage = "./assets/stockchart.jpg" : articleToImage = article.urlToImage)
                return (
                    <div key={index} >
                        <a href={`${article.url}`} target="_blank" rel="noopener noreferrer">
                        <div className="newsdiv">

                            <img src={`${articleToImage}`} className="newsimage" alt="" />
                            <div>{article.title.slice(0, 60)}...
                                <span><h4>
                                    by {article.author} on {article.publishedAt.slice(0, 10)} at {article.publishedAt.slice(11, 19)}</h4></span></div>
                            <h3>{article.description.slice(0, 200)}...</h3>

                        </div>
                    </a>
                    </div>
    )
}
            )}
        </div >

    )
}