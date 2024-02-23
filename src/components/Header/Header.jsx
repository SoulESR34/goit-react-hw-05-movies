import React, {Suspense} from 'react';
import { HeaderContainer, LinkTo } from './Header.styled';
import { Outlet } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <LinkTo to="/">HOME</LinkTo>

        <LinkTo to="/movies">MOVIES</LinkTo>
      </HeaderContainer>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet/>
      </Suspense>
    </>
  );
};

export default Header;