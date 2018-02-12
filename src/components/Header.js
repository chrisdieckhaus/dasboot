import React from 'react';
import Link from 'gatsby-link'

import '../content/Header.less';

class Header extends React.Component {
    render() {
        return (
			<div className="wrapper">
            <nav className="header-container">
                <div className="menu-link">
                    <Link to="/">
                        Das Boot
                    </Link>
                </div>
                <div className="menu-link">
					<Link to="/about">
						The Tent
					</Link>
				</div>
				<div className="menu-link">                    
					<Link to="/members">
						The Members
					</Link>
				</div>
				<div className="menu-link">
					<Link to="/contact">
						Contact
					</Link>
				</div>
            </nav>
			</div>
        );
    }
};

export default Header;