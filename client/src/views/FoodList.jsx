import React, { useEffect, useState } from "react";
import Axios from "axios";
import SearchBar from '../components/SearchBar';

function FoodList() {

  const [food, setFood] = useState("");
  const [phrase, setPhrase] = useState("");

  function updateSearchPhrase(value) {
    setPhrase(value)
  }

  const getFood = (event) => {
    const value = event.target.value
    console.log('the value', event)
    Axios.get(
      `http://localhost:5000/food/${phrase}`
    ).then((response) => {
      console.log("the response:", response);
      setFood(response.data.food)
    });
  };

  return (
    <div>
      <SearchBar setSearchPhrase={updateSearchPhrase} placeholder='Search for food'/>
      <button onClick={getFood}>Click for info</button>
      {food.label}
      <img src={food.image}/>  

    {/* if food is exists, render the right of the &&  */}
      {food && <div>
        <div>
            <span>Carbohydrates: </span>
            <span>{food.nutrients.CHOCDF} g</span>
        </div>
        <div>
            <span>Energy: </span>
            <span>{food.nutrients.ENERC_KCAL} kcal</span>
        </div>
        <div>
            <span>Fat: </span>
            <span>{food.nutrients.FAT} g</span>
        </div>
        <div>
            <span>Fiber: </span>
            <span>{food.nutrients.FIBTG} g</span>
        </div>
        <div>
            <span>Protein: </span>
            <span>{food.nutrients.PROCNT} g</span>
        </div>
      </div>}
    </div>
  );
}

export default FoodList;
