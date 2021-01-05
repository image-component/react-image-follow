import * as React from 'react';
import classNames from 'classnames';

type ImageFollowProps = {
  alt?: string;
  className?: string;
  radius?: number;
  src: string;
  style?: React.CSSProperties;
  width?: number;
  height?: number;
  href?: string;
  children?: React.ReactNode;
};

export { ImageFollowProps };

const ImageFollow = (props: ImageFollowProps) => {
  const {
    alt,
    className,
    radius = 8,
    src,
    style,
    width = 300,
    height = 200,
    href,
    children,
  } = props;

  const [cardStyle, setCardStyle] = React.useState({});
  const [wrapperStyle, setWrapperStyle] = React.useState({});
  const [imgStyle, setImgStyle] = React.useState({});

  const cardRef = React.useRef<HTMLElement>();

  const cardBaseStyle = {
    width: `${width}px`,
    height: `${height}px`,
    borderRadius: `${radius}px`,
    ...style,
  };

  const wrapperBaseStyle = {
    borderRadius: `${radius}px`,
  };

  const imgBaseStyle = {
    borderRadius: `${radius}px`,
  };

  React.useEffect(() => {
    setCardStyle(cardBaseStyle);
    setWrapperStyle(wrapperBaseStyle);
    setImgStyle(imgBaseStyle);
  }, []);

  const cls = classNames('react-image-follow', className);

  const move = (e: any) => {
    if (!cardRef.current) {
      return;
    }
    const rect = cardRef.current.getBoundingClientRect();
    const { clientX, clientY } = e.nativeEvent;
    const x = clientX - (rect.left + Math.floor(rect.width / 2));
    const y = clientY - (rect.top + Math.floor(rect.height / 2));

    const transformWrapper = `scale(1.025) translate(calc(${x} / 50 * 1px), calc(${y} / 50 * 1px))`;
    setWrapperStyle({
      ...wrapperBaseStyle,
      transform: transformWrapper,
    });

    const transformImg = `translate(calc(${x} / 20 * 1px), calc(${y} / 20 * 1px))`;
    setImgStyle({
      ...imgBaseStyle,
      transformImg,
    });
  };

  const leave = () => {
    setImgStyle({
      ...imgBaseStyle,
      transform: 'none',
    });
  };

  return (
    <a
      className={cls}
      style={cardStyle}
      onMouseMove={move}
      onMouseLeave={leave}
      ref={cardRef as any}
      target="_blank"
      href={href}
    >
      <div style={wrapperStyle} className="react-image-follow-wrapper">
        <img
          src={src}
          alt={alt}
          className="react-image-follow-img"
          style={imgStyle}
        />
      </div>
      {children && <div className="react-image-follow-content">{children}</div>}
    </a>
  );
};

export default ImageFollow;
