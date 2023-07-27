import { FC } from 'react';

import { Info } from 'helpers/templateUserDetails';

import styles from './UserDetails.module.scss';

interface Props {
  title: string;
  userDetails: Info[];
}

export const UserDetails: FC<Props> = ({ title, userDetails }) => {
  return (
    <>
      <h3 className={styles.details__header}>{title}:</h3>
      <ul className={styles.details__list}>
        {userDetails?.map(({ name, title }) => (
          <li key={name}>
            {name}: <span>{title}</span>
          </li>
        ))}
      </ul>
    </>
  );
};
