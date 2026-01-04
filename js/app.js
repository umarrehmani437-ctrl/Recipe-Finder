const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", search);
searchInput.addEventListener("keydown", e => {
    if (e.key === "Enter") search();
});

async function search() {
    const query = searchInput.value.trim();
    if (!query) {
        showMessage("Please enter a recipe name");
        return;
    }

    showMessage("Loading...");
    state.loading = true;

    try {
        const meals = await fetchRecipesFromAPI(query);

        if (!meals) {
            showMessage("No recipes found");
            state.recipes = [];
            renderRecipes();
            return;
        }

        state.recipes = meals;
        showMessage("");
        renderRecipes();
    } catch (error) {
        showMessage("Something went wrong");
    } finally {
        state.loading = false;
    }
}
