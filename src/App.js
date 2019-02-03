import React, { PureComponent } from 'react';
import { Route } from 'react-router-dom';
import styles from './styles';
import Header from './components/Header';
import ViewToggle from './components/ViewToggle';
import Navigation from './components/Navigation';
import Main from './components/Main';
import './App.less';

let appRouter;
const app = {
	maxWidth: styles.appMaxWidth,
	margin: '0 auto',
};
class App extends PureComponent {
	state = {
		isNavOpen: false,
		activeArtId: undefined,
	};

	handleSetActiveArt = (imgId, router) => {
		if (router) {
			appRouter = router;
		}

		if (imgId) {
			appRouter.history.replace(`/${imgId}`);
		} else {
			appRouter.history.replace('/');
		}

		this.setState({
			activeArtId: imgId,
		});
	};

	handleToggleNav = () =>
		this.setState({
			isNavOpen: !this.state.isNavOpen,
		});

	render() {
		const { isNavOpen, activeArtId } = this.state;

		return (
			<div css={app}>
				<Header activeArtId={activeArtId} />
				<ViewToggle
					onToggleNav={this.handleToggleNav}
					onSetActiveArt={this.handleSetActiveArt}
					isNavOpen={isNavOpen}
					activeArtId={activeArtId}
				/>
				<Navigation onToggleNav={this.handleToggleNav} isNavOpen={isNavOpen} />
				<Route
					render={() => (
						<Main
							onSetActiveArt={this.handleSetActiveArt}
							onToggleNav={this.handleToggleNav}
							isNavOpen={isNavOpen}
							activeArtId={activeArtId}
						/>
					)}
				/>
			</div>
		);
	}
}

export default App;
