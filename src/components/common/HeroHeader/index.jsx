import React from "react"
import { HeroHeaderBox, HeroHeaderText, HeroHeaderImg } from './styles.js'

export function HeroHeader({
    backgroundImage,
    afterOpacity,
    image,
    headerBg,
    children,
    bgImage,
    HeroHeight,
    HeroWidthMedia,
    HeroHeightMedia,
    HeroBrandName,
    HeroSubName,
    small }) {
    return (
        <HeroHeaderBox small={small}>
            <HeroHeaderImg image={bgImage} />
            <HeroHeaderText small={small}>
                <h2>{HeroBrandName}</h2>
                <h4>{HeroSubName}</h4>
            </HeroHeaderText>

        </HeroHeaderBox>
    )
}

