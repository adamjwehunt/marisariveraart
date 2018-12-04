import React, { Fragment, Component } from 'react';

class ScrollHide extends Component {
	state = {
		isVisible: true,
		lastScrollTop: 0,
		hasScrolled: false,
	};

	componentWillMount() {
		window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}

	checkY = () => {
		const pageY= window.scrollY;
		const lastScrollTop = this.state.lastScrollTop;
		const downTolerance = 8;

		if (pageY > (lastScrollTop + downTolerance)) {
			this.setState({ isVisible: false })
		} else if (pageY < lastScrollTop || pageY <= 0) {
			this.setState({ isVisible: true })
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
