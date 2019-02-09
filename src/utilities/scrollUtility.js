export default {
	startScrollListener: (tolerance, onHandleScroll) => {
		let hasScrolled = false;
		let lastScrollTop = window.scrollY;

		const handleScroll = () => {
			if (hasScrolled) {
				checkY();
			} else {
				hasScrolled = true;
				handleScroll();
			}
		};

		const checkY = () => {
			const pageY = window.scrollY;
			if (
				pageY > lastScrollTop + tolerance ||
				(pageY + tolerance < lastScrollTop || pageY <= 0)
			) {
				window.removeEventListener('scroll', handleScroll);
				onHandleScroll();
			}
			lastScrollTop = pageY;
			hasScrolled = false;
		};

		window.addEventListener('scroll', handleScroll);
	},
};
