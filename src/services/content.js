const baseImgUri = 'https://res.cloudinary.com/marisariveraart/image/upload/';

export default {
	// about: {
	//	 title: 'About me',
	//	 image: {
	//		 portrait: ''
	//	 },
	//	 description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit, ex sed auctor vehicula, nulla odio malesuada felis, vel efficitur arcu magna at ex. Donec elementum est odio. Nullam consectetur, nunc eu molestie bibendum, augue arcu congue nunc, non mollis lorem erat sed libero. Sed vitae dictum est. Etiam eu varius lectus, eu auctor justo. Duis eget massa lectus. Ut convallis sagittis vestibulum. Pellentesque euismod purus eget tortor rutrum, at maximus quam egestas. Pellentesque ultrices massa sit amet rhoncus molestie. Integer condimentum erat ut tortor iaculis consectetur. Duis vitae elit id tortor vehicula luctus. Maecenas ultricies neque eget quam tempor bibendum. Praesent tempus viverra dolor non convallis. Aliquam auctor eget mauris at ornare.',
	// },
	// blog: {
	//	 title: 'Blog',
	//	 entries: [
	//		 {
	//			 id: '',
	//			 date: '',
	//			 title: '',
	//			 image: {
	//				 headerImg: '',
	//				 gallery: [
	//					 {
	//						 image: {

	//			 }
	//		 }
	//	 ]
	// },
	// shop: {
	//	 title: 'Shop',
	// },
	// contact: {
	//	 title: 'Contact me'
	// },
	// faq: {
	//	 title: 'Faqs',
	//	 qAndA: [
	//		 {
	//			 q: 'What is Marisa Rivera Art?',
	//			 a: '',
	//		 },
	//		 {
	//			 q: 'Who makes your products?',
	//			 a: '',
	//		 },
	//		 {
	//			 q: 'Who takes your photos?',
	//			 a: '',
	//		 },
	//		 {
	//			 q: 'How do I care for my art?',
	//			 a: '',
	//		 },
	//		 {
	//			 q: 'How long is it going to take to receive my order?',
	//			 a: '',
	//		 },
	//		 {
	//			 q: 'Do you do custom orders?',
	//			 a: '',
	//		 },s
	//	 ]
	// },
	collection: {
		1: {
			title: 'Delicate Dusk',
			description: 'Stuff that makes me anna love allover.',
			image: {
				thumbnailSrc:
					baseImgUri +
					'v1548636157/Delicate%20Dust/Warm-Wishes-ORIGINAL-SCAN.jpg',
			},
		},
		2: {
			title: 'Autumn Hour',
			description: 'This is where i put my crazy stuff',
			image: {
				thumbnailSrc:
					baseImgUri +
					'v1548636157/Delicate%20Dust/Warm-Wishes-ORIGINAL-SCAN.jpg',
			},
		},
		3: {
			title: 'Blood bathes',
			description: 'Warm, salty blood to make us feel at home',
			image: {
				thumbnailSrc: baseImgUri + 'v1548636136/Delicate%20Dust/Nature-Hug.jpg',
			},
		},
		4: {
			title: 'Desert lavender',
			description: 'Just get the hint already bucko',
			image: {
				thumbnailSrc:
					baseImgUri +
					'v1548636157/Delicate%20Dust/Warm-Wishes-ORIGINAL-SCAN.jpg',
			},
		},
	},
	artList: [
		{
			id: '1',
			collectionId: '1',
			title: 'Warm Wishes',
			description: '',
			medium: 'watercolor',
			material: 'paper',
			width: 5,
			height: 7,
			image: {
				print: {
					full: {
						src:
							baseImgUri +
							'v1548636157/Delicate%20Dust/Warm-Wishes-ORIGINAL-SCAN.jpg',
					},
				},
				photo: [
					{
						id: '',
						src: '',
					},
				],
			},
			link: {
				fb: '',
				pintrest: '',
				instagram: '',
			},
			shop: {
				original: {
					inStock: true,
					link: '',
				},
				print: {
					inStock: true,
					link: '',
				},
			},
		},
		{
			id: '2',
			collectionId: '1',
			title: 'Star Plant',
			description: '',
			medium: 'watercolor',
			material: 'paper',
			width: 5,
			height: 7,
			image: {
				print: {
					full: {
						src: baseImgUri + 'v1548636151/Delicate%20Dust/Star-Plant.jpg',
					},
				},
				photo: [
					{
						id: '',
						src: '',
					},
				],
			},
			link: {
				fb: '',
				pintrest: '',
				instagram: '',
			},
			shop: {
				original: {
					inStock: true,
					link: '',
				},
				print: {
					inStock: true,
					link: '',
				},
			},
		},
		{
			id: '3',
			collectionId: '1',
			title: 'Night Paths',
			description: '',
			medium: 'watercolor',
			material: 'paper',
			width: 5,
			height: 7,
			image: {
				print: {
					full: {
						src:
							baseImgUri +
							'v1548636139/Delicate%20Dust/Night-Paths-_ORIGINAL-SCAN.jpg',
					},
				},
				photo: [
					{
						id: '',
						src: '',
					},
				],
			},
			link: {
				fb: '',
				pintrest: '',
				instagram: '',
			},
			shop: {
				original: {
					inStock: true,
					link: '',
				},
				print: {
					inStock: true,
					link: '',
				},
			},
		},
		{
			id: '4',
			collectionId: '1',
			title: 'Star Fields',
			description: '',
			medium: 'watercolor',
			material: 'paper',
			width: 5,
			height: 7,
			image: {
				print: {
					full: {
						src:
							baseImgUri +
							'v1548636150/Delicate%20Dust/Star-Fields-ORIGINAL-SCAN.jpg',
					},
				},
				photo: [
					{
						id: '',
						src: '',
					},
				],
			},
			link: {
				fb: '',
				pintrest: '',
				instagram: '',
			},
			shop: {
				original: {
					inStock: true,
					link: '',
				},
				print: {
					inStock: true,
					link: '',
				},
			},
		},
		{
			id: '5',
			collectionId: '1',
			title: 'Vanilla Air',
			description: '',
			medium: 'watercolor',
			material: 'paper',
			width: 5,
			height: 7,
			image: {
				print: {
					full: {
						src:
							baseImgUri +
							'v1548636155/Delicate%20Dust/Vanilla-Air-ORIGINAL-SCAN.jpg',
					},
				},
				photo: [
					{
						id: '',
						src: '',
					},
				],
			},
			link: {
				fb: '',
				pintrest: '',
				instagram: '',
			},
			shop: {
				original: {
					inStock: true,
					link: '',
				},
				print: {
					inStock: true,
					link: '',
				},
			},
		},
		{
			id: '6',
			collectionId: '1',
			title: 'Favorite Change',
			description: '',
			medium: 'watercolor',
			material: 'paper',
			width: 5,
			height: 7,
			image: {
				print: {
					full: {
						src:
							baseImgUri +
							'v1548636127/Delicate%20Dust/Favorite-Change-_ORIGINAL-SCAN.jpg',
					},
				},
				photo: [
					{
						id: '',
						src: '',
					},
				],
			},
			link: {
				fb: '',
				pintrest: '',
				instagram: '',
			},
			shop: {
				original: {
					inStock: true,
					link: '',
				},
				print: {
					inStock: true,
					link: '',
				},
			},
		},
		{
			id: '7',
			collectionId: '1',
			title: 'Soft Control',
			description: '',
			medium: 'watercolor',
			material: 'paper',
			width: 5,
			height: 7,
			image: {
				print: {
					full: {
						src:
							baseImgUri +
							'v1548636147/Delicate%20Dust/Soft-Control-ORIGINAL-SCAN.jpg',
					},
				},
				photo: [
					{
						id: '',
						src: '',
					},
				],
			},
			link: {
				fb: '',
				pintrest: '',
				instagram: '',
			},
			shop: {
				original: {
					inStock: true,
					link: '',
				},
				print: {
					inStock: true,
					link: '',
				},
			},
		},
		{
			id: '8',
			collectionId: '1',
			title: 'Tiny Textures',
			description: '',
			medium: 'watercolor',
			material: 'paper',
			width: 5,
			height: 7,
			image: {
				print: {
					full: {
						src:
							baseImgUri +
							'v1548636153/Delicate%20Dust/Tiny-Textures-ORIGINAL-SCAN.jpg',
					},
				},
				photo: [
					{
						id: '',
						src: '',
					},
				],
			},
			link: {
				fb: '',
				pintrest: '',
				instagram: '',
			},
			shop: {
				original: {
					inStock: true,
					link: '',
				},
				print: {
					inStock: true,
					link: '',
				},
			},
		},
		{
			id: '9',
			collectionId: '1',
			title: 'Rose Relection',
			description: '',
			medium: 'watercolor',
			material: 'paper',
			width: 5,
			height: 7,
			image: {
				print: {
					full: {
						src: baseImgUri + 'v1548636146/Delicate%20Dust/Rose-Reflection.jpg',
					},
				},
				photo: [
					{
						id: '',
						src: '',
					},
				],
			},
			link: {
				fb: '',
				pintrest: '',
				instagram: '',
			},
			shop: {
				original: {
					inStock: true,
					link: '',
				},
				print: {
					inStock: true,
					link: '',
				},
			},
		},
		{
			id: '10',
			collectionId: '1',
			title: 'Nature Hug',
			description: '',
			medium: 'watercolor',
			material: 'paper',
			width: 5,
			height: 7,
			image: {
				print: {
					full: {
						src: baseImgUri + 'v1548636136/Delicate%20Dust/Nature-Hug.jpg',
					},
				},
				photo: [
					{
						id: '',
						src: '',
					},
				],
			},
			link: {
				fb: '',
				pintrest: '',
				instagram: '',
			},
			shop: {
				original: {
					inStock: true,
					link: '',
				},
				print: {
					inStock: true,
					link: '',
				},
			},
		},
		{
			id: '11',
			collectionId: '1',
			title: 'Open Door',
			description: '',
			medium: 'watercolor',
			material: 'canvas',
			width: 5,
			height: 7,
			image: {
				print: {
					full: {
						src: baseImgUri + 'v1548636140/Delicate%20Dust/Open-Door.jpg',
					},
				},
				photo: [
					{
						id: '',
						src: '',
					},
				],
			},
			link: {
				fb: '',
				pintrest: '',
				instagram: '',
			},
			shop: {
				original: {
					inStock: true,
					link: '',
				},
				print: {
					inStock: true,
					link: '',
				},
			},
		},
		{
			id: '12',
			collectionId: '1',
			title: "Let's go",
			description: '',
			medium: 'acrylic',
			material: 'canvas',
			width: 5,
			height: 7,
			image: {
				print: {
					full: {
						src: baseImgUri + 'v1548636135/Delicate%20Dust/Let_s-Go.jpg',
					},
				},
				photo: [
					{
						id: '',
						src: '',
					},
				],
			},
			link: {
				fb: '',
				pintrest: '',
				instagram: '',
			},
			shop: {
				original: {
					inStock: true,
					link: '',
				},
				print: {
					inStock: true,
					link: '',
				},
			},
		},
		{
			id: '13',
			collectionId: '1',
			title: 'Give',
			description: '',
			medium: 'watercolor',
			material: 'paper',
			width: 5,
			height: 7,
			image: {
				print: {
					full: {
						src:
							baseImgUri + 'v1548636133/Delicate%20Dust/Give-ORIGINAL-SCAN.jpg',
					},
				},
				photo: [
					{
						id: '',
						src: '',
					},
				],
			},
			link: {
				fb: '',
				pintrest: '',
				instagram: '',
			},
			shop: {
				original: {
					inStock: true,
					link: '',
				},
				print: {
					inStock: true,
					link: '',
				},
			},
		},
		{
			id: '14',
			collectionId: '1',
			title: 'Float In',
			description: '',
			medium: 'watercolor',
			material: 'paper',
			width: 5,
			height: 7,
			image: {
				print: {
					full: {
						src:
							baseImgUri +
							'v1548636131/Delicate%20Dust/Float-In-_ORIGINAL-SCAN.jpg',
					},
				},
				photo: [
					{
						id: '',
						src: '',
					},
				],
			},
			link: {
				fb: '',
				pintrest: '',
				instagram: '',
			},
			shop: {
				original: {
					inStock: true,
					link: '',
				},
				print: {
					inStock: true,
					link: '',
				},
			},
		},
		{
			id: '15',
			collectionId: '1',
			title: 'Float Away',
			description: '',
			medium: 'watercolor',
			material: 'paper',
			width: 5,
			height: 7,
			image: {
				print: {
					full: {
						src:
							baseImgUri +
							'v1548636128/Delicate%20Dust/Float-Away-_ORIGINAL-SCAN.jpg',
					},
				},
				photo: [
					{
						id: '',
						src: '',
					},
				],
			},
			link: {
				fb: '',
				pintrest: '',
				instagram: '',
			},
			shop: {
				original: {
					inStock: true,
					link: '',
				},
				print: {
					inStock: true,
					link: '',
				},
			},
		},
		{
			id: '16',
			collectionId: '1',
			title: 'Favorite Change',
			description: '',
			medium: 'watercolor',
			material: 'paper',
			width: 5,
			height: 7,
			image: {
				print: {
					full: {
						src:
							baseImgUri +
							'v1548636127/Delicate%20Dust/Favorite-Change-_ORIGINAL-SCAN.jpg',
					},
				},
				photo: [
					{
						id: '',
						src: '',
					},
				],
			},
			link: {
				fb: '',
				pintrest: '',
				instagram: '',
			},
			shop: {
				original: {
					inStock: true,
					link: '',
				},
				print: {
					inStock: true,
					link: '',
				},
			},
		},
		{
			id: '17',
			collectionId: '1',
			title: 'Bright Fade',
			description: '',
			medium: 'watercolor',
			material: 'paper',
			width: 5,
			height: 7,
			image: {
				print: {
					full: {
						src:
							baseImgUri +
							'v1548636124/Delicate%20Dust/Bright-Fade-_ORIGINAL-SCAN.jpg',
					},
				},
				photo: [
					{
						id: '',
						src: '',
					},
				],
			},
			link: {
				fb: '',
				pintrest: '',
				instagram: '',
			},
			shop: {
				original: {
					inStock: true,
					link: '',
				},
				print: {
					inStock: true,
					link: '',
				},
			},
		},
		{
			id: '18',
			collectionId: '1',
			title: 'Athens Stardust',
			description: '',
			medium: 'watercolor',
			material: 'paper',
			width: 5,
			height: 7,
			image: {
				print: {
					full: {
						src:
							baseImgUri +
							'v1548636123/Delicate%20Dust/Athens-Stardust-ORIGINAL-SCAN.jpg',
					},
				},
				photo: [
					{
						id: '',
						src: '',
					},
				],
			},
			link: {
				fb: '',
				pintrest: '',
				instagram: '',
			},
			shop: {
				original: {
					inStock: true,
					link: '',
				},
				print: {
					inStock: true,
					link: '',
				},
			},
		},
		{
			id: '19',
			collectionId: '3',
			title: 'Willow',
			description: '',
			medium: 'alcohol ink',
			material: 'canvas',
			width: 5,
			height: 7,
			image: {
				print: {
					full: {
						src: baseImgUri + 'v1548636136/Delicate%20Dust/Nature-Hug.jpg',
					},
				},
				photo: [
					{
						id: '',
						src: '',
					},
				],
			},
			link: {
				fb: '',
				pintrest: '',
				instagram: '',
			},
			shop: {
				original: {
					inStock: true,
					link: '',
				},
				print: {
					inStock: true,
					link: '',
				},
			},
		},
		{
			id: '20',
			collectionId: '3',
			title: 'Willow',
			description: '',
			medium: 'alcohol ink',
			material: 'canvas',
			width: 5,
			height: 7,
			image: {
				print: {
					full: {
						src:
							baseImgUri +
							'v1548636139/Delicate%20Dust/Night-Paths-_ORIGINAL-SCAN.jpg',
					},
				},
				photo: [
					{
						id: '',
						src: '',
					},
				],
			},
			link: {
				fb: '',
				pintrest: '',
				instagram: '',
			},
			shop: {
				original: {
					inStock: true,
					link: '',
				},
				print: {
					inStock: true,
					link: '',
				},
			},
		},
		{
			id: '21',
			collectionId: '3',
			title: 'Willow',
			description: '',
			medium: 'alcohol ink',
			material: 'canvas',
			width: 5,
			height: 7,
			image: {
				print: {
					full: {
						src: baseImgUri + 'v1548636136/Delicate%20Dust/Nature-Hug.jpg',
					},
				},
				photo: [
					{
						id: '',
						src: '',
					},
				],
			},
			link: {
				fb: '',
				pintrest: '',
				instagram: '',
			},
			shop: {
				original: {
					inStock: true,
					link: '',
				},
				print: {
					inStock: true,
					link: '',
				},
			},
		},
		{
			id: '22',
			collectionId: '4',
			title: 'Willow',
			description: '',
			medium: 'alcohol ink',
			material: 'canvas',
			width: 5,
			height: 7,
			image: {
				print: {
					full: {
						src: baseImgUri + 'v1548636136/Delicate%20Dust/Nature-Hug.jpg',
					},
				},
				photo: [
					{
						id: '',
						src: '',
					},
				],
			},
			link: {
				fb: '',
				pintrest: '',
				instagram: '',
			},
			shop: {
				original: {
					inStock: true,
					link: '',
				},
				print: {
					inStock: true,
					link: '',
				},
			},
		},
		{
			id: '23',
			collectionId: '4',
			title: 'Willow',
			description: '',
			medium: 'alcohol ink',
			material: 'canvas',
			width: 5,
			height: 7,
			image: {
				print: {
					full: {
						src:
							baseImgUri +
							'v1548636157/Delicate%20Dust/Warm-Wishes-ORIGINAL-SCAN.jpg',
					},
				},
				photo: [
					{
						id: '',
						src: '',
					},
				],
			},
			link: {
				fb: '',
				pintrest: '',
				instagram: '',
			},
			shop: {
				original: {
					inStock: true,
					link: '',
				},
				print: {
					inStock: true,
					link: '',
				},
			},
		},
		{
			id: '24',
			collectionId: '4',
			title: 'Willow',
			description: '',
			medium: 'acrylic',
			material: 'canvas',
			width: 5,
			height: 7,
			image: {
				print: {
					full: {
						src:
							baseImgUri +
							'v1548636139/Delicate%20Dust/Night-Paths-_ORIGINAL-SCAN.jpg',
					},
				},
				photo: [
					{
						id: '',
						src: '',
					},
				],
			},
			link: {
				fb: '',
				pintrest: '',
				instagram: '',
			},
			shop: {
				original: {
					inStock: true,
					link: '',
				},
				print: {
					inStock: true,
					link: '',
				},
			},
		},
		{
			id: '25',
			collectionId: '4',
			title: 'Willow',
			description: '',
			medium: 'acrylic',
			material: 'canvas',
			width: 5,
			height: 7,
			image: {
				print: {
					full: {
						src:
							baseImgUri +
							'v1548636157/Delicate%20Dust/Warm-Wishes-ORIGINAL-SCAN.jpg',
					},
				},
				photo: [
					{
						id: '',
						src: '',
					},
				],
			},
			link: {
				fb: '',
				pintrest: '',
				instagram: '',
			},
			shop: {
				original: {
					inStock: true,
					link: '',
				},
				print: {
					inStock: true,
					link: '',
				},
			},
		},
		{
			id: '26',
			collectionId: '4',
			title: 'Willow',
			description: '',
			medium: 'acrylic',
			material: 'canvas',
			width: 5,
			height: 7,
			image: {
				print: {
					full: {
						src: baseImgUri + 'v1548636136/Delicate%20Dust/Nature-Hug.jpg',
					},
				},
				photo: [
					{
						id: '',
						src: '',
					},
				],
			},
			link: {
				fb: '',
				pintrest: '',
				instagram: '',
			},
			shop: {
				original: {
					inStock: true,
					link: '',
				},
				print: {
					inStock: true,
					link: '',
				},
			},
		},
		{
			id: '27',
			collectionId: '2',
			title: 'Willow',
			description: '',
			medium: 'acrylic',
			material: 'canvas',
			width: 5,
			height: 7,
			image: {
				print: {
					full: {
						src: baseImgUri + 'v1548636136/Delicate%20Dust/Nature-Hug.jpg',
					},
				},
				photo: [
					{
						id: '',
						src: '',
					},
				],
			},
			link: {
				fb: '',
				pintrest: '',
				instagram: '',
			},
			shop: {
				original: {
					inStock: true,
					link: '',
				},
				print: {
					inStock: true,
					link: '',
				},
			},
		},
	],
};
