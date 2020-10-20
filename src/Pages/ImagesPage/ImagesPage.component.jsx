import React, { Component } from 'react';

//Components
import Gallery from '../../Components/Gallery/Gallery.component';
import Header from '../../Components/Header/Header.component';

class ImagesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
    };
  }

  fetchImages = () => {
    var url = 'http://localhost:3000/images';

    fetch(url)
      .then((res) => res.json())
      .then((images) => this.setState({ images: images }));
  };

  componentDidMount = () => {
    this.fetchImages();
  };

  render() {
    return (
      <div>
        <Header />
        <Gallery images={this.state.images} />
      </div>
    );
  }
}

export default ImagesPage;
