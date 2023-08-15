import React from 'react';
import { useNavigate } from 'react-router-dom';

function StartPage() {
  const navigate = useNavigate();
  const goToGame: () => void = () => {
    navigate('/game');
  };

  return (
    <>
      <h1>This is Starting Page</h1>
      <ul>
        <li>hi</li>
        <li>My Name is Lee</li>
        <li>I'm 27 years old</li>
      </ul>
      <input type='button' value='Start Game!' onClick={goToGame} />
    </>
  );
}

export default StartPage;
