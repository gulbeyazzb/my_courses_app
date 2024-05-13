import {
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

export default function AddCourseModal({
  modalVisible,
  setModalVisible,
  setCourses,
  courses,
}) {
  const [enteredCourse, setEnteredCourse] = useState("");
  const [error, setError] = useState("");

  const submitHandle = () => {
    if (!enteredCourse) {
      setError("Lütfen Değer Giriniz...");
    } else {
      setCourses([...courses, enteredCourse]);
      setModalVisible(false);
    }
  };

  return (
    <Modal animationType="slide" visible={modalVisible}>
      <View style={styles.container}>
        <View style={styles.InputContainer}>
          <Image
            style={styles.image}
            source={require("../assets/images/techs.png")}
          />
          <TextInput
            style={styles.TextInput}
            placeholder="Yeni bir kurs ekle"
            placeholderTextColor="gray"
            onChangeText={(e) => setEnteredCourse(e)}
            value={enteredCourse}
          />
        </View>
        <View style={styles.cancelBtn}>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Text style={styles.cancelText}>İptal Et</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.submitBtn}>
          <TouchableOpacity onPress={submitHandle}>
            <Text style={styles.submitText}>Ekle</Text>
          </TouchableOpacity>
        </View>
        {!enteredCourse && <Text>{error}</Text>}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
    alignItems: "center",
  },

  TextInput: {
    padding: 20,
    fontSize: 20,
  },
  cancelText: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },

  submitText: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
  cancelBtn: {
    backgroundColor: "red",
    width: 200,
    padding: 10,
    borderRadius: 30,
    marginBottom: 15,
  },
  submitBtn: {
    backgroundColor: "blue",
    width: 200,
    padding: 10,
    borderRadius: 30,
  },
});
