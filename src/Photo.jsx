import React from "react";

import { getImageUrl } from "./assets/utils";
import { people } from "./assets/data";
import { recipes } from "./assets/data";
export default function Photo() {
  const listItems = people.map((person) => (
    <li key={person.id}>
      <img src={getImageUrl(person)} />
      <b>{person.name}:</b>
      <b>person</b>
    </li>
  ));

  const everyoneElse = people.filter(
    (person) => person.profession !== "chemist"
  );

  const everyoneElseMap = everyoneElse.map((person) => (
    <li key={person.id}>
      <img src={getImageUrl(person)} />
      <b>{person.name}:</b>
    </li>
  ));

  return (
    <div>
      <div className="flex">
        <ul>
          <h6> only chemists</h6>
          {listItems}
        </ul>

        <ul>
          <h1>Every one else</h1>
          {everyoneElseMap}
        </ul>
      </div>

      <h1> Recipies section</h1>
      <div>
        {
            recipes.map(recipe=>
                <div key={recipe.id}>
                    <h1>{recipe.name}</h1>
                    <ul>
                {recipe.ingredients.map(ingredient=>
                <li key={ingredient}>{ingredient}</li>

                )}
                    </ul>

                </div>

            )
        }

      </div>
    </div>
  );
}
