

## 🍸 A Cocktail Finder App created in React Native 🍸


This application relies on React Native and Redux (for state management). 
It allows you to search for drinks over a Cocktail API.

### Third-Party Libraries:

To achieve functionality and a nice UI I used the following libraries:
 - react-native-linear-gradient: to create the linear gradients on the screens
 - axios: to manage the requests to the API
 - react-navigation, react-native-gesture-handler and react-navigation-stack: to achieve navigation between screens
 
### State Management:

I’ve used Redux to manage the state through the app.  <br />

The state architecture I’ve built is the following: 

```

drinks: {
	isFetching: boolean,
	drinks: {   
		[drinkId]: { id: string, name: string, photo: string },
		[drinkId]: { id: string, name: string, photo: string },
	}
}

```

e.g. 

```

drinks: {
    isFetching: false,
    drinks: {
	1234: {id: "1234", name: “vodka”, photo: “http://…”},
	1235: {id: "1235", name: “vodka”, photo: “http://…”}
    }}

```

I’m normalizing the data by building a “hashtable”, a `key-value` structure (object) where each key is the drink's id. <br />

In order to build this structure, I’m using a helper function called `formatDrinks`. This function receives an array of drinks and executes a `reduce` to return the format needed. <br />

In the future, if we need to access the detail of a specific drink we only need to access `drinks[drinkId]` we don’t iterate the whole structure 😍

### Thoughts on data management and performance

In a given scenario where the amount of data to manage is big, I think the best approach is to use backend pagination + frontend scrolling logic.  <br />
When the user scrolls to a certain position (before reaching the end of the list) the frontend should trigger a new API call with a different pagination parameter.  <br />
So in the first attempt, we call the API with `page=1` as a parameter, when the user scrolls to the `mid+N` position we trigger a second API call with `page=2`, and so on… <br />
If the data is not constantly suffering changes, we could save it in a localStorage and we first check if (e.g.) “Vodka” exists in localStorage, otherwise hit the API. This way we don’t do unnecessary round trips.



### Getting Started

1) Clone this repo 
2) Exec npm install 

To run locally you would need to install an Emulator for Android. (https://developer.android.com/studio)

To run in iOS you need a OSX.

4) For iOS: Exec npm run ios 

5) For Android: Open the android emulator first (!!) and after that exec npm run android

Usage

The UI is very intuitive, enter the name of a Cocktail drink you would like to search for and enjoy ❤️