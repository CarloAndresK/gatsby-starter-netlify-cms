import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import netlifyIdentity from 'netlify-identity-widget';

// eslint-disable-next-line
export const VideoPostTemplate = ({
  data
}) => {
  const user = netlifyIdentity.currentUser();
  console.log({ user });
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
      <div className="content">
        <section className="hero is-large is-primary">
          <div className="hero-body">
            <p className="title">
            {title}
            </p>
            <p className="subtitle">
            {description}
            </p>
          </div>
        </section>
        <div className="container">
          <span className="block">{tags.map((tag, index) => (<strong key={index}>{tag}</strong>))}</span>
          { (!user) ? 
          (!image ? '' : (<figure className="image is-3by2"><img alt="cover"src={image} width="200px" height="200px"></img></figure>)) :
          (!link ? '' : (<iframe src={link} title="bought video" width="640" height="320" frameBorder="0"></iframe>)) }
          <div className="block">
          <button className="button is-primary">Cost to buy: {cost} kr</button>
          </div>
        </div>
      </div>
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