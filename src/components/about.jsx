import "./about.css";
import { useState } from "react";

const About = () => {
  const [visible, setVisible] = useState(false);

  const showEmail = () => {
    setVisible(true);
  };
  const hideEmail = () => {
    setVisible(false);
  };

  const getContent = () => {
    if (visible) {
      return (
        <div>
          <h6> myemail@gmail.com</h6>;
          <button onClick={hideEmail}>Hide Info</button>
        </div>
      );
    } else {
      return (
        <div>
          <p> click the button below</p>
          <button onClick={showEmail}>Show Info</button>
        </div>
      );
    }
  };

  return (
    <div class="about-page">
      <h1>Astrid Batres</h1>
    </div>
  );
};

export default About;
