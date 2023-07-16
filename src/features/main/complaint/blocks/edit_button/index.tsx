import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import useScreenMessage from "../../../../common/hooks/multilingual/hooks";
import useComplaintRegisterButtonStyle from "./style";

function ComplaintEditButton({ onSubmit, loading }: { onSubmit: () => void; loading: boolean }) {
    const messages = useScreenMessage();
    const styles = useComplaintRegisterButtonStyle();
    return (
        <View style={styles.button}>
            <TouchableOpacity
                onPress={() => {
                    onSubmit();
                }}>
                {loading ? (
                    <ActivityIndicator size={"large"} />
                ) : (
                    <Text style={styles.text}> {messages.messages.words.edit}</Text>
                )}
            </TouchableOpacity>
        </View>
    );
}

export default ComplaintEditButton;
