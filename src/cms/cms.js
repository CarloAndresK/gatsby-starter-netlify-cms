import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import VideoPostPreview from './preview-templates/VideoPostPreview'
import TextPostPreview from './preview-templates/TextPostPreview'
import DocumentPostPreview from './preview-templates/DocumentPostPreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('video', VideoPostPreview)
CMS.registerPreviewTemplate('text', TextPostPreview)
CMS.registerPreviewTemplate('document', DocumentPostPreview)