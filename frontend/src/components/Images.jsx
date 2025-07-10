import { Image } from '@imagekit/react';

const Images = ({ src, className, w, h, alt }) => {
    return (
        <Image
            urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
            src={src}
            alt={alt}
            loading="lazy"
            lqip={{ active: true, quality: 20 }}
            className={className}
            width={w}
            height={h}
            transformation={[{ width: w, height: h }]}
        />
    )
}

export default Images