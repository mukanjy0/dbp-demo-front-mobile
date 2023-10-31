import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../../core/theme';
import { TextInput as Input } from 'react-native-paper';

const FormInput = ({ errorText, ...props }) => (
    <View style={styles.container}>
        <Input
        style={styles.input}
        selectionColor={theme.colors.primary}
        underlineColor="transparent"
        mode="outlined"
        {...props}
        />
        {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
    </View>
    );

const styles = StyleSheet.create({
    container: {
        width: 300,
        marginVertical: 12,
    },
    input: {
        backgroundColor: theme.colors.surface,
    },
    error: {
        fontSize: 14,
        color: theme.colors.error,
        paddingHorizontal: 4,
        paddingTop: 4,
    },
});

export default FormInput;
