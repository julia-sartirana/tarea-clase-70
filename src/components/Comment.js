// Comment
// Crear un componente Comment que renderice un componente article y que pueda contener componentes dentro suyo

import React from "react";

const Comment = ({ children }) => {
  return <article>{children}</article>;
};

export default Comment;