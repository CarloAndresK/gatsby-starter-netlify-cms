import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

// eslint-disable-next-line
export const DocumentPostTemplate = ({
  data
}) => {
  console.log('DocumentPostTemplate', data);
  data = data.frontmatter || data
  
  const cost = data.cost
  const upload = data.upload.publicURL || data.upload
  const title = data.title
  const description = data.description
  const tags = data.tags
  
  return (
    <section className="section">
      <div className="container content">
        <div className="columns">
        <h1>{title}</h1>
        <span>{tags.map((tag, index) => (<strong key={index}>{tag}</strong>))}</span>
        <p>{description}</p>
        <a href={upload}>Click to download</a>
        <p>Cost to buy: {cost} kr</p>
        </div>
      </div>
    </section>
  );
};

DocumentPostTemplate.propTypes = {
  data: PropTypes.object,
  helmet: PropTypes.object,
};

const DocumentPost = ({data}) => {
  return (
    <Layout>
      <DocumentPostTemplate data={data.markdownRemark}
      />
    </Layout>
  );
};

DocumentPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default DocumentPost;

export const pageQuery = graphql`
  query DocumentPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        description
        tags
        date
        featuredpost
        upload { publicURL }
        cost
      }
    }
  }
`;