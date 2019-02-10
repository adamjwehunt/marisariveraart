import React, { Component } from 'react';

class PreloadImg extends Component {
	state = {
		isLoaded: false,
	};

	render() {
		const { src, preloadSrc, alt, cssProps } = this.props;
		const { isLoaded } = this.state;
		return (
			<img
				src={isLoaded ? src : preloadSrc}
				alt={alt}
				onLoad={() => !isLoaded && this.setState({ isLoaded: true })}
				css={cssProps}
			/>
		);
	}
}

export default PreloadImg;
