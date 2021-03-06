import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
} from "react-native";
import WidgetWrapper from "./src/components/widgets/WidgetWrapper";
import { Clock, GitHubInfo, ToDo } from "./src/components/widgets/WidgetList";

const background = require("./src/img/widgets-page-background.png");

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={styles.background}
      >
        <Text style={styles.title}>Widgets</Text>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scrollContainer}
        >
          <WidgetWrapper title="To Do List">
            <ToDo />
          </WidgetWrapper>
          <WidgetWrapper title="GitHub Info">
            <GitHubInfo />
          </WidgetWrapper>
          <WidgetWrapper title="Clock">
            <Clock />
          </WidgetWrapper>
          <StatusBar style="auto" />
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    paddingTop: "15%",
    paddingHorizontal: "4%",
    flex: 1,
    justifyContent: "center",
  },
  scrollContainer: {
    paddingTop: "5%",
    paddingBottom: 200,
    flex: 1,
    borderRadius: 8,
  },
  title: {
    fontSize: 26,
    marginBottom: "2%",
  },
});
