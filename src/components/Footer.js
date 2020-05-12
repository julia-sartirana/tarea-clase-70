// Footer
// Crear un componente Footer que renderice un componente footer y que pueda contener componente dentro suyo

import React from "react";

const Footer = ({ children }) => {
  return <footer>{children}</footer>;
};

export default Footer;