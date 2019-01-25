import React, { Fragment, Component } from 'react';
import content from '../services/content';
import Siema from 'siema';

class SliderImg extends Component {
	componentDidMount() {
		this.siema = new Siema({
			draggable: true,
			easing: 'ease-out',
		});
	}

	prev = () => {
		this.siema.prev()
	};
	
	next = () => {
		this.siema.next()
	};

	render() {
		const imgSrcs = []
		const art = content.artList.find(art => art.id === this.props.artId);
		imgSrcs.push(art.image.print.full.src);
		const photos = art.image.photo;
		photos.map(photo => imgSrcs.push(photo.src))

		return (
			<Fragment>
				<div className="siema">
					{
						imgSrcs.map((src, i) =>
							<div
								key={i}
							>
								<img
									// css={{
									// 	height: '100%',
									// 	width: 'fit-content',
									// 	objectFit: 'contain',
									// }}
									src={src}
									alt={'test'}
								/>
							</div>
						)
					}
				</div>
				<button onClick={this.prev}>Prev</button>
				<button onClick={this.next}>Next</button>
			</Fragment>
		)
	}
}

export default SliderImg;
