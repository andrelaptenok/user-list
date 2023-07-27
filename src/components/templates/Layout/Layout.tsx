import React from 'react';
import { createSlot } from 'react-slotify';
import cn from 'classnames';

import styles from './Layout.module.scss';

interface Layout {
  isModalOpen?: boolean;
  children: React.ReactNode;
}

export const Header = createSlot();
export const Content = createSlot();

export const EmptyHeader = () => {
  return null;
};

export const Layout: React.FC<Layout> = ({ isModalOpen, children }) => {
  return (
    <div className={cn(styles.layout, isModalOpen && styles.layout__modal)}>
      <header className={styles.layout__header}>
        <Header.Renderer childs={children}>
          <EmptyHeader />
        </Header.Renderer>
      </header>
      <main className={styles.layout__main}>
        <Content.Renderer childs={children} />
      </main>
    </div>
  );
};
