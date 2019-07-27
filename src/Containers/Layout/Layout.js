import React,{Component} from 'react';
import Home from '../HeadLines/Home';
import SubCategories from '../Categories/SubCategories';
import NavBar from '../Navbar/Navbar';
import Categories from '../Categories/Categories'
import {Route,Switch} from 'react-router-dom';
import SearchPage from '../SearchPage/SearchPage'
import Footer from '../../Components/Utility_Funtions/Footer/footer'

class Layout extends Component{
    HomePage =  <React.Fragment>
                    <Home/>
                    <SubCategories/>
                </React.Fragment>;
    render(){
        return(
            <React.Fragment>
                <NavBar/>
                <Switch>
                    <Route path="/search" exact component={SearchPage}/>
                    <Route path="?search" exact component={SearchPage}/>
                    <Route path="/" exact render={()=>this.HomePage}/>
                    <Route path="/category/:category" exact component={Categories}/> 
                </Switch>
                <Footer/>
            </React.Fragment>
        )
    }
}
export default Layout;