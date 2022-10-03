function Movie(props) {
  const {
    Title: title,
    Year: year,
    imdbID: id,
    Type: type,
    Poster: poster,
  } = props;
  return (
    <div id={id} className="card">
      {poster === "N/A" ? (
        <img
          alt=""
          src="https://e7.pngegg.com/pngimages/829/733/png-clipart-logo-brand-product-trademark-font-not-found-logo-brand.png"
          className="card-img-top"
        />
      ) : (
        <img src={poster} className="card-img-top" alt={title} />
      )}
      <div className="card-body ">
        <span className="card-text">{title}</span>
        <p>{year}</p>
        <p>{type}</p>
      </div>
    </div>
  );
}

export { Movie };
