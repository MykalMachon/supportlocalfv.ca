import { FC, useState, useEffect } from 'react';
import { Business } from '../../types';
import { FiSearch } from 'react-icons/fi';

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
    <div className="input-icon bc_search">
      <FiSearch />
      <input
        type="text"
        name="search"
        id="searchBusiness"
        placeholder="Search by name, city, and category..."
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
      />
    </div>
  );
};

interface BusinessSearchType {
  initList: Array<Business>;
  filteredList: Array<Business>;
  setFilteredList: Function;
}

export default BusinessSearch;
