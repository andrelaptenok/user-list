import React from 'react';
import cn from 'classnames';

import styles from './Button.module.scss';

export type Color = 'green' | 'white';

interface Props {
  color?: Color;
  type?: 'button' | 'submit' | 'reset';
  size?: 'small' | 'medium';
  className?: string;
  onClick?: () => void;
  width?: string;
  border?: 'white' | 'green' | 'grey' | null;
  children?: React.ReactNode;
}

export const Button: React.FC<Props> = ({
  children,
  className,
  onClick,
  size = 'default',
  color = 'green',
  type = 'button',
  width = '100%',
  border = null,
}) => {
  const allProps = {
    type,
    style: { ['--maxWidth' as string]: width },
    className: cn(
      styles.button,
      styles[`button__${color}`],
      styles[`button__${size}`],
      border && cn(styles.button__border, styles[`button__border__${border}`]),
      className,
    ),
  };
  return (
    <button type={type} {...allProps} onClick={onClick}>
      {children}
    </button>
  );
};
