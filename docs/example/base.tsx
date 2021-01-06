/**
 * desc: Base show.
 */

import React from 'react';
import ImageFollow from 'react-image-follow';
import './demo.less';
import '../../assets/index.less';

const src =
  'https://github.com/image-component/gallery/blob/main/girl/1.jpg?raw=true';

const App = () => {
  return (
    <div className="demo">
      <ImageFollow src={src} height={400} />
    </div>
  );
};

export default App;
