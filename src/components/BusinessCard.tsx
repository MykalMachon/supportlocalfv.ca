import { FC } from 'react';
import { Business } from '../types';

const BusinessCard: FC<BusinessCardProps> = ({
  business: { name, photoUrl, url },
}) => {
  return (
    <li className="businessCard">
      <img src={photoUrl} alt="" className="businessCard_featureImg" />
      <h3 className="businessCard_name">{name}</h3>
    </li>
  );
};

interface BusinessCardProps {
  business: Business;
}

export default BusinessCard;
