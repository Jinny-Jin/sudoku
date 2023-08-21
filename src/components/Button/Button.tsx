import { FC, ReactNode } from 'react';
import './Button.scss';

interface Props {
  children: ReactNode;
  children2?: ReactNode;
  action?: () => void;
  buttonStyle?: string;
}

const Button: FC<Props> = ({ children, children2, action, buttonStyle }) => {
  return (
    <button onClick={action} className={buttonStyle}>
      <div className="forDisplay">
        {children}
        {children2}
      </div>
    </button>
  );
};

export default Button;
