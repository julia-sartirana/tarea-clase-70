// BlogArticle
// Crear un componente BlogArticle que renderice un componente main y que pueda contener componente dentro suyo

import React from "react";

const BlogArticle = ({ children }) => {
  return <main>{children}</main>;
};

export default BlogArticle;