import React from 'react';
import Link from 'gatsby-link';
import get from 'lodash/get';
import Helmet from 'react-helmet';

import Card from '../components/Card';

class Index extends React.Component {
	componentWillMount() {
		document.body.className = "index-img";
	}
  	render() {
		const indexContent = get(this, 'props.data.markdownRemark.html');
		const cardTitle = "The best tent in Kville. Hands down.";
		return (
		<div className="container">
			<Helmet title={get(this, 'props.data.site.siteMetadata.title')} />
			<Card title={cardTitle}>
			{indexContent}
			</Card>
		</div>
		);
  	}
}

Index.propTypes = {
  route: React.PropTypes.object,
};

export default Index;

export const pageQuery = graphql`
	query IndexQuery {
		site {
		siteMetadata {
			title
		}
		}
		markdownRemark(frontmatter: { title: { eq: "Index" } }) {
			id
			html
		}
	}
`;