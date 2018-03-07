import React, { Component } from "react";
import TitleList from "./Components/TitleList";
import Logo from "./Logo";
import "./App.css";

const Navigation = () => {
  return (
    <div id="navigation" className="Navigation">
      <nav>
        <ul>
          <li>Browse</li>
          <li>My list</li>
          <li>Top picks</li>
          <li>Recent</li>
        </ul>
      </nav>
    </div>
  );
};

const UserProfile = () => {
  return (
    <div className="UserProfile">
      <div className="User">
        <div className="name">Jack Oliver</div>
        <div className="image">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/profile/profile-512_1.jpg"
            alt="profile"
          />
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <div
      id="hero"
      className="Hero"
      style={{
        backgroundImage: "url(https://images.alphacoders.com/633/633643.jpg)"
      }}
    >
      <div className="content">
        <img
          className="logo"
          src="http://www.returndates.com/backgrounds/narcos.logo.png"
          alt="narcos background"
        />
        <h2>Season 2 now available</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
          id quam sapiente unde voluptatum alias vero debitis, magnam quis quod.
        </p>
        <div className="button-wrapper">
          <HeroButton primary={true} text="Watch now" />
          <HeroButton primary={false} text="+ My list" />
        </div>
      </div>
      <div className="overlay" />
    </div>
  );
};

const HeroButton = ( props ) => {
  return (
    <button href="#" className="Button" data-primary={props.primary}>
      {props.text}
    </button>
  );
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: "",
      searchUrl: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  onKeyUp(e) {
    if (e.key === "Enter" && this.state.searchTerm !== "") {
      var searchUrl =
        "search/multi?query=" +
        this.state.searchTerm +
        "&api_key=" +
        this.apiKey;
      this.setState({ searchUrl: searchUrl });
    }
  }

  handleChange(e) {
    this.setState({
      searchTerm: e.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <div>
          <header className="Header">
            <Logo />
            <Navigation />
            <div id="search" className="Search">
              <input
                onKeyUp={this.handleKeyUp}
                onChange={this.handleChange}
                type="search"
                placeholder="Search for a title..."
                value={this.state.searchTerm}
              />
            </div>
            <UserProfile />
          </header>
          <Hero />
          <TitleList title="Search Results" url={this.state.searchUrl} />
          <TitleList
            title="Top TV picks for Jack"
            url="discover/tv?sort_by=popularity.desc&page=1"
          />
          <TitleList
            title="Trending now"
            url="discover/movie?sort_by=popularity.desc&page=1"
          />
          <TitleList
            title="Most watched in Horror"
            url="genre/27/movies?sort_by=popularity.desc&page=1"
          />
          <TitleList
            title="Sci-Fi greats"
            url="genre/878/movies?sort_by=popularity.desc&page=1"
          />
          <TitleList
            title="Comedy magic"
            url="genre/35/movies?sort_by=popularity.desc&page=1"
          />
        </div>
      </div>
    );
  }
}

export default App;
