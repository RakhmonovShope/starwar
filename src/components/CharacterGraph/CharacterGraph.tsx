import React, { useEffect, useState } from 'react';
import ReactFlow, { Background, Controls, Edge, Node } from 'reactflow';
import * as FilmsHooks from '../../modules/film/hooks';
import * as StarshipsHooks from '../../modules/starship/hooks';
import { IEntity } from '../../modules/character/types'; // Assuming IEntity defines your data types

import classes from './CharacterGraph.module.scss';

interface IProps {
  character: IEntity.Person;
}

const CharacterGraph: React.FC<IProps> = ({ character }) => {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);

  const filmsData = FilmsHooks.useList({
    params: {
      ids: character.films,
    },
  });

  const starshipsData = StarshipsHooks.useList();

  useEffect(() => {
    const newNodes: Node[] = [];
    const newEdges: Edge[] = [];

    newNodes.push({
      id: `character-${character.id}`,
      type: 'default',
      data: { label: character.name },
      position: { x: 300, y: 50 },
      style: {
        border: '2px solid #007BFF',
        padding: '10px',
        borderRadius: '8px',
      },
    });

    filmsData.items.forEach((film, index) => {
      const filmNodeId = `film-${film.url}`;
      newNodes.push({
        id: filmNodeId,
        type: 'default',
        data: { label: film.title },
        position: { x: 100, y: 150 + index * 100 },
        style: {
          border: '2px solid #FFD700',
          padding: '10px',
          borderRadius: '8px',
        },
      });

      newEdges.push({
        id: `edge-character-${character.id}-film-${film.episodeId}`,
        source: `character-${character.id}`,
        target: filmNodeId,
        type: 'smoothstep',
        animated: true,
      });
    });

    starshipsData.items.forEach((starship, index) => {
      const starshipNodeId = `starship-${starship.url}`;
      newNodes.push({
        id: starshipNodeId,
        type: 'default',
        data: { label: starship.name },
        position: { x: 500, y: 150 + index * 100 },
        style: {
          border: '2px solid #FF4500',
          padding: '10px',
          borderRadius: '8px',
        },
      });

      newEdges.push({
        id: `edge-character-${character.id}-starship-${starship.cargoCapacity}`,
        source: `character-${character.id}`,
        target: starshipNodeId,
        type: 'smoothstep',
        animated: true,
      });
    });

    setNodes(newNodes);
    setEdges(newEdges);
  }, [character, filmsData.items, starshipsData.items]);

  return (
    <div className={classes.wrapper}>
      <ReactFlow nodes={nodes} edges={edges}>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default CharacterGraph;
