import React, { useEffect, useState } from "react";
import Axios from "axios";
import SearchBar from "../components/SearchBar";
import { Button, Typography, Card, CardContent, CardHeader, CardMedia, CircularProgress } from "@mui/material";

function FoodList() {
  const [food, setFood] = useState([]);
  const [loading, setLoading] = useState(false);
  const [phrase, setPhrase] = useState("");
  const [isFood, setisFood] = useState(false)

  function updateSearchPhrase(value) {
    console.log('the value', value)
    setPhrase(value);
  }

  const getFood = () => {
    setLoading(true)
    Axios.get(`http://localhost:5000/food/${phrase}`).then((response) => {
      if(response.data.food === null) {
        setFood([])
        setisFood(false)
        setLoading(false)
      } else {
        console.log("the response:", response);
        setFood(response.data.food);
        setisFood(true)
        setLoading(false)
      }
    });
  };

  return (

    <div>
      <Typography variant="h4" component="h1">
        Moodie Foodie App
      </Typography>
      <br></br>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', height: '35px'}}>
        <SearchBar
          setSearchPhrase={updateSearchPhrase}
          performSearch={getFood}
          placeholder="Search for food"
        />
        <Button className="search-button" variant="contained" onClick={getFood}>
          Get Nutrition Facts
        </Button>
      </div>
      <br></br>


      {/* if food is exists, render the right of the &&  */}
      {loading ? (<div><CircularProgress /> </div>) : ""}
      
        {isFood && !loading ? (
        <div>
        <Card sx={{ minWidth: 275, maxWidth: 500, margin: 'auto' }}>
          <CardHeader
            title={food.label}
          />
          <CardMedia
            component="img"
            height="194"
            image={food.image}
            alt="Image of food"
          />
          <CardContent>
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
          </CardContent>
        </Card>
        </div>
      ) : (
        <div className="textName">Select a food above</div>
      )}
     
    </div>
  );
}

export default FoodList;
