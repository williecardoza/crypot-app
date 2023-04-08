import React, { useState, useRef, useEffect } from "react";
import { SearchCoin, updateCurrentMobilePage } from "../../store/app/actions";
import { useHistory } from "react-router-dom";
import {
  Img,
  Li,
  ModalOverlay,
  OverviewIcon,
  PortfolioIcon,
  SearchIcon,
  SearchInput,
  SearchContainer,
  SummaryIcon,
  StyledExitIcon,
  StyledLink,
  StyledNavLink,
  Page,
  Ul,
  Wrapper,
} from "./MobileFooter.styles";
import { useDispatch, useSelector } from "react-redux";

const MobileFooter = () => {
  const [mobileSummary, setMobileSummary] = useState(false);
  const [mobileSearch, setMobileSearch] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const coinList = useSelector(state => state.portfolio.coinList);
  const currentMobilePage = useSelector(state => state.app.currentMobilePage);
  const filteredCoinList = useSelector(state => state.app.filteredCoinList);
  const input = useRef(null);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSearch = e => {
    e.preventDefault();
    history.replace("", null);
    history.replace(`coin/${inputValue}`);
    setInputValue("");
  };

  useEffect(() => {
    if (mobileSearch) {
      input.current.focus();
    }
  }, [mobileSearch]);

  return (
    <Wrapper>
      {mobileSummary && (
        <ModalOverlay>
          <StyledExitIcon onClick={() => setMobileSummary(false)} />
          <Ul>
            {coinList.map((coin, index) => {
              return (
                <Li key={index}>
                  <Img src={coin.image} />
                  <StyledLink
                    onClick={e => {
                      setMobileSummary(false);
                    }}
                    to={`/coin/${coin.id}`}
                  >
                    {coin.id}
                  </StyledLink>
                </Li>
              );
            })}
          </Ul>
        </ModalOverlay>
      )}

      {mobileSearch && (
        <ModalOverlay>
          <StyledExitIcon onClick={() => setMobileSearch(false)} />
          <SearchContainer>
            <form onSubmit={e => handleSearch(e)}>
              <SearchInput
                onChange={e => {
                  dispatch(SearchCoin(e.target.value));
                  setInputValue(e.target.value);
                }}
                placeholder="Search"
                ref={input}
              />
            </form>
            <Ul>
              {inputValue && filteredCoinList.length >= 1
                ? filteredCoinList.map((coin, index) => {
                    return (
                      <Li key={index}>
                        <StyledLink
                          onClick={e => {
                            setMobileSearch(false);
                            setInputValue("");
                          }}
                          to={`/coin/${coin.id}`}
                        >
                          {coin.id}
                        </StyledLink>
                      </Li>
                    );
                  })
                : ""}
            </Ul>
          </SearchContainer>
        </ModalOverlay>
      )}

      <StyledNavLink
        onClick={() => {
          dispatch(updateCurrentMobilePage("Overview"));
          setMobileSummary(false);
          setMobileSearch(false);
        }}
        to="/"
      >
        <OverviewIcon page={"Overview"} currentmobilepage={currentMobilePage} />
        <div>Overview</div>
      </StyledNavLink>
      <StyledNavLink
        onClick={() => {
          dispatch(updateCurrentMobilePage("Portfolio"));
          setMobileSummary(false);
          setMobileSearch(false);
        }}
        to="/Portfolio"
      >
        <PortfolioIcon
          page={"Portfolio"}
          currentmobilepage={currentMobilePage}
        />
        <div>Portfolio</div>
      </StyledNavLink>
      <Page
        onClick={() => {
          dispatch(updateCurrentMobilePage("Summary"));
          setMobileSummary(true);
          setMobileSearch(false);
        }}
      >
        <SummaryIcon page={"Summary"} currentmobilepage={currentMobilePage} />
        <div>Summary</div>
      </Page>
      <Page
        onClick={() => {
          dispatch(updateCurrentMobilePage("Search"));
          setMobileSummary(false);
          setMobileSearch(true);
        }}
      >
        <SearchIcon page={"Search"} currentmobilepage={currentMobilePage} />
        <div>Search</div>
      </Page>
    </Wrapper>
  );
};
export default MobileFooter;
