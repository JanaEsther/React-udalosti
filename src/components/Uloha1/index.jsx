/*
Zadání: Po kliku na tlačítko zobrazte alert s textem „Ahoj“.
*/
import './index.css';

export const Uloha1 = () => {
  const handleClick = () => {
    alert('Ahoj!');
  };
  return (
    <button className="greet" onClick={handleClick}>
      Ukaž bublinu
    </button>
  );
};
