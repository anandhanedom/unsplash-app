import { ImagesActionTypes } from './images.types';

const INITIAL_STATE = {
  images: [
    {
      id: 1,
      label: 'label9',
      image_name: 'United Arab Emirates',
      url:
        'https://images.unsplash.com/photo-1603783033071-551d35a9a29f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
      author: 'Eve',
    },
    {
      id: 2,
      label: 'label2',
      image_name: 'Nepal trek',
      url:
        'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1055&q=80  ',
      author: 'Hannah',
    },
    {
      id: 3,
      label: 'label8',
      image_name: 'Vintage camera',
      url:
        'https://images.unsplash.com/photo-1603032034989-908052b687f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      author: 'Brad',
    },
  ],
};

const imagesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default imagesReducer;