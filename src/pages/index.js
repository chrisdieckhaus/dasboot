import React from 'react';
import Link from 'gatsby-link';
import get from 'lodash/get';
import Helmet from 'react-helmet';

import Card from '../components/Card';

class Index extends React.Component {
  render() {

	const content = "Tenting. We spend weeks sleeping out in the cold, rain, and mud. We sacrifice sleep, grades, and social life. " + 
	"And we do it all for the chance to squeeze ourselves into a tiny little gym with 1,600 of our classmates and watch ten other students toss a leather ball at a metal hoop.\n" +
	"Is it crazy? Yes. Is it worth it? Absolutely./n" +
	"You see, tenting is more than just an activity. It's more than just a game. Tenting is about passion and camaraderie, about dedication and sacrifice, " + 
	"about ritual and tradition. It's more than just a game./n" +
	"It's a way of life.";


    return (
      <div className="container">
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />
        <Card title="Card title">
          {content}
        </Card>
      </div>
    )
  }
}

Index.propTypes = {
  route: React.PropTypes.object,
}

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          frontmatter {
            path
            date(formatString: "DD MMMM, YYYY")
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`

// const siteTitle = get(this, 'props.data.site.siteMetadata.title')
// const posts = get(this, 'props.data.allMarkdownRemark.edges')
// {posts.map(post => {
//   if (post.node.path !== '/404/') {
//     const title = get(post, 'node.frontmatter.title') || post.node.path
//     return (
//       <div key={post.node.frontmatter.path}>
//         <h3>
//           <Link to={post.node.frontmatter.path} >
//             {post.node.frontmatter.title}
//           </Link>
//         </h3>
//         <small>{post.node.frontmatter.date}</small>
//         <p dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
//       </div>
//     )
//   }
// })}
