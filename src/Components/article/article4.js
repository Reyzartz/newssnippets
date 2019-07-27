import React from 'react';
import WithClass from '../../HOC/withClass'
import classes from './article4.module.css'

const article4 = (props) => {

let title,content,imgURL;
     title=props.article.title.slice(0,props.article.title.lastIndexOf('-'));
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
            <img src={imgURL} alt="loading"/>
            <article>{title}
            <p>{content}<a href={props.article.url} takget="_blank">Read More-</a></p>
            <small>-{props.article.source.name}</small>
          </article>
    </WithClass>

    )
}

export default article4;