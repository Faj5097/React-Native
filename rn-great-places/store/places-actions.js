import * as FileSystem from "expo-file-system";
import { insertPlace, fetchPlaces } from "../helpers/db";

import ENV from "../env/env";

export const ADD_PLACE = "ADD_PLACE";
export const SET_PLACES = "SET_PLACES";

export const addPlace = (title, imageUri, location) => {
  return async (dispatch) => {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&key=${ENV.googleMapsAPIKey}`
    );

    if (!response.ok) {
      throw new Error("Something went wrong!");
    }

    const resData = await response.json();

    if (!resData.results) {
      throw new Error("Something went wrong!");
    }

    const address = resData.results[0].formatted_address;
    const imageName = imageUri.split("/").pop();
    const newPath = FileSystem.documentDirectory + imageName;

    try {
      await FileSystem.moveAsync({
        from: imageUri,
        to: newPath
      });
      const dbResult = await insertPlace(
        title,
        newPath,
        address,
        location.lat,
        location.lng
      );

      console.log(dbResult);

      dispatch({
        type: ADD_PLACE,
        placeData: {
          id: dbResult.insertId,
          title: title,
          imageUri: imageUri,
          address: address,
          lat: location.lat,
          lng: location.lng
        }
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
};

export const setPlaces = () => {
  return async (dispatch) => {
    try {
      const dbResult = await fetchPlaces();
      console.log(dbResult);
      dispatch({ type: SET_PLACES, places: dbResult.rows._array });
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
};
