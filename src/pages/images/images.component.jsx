import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

//Selectors
import {
  selectImages,
  selectSearchValue,
} from '../../redux/images/images.selectors.js';

//Components
import Header from '../../components/header/header.component';
import Gallery from '../../components/gallery/gallery.component';
import Modal from '../../components/modal/Modal.component';

class ImagesPage extends Component {
  render() {
    console.log('images page');
    const { images } = this.props;

    const filteredImages = images.filter((img) => {
      const regex = new RegExp(`${this.props.searchValue}`, 'gi');
      return img.image_name.match(regex);
    });

    return (
      <div>
        <Header />
        <Gallery images={filteredImages} />
        <Modal />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  images: selectImages,
  searchValue: selectSearchValue,
});

// const mapDispatchToProps = (dispatch) => ({
//   fetchImages: () => dispatch(fetchImages()),
// });

export default connect(mapStateToProps, null)(ImagesPage);
