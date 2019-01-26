import React, { Component, Fragment } from 'react';
import content from '../services/content';
import styles from '../styles'
import ScrollHide from './ScrollHide';
import DirectionToggleLeft from './DirectionToggleLeft';
import DirectionToggleRight from './DirectionToggleRight';

const directionToggles = {
	position: 'fixed',
	display: 'flex',
	width: '100%',
	maxWidth: styles.appMaxWidth,
	padding: '0 11px',
	height: '52px',
	bottom: '12px',
	zIndex: '2',
	transition: styles.transform,

	'button': {
		padding: '0',
		width: 'auto'
	}
}

class DirectionToggles extends Component {
	state = {
		imageNav: false,
		scrollInterval: 0,
		startScroll: 0,
		nextImgId: undefined,
		prevImgId: undefined
		// touched: false,
		// hasScrolled: false
	};

	static getDerivedStateFromProps(props) {
		const zoomedImgId = props.zoomedImgId;
		const artList = content.artList;

		if (zoomedImgId) {
			const collectionId = artList.find(art => art.id === zoomedImgId).collectionId;
			const collection = artList.filter(art => art.collectionId === collectionId);
			const imgIndex = collection.findIndex(art => art.id === zoomedImgId);
			const nextImg = collection[imgIndex + 1]
			const prevImg = collection[imgIndex - 1];
			const nextImgId = nextImg && nextImg.id;
			const prevImgId = prevImg && prevImg.id;

			return { imageNav: true, nextImgId, prevImgId }
		}
		return { imageNav: false };
	}
	

	handleClickLeft = () => {
		const { prevImgId } = this.props

		if (prevImgId) {
			this.props.onToggleZoom(prevImgId);
		} 
	}

	handleClickRight = () => {
		const { nextImgId } = this.state

		if (nextImgId) {
			this.props.onToggleZoom(nextImgId);
		} else {
			this.scrollToTop()
		} 
	}

	// handleTouch = () => {
	// 	if (!this.state.hasScrolled) {
	// 		window.requestAnimationFrame(this.scrollStep);
	// 	} else {
	// 		this.setState({ hasScrolled: true })
	// 		window.requestAnimationFrame(this.handleScroll);
	// 	}
	// };

	scrollStep = () => {
		if (window.scrollY <= 0 || this.state.touched) {
				window.removeEventListener('touchstart', this.handleTouch);
				window.removeEventListener('wheel', this.handleTouch);

				this.setState({ touched: false })
				clearInterval(this.state.scrollInterval);
				return;
		}

		const scrollPercent = window.scrollY / this.state.startScroll * 100;
		return window.scroll(0, window.scrollY - scrollPercent - 50);

		// this.setState({
		// 	hasScrolled: false,
		// });
	}
	
	scrollToTop = () => {
		window.addEventListener('touchstart', this.handleTouch);
		window.addEventListener('wheel', this.handleTouch);
		
		let scrollInterval = setInterval(this.scrollStep, 16.66);
		this.setState({
			scrollInterval: scrollInterval,
			startScroll: window.scrollY
		 });
	}

	handleTouch = () => this.setState({ touched: true})

	render() {
		const { isNavOpen, zoomedImgId } = this.props;

		return (
			<ScrollHide startShowY={200} render={isVisible => (
				<Fragment>
					<div css={{
						...directionToggles,
						justifyContent: 'flex-start',
						opacity: zoomedImgId ? '1' : '0',
						transition: `transform .2s ease-in-out${!zoomedImgId ? ', opacity .35s cubic-bezier(0.08, 0.69, 0.2, 0.99) .35s' : ''}`,
						transform: !zoomedImgId ?
							`translateY(${zoomedImgId && isVisible ? '0' : 'calc(' + directionToggles.height + ' + ' + directionToggles.bottom}))` :
							undefined
					}}>
						<button
							onClick={this.handleClickLeft}
						>
							<DirectionToggleLeft/>
						</button>
					</div>
					<div css={{
						...directionToggles,
						justifyContent: 'flex-end',
						opacity: zoomedImgId || isVisible ? '1' : '0',
						transition: `transform .2s ease-in-out${!(zoomedImgId || isVisible) ? ', opacity .35s cubic-bezier(0.08, 0.69, 0.2, 0.99) .35s' : ''}`,
						transform: !zoomedImgId ?
							`translateY(${isVisible && !isNavOpen ? '0' : 'calc(' + directionToggles.height + ' + ' + directionToggles.bottom}))` :
							undefined
					}}>
						<button
							onClick={this.handleClickRight}
							css={{
								background: 'rgba(255, 255, 255, .86)',
								borderRadius: '50%'
							}}
						>
							<DirectionToggleRight
								isUpArrow={!zoomedImgId}
							/>
						</button>
					</div>
				</Fragment>
			)}/>
		);
	}
}

export default DirectionToggles;
