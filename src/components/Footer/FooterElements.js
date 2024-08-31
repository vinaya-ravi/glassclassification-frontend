import styled from "styled-components";

export const FooterContainer = styled.footer`
    background-color: #101522;
`;

export const FooterWrap = styled.div`
    padding: 48px, 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`;

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`;

export const SocialMediaWrap = styled.div`
color: #fff;
font-size: 2 rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 20px auto;

    @media screen and (max-width: 820px){
        flex-direction: column;
    }
`;

export const SocialLogo = styled.div`
    /* color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold; */
    img{
        height: 30px;
    }
`;

export const WebsiteRights = styled.small`
    color: #fff;
    margin-bottom: 16px;
`;