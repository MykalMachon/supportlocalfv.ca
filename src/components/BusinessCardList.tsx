import { FC } from 'react';
import BusinessCard from './BusinessCard';
import { Business } from '../types';

const BusinessCardList: FC<BusinessCardListProps> = ({ bizlist }) => {
  return (
    <ul className="businesses">
      {bizlist.map((biz) => {
        return <BusinessCard key={biz.id} business={biz} />;
      })}
    </ul>
  );
};

interface BusinessCardListProps {
  bizlist: Array<Business>;
}

export default BusinessCardList;
