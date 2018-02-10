import React from 'react';
import Link from 'gatsby-link';
import get from 'lodash/get';
import Helmet from 'react-helmet';

import MemberCard from '../components/MemberCard';

import '../content/Members.less';

const Grades = {
    FRESHMAN: "Freshman",
    SOPHOMORE: "Sophomore",
    JUNIOR: "Junior",
    SENIOR: "Senior"
};

class Members extends React.Component {
  	render() {
        const re = /.*pages\/members.*/;
        console.log(get(this, 'props.data.allMarkdownRemark.edges'));
		const members = get(this, 'props.data.allMarkdownRemark.edges')
            .filter(post => post.node.id.match(re))
			.map(post => { 
                const info = post.node.frontmatter;
                return <MemberCard 
                    key={post.node.frontmatter.name} 
                    person={post.node.frontmatter}
                />;
			});

		return (
			<div className="container">
				<Helmet title="Members" />
                <div className="mc-list-container">
                    {members}
                </div>
			</div>
		);
	}
}

export default Members;

export const pageQuery = graphql`
	query MembersQuery {
		allMarkdownRemark(sort: { fields: [frontmatter___listOrder] }) {
			edges {
				node {
					frontmatter {
                        name
                        grade
                        hometown
                        imgPath
					}
					id
				}
			}
		}
	}
`;