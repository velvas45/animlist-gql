import React from "react";
import LazyLoad from "react-lazyload";
import styled from "@emotion/styled/macro";
import { keyframes } from "@emotion/react";

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const loadingAnimation = keyframes`
  0% {
    background-color: #fff;
  }
  50% {
    background-color: #ccc;
  }
  100% {
    background-color: #fff;
  }
`;

const Placeholder = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  animation: ${loadingAnimation} 1s infinite;
`;

const StyledImage = styled.img`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  :hover {
    transform: ${({ isAnimated }) => (isAnimated ? "scale(1.1)" : "none")};
    transition: ${({ isAnimated }) =>
      isAnimated
        ? "transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95)"
        : "none"};
  }
`;

const Image = ({ src, alt, isAnimated = false, onClick }) => {
  const refPlaceholder = React.useRef();

  const removePlaceholder = () => {
    refPlaceholder.current.remove();
  };

  return (
    <ImageWrapper onClick={onClick}>
      <Placeholder ref={refPlaceholder} />
      <LazyLoad>
        <StyledImage
          isAnimated={isAnimated}
          onLoad={removePlaceholder}
          onError={removePlaceholder}
          src={src}
          alt={alt}
        />
      </LazyLoad>
    </ImageWrapper>
  );
};

export default Image;
