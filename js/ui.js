const results = document.getElementById("results");
const message = document.getElementById("message");

function showMessage(text) {
    message.textContent = text;
}

function renderRecipes() {
    results.innerHTML = "";

    state.recipes.forEach(recipe => {
        const fav = isFavorite(recipe.idMeal);

        const card = document.createElement("div");
        card.className = "bg-white rounded shadow overflow-hidden";

        card.innerHTML = `
      <img src="${recipe.strMealThumb}" class="w-full h-48 object-cover">
      <div class="p-4">
        <h2 class="font-bold text-lg mb-1">${recipe.strMeal}</h2>
        <p class="text-sm text-gray-600 mb-2">${recipe.strCategory}</p>

        <div class="flex justify-between items-center">
          <a href="${recipe.strYoutube}" target="_blank"
            class="text-green-600 font-semibold">
            Watch →
          </a>
          <button class="fav-btn text-xl">
            ${fav ? "❤️" : "🤍"}
          </button>
        </div>
      </div>
    `;

        card.querySelector(".fav-btn").addEventListener("click", () => {
            toggleFavorite(recipe.idMeal);
            renderRecipes();
        });

        results.appendChild(card);
    });
}

function toggleFavorite(id) {
    if (isFavorite(id)) {
        state.favorites = state.favorites.filter(f => f !== id);
    } else {
        state.favorites.push(id);
    }
    saveFavorites();
}
