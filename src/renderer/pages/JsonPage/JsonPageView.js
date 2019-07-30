import React from 'react';
import PageBase from 'Pages/common/PageBase';
import Controls from './Controls';
import Body from './Body';

const JsonPageView = () => (
  <PageBase title="Json Watchers" controls={<Controls />} body={<Body />} />
);

export default JsonPageView;
