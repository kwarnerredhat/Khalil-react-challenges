import React, { useEffect, useState } from 'react';

function ScoreKeeper() {
 
  const [score, setScore] = useState(0);

 
  useEffect(() => {

    console.log(`Score changed: ${score}`);
  }, [score]); 

  return (
    <div>
      <p>Score: {score}</p>
      <button onClick={() => setScore(score + 1)}>Increase</button>
      <button onClick={() => setScore(score - 1)}>Decrease</button>
    </div>
  );
}

export default ScoreKeeper;
