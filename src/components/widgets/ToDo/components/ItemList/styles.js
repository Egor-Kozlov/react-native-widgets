import { StyleSheet } from "react-native";

export default StyleSheet.create({
  listContainer: {
    flex: 1,
    paddingBottom: 8,
    maxHeight: 131,
  },
  statusContainer: {
    width: 260,
    borderRadius: 2,
    paddingRight: 9,
  },
  statusTitle: {
    marginBottom: 8,
    fontWeight: "500",
  },
  countItems: {
    fontStyle: "italic",
    opacity: 0.5,
  },
  itemContainer: {
    display: "flex",
    marginVertical: 4,
    padding: "2%",
    borderRadius: 5,
    backgroundColor: "#def2ff",
    opacity: 0.7,
    borderWidth: 1,
    borderColor: "#095385",
  },
  itemContainerActive: {
    backgroundColor: "#c2f0ce",
    borderColor: "#388c4d",
  },
  itemContainerDeleted: {
    backgroundColor: "#dedede",
    borderColor: "#616161",
    opacity: 0.4,
  },
  toDoText: {
    fontStyle: "italic",
  },
  removeContainer: {
    position: "absolute",
    top: 4,
    right: 2,
    width: 23,
    height: "100%",
  },
  remove: {
    width: 23,
    height: 23,
  },
});
