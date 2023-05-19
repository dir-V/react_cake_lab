const Cake = ({cake}) => {

  const ingredientsLis = cake.ingredients.map(ingredient => <li>{ingredient}</li>);

  return (
    <article className="cake">
        <h2>{cake.cakeName}</h2>
        <ul>{ingredientsLis}</ul>
        <p>Price: {cake.price}</p>
        <p>Rating: {cake.rating}</p>
    </ article>
  )
}

export default Cake;