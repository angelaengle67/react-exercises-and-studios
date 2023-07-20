import styles from './Description.module.css'
import React from 'react'

function RecipeAuthor(){
    let authorLink = "https://barefootcontessa.com/recipes/watermelon-arugula-salad";
    let authorPhoto= "https://www.washingtonian.com/wp-content/uploads/2018/11/InaFeat.jpg";
    let authorName= "Barefoot Contessa";

    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Barefoot Contessa" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Watermelon & Arugula Salad</a> 
           </div>
        </div>
     );
}

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