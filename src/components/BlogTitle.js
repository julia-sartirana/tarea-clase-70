// BlogTitle
// Crear un componente BlogTitle que renderice un componente h1 y que pueda contener texto dentro suyo

import React from "react";

const BlogTitle = ({ children }) => {
  return <h1>{children}</h1>;
};

export default BlogTitle;