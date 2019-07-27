import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Icon from '../../../asset/searchIcon.png'
import classes from './Search.module.css'


class  Search extends Component {
    state = { toSearch:"" }
    search = () => {
        let search=document.getElementById('search');
        this.setState({
            toSearch:""
        })
        search.addEventListener("keypress",this.tosearch(search.value));
        
    }
    tosearch=(e)=>{
            this.setState({
                toSearch:e
            });
        }
    render(){
        return(
        <form action="/search"
        className={classes.SearchBox}>
            <input type="text" 
                id="search"  
                name="search" 
                onClick={(event)=>this.search(event)}
                placeholder="Search"
                />
                <Link to={{
                    pathname:`/search`,
                    search:`${this.state.toSearch}`
                }}><img src={Icon} alt="Search"/></Link>
                
        </form>
        )
    }
}
export default Search;