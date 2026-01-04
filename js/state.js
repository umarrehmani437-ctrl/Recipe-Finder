const state = {
    recipes: [],
    favorites: JSON.parse(localStorage.getItem("favorites")) || [],
    loading: false,
    error: ""
};
