import { FC } from 'react';

import { Info } from 'helpers/templateUserDetails';

import styles from './UserDetails.module.scss';

interface Props {
  title: string;
  userDetails: Info[];
}

export const UserDetails: FC<Props> = ({ title, userDetails }) => {
  return (
    <div className={styles.details}>
      <h3>{title}:</h3>
      <ul className={styles.details__list}>
        {userDetails?.map(({ name, title }) => (
          <li key={name}>
            <p>
              {name}: <span>{title}</span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
