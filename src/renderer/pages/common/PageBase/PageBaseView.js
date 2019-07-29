import React from 'react';
import PageBaseStyles from './PageBaseStyles';

const PageBase = (props) => {
  const cs = PageBaseStyles();
  const { title, controls, body } = props;

  return (
    <div className={cs.container}>
      <header>
        <h1 className={cs.pageTitle}>{title}</h1>
        <div className={cs.controls}>{controls}</div>
      </header>
      <main>{body}</main>
    </div>
  );
};

export default PageBase;
