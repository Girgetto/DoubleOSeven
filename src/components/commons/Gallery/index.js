import React from 'react'
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'

import { Gallery } from 'react-photoswipe-gallery'
import MyItem from './Item'
import photos from '../../../assets/img/gallery'

const MyGallery = () => (
  <Gallery>
    {photos.map((photo, index) => (
      <MyItem src={photo} key={index} />
    ))}
  </Gallery>
)

export default MyGallery
