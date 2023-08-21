import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import './Main.scss';

const StartPage = () => {
  const navigate = useNavigate();

  const goToStage = () => {
    navigate('/stage');
  };

  return (
    <div className="mainContainer">
      <header>Doki Doki Sudoku</header>
      <div className="button">
        <Button
          children="Start"
          action={goToStage}
          buttonStyle="medium white"
        />
      </div>
    </div>
  );
};

export default StartPage;
