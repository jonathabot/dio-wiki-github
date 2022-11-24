import React from 'react';

import { InputContainer } from './styles';

function Input({ value, onChange }) {
  return (
    <InputContainer>
      <input
        value={value}
        onChange={onChange}
        placeholder="Digite aqui o link do repositorio de interesse. Exemplo: jonathabot/jonathabot"
      />
    </InputContainer>
  );
}

export default Input;
