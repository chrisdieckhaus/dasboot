import React from 'react';
import PropTypes from 'prop-types';

import '../content/Card.less';

class Card extends React.PureComponent {

    render() {
        return (
			<div className="card-container">
				<div className="card-title">
					{this.props.title}
				</div>
				<div className="card-content" dangerouslySetInnerHTML={{ __html: this.props.children }}>
				</div>
			</div>
        )
    }
}

Card.PropTypes = {
    title: PropTypes.string,
}

export default Card;