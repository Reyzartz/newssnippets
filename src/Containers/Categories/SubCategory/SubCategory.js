import React,{Component} from'react';
import Article from '../../../Components/article/article2'
import classes from './subcategory.module.css'
import Heading from '../../../Components/Utility_Funtions/Heading/Heading'
import Loader from '../../../Components/Utility_Funtions/CSS Loader/Loader'
class Category extends Component{
    state={
        articles:null,
        isLoading:true
    }
    async componentDidMount(){
        const response = await fetch(this.props.url);
        const data=await response.json();
        this.setState({ articles:data.articles,isLoading:false })
    }
    render(){
     const article= (this.state.isLoading ? null:this.state.articles.map( (art,i) => {
            return(
                <Article article={art}
                key={this.props.category+i}
                />
            )
        } ))
        return(
            <div className={classes.ArticleList}>
               <Heading
               title={this.props.category}/>
                {this.state.isLoading? 
                <div className={classes.loading}><Loader/></div>
                :
                <div className={classes.category}>
                    {article}
                </div>}
            </div>
        )
    }
}
export default Category;