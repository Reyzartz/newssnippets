import React,{Component} from 'react';
import './Home.css'
import Article from '../../Components/article/article'
import Loader from '../../Components/Utility_Funtions/CSS Loader/Loader';
import Heading from '../../Components/Utility_Funtions/Heading/Heading'
import Region from '../../Components/Utility_Funtions/Region/region'

class Home extends Component{
    state={
        isloading:true,
        articles:null,
        region:"in"
    }
    
    region_handler(){
        let region=document.querySelector(".region");
        console.log(region.value);
        this.setState({region:region.value})
        this.url=`https://newsapi.org/v2/top-headlines?sortBy=popularity&category=general&country=${this.state.region}&apiKey=e1875fa8c57d462a9b6eff2f7899e464`
        console.log(this.state);
        this.componentDidMount();
    }
    url=`https://newsapi.org/v2/top-headlines?sortBy=popularity&category=general&country=${this.state.region}&apiKey=e1875fa8c57d462a9b6eff2f7899e464`
   async componentDidMount(){
        const response = await fetch(this.url);
        const data = await response.json();
        this.setState({articles:data.articles,isloading:false})
        console.log(this.state.articles);
        
    }
     render(){
        return(
            <div className="headline">
                <Heading title="HeadLine">
                    <Region click={()=>this.region_handler()}/>
                    </Heading>
            {this.state.isloading ? <div className="loading"><Loader/></div>:                      
                <div className="Headlines">
                    <Article article={this.state.articles[0]}/>
                    <div className="subHeadlines">
                        <Article article={this.state.articles[1]}/>
                        <Article article={this.state.articles[2]}/>
                        <Article article={this.state.articles[3]}/>
                        <Article article={this.state.articles[4]}/>
                    </div>
                </div>}
            </div>
        )
    }
}
export default Home;