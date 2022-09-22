import './index.scss';

import { useEffect, useReducer, useRef, useState } from 'react';

const Landing = () => {
  const logo = require('../../assets/images/logo-big.jpeg');
  const [foodImg, setFoodImg] = useState<number>(1);
  const foodImgRef = useRef<number>(1);
  // const [foodImgs, _setFoodImgs] = useState<string[]>([
  //   'food-1.jpeg', 'food-2.jpeg', 'food-3.jpeg', 'food-4.jpeg',
  //   'food-5.jpeg', 'food-6.jpeg', 'food-7.jpeg', 'food-8.jpeg',
  //   'food-9.jpeg', 'food-10.jpeg', 'food-11.jpeg', 'food-12.jpeg',
  //   'food-13.jpeg', 'food-14.jpeg', 'food-15.jpeg', 'food-16.jpeg',
  //   'food-17.jpeg', 'food-18.jpeg', 'food-19.jpeg',
  // ]);
  const [_, forceUpdate] = useReducer(x => x + 1, 0);

  useEffect(() => {
    const interval = setInterval(() => {
      let n = foodImgRef.current + 1;
      // if food img > 19 then set to 1
      if (n > 19) {
        n = 1;
      }
      console.log('foodImg', n);
      foodImgRef.current = n;
      setFoodImg(n);
      forceUpdate();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="landing">
      <div className='landing-header'>
        <div className='logo-cnt'>
          <img className='logo' src={logo} alt="logo" />
        </div>
        <span className='header-title-text'>BARBIE TASTES</span>
      </div>
      <div className='first-lay'>
        <div className='left-lay'>
          <span className='left-lay-text'>Opening:</span>
          <span className='left-lay-text'>Tuesday - Sunday</span>
        </div>
        <div className='right-lay'>
          <img className='food-img'
            src={require(`../../assets/images/food-${foodImg}.jpeg`)}
            alt="food" />
        </div>
      </div>
    </div>
  );
}

export default Landing;