import React, { useState, useEffect } from 'react'
import PropTypes from "prop-types";

import { Transition, StyledBottomNav, ButtonsBox } from "./styles"

import { Button } from "components/common"

export const BottomNav = () => {
    const [show, setShow] = useState(true)
    const [scrollPos, setScrollPos] = useState(0)

    const handleScroll = () => {
        setScrollPos(document.body.getBoundingClientRect().top)
        setShow(document.body.getBoundingClientRect().top > scrollPos && (window.innerHeight + window.scrollY + 300) <= document.body.offsetHeight)
        /*         if (typeof window !== `undefined`) {
                    window.onscroll = function(ev) {
                        if ((window.innerHeight + window.scrollY + 300) >= document.body.offsetHeight) {
        
                            console.log("there is bottom of the page!")
                        }
        
                        
                    };
                } */

    }
    useEffect(() => {
        window.addEventListener(`scroll`, handleScroll)


        return () => window.removeEventListener(`scroll`, handleScroll)
    })

    useEffect(() => {
        if (typeof window !== `undefined`) {
            window.onscroll = function (ev) {
                if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 300) {
                    /* alert("you're at the bottom of the page"); */

                    setScrollPos(0)
                }
            };
        }
    }, [])
    /*       console.log(window.innerHeight + window.scrollY)
          console.log('window.innerHeight + window.scrollY')
          console.log(document.body.offsetHeight)
          console.log('document.body.offsetHeight') */
    return (
        <Transition>
            <StyledBottomNav className={show ? "active" : "hidden"}>
                <ButtonsBox>
                    <Button >
                        Zadzwoń
                    </Button>

                    <Button secondaryBlack>
                        Napisz
                    </Button>
                </ButtonsBox>
            </StyledBottomNav>
        </Transition>
    );

}

/*
export class BottomNav extends Component {
    static propTypes = {
        brand: PropTypes.shape({
            name: PropTypes.string.isRequired,
            to: PropTypes.string.isRequired
        }),
        links: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                to: PropTypes.string.isRequired
            })
        )
    };

    constructor(props) {
        super(props);
        this.state = {
            show: true,
            scrollPos: 0
        };
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll() {
        const { scrollPos } = this.state;
        this.setState({
            scrollPos: document.body.getBoundingClientRect().top,
            show: document.body.getBoundingClientRect().top > scrollPos
        });
    }

    render() {


        return (
            <Transition>
                <StyledBottomNav className={this.state.show ? "active" : "hidden"}>
                    <ButtonsBox>
                        <button fourth>
                            Zadzwoń
                        </button>

                        <button third>
                            Napisz
                        </button>
                    </ButtonsBox>
                </StyledBottomNav>
            </Transition>
        );
    }
}
 */