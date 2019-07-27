const HeadingColor=(title)=>{
    title=title.toLowerCase()
    let HeadingColors=["#966842","#f44747","#eedc31","#7fdb6a","#0e68ce"]
    if(title===("home"))
        return("black");
    if(title===("headline")|| title==="world")
        return("black");
    else if(title===("sports"))
        return(HeadingColors[0])
    else if(title===("entertainment"))
        return(HeadingColors[1])
    else if(title===("business"))
        return(HeadingColors[2])
    else if(title===("technology"))
        return(HeadingColors[3])
    else if(title===("science"))
        return(HeadingColors[4])
    else if(title===("health"))
        return(HeadingColors[0])
    else {
        return(HeadingColors[3])
    }
}
export default HeadingColor