const Image = ({ author, url }) => {
    return (
      <div>
        <h2>{author}</h2>
        <img src={url} alt={`random grab from author ${author}`} />
      </div>
    );
  };
  
  export default Image;