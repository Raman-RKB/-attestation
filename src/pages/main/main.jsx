import React, { useEffect, useState, useRef } from 'react';
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
  const [clickedPage, setClickedPage] = useState();
  const [SortAsc, setSortAsc] = useState(false);
  const [SortDesc, setSortDesc] = useState(false);
  const [searchButtonClicked, setSearchButtonClicked] = useState(false);
  setSearchButtonClicked
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);
  const previousClickedPageRef = useRef(clickedPage);

  const { data, error } = useGetUsersQuery({
    userName: !SortAsc && !SortDesc ? searchValue : '',
    page: !SortAsc && !SortDesc ? clickedPage : ''
  });

  const { data: usersSortAsc, error: usersSortAscErr } = useGetUsersByAscendingRepsQuantityQuery({
    userName: SortAsc ? searchValue : '',
    page: SortAsc ? clickedPage : ''
  });

  const { data: usersSortDesc, error: usersSortDescErr } = useGetUsersByDescendingRepsQuantityQuery({
    userName: SortDesc ? searchValue : '',
    page: SortDesc ? clickedPage : ''
  });

  const handlePageClick = async (event) => {
    const target = event?.target.textContent;
    setClickedPage(+target);
    if (error && !SortAsc && !SortDesc && data) {
      setClickedPage(previousClickedPageRef.current ? previousClickedPageRef.current : 1);
    } else if (SortAsc && usersSortAscErr) {
      setClickedPage(previousClickedPageRef?.current ? previousClickedPageRef.current : 1);
    } else if (SortDesc && usersSortDescErr) {
      setClickedPage(previousClickedPageRef?.current ? previousClickedPageRef.current : 1);
    }
    previousClickedPageRef.current = clickedPage;
  }

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

  const handleSearchInputChange = (event) => {
    setSearchInputValue(event.target.value);
  }

  const handleSearchClick = async (event, page) => {
    console.log(typeof (page), page, 'page')
    setSearchButtonClicked(+page === Number ? false : true);
    setSearchValue(searchInputValue);
    if (!SortAsc && !SortDesc) {
      const items = data?.items;
      dispatch(pushUsersToStore(items));
      setClickedPage(page && searchInputValue === searchValue ? +page : 1);
    } else if (SortAsc) {
      const items = usersSortAsc?.items;
      dispatch(pushUsersToStore(items));
      setClickedPage(page && searchInputValue === searchValue ? +page : 1);
    } else if (SortDesc) {
      const items = usersSortDesc?.items;
      dispatch(pushUsersToStore(items));
      setClickedPage(page && searchInputValue === searchValue ? +page : 1);
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

  //---------------Под вопросом надо это или нет-------------------------------------------------
  useEffect(() => {
    if (usersSortAsc?.total_count > 300) {
      setPageSet(pageSet && pageSet > 10 ? pageSet : 10);
      handleSearchClick(clickedPage ? clickedPage : 1);
    } else if (usersSortAsc?.total_count <= 30) {
      handleSearchClick(clickedPage ? clickedPage : 1);
      setPageSet(1);
    } else if (usersSortAsc?.total_count > 30 && usersSortAsc?.total_count < 300) {
      setPageSet(Math.ceil(usersSortAsc?.total_count / 30));
      handleSearchClick(clickedPage ? clickedPage : 1);
    }
  }, [usersSortAsc]);

  useEffect(() => {
    if (usersSortDesc?.total_count > 300) {
      setPageSet(pageSet && pageSet > 10 ? pageSet : 10);
      handleSearchClick(clickedPage ? clickedPage : 1);
    } else if (usersSortDesc?.total_count <= 30) {
      handleSearchClick(clickedPage ? clickedPage : 1);
      setPageSet(1);
    } else if (usersSortDesc?.total_count > 30 && usersSortDesc?.total_count < 300) {
      setPageSet(Math.ceil(usersSortDesc?.total_count / 30));
      handleSearchClick(clickedPage ? clickedPage : 1);
    }
  }, [usersSortDesc]);
  //-----------------------------------------------------------------------------------------------
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
    console.log(searchButtonClicked, 'searchButtonClicked')
    if (clickedPage === 1 && searchButtonClicked) {
      setPageSet()
    }
  }, [clickedPage]);

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
          disabled={data?.total_count <= 30 || data?.total_count - pageSet * 30 <= 0 || 1000 - pageSet * 30 <= 0 ? true : false}
        >Forward</ForwardButton>
      </PaginationContainer>
    </RootContainer>
  );
};

export default MyComponent;