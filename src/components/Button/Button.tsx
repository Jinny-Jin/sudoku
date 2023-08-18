import { FC } from 'react';
import './Button.scss';

interface Props {
  children?: string;
  action?: () => void;
  buttonStyle?: string;
}

const Button: FC<Props> = ({ children, action, buttonStyle }) => {
  return (
    <button onClick={action} className={buttonStyle}>
      {children}
    </button>
  );
};

export default Button;
