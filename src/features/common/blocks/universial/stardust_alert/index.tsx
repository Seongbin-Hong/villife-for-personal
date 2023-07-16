import React, { Children } from "react";
import { Modal, StyleSheet, View, Text, TouchableOpacity, Image, Dimensions, Pressable } from "react-native";
import { StardustAlertProps } from "./type";
import useStyler from "../../../hooks/styler/hooks";

export default function StardustAlert(props: StardustAlertProps) {
    const screenSize = Dimensions.get("window");
    const styles = useStyles();

    return (
        <Modal
            animationType="fade"
            transparent
            visible={props.modalVisible}
            onRequestClose={() => {
                props.setModalVisible(!props.modalVisible);
            }}
            style={[{ width: screenSize.width, height: screenSize.height }, styles.wrapper]}>
            <View style={styles.container}>
                <View style={styles.content}>
                    <View style={[styles.textSection, { height: screenSize.height * 0.1 }]}>
                        <Text style={styles.title}>{props.title}</Text>
                        {props.subtitle && <Text style={styles.subtitle}>{props.subtitle}</Text>}
                    </View>
                    {props.image ? (
                        <View style={[styles.imageSection, { height: screenSize.height * 0.1 }]}>
                            <Image source={props.image} resizeMode="cover" />
                        </View>
                    ) : (
                        <></>
                    )}
                    {props.children && <View style={styles.childrenSection}>{props.children}</View>}
                    <View style={[styles.buttonSection, { height: screenSize.height * 0.07, marginBottom: 20 }]}>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={() => {
                                if (props.onPressLeftBtn) props.onPressLeftBtn();
                            }}
                            style={styles.leftButton}>
                            <Text style={styles.leftButtonText}>{props.leftButtonText}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={() => {
                                if (props.onPressRightBtn) props.onPressRightBtn();
                            }}
                            style={styles.rightButton}>
                            <Text style={styles.rightButtonText}> {props.rightButtonText}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Pressable
                    style={styles.wrapper}
                    onPress={() =>
                        props.onPressVoidSpace !== undefined ? props.onPressVoidSpace() : props.setModalVisible(false)
                    }
                />
            </View>
        </Modal>
    );
}

function useStyles() {
    const { deviceUI, theme } = useStyler();

    return StyleSheet.create({
        container: {
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
            //backgroundColor: "rgba(255,255,255,0.6)",
        },
        wrapper: {
            position: "absolute",
            top: 0,
            left: 0,
            height: deviceUI.screenSize.height,
            width: deviceUI.screenSize.width,
            backgroundColor: theme.colorFamily.lightgrey,
            opacity: 0.6,
            zIndex: -1,
        },
        content: {
            width: "88%",
            backgroundColor: "white",
            flex: 0,
            borderRadius: deviceUI.moderateScale(15),
            overflow: "hidden",
            elevation: 5, // Android only
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 2,
        },
        textSection: {
            justifyContent: "center",
            alignItems: "center",
        },
        imageSection: {
            width: "80%",
            justifyContent: "center",
            alignItems: "center",
        },
        childrenSection: {
            justifyContent: "center",
            alignItems: "center",
        },
        buttonSection: {
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
        },
        title: {
            color: theme.colorFamily.black,
            textAlign: "center",
            ...theme.font.researved.h3,
        },
        subtitle: {
            marginTop: deviceUI.moderateScale(5),
            color: theme.colorFamily.grey,
            textAlign: "center",
            ...theme.font.researved.h5,
        },
        leftButtonText: {
            color: theme.colorFamily.black,
            ...theme.font.researved.h5,
        },
        rightButtonText: {
            color: theme.colorFamily.white,
            ...theme.font.researved.h5,
        },
        leftButton: {
            height: "80%",
            width: "40%",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#EEEEEE",
            borderRadius: deviceUI.moderateScale(8),
            marginRight: deviceUI.moderateScale(10),
        },
        rightButton: {
            height: "80%",
            width: "40%",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: theme.colorFamily.blue,
            borderRadius: deviceUI.moderateScale(8),
        },
    });
}
