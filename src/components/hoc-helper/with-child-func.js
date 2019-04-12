import React from 'react';

const withChildFunc = (fn) => (Wrappered) => (props) => <Wrappered {...props}>{fn}</Wrappered>

export default withChildFunc;