import React from 'react';

import { Icon } from 'components/ui/Icon/Icon';

import styles from './NotFoundSearch.module.scss';

export const NotFoundSearch = () => {
  return (
    <div className={styles.notFound}>
      <Icon name="notFound" />
      <p className={styles.notFound__title}>User not found</p>
    </div>
  );
};
