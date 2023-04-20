import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Pagination from './pagination';
import User from './user';
import UserList from './UserList';
import { useGetUsersQuery } from '../../services/servises';
import { useGetUsersByAscendingRepsQuantityQuery } from '../../services/servises';
import { useGetUsersByDescendingRepsQuantityQuery } from '../../services/servises';
import { pushUsersToStore } from '../../Store/store';

import {
  RootContainer,
  SearchContainer,
  SearchInput,
  SearchButton,
  BackButton,
  ForwardButton,
  PaginationContainer,
  PaginationPageNumberContainer,
  UserListContainer,
  SortContainer,
  RadioButtonContainer
} from './css/styles';

const MyComponent = () => {
  const [searchInputValue, setSearchInputValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [pageSet, setPageSet] = useState();
  const [clickedPage, setClickedPage] = useState(1);
  const [SortAsc, setSortAsc] = useState(false);
  const [SortDesc, setSortDesc] = useState(false);
  const { data, error } = useGetUsersQuery({ userName: searchValue, page: clickedPage });
  const { data: usersSortAsc, error: usersSortAscErr } = useGetUsersByAscendingRepsQuantityQuery({ userName: searchValue, page: clickedPage });
  const { data: usersSortDesc, error: usersSortDescErr } = useGetUsersByDescendingRepsQuantityQuery({ userName: searchValue, page: clickedPage });
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);

  const handleForwardButtonClick = (event) => {
    event.preventDefault()
    if (data?.total_count - pageSet * 30 > 300 && 1000 - pageSet * 30 > 300) {
      setPageSet(pageSet + 10);
    } else if (data?.total_count - pageSet * 30 <= 30) {
      setPageSet(pageSet + 1);
    } else if (data?.total_count - pageSet * 30 > 30 &&
      data?.total_count - pageSet * 30 < 300 || 1000 - pageSet * 30 < 300) {
      setPageSet(Math.ceil(data?.total_count <= 1000 ? (data?.total_count / 30) : (1000 / 30)));
    }
  }

  const handleBackButtonClick = (event) => {
    event.preventDefault()
    setPageSet(pageSet % 10 === 0 ? pageSet - 10 : Math.floor(pageSet / 10) * 10);
  }

  const handlePageClick = (event) => {
    const target = event.target.textContent;
    if (!error && !SortAsc && !SortDesc) {
      setClickedPage(+target);
    } else if (SortAsc && !usersSortAscErr) {
      setClickedPage(+target);
    } else if (SortDesc && !usersSortDescErr) {
      setClickedPage(+target);
    }
  }

  const handleSearchInputChange = (event) => {
    setSearchInputValue(event.target.value);
  }

  const handleSearchClick = async (page) => {
    setSearchValue(searchInputValue);
    if (!SortAsc && !SortDesc) {
      const items = data?.items;
      dispatch(pushUsersToStore(items));
      setClickedPage(page ? +page : 1);
    } else if (SortAsc) {
      const items = usersSortAsc?.items;
      dispatch(pushUsersToStore(items));
      setClickedPage(page ? +page : 1);
    } else {
      const items = usersSortDesc?.items;
      dispatch(pushUsersToStore(items));
      setClickedPage(page ? +page : 1);
    }
  };

  const sortByAscending = () => {
    if (!SortAsc) {
      setClickedPage(1);
    }
    setSortAsc(true);
    setSortDesc(false);
    const items = usersSortAsc?.items
    dispatch(pushUsersToStore(items));
  }

  const sortByDescending = () => {
    if (!SortDesc) {
      setClickedPage(1);
    }
    setSortDesc(true);
    setSortAsc(false);
    const items = usersSortDesc?.items
    dispatch(pushUsersToStore(items));
  }

  useEffect(() => {
    if (data?.total_count > 300) {
      setPageSet(pageSet && pageSet > 10 ? pageSet : 10);
      handleSearchClick(clickedPage ? clickedPage : 1);
    } else if (data?.total_count <= 30) {
      handleSearchClick(clickedPage ? clickedPage : 1);
      setPageSet(1);
    } else if (data?.total_count > 30 && data?.total_count < 300) {
      setPageSet(Math.ceil(data?.total_count / 30));
      handleSearchClick(clickedPage ? clickedPage : 1);
    }
  }, [data]);

  useEffect(() => {
    if (SortAsc) {
      sortByAscending()
    }
  }, [usersSortAsc]);

  useEffect(() => {
    if (SortDesc) {
      sortByDescending()
    }
  }, [usersSortDesc]);

  useEffect(() => {
    console.log(pageSet, typeof (pageSet), 'pageSet,typeof(pageSet)');
  }, [pageSet]);

  return (
    <RootContainer>
      <SearchContainer>
        <SearchInput
          type="search"
          placeholder="Поиск"
          onChange={handleSearchInputChange}
        />
        <SearchButton onClick={handleSearchClick}>Search</SearchButton>
      </SearchContainer>
      <SortContainer display={users.length ? 'block' : 'none'}>
        <h3>Сортировать по количеству репозиториев:</h3>
        <RadioButtonContainer>
          <input
            type="radio"
            id="asc"
            name="sortOrder"
            value="asc"
            onChange={sortByAscending}
          />
          <label htmlFor="asc">По возрастанию</label>
          <input
            type="radio"
            id="desc"
            name="sortOrder"
            value="desc"
            onChange={sortByDescending}
          />
          <label htmlFor="desc">По убыванию</label>
        </RadioButtonContainer>
      </SortContainer>
      <UserListContainer>
        <>
          {users && users?.map((user) => (
            // eslint-disable-next-line react/jsx-key
            <UserList
              key={user.id}
              login={user.login}
            />
          ))}
        </>
      </UserListContainer>

      <User></User>
      <PaginationContainer>
        <BackButton onClick={handleBackButtonClick} disabled={pageSet <= 10 ? true : false}>Back</BackButton>
        <PaginationPageNumberContainer onClick={handlePageClick}>
          <>
            {pageSet && (
              // eslint-disable-next-line react/jsx-key
              <Pagination
                key={pageSet}
                pageSet={pageSet}
                clickedPage={clickedPage}
              />
            )}
          </>
        </PaginationPageNumberContainer>
        <ForwardButton
          onClick={handleForwardButtonClick}
          disabled={data?.total_count - pageSet * 30 <= 300 && 1000 - pageSet * 30 <= 300 ? true : false}
        >Forward</ForwardButton>
      </PaginationContainer>
    </RootContainer>
  );
};

export default MyComponent;
