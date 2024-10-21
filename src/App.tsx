import { useState } from 'react';
import { useList } from './modules/character/hooks';
import Pagination from './components/Pagination';
import Character from './components/Character';
import CharacterGraph from './components/CharacterGraph';
import classes from './App.module.scss';
import * as CharacterModule from './modules/character';

function App() {
  const [page, setPage] = useState(1);
  const [characterId, setCharacterId] = useState<number>(0);

  const { items, meta } = useList({
    params: {
      page,
    },
  });

  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <div className={classes.headerTitle}>Star</div>
        <div className={classes.headerTitle}>Wars</div>
      </div>
      <Pagination
        onChange={(page) => setPage(page)}
        current={page}
        total={meta.totalPages}
      />
      <div className={classes.people}>
        {items.map((item) => (
          <Character
            key={`character-${item.id}`}
            {...item}
            onSelect={(item) => setCharacterId(item)}
          />
        ))}
      </div>

      {!!characterId && (
        <CharacterGraph
          character={
            items.find((item) => item.id === characterId) ||
            CharacterModule.Mappers.Person()
          }
        />
      )}
    </div>
  );
}

export default App;
