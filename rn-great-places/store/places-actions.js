import * as FileSystem from "expo-file-system";

export const ADD_PLACE = "ADD_PLACE";

export const addPlace = (title, imageUri) => {
  return (dispatch) => {
    const imageName = imageUri.split("/").pop();
    const newPath = FileSystem.documentDirectory + imageName;

    try {
      await FileSystem.moveAsync({
        from: imageUri,
        to: newPath
      });
    } catch (err) {
      console.log(err);
      throw err;
    }

    dispatch({
      type: ADD_PLACE,
      placeData: {
        title: title,
        imageUri: imageUri
      }
    });
  };
};
