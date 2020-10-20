import React, { Component } from 'react';

//Components
import Gallery from '../../components/Gallery/Gallery.component';

class ImagePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
    };
  }

  fetchFromAPI = () => {
    var url = 'https://picsum.photos/v2/list?page=10&limit=10';

    fetch(url)
      .then((res) => res.json())
      .then((images) => this.setState({ images: images }));
  };

  componentDidMount() {
    this.fetchFromAPI();
  }

  render() {
    return <Gallery images={this.state.images} />;
  }
}

export default ImagePage;
