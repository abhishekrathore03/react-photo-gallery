import { RootState } from '../store';
import styled from 'styled-components';
import { FC, useEffect, useState } from 'react';
import { imageData } from '../interfaces/interface';
import { useDispatch, useSelector } from 'react-redux';
import { filteredData } from '../store/FilteredDataSlice';

// Container for the search box
const SearchBoxContainer = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  margin: 0 auto;
  max-width: 400px;
  border-radius: 5px;
  align-items: center;
  background-color: #333;
`;

// Styled input for the search box
const SearchInput = styled.input`
  flex: 1;
  color: #fff;
  border: none;
  outline: none;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  background-color: #555;

  &::placeholder {
    color: #ccc;
  }
`;

// Search icon wrapper
const SearchIcon = styled.div`
  display: flex;
  color: #ff6600;
  margin-right: 10px;
  align-items: center;
  
  svg {
    fill: #ff6600;
    width: 20px;
    height: 20px;
  }
`;

export const SearchComponent: FC = () => {
  const [query, setQuery] = useState('');
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
      <SearchIcon>
        <svg viewBox="0 0 24 24">
          <path d="M23.707 22.293l-6.519-6.519a9.456 9.456 0 002.227-6.042C19.415 4.66 15.755 1 11.208 1S3 4.66 3 9.207s3.66 8.207 8.207 8.207c2.275 0 4.357-.878 5.919-2.32l6.519 6.519a1 1 0 001.414-1.414zM5 9.207C5 5.99 7.991 3 11.208 3c3.216 0 5.207 2.991 5.207 6.207S14.424 15.414 11.208 15.414C7.991 15.414 5 12.424 5 9.207z" />
        </svg>
      </SearchIcon>
      <SearchInput type="search" placeholder="Search for a title..." value={query} onChange={(e) => setQuery(e.target.value)} />
    </SearchBoxContainer>
  );
};