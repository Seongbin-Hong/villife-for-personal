import { StyleSheet } from "react-native";
import useStyler from "../../../../common/hooks/styler/hooks";
import { ComplaintEditButtonStylesType } from "./type";

export default function useComplaintEditButtonStyle(): ComplaintEditButtonStylesType {
    const { deviceUI, theme } = useStyler();

    const Style = StyleSheet.create({
        button: {
            backgroundColor: "white",
            height: "100%",
            alignItems: "flex-end",
            justifyContent: "center",
            paddingRight: deviceUI.moderateScale(15),
        },
        text: {
            fontSize: deviceUI.moderateScale(14),
            fontFamily: theme.font.fontFamilies.pretendard.bold,
            color: theme.colorFamily.black,
        },
    });
    return Style;
}
