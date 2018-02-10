import React from 'react';
import PropTypes from 'prop-types';

import '../content/MemberCard.less';

class MemberCard extends React.PureComponent {
    render() {
        return (
            <div className="member-card-container">
                <div className="member-photo">
                    <img src={`src/images/${this.props.person.imgPath}`} />
                </div>
                <div className="member-info">
                    <h3>{this.props.person.name}</h3>
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
        hometown: PropTypes.string.isRequired,
        imgPath: PropTypes.string
    })
}

export default MemberCard;