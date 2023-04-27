import { Layout } from "@/components/layouts";
import { FavoritePokemons } from "@/components/pokemon";
import { NoFavorities } from "@/components/ui";
import { pokemons } from "@/utils";
import { useEffect, useState } from "react";

export default function FavoritiesPage() {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(pokemons());
  }, []);

  return (
    <Layout title="Pokemons Favoritos">
      {favoritePokemons.length === 0 ? (
        <NoFavorities />
      ) : (
        <FavoritePokemons favoritePokemons={favoritePokemons} />
      )}
    </Layout>
  );
}
