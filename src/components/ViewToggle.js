import React, { Component } from 'react';
import styles from '../styles'
import ScrollHide from './ScrollHide';
import ViewToggleIcon from './ViewToggleIcon';

const viewToggle = {
	position: 'fixed',
	height: '42px',
	right: '16px',
	top: '10px',
	padding: '0',
	zIndex: '2',
	transition: styles.transform,
}

class ViewToggle extends Component {
	state = {
		navToggle: true,
	};

	static getDerivedStateFromProps(props) {
		if (props.isZoomed) {
			return { navToggle: false }
		}
		return { navToggle: true };
	}

	handleClick = () => {
		const { togglenav, togglezoom } = this.props;

		if (this.state.navToggle) {
			togglenav()
		} else {
			togglezoom(false)
		}
	}

	render() {
		const { isNavOpen, isZoomed } = this.props;

		return (
			<ScrollHide render={isVisible => (
				<button
					onClick={this.handleClick}
					css={{
						...viewToggle,
						transform: !isNavOpen && !isZoomed ?
							`translateY(${isVisible ? '0' : 'calc(-' + viewToggle.height + ' - ' + viewToggle.top}))` :
							null
					}}
					>
					<ViewToggleIcon
						isMenuIcon={!isNavOpen && !isZoomed}
					/>
				</button>
			)}/>
		);
	}
}

export default ViewToggle;
