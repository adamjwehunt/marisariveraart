import React, { Component, Fragment } from 'react';
import styles from '../styles'
import ScrollHide from './ScrollHide';
import DirectionToggleLeft from './DirectionToggleLeft';
import DirectionToggleRight from './DirectionToggleRight';

const directionToggles = {
	position: 'fixed',
	height: '52px',
	bottom: '12px',
	padding: '0',
	zIndex: '2',
	transition: styles.transform,
}

class DirectionToggles extends Component {
	state = {
		imageNav: false,
	};

	static getDerivedStateFromProps(props) {
		if (props.isZoomed) {
			return { imageNav: true }
		}
		return { imageNav: false };
	}

	handleClick = () => {
	}

	render() {
		const { isNavOpen, isZoomed } = this.props;

		return (
			<ScrollHide render={isVisible => (
				<Fragment>
					<button
						onClick={this.handleClick}
						css={{
							...directionToggles,
							left: '11px',
							transform: !isZoomed ?
								`translateY(${isZoomed && isVisible ? '0' : 'calc(' + directionToggles.height + ' + ' + directionToggles.bottom}))` :
								null
						}}
					>
						<DirectionToggleLeft/>
					</button>
					<button
						onClick={this.handleClick}
						css={{
							...directionToggles,
							background: 'rgba(255, 255, 255, .86)',
							borderRadius: '50%',
							right: '11px',
							transform: !isZoomed ?
								`translateY(${isVisible && !isNavOpen ? '0' : 'calc(' + directionToggles.height + ' + ' + directionToggles.bottom}))` :
								null
						}}
					>
						<DirectionToggleRight
							isUpArrow={!isZoomed}
						/>
					</button>
				</Fragment>
			)}/>
		);
	}
}

export default DirectionToggles;
