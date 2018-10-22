import React, { Component } from 'react';

const navToggleWrap = {
    position: 'fixed',
    right: '10px',
    top: '12px',
    zIndex: '3',
    transition: 'transform 120ms ease-in-out',

    '.navToggle': {
        position: 'relative',
        width: '38px',
        height: '32px',
        transform: 'rotate(0deg)',
        cursor: 'pointer',
        transition: '.5s ease-in-out',

        span: {
          position: 'absolute',
          display: 'block',
          height: '5px',
          background: 'black',
          opacity: '1',
          transition: '.25s ease-in-out',
        }
    },
  }

class NavToggle extends Component {
    // state = {
    //     translateY: 0,
    //     lastScrollY: 0,
    //   };

    //   componentWillMount() {
    //     window.addEventListener('scroll', this.handleScroll);
    //   }

    //   componentWillUnmount() {
    //     window.removeEventListener('scroll', this.handleScroll);
    //   }

    //   handleScroll = () => {
    //     console.log('scroll')

    //     const { lastScrollY } = this.state; 
    //     const currentScrollY = window.scrollY;
    //     const startHideY = 12;

    //     if (currentScrollY > startHideY && currentScrollY > lastScrollY) {
    //       this.setState({ translateY: '-50px' });
    //     } else {
    //       this.setState({ translateY: '0px' });
    //     }

    //     this.setState({ lastScrollY: currentScrollY });
    //   };

    state = {
        downTolerance: 8,
        hasScrolled: false,
        lastScrollTop: 0,
        translateY: '0px',
    };

    componentWillMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    checkY = () => {
        const pageY= window.scrollY;

        if (pageY > (this.state.lastScrollTop + this.state.downTolerance)) {
            this.setState({ translateY: '-50px' })
        } else if (pageY < this.state.lastScrollTop || pageY <= 0) {
            this.setState({ translateY: '0px' })
        }

        this.setState({ lastScrollTop: pageY });
        this.setState({ hasScrolled: false })
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
        const isNavOpen = this.props.isNavOpen;

        return (
            <div
                css={{ 
                    ...navToggleWrap,
                    transform: `translate(0, ${!isNavOpen && this.state.translateY})`,
                }}
                onClick={this.props.toggleNav}
            >
                <div
                    className='navToggle'
                >
                    <span
                        css={{
                            top: `${isNavOpen ? '11px' : '0'}`,
                            width: `${isNavOpen ? '0%' : '100%'}`,
                            left: `${isNavOpen ? '50%' : '0'}`,
                        }}
                    />
                    <span
                        css={{
                            top: '11px',
                            width: '100%',
                            transform: `${isNavOpen ? 'rotate(45deg)' : 'rotate(0deg)'}`
                        }}
                    />
                    <span
                        css={{
                            top: '11px',
                            width: '100%',
                            transform: `${isNavOpen ? 'rotate(-45deg)' : 'rotate(0deg)'}`
                        }}
                    />
                    <span
                        css={{
                            top: `${isNavOpen ? '11px' : '22px'}`,
                            width: `${isNavOpen ? '0%' : '100%'}`,
                            left: `${isNavOpen ? '50%' : '0'}`,
                        }}
                    />
                </div>
            </div>
        );
    }
}

export default NavToggle;
