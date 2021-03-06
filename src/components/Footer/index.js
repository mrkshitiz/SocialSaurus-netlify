import styled from "styled-components";
import Instagram from "../../assets/instagram-square-brands.svg";
import Gmail from "../../assets/envelope-open-solid.svg";

const FOOTER = styled.footer`
  padding: 1.2rem calc(2.5rem + 2.5vw);
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only Screen and (max-width: 48em) {
    flex-direction: column;
    align-items: center;
    div {
      &:first-child {
        margin-bottom: 1rem;
      }
    }
  }
`;
const RightText = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 1.5rem;
    height: 1.5rem;
    margin-left: 1rem;
    filter: invert(100%);
    transition: all 0.2s ease-in-out;
  }
  a {
    &:hover {
      img {
        transform: scale(1.5);
        filter: invert(50%) sepia(100%) saturate(500%) hue-rotate(216deg)
          brightness(100%) contrast(97%);
      }
    }
  }
`;
const LeftText = styled.div`
  text-align: left;
`;
const Footer = () => {
  return (
    <FOOTER>
      <LeftText>
        © 2022 Built and Design by{" "}
        @SocialSaurus
      </LeftText>
      <RightText>
        Reach out to me via 
        <a href="https://amzn.to/3oSRV2k/">
          <img src={Instagram} alt="Instagram" />
        </a>
        &nbsp;
        <a href="https://amzn.to/33pjSr2"  target="_blank">
        {/* <a href="mailto:kshitiz.agarwal45@gmail.com?subject=Email From socialsaurus.in"> */}
          <img src={Gmail} alt="Gmail" />
        </a>
        <a href="https://www.amazon.in/dp/B09QM52L88?&linkCode=ll1&tag=kshitiz02d-21&linkId=12a51578701020792ee4aa0069bf375f&language=en_IN&ref_=as_li_ss_tl"  target="_blank">
          <img src={Instagram} alt="Instagram" />
        </a>


      </RightText>
    </FOOTER>
  );
};

export default Footer;

//© 2021 by SocialSaurus. Design by @SocialSaurus.
