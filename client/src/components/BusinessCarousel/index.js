import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

// import images here
import Logo1 from '../../assets/Business/WhiteRiskIntel.png';
import Logo2 from '../../assets/Business/WhiteMayfair.png';
import Logo3 from '../../assets/Business/WhiteAccrediNation.png';

const items = [
  {
    src: Logo1,
    altText: 'Slide 1',
    caption: '',
    header: '',
    key: '1'
  },
  {
    src: Logo2,
    altText: 'Slide 2',
    caption: '',
    header: '',
    key: '2'
  },
  {
    src: Logo3,
    altText: 'Slide 3',
    caption: '',
    header: '',
    key: '3'
  }
];

const BusinessCarousel = () => <UncontrolledCarousel items={items} />;

export default BusinessCarousel;