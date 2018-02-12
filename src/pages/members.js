import React from 'react';
import Link from 'gatsby-link';
import get from 'lodash/get';
import Helmet from 'react-helmet';

import { members } from '../pages/members/MemberList';

import MemberCard from '../components/MemberCard';

class Members extends React.Component {
  	render() {
		return (
			<div className="container">
				<Helmet title="Members" />
                <div className="mc-list-container">
                    {members.map(member => <MemberCard key={member.name} person={member} />)}
                </div>
			</div>
		);
	}
}

export default Members;