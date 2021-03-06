import React, { useContext } from 'react';
import { Link } from "gatsby"
import { SectionTitle } from 'components/common'
import { ProductCardContainer, ProductCardIconsContainer, ProductCardPhoto, ProductCardIconsBox, ProductImg, ProductCardIcons, ProductIcon } from './styles';
import { ThemeContext } from 'providers/ThemeProvider';

import { ReactComponent as PriceIcon } from 'assets/product-props/price.svg'
import { ReactComponent as VatIcon } from 'assets/product-props/vat.svg'
import { ReactComponent as PetrolIcon } from 'assets/product-props/petrol.svg'
import { ReactComponent as RoadIcon } from 'assets/product-props/road.svg'

import { getImage } from 'gatsby-plugin-image'

import { Button, PropCard } from "components/common"

export const ProductCard = ({ children, bgImage, product, i }) => {
    const { themeMode } = useContext(ThemeContext);
    const even = i % 2 == 0

    const cardImage = getImage(bgImage)

    return (
        <>
            <ProductCardContainer
                css={`
            @media (min-width: ${({ theme }) => theme.device.m}) {
                align-self: ${even ? "flex-end" : "flex-start"};
            }

            @media (min-width: ${({ theme }) => theme.device.l}) {
                align-self: ${even ? "flex-end" : "flex-start"};
            }
            `}>

                <ProductCardIconsContainer
                    style={{
                        right: (even ? "0" : ""),
                        left: (even ? "" : "0")
                    }}>
                    <ProductCardIconsBox
                        style={{
                            position: "absolute",
                            bottom: 0,
                            right: (even ? "0" : ""),
                            left: (even ? "" : "0")
                        }}
                    >

                        <PropCard content={product.price + " pln"}>
                            <PriceIcon />
                        </PropCard>

                        <PropCard content={product.invoice ? "tak" : "nie"}>
                            <VatIcon />
                        </PropCard>

                        <PropCard content={product.petrol}>
                            <PetrolIcon />
                        </PropCard>

                        <PropCard content={product.rgb ? product.course + " rgb" : product.course + " km"}>
                            <RoadIcon />
                        </PropCard>
                    </ProductCardIconsBox>
                </ProductCardIconsContainer>

                <ProductCardPhoto
                    style={{
                        right: (even ? "" : "0"),
                        left: (even ? "0" : "")
                    }}
                >
                    <ProductImg image={cardImage} />
                    <SectionTitle
                        style={{
                            textAlign: (even ? "right" : "left"),
                        }}
                        productName>
                        <h4>{product.name}</h4>
                    </SectionTitle>



                    <Link
                        to={`/oferta/${product.slug}/`}>
                        <Button
                            themeMode={themeMode}
                            style={{
                                position: "absolute",
                                bottom: 0,
                                right: (even ? "" : "0"),
                                left: (even ? "0" : "")
                            }}
                        >sprawd??</Button>
                    </Link>

                </ProductCardPhoto>


            </ProductCardContainer>
        </>

    );
};
