import React from "react";
import BlogArticle from "components/BlogArticle";
import BlogContent from "components/BlogContent";
import BlogImage from "components/BlogImage";
import BlogTitle from "components/BlogTitle";
import Comments from "components/Comments";
import Footer from "components/Footer";
import Header from "components/Header";
import Nav from "components/NavItem";
import MenuItem from "components/NavMenu";
import UserControl from "components/UserControl";

function App() {
  const comments = [
    {
      user: "Grace Hopper",
      comment: "Genial artículo!",
    },
    {
      user: "Hedy Lamarr",
      comment: "Muy bueno! Gracias por compartir",
    },
  ];

  return (
    <div className="App">
      <Header>
        <Nav>
          <MenuItem path="/home">Home</MenuItem>
          <MenuItem path="/about-us">Sobre mí</MenuItem>
          <MenuItem path="/contact">Artículos</MenuItem>
        </Nav>
        <UserControl user="Ada" />
      </Header>
      <BlogArticle>
        <BlogImage img="imagen.jpg" />
        <BlogTitle>Cómo hacer un proyecto en React</BlogTitle>
        <BlogContent>Lorem ipsum...</BlogContent>
      </BlogArticle>
      <Comments comments={comments}></Comments>
      <Footer>® 2020 - All rights reserved</Footer>
    </div>
  );
}

export default App;
