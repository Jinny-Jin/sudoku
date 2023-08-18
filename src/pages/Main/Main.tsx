import Button from '../../components/Button/Button';
import './Main.scss';

const StartPage = () => {
  return (
    <div className="container">
      <header>Doki Doki Sudoku</header>
      <div className="button">
        <Button children="Start" buttonStyle="medium white" />
      </div>
    </div>
  );
};

export default StartPage;
