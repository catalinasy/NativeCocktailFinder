const formatDrinks = drinks =>( drinks.reduce((acc, drink) => {
    acc[drink.idDrink] = acc[drink.idDrink] === undefined && { id: drink.idDrink, name: drink.strDrink , photo: drink.strDrinkThumb }
    return acc
  }, {})
)

export {
    formatDrinks
}