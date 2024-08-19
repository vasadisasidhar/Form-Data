import React,{useState,useEffect} from "react";

const Screensize = () => {

    const [screenSize, setScreenSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    const updateScreenSize = () => {
        setScreenSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    }; 

    useEffect(() => {
        
        window.addEventListener('resize', updateScreenSize);

        return () => {
            window.removeEventListener('resize', updateScreenSize);
        };
    }, []);


  return (
    <div className="container">
      <section className="screenchange">
        <h2>Welcome to React</h2>
        <h1>Screen Size Example</h1>
        <h1>resize the window to see the screen Size:</h1>
        <h3>Width:{screenSize.width}   </h3>
        <h3>Height:{ screenSize.height}</h3> 
     </section>
    </div>
  );
};

export default Screensize;
