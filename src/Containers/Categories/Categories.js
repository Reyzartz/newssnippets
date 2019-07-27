import React,{Component} from 'react'
import Card1 from '../../Components/article/article'
import Card2 from '../../Components/article/article'
import Card3 from '../../Components/article/article3'
import classes from './Categories.module.css'
import Heading from '../../Components/Utility_Funtions/Heading/Heading'
import axios from 'axios'
import Loader from '../../Components/Utility_Funtions/CSS Loader/Loader'
import Region from '../../Components/Utility_Funtions/Region/region'

class Category extends Component {
state ={
        articles:[],
        currentCategory:null,
        isLoading:true,
        Currentregion:"in"
    }
    region=this.state.Currentregion;
    category=this.props.match.params.category;
    region_handler(){
        let regionElement=document.querySelector(".region");
        this.region=regionElement.value
        this.componentDidMount();
    }
    componentDidMount(){
        this.loadData();   
    }
    componentDidUpdate(){
        this.category=this.props.match.params.category;
        this.loadData();
    }
    url=``;
    
    loadData(){
        this.url=`https://newsapi.org/v2/top-headlines?country=${this.region}&category=${this.category}&sortBy=popularity&language=en&apiKey=e1875fa8c57d462a9b6eff2f7899e464`
        if(this.state.isLoading===true ||
             this.state.currentCategory !== this.category ||
             this.state.Currentregion !==this.region )
        axios.get(this.url)
        .then(response => {
                    this.setState({articles:response.data.articles,
                        isLoading:false,
                        currentCategory:this.category,
                        Currentregion:this.region
                    })
                })
    }
        header="";
        article="";
    render() { 
        
        if(!this.state.isLoading){
            this.header= <div className={classes.Headlines}>
                    <Card1 article={this.state.articles[0]}/>
                <div className={classes.subHeadlines}>
                    <Card2 article={this.state.articles[1]}/>
                    <Card2 article={this.state.articles[2]}/>
                </div>
        </div>
    this.article= this.state.articles.map( (art,i) => {
        if(i>2)
        return(
                <Card3 article={art}
                key={this.category+i} 
                category={this.category}
                />
            )
        } )

    }
    else{
        this.article=<Loader/>
    }
        return ( <React.Fragment>  
                <div className={classes.Category}>
                    <Heading
                        title={this.category}>
                        <Region click={()=>this.region_handler()}/>
                    </Heading>
                    {this.header}
                    {this.article}
                </div>
        </React.Fragment> );
    }
}
 
export default Category;
