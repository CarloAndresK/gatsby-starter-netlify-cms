import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

// eslint-disable-next-line
export const VideoPostTemplate = ({
  data
}) => {
  console.log('VideoPostTemplate', data);
  const isPreview = typeof data.frontmatter === "undefined";

  data = (!isPreview) ? data.frontmatter : data
  
  const image = (!isPreview) ? data.featuredimage.publicURL : data.featuredimage 
  const cost = data.cost

  const title = data.title
  const description = data.description
  const tags = data.tags
  const link = data.link
  
  return (
    <section className="section">
      <div className="container content">
        <div className="columns">
        <h1>{title}</h1>
        <span>{tags.map((tag, index) => (<strong key={index}>{tag}</strong>))}</span>
        <p>{description}</p>
        {(!image ? '' : (<img src={image} width="200px" height="200px"></img>))}
        {(!link ? '' : (<iframe src={link} frameBorder="0"></iframe>))}
        <p>Cost to buy: {cost} kr</p>
        </div>
      </div>
    </section>
  );
};

VideoPostTemplate.propTypes = {
  data: PropTypes.object,
  helmet: PropTypes.object,
};

const VideoPost = ({data}) => {
  return (
    <Layout>
      <VideoPostTemplate data={data.markdownRemark}
      />
    </Layout>
  );
};

VideoPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default VideoPost;

export const pageQuery = graphql`
  query VideoPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        title
        description
        tags
        date
        featuredpost
        featuredimage { publicURL }
        link
        cost
      }
    }
  }
`;