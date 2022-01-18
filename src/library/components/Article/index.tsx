import './style.css';

const Article = (props: IArticle) => {
  return (
    <div className="article">
      <div className="Header-R-14 title-margin">{props.title}</div>
      <div className="body---14pt-R description-text">{props.description}</div>
    </div>
  )
};

interface IArticle {
  title: string;
  description?: string;
}

export default Article;
