import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import notes from "../notes";
function App() {
  return (
    <div>
      <Header />
      {notes.map((text) => (
        <Note key={text.key} title={text.title} content={text.content} />
      ))}

      <Footer />
    </div>
  );
}

export default App;
