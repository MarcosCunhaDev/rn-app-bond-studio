import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  GestureResponderEvent,
} from 'react-native';

interface RoundedButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  borderWidth?: number;
  disabled?: boolean;
}

export const RoundedButton: React.FC<RoundedButtonProps> = ({
  title,
  onPress,
  style,
  textStyle,
  backgroundColor = '#007AFF',
  textColor = 'white',
  borderColor,
  borderWidth = 0,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor,
          borderColor: borderColor || backgroundColor,
          borderWidth,
          opacity: disabled ? 0.6 : 1,
        },
        style,
      ]}
      onPress={onPress}
      activeOpacity={0.7}
      disabled={disabled}>
      <Text style={[styles.text, {color: textColor}, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 40,
    paddingVertical: 8.5,
    paddingHorizontal: 14,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 100,
  },
  text: {
    fontSize: 13,
    fontWeight: '400',
  },
});
