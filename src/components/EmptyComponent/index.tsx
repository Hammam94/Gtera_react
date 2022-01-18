import { Empty, Button } from 'antd';
import localeTranslator from 'library/Hocs/LocalTranslator';
import { IEmptyComponentProps } from 'types/app/EmptyComponent';

const EmptyComponent = (props:IEmptyComponentProps) => {
  const defaultImage = 'https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg';
  const defaultDescription =   props.translate('empty.description'); 

  return (
    <Empty
      image={props.imagePath || defaultImage}
      imageStyle={{
        height: 200,
      }}
      description={
        <span className="Header-R-16">
          { props.description || defaultDescription}
        </span>
      }
    >
      { props.buttonFunction &&
        <Button
          className="normal-button"
          onClick={props.buttonFunction}
        >
          {props.buttonTitle}
        </Button>
      }
    </Empty>
  );
};

export default localeTranslator(EmptyComponent , 'common');
