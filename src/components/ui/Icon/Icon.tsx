import React from 'react';
import cn from 'classnames';

import styles from './Icon.module.scss';

type IconName = 'notFound' | 'close';

interface Props {
  name: IconName;
  cursor?: 'default' | 'pointer';
  className?: string;
  onClick?: React.MouseEventHandler;
}

export const Icon: React.FC<Props> = ({ name, onClick, className, cursor = 'default' }) => {
  return (
    <img
      src={`/svg/${name}.svg`}
      alt={name}
      className={cn(styles.icon, styles[`icon-cursor__${cursor}`], className)}
      onClick={onClick}
    />
  );
};
