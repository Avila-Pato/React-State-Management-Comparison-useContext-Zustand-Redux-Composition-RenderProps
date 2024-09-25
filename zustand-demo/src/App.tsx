
import './App.css';
import React from 'react';

import { useFetchRepositories } from './hooks/useRepos';
import Card from './api/components/Card';
import { useFavoriteReposStore } from './store/favoriteRepos';

function App() {
  // desde aqui se llama al usuario
  const {data, isLoading} = useFetchRepositories('Avila-Pato');
  const {favoritesReposIds} = useFavoriteReposStore();

  if(isLoading) return <div>Cargando...</div>

  return (
    <>
      <div>
        {data?.map((repository) => (
          <Card repository={repository} 
          key={repository.id}
          isFavorite={favoritesReposIds.indexOf(repository.id) !== -1}
          />
        ))}
      </div>
    </>
  );
}

export default App;
