import React from 'react';
import Typed from 'typed.js';

function TypingAnimation() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Web Developer', 'Web3 Developer','Competitive Programmer', 'Machine Learning Developer'],
      typeSpeed: 70,
      loop: true, // Set loop option to true for continuous animation
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="App">
      <span ref={el} />
    </div>
  );
}

export default TypingAnimation;
