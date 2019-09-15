import React, { Fragment } from 'react';
import dateFormat from 'dateformat';
import useStyles from './ConsoleOutputStyles';
import clsx from 'clsx';

const ConsoleOutputView = ({ messages }) => {
  const css = useStyles();
  const getTextSpan = (text, isError) => {
    const lines = text.split(/\n/);
    return (
      <span className={clsx({ [css.error]: isError })}>
        {lines.map((line, index) => (
          <Fragment key={`${index}_${line}`}>
            <span>{line}</span>
            {index === lines.length - 1 ? null : <br />}
          </Fragment>
        ))}
      </span>
    );
  };

  return (
    <div className={css.consoleOutput}>
      {messages.map(({ app, name, timestamp, text, isError }, index) => (
        <p className={css.message} key={`${timestamp}_${index}`}>
          [{app}][{name}][{dateFormat(timestamp, 'HH:MM:ss')}]: {getTextSpan(text, isError)}
        </p>
      ))}
    </div>
  );
};

export default ConsoleOutputView;
