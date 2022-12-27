import { Outlet } from 'react-router-dom';
import React from 'react';

const SharedLayout = () => {
  return (
    <>
      <div className="">
        <Outlet />
      </div>
    </>
  );
};
export default SharedLayout;
