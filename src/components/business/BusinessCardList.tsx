import { FC, useState, useEffect } from 'react';
import BusinessCard from './BusinessCard';
import { Business } from '../../types';
import BusinessSearch from './BusinessSearch';

const BusinessCardList: FC<BusinessCardListProps> = ({ bizlist }) => {
  const [list, setList] = useState(bizlist);
  const [filteredList, setFilteredList] = useState(bizlist);

  return (
    <article className='bc_container'>
      <BusinessSearch
        initList={list}
        filteredList={filteredList}
        setFilteredList={setFilteredList}
      />
      <div className='bc_list'>
        {filteredList.map((biz) => {
          return <BusinessCard key={biz.id} business={biz} />;
        })}
      </div>
    </article>
  );
};

interface BusinessCardListProps {
  bizlist: Array<Business>;
}

export default BusinessCardList;
