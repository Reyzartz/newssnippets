import React from 'react';
import WithClass from '../../HOC/withClass'
import classes from './article.module.css'

const article = (props) => {

    
    let title,content,imgURL;
    try{
        title=props.article.title.slice(0,props.article.title.lastIndexOf('-'));
    }
    catch(e){
        title=props.article.title;
    } 
     if(props.article.content)
          content=props.article.content.slice(0,props.article.content.lastIndexOf('['))
    else
          content="";
     if(props.article.urlToImage)
         imgURL=props.article.urlToImage;
    else
         imgURL="https://blog.stylingandroid.com/wp-content/themes/lontano-pro/images/no-image-slide.png";
    return(
    <WithClass addClass={classes.article}>
            <h3>{props.category}</h3>   
            <img src={imgURL} alt="loading"/>
            <h4>{title}
                <p>{content}
                <a href={props.article.url} target='_blank' rel="noopener noreferrer">Read More...</a>
                </p>
                <small>-{props.article.source.name}</small>
            </h4>
    </WithClass>

    )
}

export default article;