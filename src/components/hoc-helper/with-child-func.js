import React from 'react';

const withChildFunc = (Wrappered, fn) => (props) => <Wrappered {...props}>{fn}</Wrappered>

export default withChildFunc;