import { FC, useState, useEffect } from 'react';
import { Business } from '../../types';

const BusinessSearch: FC<BusinessSearchType> = ({
  filteredList,
  setFilteredList,
  initList,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (searchQuery.trim() == '') {
      setFilteredList(initList);
    } else {
      setFilteredList(
        initList.filter((biz) => {
          if (
            biz.name.includes(searchQuery) ||
            biz.city.includes(searchQuery) ||
            biz.category.includes(searchQuery)
          ) {
            return true;
          } else {
            return false;
          }
        })
      );
    }
  }, [searchQuery]);

  return (
    <input
      type="text"
      name="search"
      id="searchBusiness"
      className="bc_search"
      onChange={(e) => {
        setSearchQuery(e.target.value);
      }}
    />
  );
};

interface BusinessSearchType {
  initList: Array<Business>;
  filteredList: Array<Business>;
  setFilteredList: Function;
}

export default BusinessSearch;
