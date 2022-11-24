import React from 'react';

import { ItemContainer } from './styles';
import { BiTrashAlt } from 'react-icons/bi';
function ItemRepo({ repo, handleRemoveRepo }) {
  const handleRemove = () => {
    handleRemoveRepo(repo.id);
  };
  return (
    <ItemContainer onClick={handleRemove}>
      <h3>{repo.name}</h3>
      <p className="repoFullName">{repo.full_name}</p>
      <p className="repoDescription">{repo.description}</p>
      <div className="clickButtons">
        <a
          href={repo.html_url}
          rel="noreferrer"
          target="_blank"
          id="verRepositorio"
        >
          Ver repositório
        </a>
        <br />
        <BiTrashAlt rel="noreferrer" id="remover" size={30}></BiTrashAlt>
      </div>
      <hr />
    </ItemContainer>
  );
}

export default ItemRepo;
