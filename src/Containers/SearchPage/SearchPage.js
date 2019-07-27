import React,{Component} from 'react'
import Card3 from '../../Components/article/article3'
import classes from './SearchPage.module.css'
import axios from 'axios'
import Heading from '../../Components/Utility_Funtions/Heading/Heading'

class SearchPage extends Component {
state ={
        articles:[],
        currentSearch:null,
        isLoading:true
    };
    search=this.props.location.search.substring(8);
    componentDidMount(){
        this.loadData();   
    }
    componentDidUpdate(){
        this.search=this.props.location.search.substring(8);
        this.loadData();
    }
     loadData(){
        this.url=`https://newsapi.org/v2/everything?q=${this.search}&language=en&sortBy=popularity&apiKey=e1875fa8c57d462a9b6eff2f7899e464`;
         if(this.state.isLoading===true || this.state.currentSearch !== this.search)
         axios.get(this.url)
         .then(response => {
                    this.setState({articles:response.data.articles,
                        isLoading:false,
                        currentSearch:this.search
                    })
                })
    }
        header="";
        article="";
    render() { 
        
        if(!this.state.isLoading){
    this.article= this.state.articles.map( (art,i) => {
            return(
                <Card3 article={art}
                key={this.search+i} search={this.search}
                />
            )
        } )
    }
        return ( <React.Fragment>  
                <div className={classes.Search}>
                <Heading
                title={`Showing Search Results for "${this.search}"`}
                color={"#eedc31"}/>
                    {this.article}
                </div>
        </React.Fragment> );
    }
}
 
export default SearchPage;
