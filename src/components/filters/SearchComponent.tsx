import { RootState } from '../../store';
import styled from 'styled-components';
import { imageData } from '../../interfaces';
import { SEARCH_HEIGHT } from '../../constants';
import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filteredData } from '../../store/FilteredDataSlice';

// Container for the search box
const SearchBoxContainer = styled.div`
  width: 350px;
  display: flex;
  height: ${SEARCH_HEIGHT}px;
  background: ${props => props.theme.bgLight};
  border-radius:100px;
  justify-content:center;
  &:hover {
    background-color: rgba(255, 255, 255, 0.15);
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.05);
  }
`;

// Styled input for the search box
const SearchInput = styled.input`
  flex:1;
  width:100%;
  color:white;
  border: none;
  outline: none;
  padding: 10px;
  font-size: 16px;
  background: transparent;
  &::placeholder {
    color:#CCC;
    text-align:center;
  }
`;

const SearchSVG = styled.svg`
  width: 7%;
  padding-left: 5px;
`;

/**
 * The search bar of application
 * Uses SVG for search icon
 * 
 * Rerives the orignal data from store and sets the filtered data in store
 */
export const SearchComponent: FC = () => {
  const [query, setQuery] = useState<string>('');
  const dispatch = useDispatch();
  const imgData: imageData[] = useSelector((state: RootState) => state.albumData.data);

  useEffect(() => {
    if (query.trim() === '') {
      dispatch(filteredData({ data: imgData, isLoaded: true }));
    } else {
      const lowerCaseQuery = query.toLowerCase();
      const data = imgData.filter((item) =>
        item.title.toLowerCase().includes(lowerCaseQuery)
      );
      dispatch(filteredData({ data, isLoaded: true }));
    }
  }, [dispatch, imgData, query]);

  return (
    <SearchBoxContainer>
      <SearchSVG viewBox="0 0 48 48">
        <path fill="#199be2" d="M35.983,32.448l-3.536,3.536l7.87,7.87c0.195,0.195,0.512,0.195,0.707,0l2.828-2.828	c0.195-0.195,0.195-0.512,0-0.707L35.983,32.448z"></path><radialGradient id="KGt2acGa95QyN2j07oBX6a_KPmthqkeTgDN_gr1" cx="20.024" cy="20.096" r="19.604" gradientUnits="userSpaceOnUse"><stop offset=".693" stopColor="#006185"></stop><stop offset=".921" stopColor="#35c1f1"></stop></radialGradient><polygon fill="url(#KGt2acGa95QyN2j07oBX6a_KPmthqkeTgDN_gr1)" points="31.601,28.065 28.065,31.601 32.448,35.983 35.983,32.448"></polygon><linearGradient id="KGt2acGa95QyN2j07oBX6b_KPmthqkeTgDN_gr2" x1="8.911" x2="31.339" y1="8.911" y2="31.339" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#a3ffff"></stop><stop offset=".223" stopColor="#9dfbff"></stop><stop offset=".53" stopColor="#8bf1ff"></stop><stop offset=".885" stopColor="#6ee0ff"></stop><stop offset="1" stopColor="#63daff"></stop></linearGradient><circle cx="20" cy="20" r="16" fill="url(#KGt2acGa95QyN2j07oBX6b_KPmthqkeTgDN_gr2)"></circle>
      </SearchSVG>
      <SearchInput type="search" placeholder="Search by Title..." value={query} onChange={(e) => setQuery(e.target.value)} />
    </SearchBoxContainer>
  );
};