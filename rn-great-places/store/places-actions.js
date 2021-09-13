import * as FileSystem from "expo-file-system";
import { insertPlace, fetchPlaces } from "../helpers/db";

export const ADD_PLACE = "ADD_PLACE";
export const SET_PLACES = "SET_PLACES";

export const addPlace = (title, imageUri) => {
  return async (dispatch) => {
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
        "FAKE ADDRESS",
        15.6,
        12.3
      );

      console.log(dbResult);

      dispatch({
        type: ADD_PLACE,
        placeData: {
          id: dbResult.insertId,
          title: title,
          imageUri: imageUri
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
