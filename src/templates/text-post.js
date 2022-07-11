import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

// eslint-disable-next-line
export const TextPostTemplate = ({
  data
}) => {
  console.log('TextPostTemplate', data);
  const content = data.body || data.html
  data = data.frontmatter || data
  
  const image = data.featuredimage.publicURL || data.featuredimage 
  const cost = data.cost

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
        {(!image ? '' : (<img src={image} width="200px" height="200px"></img>))}
        <HTMLContent className="content" content={content}></HTMLContent>
        <p>Cost to buy: {cost} kr</p>
        </div>
      </div>
    </section>
  );
};

TextPostTemplate.propTypes = {
  data: PropTypes.object,
  helmet: PropTypes.object,
};

const TextPost = ({data}) => {
  return (
    <Layout>
      <TextPostTemplate data={data.markdownRemark}
      />
    </Layout>
  );
};

TextPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default TextPost;

export const pageQuery = graphql`
  query TextPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        description
        tags
        date
        featuredpost
        featuredimage { publicURL }
        cost
      }
    }
  }
`;