import React from 'react';
import { graphql, useStaticQuery } from "gatsby";

import { Wrapper, ProductsWrapper, OffersWrapper, OfferContentBox, ProductsSectionWrapper } from './styles';
import { SectionTitle } from 'components/common'

import { getImage } from 'gatsby-plugin-image'
import { ProductCard } from 'components/product'
import { Hr } from 'components/common'


export const Offer = () => {

    const { img, productData } = useStaticQuery(
        graphql`
    query {
    
        productData:  allItemsDataJson {
        nodes {
          slug
          name
          price
          invoice
          petrol
          course
          rgb

          mainImage {
            childImageSharp {
                gatsbyImageData(
                    quality: 60, 
                    webpOptions: {quality: 75})
                }
          
          }
        }
      }
    }
    `
    );

    return (
        <Wrapper id="offer" >

            <OffersWrapper secondary>
                <SectionTitle black>
                    <h4>Oferta</h4>
                </SectionTitle>
                <OfferContentBox>
                    <p>W swojej ofercie dysponujemy pojazdami mechanicznymi różnych marek. Z reguły są to importowane samochody oraz urządzenia budowlane.</p>
                    <p>Po zakupie każdy z pojazdów jest gruntownie weryfikowany przez oko wyspecjalizowanego mechanika.</p>
                    <em>Serdecznie zapraszamy do zapoznania się z naszą ofertą.</em>
                </OfferContentBox>

            </OffersWrapper>
            <ProductsSectionWrapper>



                <ProductsWrapper secondary>
                    {productData.nodes.map((product, i) => {
                        const mainImage = getImage(product.mainImage.childImageSharp.gatsbyImageData);
                        return (
                            <>
                                <ProductCard key={i} product={product} bgImage={product.mainImage.childImageSharp.gatsbyImageData} i={i} />
                            </>


                        )
                    })}



                </ProductsWrapper>
                <SectionTitle black
                    css={`
                position: absolute;
                bottom: 0;
                right: 0;
                `}>
                    <h4>Dostępne maszyny</h4>
                </SectionTitle>
            </ProductsSectionWrapper>
        </Wrapper>


    );
};
