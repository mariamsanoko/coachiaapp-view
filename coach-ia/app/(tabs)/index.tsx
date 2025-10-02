import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaViewBase} from "react-native";
import PagerView from "react-native-pager-view";

export default function App() {
  return (
    <SafeAreaViewBase style={styles.container}>
      <PagerView style={{ flex: 1 }} initialPage={0}>
        
      </PagerView>
      <StatusBar style="auto" />
    </SafeAreaViewBase>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  pager:{ flex: 1, 
    alignSelf: "stretch",
    backgroundColor: "lightblue"
  },
});