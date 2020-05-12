// CommentContent
// Crear un componente CommentContent que renderice un componente p y que pueda contener texto dentro suyo

import React from "react";

const CommentContent = ({ children }) => {
  return <p>{children}</p>;
};

export default CommentContent;