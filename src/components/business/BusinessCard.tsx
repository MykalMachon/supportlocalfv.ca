import { FC } from 'react';
import { FiInstagram, FiPhone, FiGlobe } from 'react-icons/fi';
import { Business } from '../../types';

const BusinessCard: FC<BusinessCardProps> = ({
  business: {
    name,
    photoUrl,
    url,
    hours,
    city,
    instagramUrl,
    phoneNumber,
    hasGiftCards,
    hasRemoteOrders,
  },
}) => {
  const orderOptions = hasRemoteOrders.split(',');

  return (
    <li className='bc_list-card'>
      <div className='bc_list-card-pad'>
        <h3 className='bc_list-name'>{name}</h3>
        <p className='bc_list-location'>
          <span
            className={`bc_list-hours ${
              hours == 'closed'
                ? 'red'
                : hours == 'limited hours'
                ? 'yellow'
                : ''
            }`}
          >
            {hours}
          </span>{' '}
          - {city}
        </p>
      </div>
      <img
        src={photoUrl}
        loading='lazy'
        alt={`image of ${name}`}
        className='bc_list-img'
      />

      <div className='bc_list-card-pad'>
        <div className='bc_list-options'>
          <p className='bc_list-options__heading'>Order Options</p>
          <p className='bc_list-options__content'>
            {!orderOptions.includes('none') ? (
              orderOptions.map((option) => {
                return <span className='bc_list-tag'>{option}</span>;
              })
            ) : (
              <span className='bc_list-tag no'>none</span>
            )}
          </p>
          <p className='bc_list-options__heading'>Gift Cards</p>
          <p className='bc_list-options__content'>
            {hasGiftCards ? (
              <span className='bc_list-tag'>Available</span>
            ) : (
              <span className='bc_list-tag no'>None</span>
            )}
          </p>
        </div>
        <ul className='bc_list-actions'>
          <div className='bc_list-actions__row'>
            {instagramUrl ? (
              <li>
                <a href={instagramUrl}>
                  <FiInstagram size={20} /> Instagram
                </a>
              </li>
            ) : null}
            {url ? (
              <li>
                {' '}
                <a href={url}>
                  <FiGlobe size={20} /> Website
                </a>{' '}
              </li>
            ) : null}
          </div>
          <div className='bc_list-actions__row'>
            {phoneNumber ? (
              <li>
                <a href={`tel:${phoneNumber}`}>
                  <FiPhone size={20} /> {phoneNumber}
                </a>
              </li>
            ) : null}
          </div>
        </ul>
      </div>
    </li>
  );
};

interface BusinessCardProps {
  business: Business;
}

export default BusinessCard;
