import React, { Component } from 'react';
import styles from '../styles'
import ScrollHide from './ScrollHide';
import ViewToggleIcon from './ViewToggleIcon';

const viewToggleWrapper = {
	position: 'fixed',
	display: 'flex',
	justifyContent: 'flex-end',
	height: '42px',
	width: '100%',
	maxWidth: styles.appMaxWidth,
	paddingRight: '16px',
	top: '10px',
	zIndex: '2',
	transition: styles.transform,

	'button': {
		padding: '0'
	}
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
				<div css={{
					...viewToggleWrapper,
					transform: !isNavOpen && !isZoomed ?
					`translateY(${isVisible ? '0' : 'calc(-' + viewToggleWrapper.height + ' - ' + viewToggleWrapper.top}))` :
					null
					}}>
					<button onClick={this.handleClick}>
						<ViewToggleIcon
							isMenuIcon={!isNavOpen && !isZoomed}
						/>
					</button>
				</div>
			)}/>
		);
	}
}

export default ViewToggle;
