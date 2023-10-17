/**
 * Since this Component is only use once in the main component, there's no need to pass props.
 * And the data inside this component are just static.
 **/

import keyConceptsImage from "../assets/images/key-concepts.png";

const Header = () => {
  return (
    <header>
      <img src={keyConceptsImage} alt="Medal badge with a star" />
      <h1>Key React Concepts</h1>
      <p>Selected key React concepts you should know about</p>
    </header>
  );
};

export default Header;