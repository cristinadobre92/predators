import React from 'react';
import PropTypes from 'prop-types';
import { IndexPageTemplate } from '../../templates/index-page';

const IndexPagePreview = ({ entry, getAsset, widgetFor }) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    return (
      <IndexPageTemplate
        content={widgetFor('body')}
        image={getAsset(data.image)}
        title={data.title}
        heading={data.heading}
        subheading={data.subheading}
        description={data.description}
        intro={data.intro || { blurbs: [] }}
        mainpitch={data.mainpitch || {}}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
  widgetFor: PropTypes.func,
};

export default IndexPagePreview;
