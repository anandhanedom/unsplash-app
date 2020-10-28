import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

//Selectors
import {
  selectImages,
  selectError,
  selectLoading,
} from '../../Redux/images/images.selectors.js';
import { selectSearchBoxValue } from '../../Redux/header/header.selectors.js';

//Actions
import { fetchImages } from '../../Redux/images/images.actions.js';

//Components
import Gallery from '../../Components/Gallery/Gallery.component';
import Header from '../../Components/Header/Header.component';
import Modal from '../../Components/Modal/Modal.component';

//Material UI
import CircularProgress from '@material-ui/core/CircularProgress';

class ImagesPage extends Component {
  componentDidMount() {
    const { fetchImages } = this.props;
    fetchImages();
  }

  render() {
    const { images, searchValue } = this.props;

    const filteredImages = images.filter((img) =>
      img.image_name.toLowerCase().includes(searchValue.toLowerCase())
    );
    return (
      <div>
        <Header />
        {this.props.loading ? (
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
  searchValue: selectSearchBoxValue,
  loading: selectLoading,
  error: selectError,
});

const mapDispatchToProps = (dispatch) => ({
  fetchImages: () => dispatch(fetchImages()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ImagesPage);
