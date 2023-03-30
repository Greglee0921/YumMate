# YumMate

## Description

_YumMate is a recipe application that allows users to search for and save their favorite recipes. The app uses an external API to retrieve recipes and displays them in a user-friendly interface. Users can search for recipes and they can save recipes to their personal collection for future reference._

## Challenges

- **Task:** Implement a button on All Recipes view that fetches more recipes from external API and renders them on the page.
- **Issues:** Button should function in a way that would limit the amount of API calls upon initial render of the page. Further calls should be initiated by the user if desired. Page should scroll down to newly rendered recipes upon button click as well.
- **Solution:** Attach an on click handler function to the button that will change local state of the All Recipes view page. Instate a useEffect react hook that initiates an api fetch function whenever this state is changed. Recipe data from fetch is set in an array of local state and each click of the button will add to this array.

## Future Features

- Filters for recipe search displayed on the All Recipes view
- Adding 'favorite' icon on recipe cards to allow for quick add/delete of favorite recipes
- Select component to change servings information in ingredients (Single Recipe view)
- Related recipes carousel for Single Recipe view
- Nutrional information for each recipe
- Account creation and authentication for users and additional features associated with personal accounts
- Comment wall on Single Recipe view to discuss recipes
- Rating system on Single Recipe view
