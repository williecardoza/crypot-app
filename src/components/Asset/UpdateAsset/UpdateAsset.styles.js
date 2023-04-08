import styled from "styled-components";
import { ReactComponent as ExitIcon } from "../../SVG/exitIcon.svg";
import { ReactComponent as GreenArrow } from "../../SVG/greenArrow.svg";

export const StyledExitIcon = styled(ExitIcon)`
  :hover {
    cursor: pointer;
  }
  @media (max-width: 1200px) {
    height: 23px;
    width: 23px;
  }
`;

export const StyledGreenArrow = styled(GreenArrow)`
  height: 6px;
  position: absolute;
  right: 10px;
  top: calc(50% - 0.2em);
  width: 20px;
`;

export const Button = styled.button`
  background: ${props =>
    props.greenBackground ? "#06D554" : props.theme.secondary};
  border: none;
  box-shadow: 0px 7px 50px -17px black;
  border-radius: 6px;
  color: ${props => (props.greenColor ? "#06D554" : props.theme.color)};
  font-size: 17px;
  font-weight: bold;
  padding: 20px 60px;
  :hover {
    cursor: pointer;
  }
  @media (max-width: 1200px) {
    padding: 10px 23px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
`;

export const CoinImageContainer = styled.div`
  align-items: center;
  background: ${props => props.theme.main};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  padding: 45px;
  @media (max-width: 1200px) {
    padding: 20px;
  }
`;

export const CoinContainer = styled.div`
  align-items: center;
  background: ${props => props.theme.secondary};
  box-shadow: 0px 7px 50px -17px black;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 45px;
  @media (max-width: 1200px) {
    padding: 20px;
  }
`;

export const CoinDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  gap: 15px;
`;

export const DollarSign = styled.span`
  color: ${props => props.theme.color};
  left: 18px;
  font-size: 18px;
  position: absolute;
  @media (max-width: 1200px) {
    left: 10px;
  }
`;

export const H2 = styled.h2`
  font-size: 28px;
  margin: 0 auto;
  @media (max-width: 1200px) {
    font-size: 25px;
  }
`;

export const H3 = styled.h3`
  font-size: 18px;
  margin: 0;
`;

export const Input = styled.input`
  background: ${props => props.theme.secondary};
  box-shadow: 0px 7px 50px -17px black;
  border: none;
  border-radius: 6px;
  color: ${props => props.theme.color};
  font-family: sans-serif;
  font-size: 18px;
  padding: 17px 32px;
  width: 350px;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  :focus {
    outline: solid #06d554;
  }
  :focus::placeholder {
    color: transparent;
  }
  &::placeholder {
    font-size: 18px;
    font-family: sans-serif;
  }
  @media (max-width: 1200px) {
    padding: 15px 20px;
    width: 100%;
  }
`;

export const InputContainer = styled.div`
  align-items: center;
  display: flex;
  position: relative;
`;

export const Image = styled.div`
  background: url(${props => props.image}) center center;
  background-size: cover;
  height: 48px;
  width: 48px;
`;

export const MiddleContainer = styled.div`
  display: flex;
  gap: 35px;
  justify-content: center;
  margin: 0 80px;
  @media (max-width: 1200px) {
    flex-direction: column;
    margin: 0 auto;
  }
`;

export const TopContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
`;

export const FloatingSpan = styled.span`
  color: ${props => (props.date ? "transparent" : props.theme.primary)};
  position: absolute;
  pointer-events: none;
  left: 20px;
  top: 18px;
  transition: 0.2s ease all;
  ${Input}:focus ~ & {
    top: -17px;
    font-size: 15px;
    color: ${props => props.theme.color};
  }
  @media (max-width: 1200px) {
    top: 25%;
  }
`;

export const UpdateAssetOverlay = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  background: rgba(0, 0, 0, 0.7);
  position: absolute;
  height: 100%;
  width: 100%;
  :hover {
    cursor: pointer;
  }
  z-index: 999;
`;

export const UpdateAssetContainer = styled.div`
  background: ${props => props.theme.secondary};
  box-shadow: 0px 0px 25px 5px black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 35px;
  padding: 35px;
  position: fixed;
  :hover {
    cursor: default;
  }
  @media (max-width: 1200px) {
    gap: 20px;
    padding: 10px;
  }
`;
