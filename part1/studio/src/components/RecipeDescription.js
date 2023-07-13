import React from "react"
import RecipeAuthor from "./Description"

class RecipeDescription extends React.Component {
    render() {
        return(
        <div> 
      
         <h1>Watermelon & Arugula Salad</h1>
         <p>Short recipe description</p>
      
      <RecipeAuthor />
   </div>)
    }
}

export default RecipeDescription;