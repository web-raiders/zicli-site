import React from 'react';
import PropTypes from 'prop-types';
import Instagram from './instagram';
import X from './x';
import Mail from './mail';
import Github from './github';

const SocialFill = ({ name }: any) => {
  switch (name) {
    case 'Instagram':
      return <Instagram />;
    case 'X':
      return <X />;
    case 'Mail':
      return <Mail />;
    case 'Github':
      return <Github />;
    default:
      return <div />;
  }
};

SocialFill.props = {
  name: PropTypes.string.isRequired,
};
export default SocialFill;
