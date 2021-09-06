import style from './recipe.module.css'

const Recipe = ({title, calories, image, ingredients, cautions }) => {
    return (
        <div className={style.recipe}>
            <h1 className="titleClass">{title}</h1>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>Calories: {calories}</p>
            <div id="HighCalories">If calories 1000 </div>
            <img className={style.image} src={image} alt="" />
            <p>Cautions: {cautions}</p>
        </div>
    )
}

export default Recipe;