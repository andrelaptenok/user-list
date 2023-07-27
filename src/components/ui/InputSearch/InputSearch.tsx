import React from 'react';

import styles from './InputSearch.module.scss';

interface Props {
  value: string;
  name: string;
  placeholder: string;
  onClick: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputSearch = ({ value, name, placeholder, onChange }: Props) => {
  return (
    <input
      type="text"
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      className={styles.input}
    />
  );
};
