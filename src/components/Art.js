import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const art = {
	userSelect: 'none',
	display: 'flex',
	alignItems: 'center',

	// '&:before': {
	// 	content: '""',
	// 	display: 'block',
	// 	position: 'absolute',
	// 	top: '0',
	// 	left: '0',
	// 	height: '100%',
	// 	width: '100%',
	// 	background: '#fff',
	// 	zIndex: '3',
	// 	transform: 'translateZ(0)',
	// 	opacity: '0',
	// 	visibility: 'hidden',
	// 	transition: 'visibility 0s linear .3s,opacity .3s 0s',
	// 	pointerEvents: 'none'
	// },

	div: {
		// zIndex: '4',
		cursor: 'zoom-in',

		img: {
			display: 'block',
			width: '100%',
			boxShadow: '-1px 0px 0px rgba(0, 0, 0, 0.06)',
		}
	}
}

// const modalCover = {
// 	position: 'fixed',
// 	display: 'flex',
// 	alignItems: 'center',
// 	justifyContent: 'center',
// 	top: '0',
// 	left: '0',
// 	width: '100%',
// 	height: '100%',
// 	zIndex: '4',
// 	transform: 'translateZ(0)',
// 	backgroundColor: 'rgba(#000, 0.15)',

// 	'.modal': {
// 		width: '100%',
// 		maxWidth: '400px',
// 		boxShadow: '0 0 10px 3px rgba(0, 0, 0, 0.1)',

// 		img: {
// 			display: 'block',
// 			width: '100%',
// 			boxShadow: '-1px 0px 0px rgba(0, 0, 0, 0.06)',
// 		}
// 	}
// }

// const Modal = ({ toggleModal, src, alt }) => {
// 	return ReactDOM.createPortal(
// 		<aside css={modalCover}>
// 			<div className="modal" onClick={toggleModal}>
// 				<img src={src} alt={alt}></img>
// 			</div>
// 		</aside>,
// 	document.body
// 	);
// }

class Art extends Component {
	// state = {
	// 	isModal: false
	// };

	// toggleModal = () => {
	// 	this.setState(({ isModal: !this.state.isModal }));
	// }

	render() {
		const { src, alt } = this.props;
		// const { isModal } = this.state;

		return (
			<div 
				css={{
					...art,
					// ':before': {
					// 	visibility: `${ isModal ? 'visible': 'hidden' }`,
					// 	opacity: `${ isModal ? '1': '0' }`,
					// 	transition: `${ isModal ? 'visibility 0s linear 0s,opacity .3s 0s': 'visibility 0s linear .3s,opacity .3s 0s' }`,
					// }
				}}
			>
				<div
					// onClick={this.toggleModal}
				>
					<img src={src} alt={alt}></img>
				</div>
				{/* {isModal && 
				<Modal toggleModal={this.toggleModal} src={src} alt={alt} />
				} */}

				{/* <div
					onClick={this.toggleModal}
					css={{
						display: `${ isModal ? 'flex' : 'none' }`,
						justifyContent: 'center',
						alignItems: 'center',
						zIndex: '6',
						position: 'absolute',
						top: '0',
						right: '0',
						left: '0',
						height: '100vh'
					}}
				>
					<div
						css={{
							height: '200px',
							width: '300px'
						}}
					>
						<img 
							css={{
								cursor: 'zoom-in',
							}}
							src={src}
							alt={alt}>
						</img>
					</div>
				</div> */}
			</div>
		)
	}
}

export default Art;