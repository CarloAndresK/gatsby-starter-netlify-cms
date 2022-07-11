import React from 'react'
import PropTypes from 'prop-types'
import { VideoPostTemplate } from '../../templates/video-post'

const VideoPostPreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  console.log(data)
  return (
    <VideoPostTemplate image={getAsset(data.image)}
    />
  )
}

VideoPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func
}

export default VideoPostPreview
