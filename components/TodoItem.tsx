import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

type Props = {
  title: string;
  isComplete?: boolean;
  onComplete?: () => void;
  onRemove?: () => void;
};

const TodoItem: React.FC<Props> = ({
  onComplete,
  isComplete,
  title,
  onRemove
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={isComplete && styles.textComplete}>{title}</Text>
      </View>
      <View>
        <TouchableOpacity
          style={[styles.button, styles.buttonSuccess]}
          onPress={onComplete}
        >
          <Text style={styles.buttonText}>
            {isComplete ? "Отментить" : "Выполнить"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.buttonDanger]}
          onPress={onRemove}
        >
          <Text style={styles.buttonText}>Удалить</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

TodoItem.defaultProps = {
  title: "Без названия",
  isComplete: false,
  onComplete: () => {},
  onRemove: () => {}
};

export default TodoItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  textContainer: {
    flex: 1
  },
  textComplete: {
    textDecorationLine: "line-through"
  },
  button: {
    minWidth: 100,
    margin: 3,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    backgroundColor: "#007bff"
  },
  buttonSuccess: {
    backgroundColor: "#28a745"
  },
  buttonDanger: {
    backgroundColor: "#dc3545"
  },
  buttonText: {
    color: "#fff",
    textAlign: "center"
  }
});
