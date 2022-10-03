import React from "react";

class Search extends React.Component {
  state = {
    search: "",
    type: "",
  };

  handlerSearch = (event) => {
    if (event.key === "Enter")
      this.props.searchMovie(this.state.search, this.state.type);
  };
  // handlerType
  render() {
    return (
      <div id="search">
        <div className="input-group mb-2 shadow-lg">
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            value={this.state.search}
            onChange={(e) => this.setState({ search: e.target.value })}
            onKeyDown={this.handlerSearch}
          />
        </div>

        <form
          className=" d-flex justify-content-center"
          role="group"
          aria-label="Basic checkbox toggle button group"
        >
          <input
            type="radio"
            className="btn-check"
            id="all"
            defaultChecked
            name="type"
            value=""
            onClick={(e) => this.setState({ type: e.target.value })}
          />
          <label className="btn btn-outline-primary" htmlFor="all">
            All
          </label>

          <input
            type="radio"
            className="btn-check"
            name="type"
            id="movie"
            value="movie"
            onClick={(e) => this.setState({ type: e.target.value })}
          />
          <label className="btn btn-outline-primary" htmlFor="movie">
            Movie
          </label>

          <input
            type="radio"
            className="btn-check"
            id="series"
            name="type"
            value="series"
            onClick={(e) => this.setState({ type: e.target.value })}
          />
          <label className="btn btn-outline-primary" htmlFor="series">
            Series
          </label>
        </form>
      </div>
    );
  }
}

export { Search };
