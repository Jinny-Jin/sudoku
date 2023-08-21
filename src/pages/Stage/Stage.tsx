import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRotateRight as arrow } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan as trash } from '@fortawesome/free-regular-svg-icons';
import './Stage.scss';

function Stage() {
  const navigate = useNavigate();

  const backToMain = () => {
    navigate('/');
  };

  return (
    <div className="stageContainer">
      <div>
        <header>Stage1</header>
        <div className="life">life</div>
      </div>
      <main>스도쿠 문제</main>
      <div className="buttons">
        <div>
          <Button
            children={<FontAwesomeIcon icon={arrow} size="lg" />}
            children2="실행 취소"
            buttonStyle="small"
          />
          <Button
            children={<FontAwesomeIcon icon={trash} size="lg" />}
            children2="삭제"
            buttonStyle="small"
          />
        </div>
        <div>
          <Button children="제출" buttonStyle="medium blue" />
          <Button
            children="포기"
            action={backToMain}
            buttonStyle="medium white"
          />
        </div>
      </div>
    </div>
  );
}

export default Stage;
