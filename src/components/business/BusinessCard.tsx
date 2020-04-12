import { FC } from 'react';
import { FiInstagram, FiPhone, FiGlobe, FiInfo } from 'react-icons/fi';
import { Business } from '../../types';
import ReactTooltip from 'react-tooltip';

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
    otherInformation,
    orderUrl,
    giftCardUrl,
  },
}) => {
  const orderOptions = hasRemoteOrders.split(',');

  return (
    <div className='bc_list-card'>
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
          <div>
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
          {otherInformation ? (
            <div style={{ color: 'var(--gray600)', margin: '12.8px 0px' }}>
              <FiInfo
                data-tip={otherInformation}
                data-effect='solid'
                data-background-color='var(--gray050)'
                data-text-color='var(--gray400)'
                data-border='true'
                data-border-color='var(--gray200)'
              />
              <ReactTooltip />
            </div>
          ) : null}
        </div>
        <div className='bc_list-actions support'>
          <a
            href={
              !orderOptions.includes('none')
                ? orderUrl
                : hasGiftCards
                ? giftCardUrl
                : instagramUrl
            }
            className='button'
          >
            {!orderOptions.includes('none')
              ? 'Order Now'
              : hasGiftCards
              ? 'Get a Gift Card'
              : 'Visit Website'}
          </a>
        </div>
        <div className='bc_list-actions'>
          <ul className='bc_list-actions__row'>
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
          </ul>
          <ul className='bc_list-actions__row'>
            {phoneNumber ? (
              <li>
                <a href={`tel:${phoneNumber}`}>
                  <FiPhone size={20} /> {phoneNumber}
                </a>
              </li>
            ) : null}
          </ul>
        </div>
      </div>
    </div>
  );
};

interface BusinessCardProps {
  business: Business;
}

export default BusinessCard;
