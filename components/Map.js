import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";
import tw from "twrnc";
import { selectOrigin } from "../slices/navSlice";
import { useSelector } from "react-redux";

const Map = () => {
  const origin = useSelector(selectOrigin);

  const defaultLat = 37;
  const defaultLng = 37;

  const mapView = (
    <MapView
      style={tw`flex-1`}
      initialRegion={{
        latitude: origin?.location?.lat || defaultLat,
        longitude: origin?.location?.lng || defaultLng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin?.location?.lat,
            longitude: origin?.location?.lng,
          }}
          title="Start Location"
          description={origin?.description}
          identifier="startLocation"
        />
      )}
    </MapView>
  );

  return origin ? (
    mapView
  ) : (
    <View>
      <Text>You have not chosen a location!</Text>
    </View>
  );
};

export default Map;
