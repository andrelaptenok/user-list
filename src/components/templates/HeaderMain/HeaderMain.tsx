import React, { FC } from 'react';

import { InputSearch } from 'components/ui/InputSearch/InputSearch';
import { Button } from 'components/ui/Button/Button';

import styles from './HeaderMain.module.scss';

interface Props {
  value: string;
  handleFilterChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleResetFilter: () => void;
}

export const HeaderMain: FC<Props> = ({ value, handleFilterChange, handleResetFilter }) => {
  return (
    <div className={styles.header}>
      <InputSearch
        value={value}
        name="search"
        placeholder="search..."
        onClick={handleResetFilter}
        onChange={handleFilterChange}
      />
      <Button
        size="medium"
        color="white"
        border="grey"
        width="100px"
        onClick={handleResetFilter}
        className={styles.header__button}
      >
        Reset
      </Button>
    </div>
  );
};
