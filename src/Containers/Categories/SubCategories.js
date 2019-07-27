import React from 'react';
import Category from './SubCategory/SubCategory' 

const Categories = () => {
    return(
        <React.Fragment>
            <Category category="World" url="https://newsapi.org/v2/top-headlines?language=en&apiKey=e1875fa8c57d462a9b6eff2f7899e464"/>
            <Category category="Sports" url="https://newsapi.org/v2/top-headlines?country=in&category=sport&sortBy=popularity&language=en&apiKey=e1875fa8c57d462a9b6eff2f7899e464"/>
            <Category category="Entertainment" url="https://newsapi.org/v2/top-headlines?country=in&category=entertainment&language=en&apiKey=e1875fa8c57d462a9b6eff2f7899e464"/>
            <Category category="Business" url="https://newsapi.org/v2/top-headlines?country=in&category=business&language=en&apiKey=e1875fa8c57d462a9b6eff2f7899e464"/>
            <Category category="Technology" url="https://newsapi.org/v2/top-headlines?country=in&category=technology&language=en&apiKey=e1875fa8c57d462a9b6eff2f7899e464"/>
            <Category category="Science" url="https://newsapi.org/v2/top-headlines?country=in&category=science&language=en&apiKey=e1875fa8c57d462a9b6eff2f7899e464"/>
            <Category category="Health" url="https://newsapi.org/v2/top-headlines?country=in&category=health&language=en&apiKey=e1875fa8c57d462a9b6eff2f7899e464"/>
        </React.Fragment>
    )       
}
export default Categories