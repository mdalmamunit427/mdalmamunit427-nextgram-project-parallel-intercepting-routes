import React from 'react'
import Modal from './modal';

const PhotoModal = async ({params} : {params: Promise<{id: string}>}) => {
    const photoId = (await params).id;

    const imageUrl = `/images/photo${photoId}.avif`
  return (
    <Modal>
      <img src={imageUrl} alt={`Photo ${photoId}`} style={{maxWidth: "100%", maxHeight: "100%", borderRadius: "8px"}}/>
    </Modal>
  )
}

export default PhotoModal