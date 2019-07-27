import React,{Component} from 'react';
import './Navbar.css'
import logo from '../../logo.png'
import { NavLink} from 'react-router-dom';
import Search from './Search/Search'
import headingColor from '../../Components/Utility_Funtions/HeadingColor/HeadingColor'


class Navbar extends Component{
    state={
        toSearch:null,
        showNavItem:false
    };
    slide="slidedown"
    slidedown(){
        let NavItem=document.querySelector(".Navbar");
        if(this.state.showNavItem===false){
            NavItem.style.display="block"
            this.slide="slidedown"
            this.setState({
                showNavItem:!this.state.showNavItem
            })
        }
        if(this.state.showNavItem===true){
            NavItem.style.display="none"
            this.slide="slideup"
            this.setState({
                showNavItem:!this.state.showNavItem
            })
        }
        if(window.innerWidth>1072){
            NavItem.style.display="block"
            this.setState({
                showNavItem:!this.state.showNavItem
            })
        }

    }
    NavColor(color){
        let header=document.querySelector("header");
        header.style.backgroundColor=headingColor(color);
        console.log(headingColor(color));
        
    }
    render(){

        return(
        <header className="header">
            <span className="logo">NewsSnippet<img src={logo} alt="logo"/></span>
            <nav className="Navbar">
                
                <ul className={this.slide} onClick={()=>this.slidedown()} >
                    <NavLink to=""><li>Home</li></NavLink>
                    <NavLink to="/category/sports"><li onClick={()=>this.NavColor("sports")}>Sports</li></NavLink>
                    <NavLink to="/category/entertainment"><li onClick={()=>this.NavColor("entertainment")}>Entertainment</li></NavLink>
                    <NavLink to="/category/business"><li onClick={()=>this.NavColor("business")}>Business</li></NavLink>
                    <NavLink to="/category/technology"><li onClick={()=>this.NavColor("technology")}>Technology</li></NavLink>
                    <NavLink to="/category/science"><li onClick={()=>this.NavColor("science")}>Science</li></NavLink>
                    <NavLink to="/category/health"><li onClick={()=>this.NavColor("health")}>Health</li></NavLink>
                </ul>
            </nav>
            <Search/>
            <button className="Navbutton" onClick={()=>this.slidedown()}>
                <div></div><div></div><div></div>
            </button>
        </header>
        
        )
    }
} 
export default Navbar;