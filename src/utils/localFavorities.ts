const toggleFavorite = (id: number) => {
  let favorities: number[] = JSON.parse(localStorage.getItem("favo") || "[]");

  if (favorities.includes(id)) {
    favorities = favorities.filter((pokeId) => pokeId !== id);
  } else {
    favorities.push(id);
  }
  localStorage.setItem("favo", JSON.stringify(favorities));
};

const existFavorities = (id: number): boolean => {
  const favorities: number[] = JSON.parse(localStorage.getItem("favo") || "[]");

  return favorities.includes(id);
};

const pokemons = (): number[] => {
  return JSON.parse(localStorage.getItem("favo") || "[]");
};

export { toggleFavorite, existFavorities, pokemons };
