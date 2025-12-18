import { useEffect, useState } from "react";

const Welcome = ({ handleNav }) => {

  const imageAr = [
    "/Image Rotator Images/Home1.jpg",
    "/Image Rotator Images/Home2.jpeg",
    "/Image Rotator Images/Home3.jpg",
    "/Image Rotator Images/Home4.jpg",
    "/Image Rotator Images/Home5.jpg",
    "/Image Rotator Images/Home6.jpeg",
    "/Image Rotator Images/Home7.jpeg",
    "/Image Rotator Images/Home8.jpg",
    "/Image Rotator Images/Home9.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const chgImage = () => {
    let nextIndex = currentIndex + 1;
    if (nextIndex >= imageAr.length) {
      nextIndex = 0;
    }
    setCurrentIndex(nextIndex);
  };

  useEffect(() => {
    const timer = setInterval(chgImage, 2000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
   <>
    <section className="welcome">
      <div className="carousel-container">
      <img
        src={imageAr[currentIndex]}
        alt="Image representation of Cantor College"
        id="myImages"
        onClick={chgImage}
      />

         <div className="carousel-text">
            <h1>Cantor College</h1>
            <p><i>Computing • Design • Networking</i></p>
         </div>
      </div>
    </section>

    <section className="home-about">
        <h2>Welcome to Cantor College</h2>
        <p>
          Cantor College was established in 1989 to specialise in Computing and Design.
          At Cantor College, we want to give students the education they need to achieve their career aims, leaving them equipped with the knowledge, skills and experience to succeed.
        </p>
           <button
              className="btn-primary"
              onClick={(e) => handleNav(e, 'about us')}
           >
              Read more about us
           </button>
      </section>
      </>


  );
};

export default Welcome;

//--<div> <h2>{props.msg}</h2> </div>--//