import { FC } from 'react';
import { Business } from '../../types';

const BusinessCard: FC<BusinessCardProps> = ({
  business: { name, photoUrl, url, hours, city },
}) => {
  return (
    <li className="bc_list-card">
      <img src={photoUrl} alt="" className="bc_list-img" />
      <div className="bc_list-card-pad">
        <p
          className={`bc_list-hours ${
            hours == 'closed' ? 'red' : hours == 'limited hours' ? 'yellow' : ''
          }`}
        >
          {hours}
        </p>
        <h3 className="bc_list-name">{name}</h3>
        <p className="bc_lit-location">{city}</p>
      </div>
    </li>
  );
};

interface BusinessCardProps {
  business: Business;
}

export default BusinessCard;
