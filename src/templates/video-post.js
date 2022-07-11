import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";

// eslint-disable-next-line
export const VideoPostTemplate = ({
  data
}) => {
  console.log(data);
  const frontmatter = data.frontmatter
  const image = frontmatter.featuredimage.publicURL

  console.log('cost',frontmatter.cost)

  const title = frontmatter.title
  const description = frontmatter.description
  const tags = frontmatter.tags
  const link = frontmatter.link
  
  return (
    <section className="section">
      <div className="container content">
        <div className="columns">
        <h1>{title}</h1>
        <span>{tags.map((tag, index) => (<strong key={index}>{tag}</strong>))}</span>
        <p>{description}</p>
        <img src={image} width="200px" height="200px"></img>
        <iframe src={link} frameBorder="0"></iframe>
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