import { useState } from "react";
import {
  Button,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import AddCourseModal from "../../components/AddCourseModal";

export default function HomeScreen() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <TouchableOpacity style={styles.addCourseBtn} onPress={openModal}>
          <Text style={styles.addCourseText}>Kurs Ekle</Text>
        </TouchableOpacity>
        {isModalOpen && <AddCourseModal />}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  addCourseBtn: {
    backgroundColor: "red",
    padding: 20,
    borderRadius: 15,
  },
  addCourseText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});
