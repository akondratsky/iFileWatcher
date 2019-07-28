import React from 'react';
import PageBaseStyles from './PageBaseStyles';

const PageBase = (props) => {
  const cs = PageBaseStyles();

  return <div className={cs.container}>{props.children}</div>;
};

export default PageBase;
