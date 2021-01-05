/**
 * desc: Can set link.
 */

import React from 'react';
import ImageFollow from 'react-image-follow';
import './demo.less';
import '../../assets/index.less';

const src =
  'https://github.com/image-component/gallery/blob/main/girl/3.jpg?raw=true';

const App = () => {
  return (
    <div className="demo">
      <ImageFollow
        href="https://github.com/image-component/react-image-follow"
        src={src}
        width={600}
        height={400}
      >
        <h1 style={{ color: '#fff' }}>Can Click</h1>
      </ImageFollow>
    </div>
  );
};

export default App;
