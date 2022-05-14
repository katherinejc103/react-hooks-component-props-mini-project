import React from "react";
import Article from "./Article";

function ArticleList({posts}) {
    const articles = posts.map( post => <Article articlePost={post}/>)
    return(
        <main>
            {articles}
        </main>
    )
}




export default ArticleList;