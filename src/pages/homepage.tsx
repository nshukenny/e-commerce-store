import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectMyData } from '../store/sampleFeature/selectors';
import { getMyData } from '../store/sampleFeature/slice';
import type { AppDispatch } from '../store/store';

const HomePage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const myData = useSelector(selectMyData);

  useEffect(() => {
    dispatch(getMyData());
  }, [dispatch]);

  return (
    <div className="flex flex-col items-center gap-4 p-3">

      <div className="flex items-center gap-1 font-bold text-center text-lg">
        <svg
          style={{ width: '60px', height: '60px' }}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
        HomePage
      </div>

      <div>
        {myData.map((item) => (
          <p key={item.id}>
            {item.name} {item.id}
          </p>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
