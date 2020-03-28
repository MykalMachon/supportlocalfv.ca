import { FC } from 'react';
import { FiInstagram, FiPhone, FiGlobe } from 'react-icons/fi';
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
        <p className="bc_list-location">{city}</p>
        <div className="bc_list-options">
          <p className="bc_list-options__heading">Gift Cards</p>
          <p className="bc_list-options__heading">Order Options</p>
        </div>
        <ul className="bc_list-actions">
          <li>
            <FiInstagram size={20} />
          </li>
          <li>
            <FiGlobe size={20} />
          </li>
          <li>
            <FiPhone size={20} />
          </li>
        </ul>
      </div>
    </li>
  );
};

interface BusinessCardProps {
  business: Business;
}

export default BusinessCard;
