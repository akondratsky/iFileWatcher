import React from 'react';
import PageBaseStyles from './PageBaseStyles';

const PageBase = (props) => {
  const css = PageBaseStyles();
  const { title, controls, body } = props;

  return (
    <div className={css.container}>
      <header>
        <h1 className={css.pageTitle}>{title}</h1>
        {controls && <div className={css.controls}>{controls}</div>}
      </header>
      <main className={css.main}>{body}</main>
    </div>
  );
};

export default PageBase;
