import React from 'react';
import BoardContainer from '../BoardContainer';
import Auth from '../auth';

export default function Home({ authed, name }) {
  const loadComponent = () => {
    let component = '';
    if (authed) {
      component = <BoardContainer />;
    } else {
      component = <Auth />;
    }
    return component;
  };

  return (
        <div>
            <h1>Home Page: {name}</h1>
            {loadComponent()}
        </div>
  );
}
