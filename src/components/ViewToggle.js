import React, { Component } from 'react';

const viewToggle = {
	position: 'fixed',
	right: '10px',
	top: '18px',
	zIndex: '2',
	transition: 'transform 120ms ease-in-out',
}

const viewToggleIcon = {
	position: 'relative',
	width: '38px',
	height: '30px',
	transform: 'rotate(0deg)',
	cursor: 'pointer',
	transition: '.5s ease-in-out',

	span: {
		position: 'absolute',
		display: 'block',
		height: '4px',
		background: '#666',
		opacity: '1',
		transition: '.25s ease-in-out',
		borderBottomLeftRadius: '9px',
		borderTopLeftRadius: '9px',

		'&:nth-child(2), &:nth-child(3)': {
		top: '11px',
		width: '100%',
		}
	}
}

const ViewToggleIcon = ({ isHamburger }) => {
	const topBottomSpanStyles = {
		width: `${isHamburger ? '100%' : '0'}`,
		left: `${isHamburger ? '0' : '50%'}`,
	}

	return (
		<div css={viewToggleIcon}>
			<span
				css={{
					top: `${isHamburger ? '0' : '11px'}`,
					...topBottomSpanStyles,
				}}
			/>
			<span
				css={{transform: `${isHamburger ? 'rotate(0deg)' : 'rotate(45deg)'}`}}
			/>
			<span
				css={{transform: `${isHamburger ? 'rotate(0deg)' : 'rotate(-45deg)'}`}}
			/>
			<span
				css={{
					top: `${isHamburger ? '22px' : '11px'}`,
					...topBottomSpanStyles,
				}}
			/>
		</div>
	)
}

class ViewToggle extends Component {
	render() {
		const { isVisible, isNavOpen, toggleNav } = this.props;

		return (
			<div
				onClick={toggleNav}
				css={{
					...viewToggle,
					transform:
						`translateY(${isVisible ? '0' : 'calc(-' + viewToggleIcon.height + ' - ' + viewToggle.top}))`
				}}
				>
				<ViewToggleIcon
					isHamburger={!isNavOpen}
				/>
			</div>
		);
	}
}

export default ViewToggle;
