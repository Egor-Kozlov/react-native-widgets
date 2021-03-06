import { View, Text, Image, TouchableHighlight } from "react-native";
import styles from "./styles";

const removeIcon = require("../../../../../img/remove_icon.png");

const Item = ({ title, id, status, deleteItem, changeItemStatus }) => (
  console.log("Render item"),
  (
    <TouchableHighlight onLongPress={() => changeItemStatus(id)} delayLongPress={800} activeOpacity={0.5} underlayColor={null}>
      <View style={[styles.itemContainer, status === "active" ? styles.itemContainerActive : status === "deleted" ? styles.itemContainerDeleted : null]}>
        <Text style={styles.toDoText}>{title}</Text>
        <TouchableHighlight onPress={() => deleteItem(id)} style={styles.removeContainer}>
          <Image style={styles.remove} source={removeIcon} />
        </TouchableHighlight>
      </View>
    </TouchableHighlight>
  )
);
export default Item;
