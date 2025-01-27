import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { TextInput as Input } from 'react-native-paper'
import { theme } from '../core/theme'

export default function TextInputR({ errorText, description, ...props }) {
  return (
    <View style={styles.container}>
      <Input
        style={styles.input}
        selectionColor = {theme.colors.green}
        activeOutlineColor={theme.colors.green}
        underlineColor="transparent"
        mode="outlined"
        {...props}
      />
      {description && !errorText ? (
        <Text style={styles.description}>{description}</Text>
      ) : null}
      {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 10,
  },
  input: {
    backgroundColor: theme.colors.surface,
  },
  description: {
    fontSize: 12,
    color: theme.colors.secondary,
    paddingTop: 6,
  },
  error: {
    fontSize: 12,
    color: theme.colors.error,
    paddingTop: 6,
  },
});
