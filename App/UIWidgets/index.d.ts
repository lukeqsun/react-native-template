import {ReactNode} from 'react';
import {TouchableOpacityProps, ImageSourcePropType, TextProps} from 'react-native';
import {BaseComponent} from '../Utilities';

export interface ButtonProps extends TouchableOpacityProps {
    text?: string;
    image?: ImageSourcePropType;
    children: ReactNode;
}

export class Button extends BaseComponent<ButtonProps> {}

export interface FontAwesomeIconProps extends TextProps {}

export class FontAwesomeIcon extends BaseComponent<FontAwesomeIconProps> {}

export interface BadgeProps {
    key?: string;
    label?: string;
}

export class Badge extends BaseComponent<BadgeProps> {}
