// Header
// Crear un componente Header que renderice un elemento header y que pueda contener componente dentro suyo

import React from "react";

const Header = ({ children }) => {
  return <header>{children}</header>;
};

export default Header;