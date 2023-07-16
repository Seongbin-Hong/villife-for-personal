import { Defs, G, Path, Rect, Svg } from "react-native-svg";
import { CommonIconProps } from "../types";

const ICON_DEFAULT_COLOR: string = "#000000" as const;

export default function IconTag(props: CommonIconProps) {
    const { color, size } = props;
    const widthRatio: number = 1;
    const heightRatio: number = 1;

    return (
        <Svg width={size * widthRatio} height={size * heightRatio} viewBox="0 0 24 24" fill="none">
            <Path
                d="M20.59 13.91L13.42 21.08C13.2343 21.266 13.0137 21.4135 12.7709 21.5141C12.5281 21.6148 12.2678 21.6666 12.005 21.6666C11.7422 21.6666 11.4819 21.6148 11.2391 21.5141C10.9963 21.4135 10.7757 21.266 10.59 21.08L2 12.5V2.5H12L20.59 11.09C20.9625 11.4647 21.1716 11.9716 21.1716 12.5C21.1716 13.0284 20.9625 13.5353 20.59 13.91V13.91Z"
                stroke={color ?? ICON_DEFAULT_COLOR}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M7 7.5H7.01"
                stroke={color ?? ICON_DEFAULT_COLOR}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
}
