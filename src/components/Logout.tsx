import { AuthContext } from '@@@/App';
import React, { useContext, useEffect } from 'react';

const Logout: React.FC<any> = () => {
  const { logOut }: any = useContext(AuthContext);
  useEffect(() => {
    logOut();
  }, []);
  return null;
};

export default Logout;
