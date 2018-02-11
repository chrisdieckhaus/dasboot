import React from 'react';
import PropTypes from 'prop-types';
import { withPrefix } from 'gatsby-link';

import '../content/MemberCard.less';

class MemberCard extends React.PureComponent {
    render() {
        const title = this.props.person.title ? <p>{this.props.person.title}</p> : null;
        return (
            <div className="member-card-container">
                <div className="member-photo">
                    <img src={withPrefix(`/images/${this.props.person.image}`)} />
                </div>
                <div className="member-info">
                    <h3>{this.props.person.name}</h3>
                    {title}
                    <p>{this.props.person.grade} | {this.props.person.hometown}</p>
                </div>
            </div>
        );
    }
}

MemberCard.propTypes = {
    person: PropTypes.shape({
        name: PropTypes.string.isRequired,
        grade: PropTypes.string.isRequired,
        title: PropTypes.string,
        hometown: PropTypes.string.isRequired,
        image: PropTypes.string
    })
}

export default MemberCard;