import React, { Fragment, Component } from 'react';

class ScrollHide extends Component {
	state = {
		isVisible: true,
		lastScrollTop: 0,
		hasScrolled: false,
	};

	componentWillMount() {
		window.addEventListener('scroll', this.handleScroll);

		const { startShow } = this.props
		if (startShow && startShow > window.scrollY) {
			this.setState({ isVisible: false })
		}
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}

	checkY = () => {
		const pageY = window.scrollY;
		const lastScrollTop = this.state.lastScrollTop;
		const startShow = this.props.startShow || 0;
		const tolerance = 4;

		if (pageY > (lastScrollTop + tolerance)) {
			this.setState({ isVisible: false })
		} else if (startShow <= pageY && (pageY < lastScrollTop || pageY <= 0)) {
			this.setState({ isVisible: true })
		}

		if (startShow > pageY) {
			this.setState({ isVisible: false })
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
