// CommentUser
// Crear un componente CommentUser que renderice un componente h3 y que pueda contener texto dentro suyo

import React from "react";

const CommentUser = ({ children }) => {
  return <h3>{children}</h3>;
};

export default CommentUser;