import React from "react";

let date = new Date();
let currentYear = date.getFullYear();
function Footer() {
  return <footer>Copyright Ⓒ{currentYear}</footer>;
}

export default Footer;
