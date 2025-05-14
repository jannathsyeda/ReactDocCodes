import React from 'react';

function Recipeses({id,name,ingredients}) {
    console.log( name)
    return (
        <div>
        <h1>Recipes from </h1>
        
          <div key={id}>
            <h2>{name}</h2>
            <ul>
                {ingredients.map(ingredient=>
                <li key={ingredient}>{ingredient}</li>

                )}
                    </ul>
          </div>
      
      </div>
    );
}

export default Recipeses;