import { Path, Svg } from "react-native-svg";
import { CommonIconProps } from "../types";

const ICON_DEFAULT_COLOR: string = "#E4E4E4" as const;

export default function IconPhone(props: CommonIconProps) {
    const { color, size } = props;
    const widthRatio: number = 20 / (20 + 20);
    const heightRatio: number = 20 / (20 + 20);

    return (
        <Svg width={size * widthRatio} height={size * heightRatio} viewBox="0 0 20 20" fill="none">
            <Path
                d="M16.0226 19.9998C15.1512 19.9998 13.927 19.6846 12.094 18.6605C9.86493 17.4105 8.1408 16.2565 5.92381 14.0453C3.78629 11.9091 2.7461 10.5261 1.29027 7.87691C-0.354388 4.88581 -0.0740277 3.31793 0.239369 2.64783C0.612588 1.84693 1.16349 1.36791 1.87555 0.892454C2.28 0.627466 2.708 0.400313 3.15414 0.213874C3.19878 0.194677 3.2403 0.176374 3.27735 0.159856C3.49834 0.0603008 3.83316 -0.0901474 4.25727 0.0705688C4.54031 0.17682 4.793 0.394233 5.18854 0.784863C5.99971 1.58487 7.1082 3.36659 7.51713 4.2416C7.79169 4.83134 7.97339 5.22063 7.97384 5.65724C7.97384 6.16841 7.71669 6.56261 7.40463 6.98806C7.34615 7.06797 7.28811 7.14431 7.23186 7.21842C6.89213 7.66486 6.81757 7.79388 6.86668 8.02424C6.96624 8.48719 7.70866 9.86533 8.92876 11.0828C10.1489 12.3002 11.4873 12.9957 11.952 13.0948C12.1922 13.1462 12.3239 13.0685 12.7846 12.7167C12.8507 12.6663 12.9185 12.614 12.9895 12.5618C13.4654 12.2078 13.8413 11.9573 14.3404 11.9573H14.3431C14.7775 11.9573 15.1494 12.1457 15.7654 12.4564C16.569 12.8618 18.4043 13.956 19.2092 14.7681C19.6008 15.1627 19.8191 15.4145 19.9258 15.6971C20.0865 16.1225 19.9351 16.456 19.8365 16.6793C19.82 16.7163 19.8017 16.7569 19.7825 16.802C19.5945 17.2474 19.3661 17.6745 19.0999 18.0779C18.6253 18.7878 18.1445 19.3373 17.3418 19.711C16.9296 19.9059 16.4785 20.0047 16.0226 19.9998Z"
                fill={color ?? ICON_DEFAULT_COLOR}
            />
        </Svg>
    );
}