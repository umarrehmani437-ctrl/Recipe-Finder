const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

async function fetchRecipesFromAPI(query) {
    const response = await fetch(API_URL + query);
    const data = await response.json();
    return data.meals;
}
