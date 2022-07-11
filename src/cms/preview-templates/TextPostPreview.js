import React from 'react'
import PropTypes from 'prop-types'
import { TextPostTemplate } from '../../templates/text-post'

const TextPostPreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS()
  console.log(data)
  return (
    <TextPostTemplate data={data}
    />
  )
}

TextPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  })
}

export default TextPostPreview
