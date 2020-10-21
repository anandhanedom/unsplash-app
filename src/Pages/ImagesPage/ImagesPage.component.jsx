import React, { Component } from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

//Selectors
import { selectImages } from '../../Redux/images/images.selectors.js';

//Actions
import { setImages } from '../../Redux/images/images.actions.js';

//Components
import Gallery from '../../Components/Gallery/Gallery.component';
import Header from '../../Components/Header/Header.component';

class ImagesPage extends Component {
  fetchImages = () => {
    const { setImages } = this.props;

    var url = 'http://localhost:3000/images';

    fetch(url)
      .then((res) => res.json())
      .then((images) => setImages(images));
  };

  componentDidMount = () => {
    this.fetchImages();
  };

  render() {
    const { images } = this.props;
    return (
      <div>
        <Header />
        <Gallery images={images} />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  images: selectImages,
});

const mapDispatchToProps = (dispatch) => ({
  setImages: (images) => dispatch(setImages(images)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ImagesPage);
