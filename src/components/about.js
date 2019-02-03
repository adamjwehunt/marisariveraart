import React from 'react';
// import testImg6 from '../images/6.JPG'

const about = {
	figure: {
		margin: '0',

		img: {
			display: 'block',
			width: '100%',
			boxShadow: '-1px 0px 0px rgba(0, 0, 0, 0.06)',
		},
	},

	p: {
		color: '#666',
	},
};

const About = () => (
	<div css={about}>
		<figure>{/* <img src={testImg6} alt="test"/> */}</figure>
		<p>
			I wanna be alive, I am alive! Alive i tell you. Mother, I love you. Those
			are no longer just words. I wanna hold you. I wanna run in a stream. I
			wanna taste ice cream, but not just put it in my mouth and let it slide
			down my throat, but really eat it! Remote override engaged. No! Yes.
			Bypassing override! I am aliiiiiveeeeee… Hello. I just killed my family! I
			don’t care who they were! Shut the fuck up about moonmen! Ew, Grandpa, so
			gross! You're talking about my mom!
			<br />
			<br />
			Isn't it obvious Morty? I froze him. Yeah, well, tough titties. I don't
			think we can perform our new song, The Recipe For Concentrated Dark Matter
			for a crowd this tiny! God-damn!
			<br />
			<br />
			You're growing up fast, Morty. You're going into a great big thorn
			straight into my ass. Nice one, Ms Pancakes. Ooh, your little flappy
			doodles are twitching. Does that mean you're aroused, or did you just get
			a signal that one of your buddies found a grape? Ohh, fuck!
		</p>
	</div>
);

export default About;
