import React from 'react'

const PhotoPage = async ({params} : {params : Promise<{id: string}>}) => {
    const id = (await params).id;
  return (
    <div className='card'>{id}</div>
  )
}

export default PhotoPage