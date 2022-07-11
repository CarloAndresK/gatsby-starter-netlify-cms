import React from 'react'
import PropTypes from 'prop-types'
import { VideoPostTemplate } from '../../templates/video-post'

const VideoPostPreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS()
  console.log(data)
  return (
    <VideoPostTemplate data={data}
    />
  )
}

VideoPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  })
}

export default VideoPostPreview
