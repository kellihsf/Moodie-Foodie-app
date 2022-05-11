import React, { useEffect, useState } from "react";
import Axios from "axios";
import SearchBar from "../components/SearchBar";
import { Button, Typography, Card } from "@mui/material";
// import FoodCard from "../components/FoodCard";

function FoodList() {
  const [food, setFood] = useState("");
  const [phrase, setPhrase] = useState("");
  const [isFood, setisFood] = useState(false)

  function updateSearchPhrase(value) {
    setPhrase(value);
  }

  const getFood = (event) => {
    const value = event.target.value;
    console.log("the value", event);
    Axios.get(`http://localhost:5000/food/${phrase}`).then((response) => {
      if(response.data.food === null) {
        setFood("")
        setisFood(false)
      } else {
        console.log("the response:", response);
        setFood(response.data.food);
        setisFood(true)
      }
    });
  };

  return (
    <div>
      <Typography variant="h3" component="h1">
        Moodie Foodie App
      </Typography>

      <SearchBar
        setSearchPhrase={updateSearchPhrase}
        placeholder="Search for food"
      />

      <Button variant="contained" onClick={getFood}>
        Get Nutrition Facts
      </Button>
      {/* 
      <FoodCard food={food}/> */}
      {food.label}

      <img src={food.image} />


      {/* if food is exists, render the right of the &&  */}
      {isFood ? (
        <div>
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
        </div>
      ) : (
        <div>Select a food above</div>
      )}
    </div>
  );
}

export default FoodList;
