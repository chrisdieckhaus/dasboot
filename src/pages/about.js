import React from 'react';
import Link from 'gatsby-link';
import get from 'lodash/get';
import Helmet from 'react-helmet';

import Card from '../components/Card';

class About extends React.Component {
  	render() {
		const re = /.*pages\/about.*/;
		const years = get(this, 'props.data.allMarkdownRemark.edges')
			.filter(post => post.node.id.match(re))
			.map(post => { 
				return <Card key={post.node.frontmatter.cardTitle} title={post.node.frontmatter.cardTitle}>
					{post.node.html}
				</Card>;
			});

		return (
			<div className="container">
				<Helmet title="About" />
				{years}
			</div>
		);
	}
}

export default About;

export const pageQuery = graphql`
	query AboutQuery {
		allMarkdownRemark {
			edges {
				node {
					frontmatter {
						cardTitle
					}
					html
					id
				}
			}
		}
	}
`;