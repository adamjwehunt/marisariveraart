import React from 'react';
import splashImg from '../images/splash-img.png';
import splashBanner from '../images/logo-mra.png';
import instaIcon from '../images/instagram.svg';
import emailIcon from '../images/envelope.svg';

const splash = {
	height: '100%',
	width: '100%',
	p: {
		color: '#666',
	},
};

const socialLinkIcon = {
	maxHeight: '100%',
};

const Splash = () => (
	<section css={splash}>
		<figure>
			<img src={splashBanner} alt="" />
		</figure>
		<figure
			css={{
				margin: '0 auto',
				width: '600px',
				maxWidth: '100%',
			}}
		>
			<img
				css={{ boxShadow: '-2px 2px 0px rgba(0, 0, 0, 0.09)' }}
				src={splashImg}
				alt=""
			/>
		</figure>
		<section
			css={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				margin: '20px 0',
			}}
		>
			<p>Website is coming soon</p>
			<p>Please follow me on instagram!</p>
		</section>
		<div
			css={{
				display: 'flex',
				margin: '0 auto',
				width: '400px',
				maxWidth: '100%',
				height: '100px',
			}}
		>
			<a
				css={{ width: '100%', cursor: 'pointer' }}
				href="mailto:marisa@marisariveraart.com"
			>
				<img css={socialLinkIcon} src={emailIcon} alt="" />
			</a>
			<a
				css={{ width: '100%', cursor: 'pointer' }}
				href="https://www.instagram.com/marisariveraart/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img
					css={{ ...socialLinkIcon, padding: '12px 0' }}
					src={instaIcon}
					alt=""
				/>
			</a>
			<div className="fb-icon" />
		</div>
	</section>
);

export default Splash;
