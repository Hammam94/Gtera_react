import { Typography } from 'antd';

import { IStepTitle } from 'types/app/Steps';

import './style.css';

const { Text } = Typography;

const StepTitle = (props: IStepTitle) => {
  const currentColor = props.isSelected ? 'selected-color' : 'unselected-color';
  
  return (
    <div className={`tab-title ${currentColor}`}>
      {props.icon}
      <Text className={`body---14pt-R tab-title-text ${currentColor}`}>
        {props.title}
      </Text>
    </div>
  );
};

export default StepTitle;
