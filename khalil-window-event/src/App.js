import React, { useEffect, useState } from 'react';

function DoubleClickAlert() {
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const handleDoubleClick = () => {
      alert('Double-click detected!');
    };

    if (isActive) {
      window.addEventListener('dblclick', handleDoubleClick);
    }

    return () => {
      window.removeEventListener('dblclick', handleDoubleClick);
    };
  }, [isActive]);

  const KhalilComponent = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <button onClick={KhalilComponent}>Toggle Component</button>
      
    </div>
  );
}

export default DoubleClickAlert;

