import './style.css';

const PageNotFound = () => {

  return (
    <div className='image-position'>
      <div className='error-padding'>
        <div className="Header-24-bold error-404-text">
          Error 404
        </div>
        <div className="Header-R-16 page-not-found-text centered-self">
          Page Not Found
        </div>
      </div>

      <div className='go-to-home'>
        <div className="Header-R-14">
          Go Back For 
        </div>
        <a className="Header-R-14 home-padding">
          Home Page
        </a>
      </div>
    </div>
  );
};

export default PageNotFound;
