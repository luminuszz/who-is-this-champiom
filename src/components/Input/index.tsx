import { useField } from '@unform/core';
import React, { InputHTMLAttributes, useEffect, useRef } from 'react';

import { Container } from './styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const Input: React.FC<Props> = ({ name, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { defaultValue, error, fieldName, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      path: 'value',
      ref: inputRef.current,
    });
  }, [registerField, fieldName]);

  return (
    <Container>
      <input type="text" defaultValue={defaultValue} ref={inputRef} {...rest} />
    </Container>
  );
};

export default Input;
