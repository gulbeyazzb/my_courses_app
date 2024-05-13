import { useState } from "react";
import {
  Button,
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import AddCourseModal from "../../components/AddCourseModal";

export default function HomeScreen() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [courses, setCourses] = useState([]);

  const openModal = () => {
    setModalOpen(true);
  };
  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        {isModalOpen && (
          <AddCourseModal
            modalVisible={isModalOpen}
            setModalVisible={setModalOpen}
            setCourses={setCourses}
            courses={courses}
          />
        )}
        <FlatList
          data={courses}
          renderItem={({ item }) => {
            return (
              <View style={styles.coursesContainer}>
                <TouchableOpacity>
                  <Text style={styles.courseList}>{item}</Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
        <TouchableOpacity style={styles.addCourseBtn} onPress={openModal}>
          <Text style={styles.addCourseText}>Kurs Ekle</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  addCourseBtn: {
    backgroundColor: "red",
    padding: 12,
    borderRadius: 20,
  },
  addCourseText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  coursesContainer: {
    backgroundColor: "blue",
    marginVertical: 5,
    padding: 10,
    borderRadius: 20,
  },
  courseList: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});
