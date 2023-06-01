import { FC, MouseEventHandler } from 'react';
import { Image } from 'react-bootstrap';

export interface IAvatar {
    imageUrl: string;
    onClick: MouseEventHandler<HTMLImageElement>;
}
export const Avatar: FC<IAvatar> = ({ imageUrl, onClick }) => {
    return (
        <Image
            src={imageUrl}
            alt="avatar"
            roundedCircle
            style={{ width: '100px', height: '100px' }}
            onClick={onClick}
        />
    );
};
