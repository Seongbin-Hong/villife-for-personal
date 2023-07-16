import { Defs, G, Path, Rect, Svg } from "react-native-svg";
import { CommonIconProps } from "../types";

const ICON_DEFAULT_COLOR: string = "#FF0000" as const;

export default function IconXButton(props: CommonIconProps) {
    const { color, size } = props;
    const widthRatio: number = 0.5;
    const heightRatio: number = 0.5;

    return (
        <Svg width={size * widthRatio} height={size * heightRatio} viewBox="0 0 20 20" fill="none">
            <Path
                d="M9 0C4.02943 0 0 4.02943 0 9C0 13.9706 4.02943 18 9 18C13.9706 18 18 13.9706 18 9C17.9946 4.03165 13.9684 0.00537891 9 0ZM12 10.9402C12.3048 11.2207 12.3244 11.6952 12.0439 12C11.7634 12.3048 11.289 12.3244 10.9842 12.0439C10.9689 12.0299 10.9543 12.0152 10.9402 12L9 10.0605L7.0605 12C6.76255 12.2877 6.28777 12.2795 6.00001 11.9815C5.71932 11.6909 5.71932 11.2301 6.00001 10.9395L7.93951 9L6.00001 7.0605C5.71226 6.76255 5.72052 6.28777 6.01847 6.00001C6.30911 5.71932 6.76986 5.71932 7.0605 6.00001L9 7.93951L10.9402 6.00001C11.2207 5.69524 11.6952 5.67555 12 5.95607C12.3048 6.23658 12.3244 6.71105 12.0439 7.01582C12.0299 7.03107 12.0152 7.0457 12 7.05976L10.0605 9L12 10.9402Z"
                fill={ICON_DEFAULT_COLOR}
            />
        </Svg>
    );
}
