import * as React from "react";

import "./AvatarBrick.scss";

interface Props {
    src: string;
    alt: string;
}

const AvatarBrick: React.StatelessComponent<Props> = ({ src, alt }) => (
    <img className="avatar" src={src} alt={alt} />
);

export {
    AvatarBrick
};
