import { useState } from "react";

const CakeForm = ({addNewCake}) => {

    const [cakeName, setCakeName] = useState("");
    const [ingredients,setIngredients] = useState([]);
    const [price, setPrice] = useState("");
    const [rating, setRating] = useState("");


    const handleCakeFormSubmit = (e) => {
        e.preventDefault()
        const newCake ={
            cakeName: cakeName,
            ingredients: ingredients,
            price: price,
            rating: rating,
        }

        addNewCake(newCake)

    }
    return ( 

        <form onSubmit = {handleCakeFormSubmit}>

            <input type = "text" 
            placeholder="Cake Name"
            name="cakeName"
            value ={cakeName}
            onChange = {(e) => setCakeName(e.target.value)}
            />

            <input type = "text" 
            placeholder="List of Ingredients"
            name="ingredients"
            value ={ingredients}
            onChange = {(e) => setIngredients(e.target.value.split(","))}
            />

            <input type = "number" 
            placeholder="Price"
            name="price"
            value ={price}
            onChange = {(e) => setPrice(e.target.value)}
            />

            <input type = "number" 
            placeholder="Rating"
            name="rating"
            value ={rating}
            onChange = {(e) => setRating(e.target.value)}
            />

            <input type="submit" value = "Add Cake"/>

        </form>

     );
}
 
export default CakeForm;