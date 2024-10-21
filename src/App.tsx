import '@xyflow/react/dist/style.css';
// import { ReactFlow } from '@xyflow/react';
import { useList } from './modules/character/hooks';
import * as CharacterTypes from './modules/character/types';
import classes from './App.module.scss';
import Pagination from './components/Pagination';
import Character from './components/Character';
import { useState } from 'react';

function App() {
  const [selectedCharacter, setSelectedCharacter] =
    useState<CharacterTypes.IEntity.Person | null>(null);
  const [page, setPage] = useState(1);

  const { items, meta } = useList({
    params: {
      page,
    },
  });

  console.log('selectedCharacter', selectedCharacter);
  return (
    <div className={classes.wrapper}>
      {items.map((item) => (
        <Character
          key={`character-${item.id}`}
          character={item}
          onSelect={(item) => setSelectedCharacter(item)}
        />
      ))}

      <Pagination
        onChange={(page) => setPage(page)}
        current={page}
        total={meta.totalPages}
      />
    </div>
  );
}

export default App;
