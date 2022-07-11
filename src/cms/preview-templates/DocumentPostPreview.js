import React from 'react'
import PropTypes from 'prop-types'
import { DocumentPostTemplate } from '../../templates/document-post'

const DocumentPostPreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS()
  console.log(data)
  return (
    <DocumentPostTemplate data={data}
    />
  )
}

DocumentPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  })
}

export default DocumentPostPreview
