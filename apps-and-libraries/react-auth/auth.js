import React from 'react';
import jwt from 'jsonwebtoken';
import PropTypes from 'prop-types';

import { LoginContext } from './context.js';

const If = props => {
  return !!props.condition ? props.children : null;
};

class Auth extends React.Component {
  render() {
    return (
      <LoginContext.Consumer>
        {context => {
          let user = context.token ? jwt.verify(context.token, 'changeit') : {};
          let okToRender =
            context.loggedIn &&
            (this.props.capability
              ? user.capabilities.includes(this.props.capability)
              : true);

          return <If condition={okToRender}>{this.props.children}</If>;
        }}
      </LoginContext.Consumer>
    );
  }
}

Auth.propTypes = {
  capability: PropTypes.string.isRequired,
};

export default Auth;
