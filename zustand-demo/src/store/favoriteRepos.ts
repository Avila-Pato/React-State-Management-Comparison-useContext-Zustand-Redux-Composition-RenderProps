import { create } from "zustand";
import { persist } from "zustand/middleware";

type FavoriteReposState = {
  favoritesReposIds: number[];
  addFavoriteRepo: (id: number) => void;
  removeFavoriteRepo: (id: number) => void;
};


export const useFavoriteReposStore = create<FavoriteReposState>()(
  persist(
    (set) => ({
      favoritesReposIds: [],
      addFavoriteRepo: (id: number) => {
        set((state) => ({
          favoritesReposIds: [...state.favoritesReposIds, id],
        }));
      },
      removeFavoriteRepo: (id: number) => {
        set((state) => ({
          favoritesReposIds: state.favoritesReposIds.filter(
            (repoId) => repoId !== id
          ),
        }));
      },
    }),
    {
      name: 'favorite-repos',
    }
  )
);
