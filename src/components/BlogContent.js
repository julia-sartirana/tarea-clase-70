// BlogContent
// Crear un componente BlogContent que renderice un componente p y que pueda contener texto dentro suyo

import React from "react";

const BlogContent = ({ children }) => {
  return <p>{children}</p>;
};

export default BlogContent;