import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import ContinentModal from "./components/ContinentModal/ContinentModal";
import CityModal from "./components/CityModal/CityModal";
import calcStartHandlesDeg from "./modules/calcStartHandlesDeg";
import styles from "./styles";
import useCurrentDate from "../../../hooks/useCurrentDate/useCurrentDate";

const Clock = () => {
  const [continent, setContinent] = useState("Europe");
  const [city, setCity] = useState("London");
  const [modalContinentModalVisible, setContinentModalVisible] = useState(false);
  const [modalCityModalVisible, setCityModalVisible] = useState(false);
  const [currentDate] = useCurrentDate();
  const { secondHandle, minuteHandle, hourHandle } = calcStartHandlesDeg(currentDate, continent, city);

  const animatedStyleSecond = { transform: [{ rotate: secondHandle }] };
  const animatedStyleMinute = { transform: [{ rotate: minuteHandle }] };
  const animatedStyleHour = { transform: [{ rotate: hourHandle }] };

  return (
    <View style={styles.container}>
      <Text>Selected timezone:</Text>
      <Text>{`${continent}, ${city}`}</Text>
      <Text style={styles.text}>
        {currentDate.toLocaleTimeString("en-GB", {
          timeZone: `${continent}/${city}`,
        })}
      </Text>
      <View>
        <View style={styles.clock}>
          <View style={styles.whiteBackgroung} />
          <View style={[styles.handHourContainer, animatedStyleHour]}>
            <View style={styles.handHour} />
          </View>
          <View style={[styles.handMinuteContainer, animatedStyleMinute]}>
            <View style={styles.handMinute} />
          </View>
          <View style={[styles.handSecondContainer, animatedStyleSecond]}>
            <View style={styles.handSecond} />
          </View>
          <View style={styles.center} />
        </View>
      </View>
      <TouchableOpacity onPress={() => setContinentModalVisible(true)} style={styles.button}>
        <Text>Select continent</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setCityModalVisible(true)} style={styles.button}>
        <Text>Select city</Text>
      </TouchableOpacity>
      <ContinentModal
        modalVisible={modalContinentModalVisible}
        setModalVisible={setContinentModalVisible}
        continent={continent}
        setContinent={setContinent}
        setCity={setCity}
      />
      <CityModal modalVisible={modalCityModalVisible} setModalVisible={setCityModalVisible} continent={continent} city={city} setCity={setCity} />
    </View>
  );
};
export default Clock;
