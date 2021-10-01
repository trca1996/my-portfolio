import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import useHover from "../../helper/useHover";
import copy from "copy-to-clipboard";
import useIsTouchDevice from "../../helper/useIsTouchDevice";

const CopyButton = ({ Icon, buttonText }) => {
  const [hovering, hoverProps] = useHover();
  const [copyText, setCopyText] = useState(null);
  const isTouch = useIsTouchDevice();

  const onCopyText = (e) => {
    setCopyText(e.target.closest(".buttonEmail").value);
    copy(e.target.closest(".buttonEmail").value);
  };

  useEffect(() => {
    if (copyText) {
      const timer = setTimeout(() => {
        setCopyText(null);
      }, 2500);

      return () => {
        clearTimeout(timer);
      };
    }
  });

  return (
    <Button
      className="buttonEmail"
      value={buttonText}
      {...hoverProps}
      onClick={onCopyText}
    >
      <div></div>
      {Icon && <Icon fontSize="large" />}
      {copyText
        ? "Copied!"
        : hovering
        ? isTouch
          ? buttonText
          : "Copy to clipboard"
        : buttonText}
    </Button>
  );
};

const Button = styled.button`
  font-family: "Poppins", sans-serif;
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 1.2rem 2.5rem;
  gap: 1rem;
  font-weight: 500;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.textColor};
  outline: none;
  border: none;
  filter: ${({ theme }) => theme.filter.shadowSmall};
  transition: all 0.15s;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.secondary};
  min-width: 29rem;
  position: relative;

  @media (hover: hover) {
    &:hover {
      transform: translateY(-3px);
      filter: ${({ theme }) => theme.filter.shadowBig};
    }

    &:active {
      transform: translateY(-1.5px);
      filter: ${({ theme }) => theme.filter.shadowMedium};
    }
  }

  div {
    height: 100%;
    width: 0;
    position: absolute;
    left: 0;
    background-color: ${({ theme }) => theme.colors.primary};
    transition: width 0.3s;
    z-index: -1;
  }

  &:hover > div {
    width: 100%;
  }
`;

export default CopyButton;
