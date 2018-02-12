import React from 'react';
import Link from 'gatsby-link';
import get from 'lodash/get';
import Helmet from 'react-helmet';

import Card from '../components/Card';

class Contact extends React.PureComponent {
  	render() {
        const contact = this.props.data.markdownRemark;
		return (
			<div className="container">
				<Helmet title="Contact" />
                <Card title={contact.frontmatter.cardTitle}>
                    {contact.html}
                </Card>
			</div>
		);
	}
}

export default Contact;

export const pageQuery = graphql`
    query ContactQuery {
        markdownRemark(frontmatter: { title: { eq: "Contact" } }) {
            frontmatter {
                title
                cardTitle
            }
            html
        }
    }
`