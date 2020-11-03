import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

//Selectors
import { selectImages } from '../../redux/images/images.selectors.js';

//Components
import Header from '../../components/header/header.component';
import Gallery from '../../components/gallery/gallery.component';

class ImagesPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Gallery />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  images: selectImages,
});

// const mapDispatchToProps = (dispatch) => ({
//   fetchImages: () => dispatch(fetchImages()),
// });

export default connect(mapStateToProps, null)(ImagesPage);
