import { Defs, G, Path, Rect, Svg } from "react-native-svg";
import { CommonIconProps } from "../types";

const ICON_DEFAULT_COLOR: string = "#E4E4E4" as const;

export default function IconMoreHorizontal(props: CommonIconProps) {
    const { color, size } = props;
    const widthRatio: number = 1;
    const heightRatio: number = 1;

    return (
        <Svg width={size * widthRatio} height={size * heightRatio} viewBox="0 0 24 24" fill="none">
            <Path
                d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                stroke={color ?? ICON_DEFAULT_COLOR}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z"
                stroke={color ?? ICON_DEFAULT_COLOR}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z"
                stroke={color ?? ICON_DEFAULT_COLOR}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );

    /*     return (
        <Svg width={size * widthRatio} height={size * heightRatio} viewBox="0 0 24 24" fill="none">
            <G clip-path="url(#clip0_767_2046)">
                <Path
                    d="M12 0C9.62663 0 7.30655 0.703788 5.33316 2.02236C3.35977 3.34094 1.8217 5.21509 0.913451 7.4078C0.00519943 9.60051 -0.232441 12.0133 0.230582 14.3411C0.693605 16.6689 1.83649 18.8071 3.51472 20.4853C5.19295 22.1635 7.33115 23.3064 9.65892 23.7694C11.9867 24.2324 14.3995 23.9948 16.5922 23.0866C18.7849 22.1783 20.6591 20.6402 21.9776 18.6668C23.2962 16.6935 24 14.3734 24 12C23.9966 8.81846 22.7312 5.76821 20.4815 3.51852C18.2318 1.26883 15.1815 0.00344108 12 0V0ZM12 22C10.0222 22 8.08879 21.4135 6.4443 20.3147C4.79981 19.2159 3.51809 17.6541 2.76121 15.8268C2.00433 13.9996 1.8063 11.9889 2.19215 10.0491C2.578 8.10929 3.53041 6.32746 4.92894 4.92893C6.32746 3.53041 8.10929 2.578 10.0491 2.19215C11.9889 1.8063 13.9996 2.00433 15.8268 2.7612C17.6541 3.51808 19.2159 4.79981 20.3147 6.4443C21.4135 8.08879 22 10.0222 22 12C21.9971 14.6513 20.9426 17.1931 19.0679 19.0679C17.1931 20.9426 14.6513 21.9971 12 22Z"
                    fill={color ?? ICON_DEFAULT_COLOR}
                />
                <Path
                    d="M12.7171 5.06259C12.1404 4.95752 11.5477 4.98047 10.9809 5.12983C10.4141 5.27919 9.88703 5.55129 9.43701 5.92689C8.987 6.30249 8.62503 6.77241 8.37673 7.30339C8.12843 7.83436 7.99986 8.41342 8.00012 8.99959C8.00012 9.2648 8.10548 9.51916 8.29302 9.70669C8.48055 9.89423 8.7349 9.99959 9.00012 9.99959C9.26534 9.99959 9.51969 9.89423 9.70723 9.70669C9.89476 9.51916 10.0001 9.2648 10.0001 8.99959C9.99987 8.70536 10.0645 8.41471 10.1895 8.14835C10.3145 7.88198 10.4967 7.64648 10.7231 7.45862C10.9496 7.27076 11.2147 7.13517 11.4995 7.06153C11.7844 6.98789 12.082 6.97801 12.3711 7.03259C12.7662 7.10927 13.1294 7.30197 13.4144 7.58608C13.6994 7.87018 13.8932 8.23279 13.9711 8.62759C14.0498 9.04199 13.9955 9.47067 13.8159 9.85233C13.6363 10.234 13.3406 10.5491 12.9711 10.7526C12.3593 11.1071 11.8537 11.6191 11.507 12.2354C11.1604 12.8517 10.9853 13.5496 11.0001 14.2566V14.9996C11.0001 15.2648 11.1055 15.5192 11.293 15.7067C11.4805 15.8942 11.7349 15.9996 12.0001 15.9996C12.2653 15.9996 12.5197 15.8942 12.7072 15.7067C12.8948 15.5192 13.0001 15.2648 13.0001 14.9996V14.2566C12.9876 13.9086 13.0669 13.5634 13.2302 13.2559C13.3934 12.9483 13.6349 12.6892 13.9301 12.5046C14.6546 12.1067 15.2381 11.494 15.6002 10.751C15.9623 10.0079 16.0854 9.17095 15.9524 8.35511C15.8194 7.53928 15.437 6.78468 14.8576 6.19508C14.2783 5.60549 13.5305 5.20985 12.7171 5.06259Z"
                    fill={color ?? ICON_DEFAULT_COLOR}
                />
                <Path
                    d="M13.0001 17.9998C13.0001 17.4475 12.5524 16.9998 12.0001 16.9998C11.4478 16.9998 11.0001 17.4475 11.0001 17.9998C11.0001 18.552 11.4478 18.9998 12.0001 18.9998C12.5524 18.9998 13.0001 18.552 13.0001 17.9998Z"
                    fill={color ?? ICON_DEFAULT_COLOR}
                />
            </G>
         
        </Svg>
    ); */
}
