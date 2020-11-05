import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

//Selectors
import {
  selectImages,
  selectSearchValue,
  selectLoading,
} from '../../redux/images/images.selectors.js';

//Actions
import { fetchImages } from '../../redux/images/images.actions.js';

//Components
import Header from '../../components/header/header.component';
import Gallery from '../../components/gallery/gallery.component';
import Modal from '../../components/modal/Modal.component';

//Material UI
import CircularProgress from '@material-ui/core/CircularProgress';

class ImagesPage extends Component {
  componentDidMount() {
    this.props.fetchImages();
  }

  render() {
    console.log('images page');
    const { images, isLoading } = this.props;

    const filteredImages = images.filter((img) => {
      const regex = new RegExp(`${this.props.searchValue}`, 'gi');
      return img.image_name.match(regex);
    });

    return (
      <div>
        <Header />
        {isLoading ? (
          <CircularProgress style={{ marginTop: '100px' }} disableShrink />
        ) : (
          <Gallery images={filteredImages} />
        )}
        <Modal />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  images: selectImages,
  searchValue: selectSearchValue,
  isLoading: selectLoading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchImages: () => dispatch(fetchImages()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ImagesPage);
