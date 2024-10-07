import AsyncStorage from "@react-native-async-storage/async-storage";

export const setItem = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(`${key}`, jsonValue);
  } catch (error) {
    console.error("Error storing value:", error);
  }
};

export const getItem = async (key) => {
  try {
    const value = await AsyncStorage.getItem(`${key}`);
    return value ? JSON.parse(value) : null; // Handle potential null values
  } catch (error) {
    console.error("Error retrieving value:", error);
    return null; // Return null for consistent error handling
  }
};

export const removeItem = async (key) => {
  try {
    await AsyncStorage.removeItem(`${key}`);
  } catch (error) {
    console.error("Error deleting value:", error);
  }
};