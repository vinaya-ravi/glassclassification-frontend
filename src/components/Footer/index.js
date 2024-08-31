import React from 'react'
import { capgLogo as Img } from '../../common/imageUrls'; 

import { FooterContainer, FooterWrap, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights } from './FooterElements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                    Glass Type Analysis and Classification Using Machine Learning
                        <WebsiteRights>
                            Empirical Project © {new Date().getFullYear()}
                            &nbsp;All Rights Reserved
                        </WebsiteRights>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    );
}

export default Footer
