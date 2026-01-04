function saveFavorites() {
    localStorage.setItem("favorites", JSON.stringify(state.favorites));
}

function isFavorite(id) {
    return state.favorites.includes(id);
}
