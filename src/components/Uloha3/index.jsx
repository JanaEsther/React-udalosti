import kvetinaUrl from './kvetina.svg';
import listUrl from './list.svg';
import slunceUrl from './slunce.svg';
import vlockaUrl from './vlocka.svg';
import './index3.css';

/*
Zadání: Doplňte komponentu tak, aby každé tlačítko po kliknutí vypsalo, jakou volbu uživatel
  vybral. Například pro poslední `console.log('Uživatel zvolil zimu')`.
*/

export const Uloha3 = () => {
  const handleClickJaro = () => {
    alert('Uživatel zvolil jaro.');
  };
  const handleClickLeto = () => {
    alert('Uživatel zvolil léto.');
  };
  const handleClickPodzim = () => {
    alert('Uživatel zvolil podzim.');
  };
  const handleClickZima = () => {
    alert('Uživatel zvolil zimu.');
  };
  return (
    <>
      Které roční období je ve střední Evropě nejteplejší?
      <ol>
        <li>
          <button className="buttonJaro" onClick={handleClickJaro}>
            <img src={kvetinaUrl} width={16} height={16} alt="květina" />
            jaro (březen až květen)
          </button>
        </li>
        <li>
          <button className="buttonLeto" onClick={handleClickLeto}>
            <img src={slunceUrl} width={16} height={16} alt="slunce" />
            léto (červen až srpen)
          </button>
        </li>
        <li>
          <button className="buttonPodzim" onClick={handleClickPodzim}>
            <img src={listUrl} width={16} height={16} alt="list" />
            podzim (září až listopad)
          </button>
        </li>
        <li>
          <button className="buttonZima" onClick={handleClickZima}>
            <img src={vlockaUrl} width={16} height={16} alt="vločka" />
            zima (prosinec až únor)
          </button>
        </li>
      </ol>
    </>
  );
};
