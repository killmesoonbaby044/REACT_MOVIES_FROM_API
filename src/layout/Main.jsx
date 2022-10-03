import React from "react";
import { Movies } from "../components/Movies";
import { Search } from "../components/Search";
import { Preloader } from "../components/Preloader";

class Main extends React.Component {
  state = {
    err: null,
    movies: [],
    isLoading: false,
  };
  componentDidMount() {
    fetch("https://www.omdbapi.com/?i=tt3896198&apikey=3f0c378b&s=matrix")
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search }));
  }

  searchMovie = (str, type) => {
    this.setState({ isLoading: true, err: null });
    fetch(
      `https://www.omdbapi.com/?i=tt3896198&apikey=3f0c378b&s=${str}&type=${type}`
    )
      .then((response) => response.json())
      .then((data) => {
        !data.Search
          ? this.setState({ err: true, isLoading: false })
          : this.setState({ movies: data.Search, isLoading: false });
      });
  };

  render() {
    return (
      <main className="main gradient-navbar">
        <Search searchMovie={this.searchMovie} />
        {this.state.err ? (
          <h2 className="content">Oops... Movies Not Found!</h2>
        ) : this.state.isLoading ? (
          <Preloader />
        ) : (
          <Movies movies={this.state.movies} />
        )}
      </main>
    );
  }
}

export { Main };
