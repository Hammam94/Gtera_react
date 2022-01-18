import { FC } from 'react';
import './style.css';

const ToasterMark = (props: toasterMarkProps) => {
  const { ToasterIcon } = props;
  return (
    <>
      <div className="ellipse">
        <ToasterIcon/>
      </div>
    </>
  );
};

interface toasterMarkProps {
  ToasterIcon: FC
}

export default ToasterMark;