import React from 'react';

import NavigationList from '../atoms/NavigationList';

const Navigation = () => (
  <ul>
    <NavigationList label="HOME" to="/" />
    <NavigationList label="LOGIN" to="/login" />
  </ul>
);
export default Navigation;
