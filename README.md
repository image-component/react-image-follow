# 🌈 react-image-follow

A React image component. The image follow with the mouse.

[![npm](https://img.shields.io/npm/v/react-image-follow?style=flat-square&color=orange)](https://www.npmjs.com/package/react-image-follow) [![dumi](https://img.shields.io/badge/docs%20by-dumi-blue?style=flat-square)](https://github.com/umijs/dumi) ![](https://github.com/image-component/react-image-follow/workflows/CI/badge.svg) ![](https://img.shields.io/github/last-commit/image-component/react-image-follow/main?color=%23722ed1&style=flat-square) [![codecov](https://codecov.io/gh/image-component/react-image-follow/branch/main/graph/badge.svg?token=PYD7S8BHOB)](https://codecov.io/gh/image-component/react-image-follow) ![](https://img.shields.io/npm/dt/react-image-follow?color=%23eb2f96&style=flat-square) ![](https://img.shields.io/npm/l/react-image-follow?style=flat-square&color=red)

## 📚 Example

Online: https://image-component.github.io/react-image-follow/

## 🌀 Template

https://github.com/one-template/react-component-template

## 📦 Install

```bash
npm i react-image-follow
# or
yarn add react-image-follow
```

## 🎉 Usage

```js
import Imagefollow from 'react-image-follow';
import 'react-image-follow/assets/index.css';

const src =
  'https://github.com/image-component/gallery/blob/main/girl/1.jpg?raw=true';

export default () => (
  <>
    <Imagefollow src={src} />
  </>
);
```

## 📔 API

| Property  | Description                         | Type          | Required | Default | Version |
| --------- | ----------------------------------- | ------------- | -------- | ------- | ------- |
| alt       | The alt of the image.               | string        | ✖        | -       | 1.0.0   |
| className | Component extra class.              | string        | ✖        | -       | 1.0.0   |
| radius    | The border radius of the component. | number        | ✖        | 8       | 1.0.0   |
| src       | The src of the image.               | string        | ✔        | -       | 1.0.0   |
| style     | Component extra style.              | CSSProperties | ✖        | -       | 1.0.0   |
| href      | Component click link                | string        | ✖        | -       | 1.0.0   |

## 🔨 Development

```
yarn
yarn start
```

## License

[MIT](https://github.com/image-component/react-image-follow/blob/main/LICENSE)
