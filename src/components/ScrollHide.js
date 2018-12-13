import React, { Fragment, Component } from 'react';

class ScrollHide extends Component {
	state = {
		isVisible: true,
		lastScrollTop: 0,
		hasScrolled: false,
	};

	componentWillMount() {
		window.addEventListener('scroll', this.handleScroll);

		const { startShowY } = this.props
		if (startShowY && startShowY > window.scrollY) {
			this.setState({ isVisible: false })
		}
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}

	checkY = () => {
		const pageY = window.scrollY;
		const lastScrollTop = this.state.lastScrollTop;
		const startShowY = this.props.startShowY || 0;
		const stopHideY = this.props.stopHideY || 0;
		const tolerance = 4;

		if (
			(pageY > 0 && pageY > (lastScrollTop + tolerance) && stopHideY < pageY) ||
			(startShowY > pageY && pageY >= 0)
		) {
			this.setState({
				isVisible: false
			})
		} else if (startShowY <= pageY && (pageY < lastScrollTop || pageY <= 0)) {
			this.setState({
				isVisible: true
			})
		}

		this.setState({
			lastScrollTop: pageY,
			hasScrolled: false,
		});
	};

	handleScroll = () => {
		if (!this.state.hasScrolled) {
			window.requestAnimationFrame(this.checkY);
		} else {
			this.setState({ hasScrolled: true })
			window.requestAnimationFrame(this.handleScroll);
		}
	};

	render() {
		return (
			<Fragment>
				{this.props.render(this.state.isVisible)}
			</Fragment>
		)
	}
}

export default ScrollHide;
