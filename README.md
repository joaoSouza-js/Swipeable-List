# Swipeable FlatList with Contact Management

This project implements a small Expo-based React Native app that uses a swipeable FlatList to manage a list of contacts. The component allows users to delete a contact by swiping from left to right and check or close the swipe action by swiping from right to left. The swipe gestures are powered by `react-native-gesture-handler` and `react-native-reanimated`.


https://github.com/user-attachments/assets/047b1d55-f1d9-4787-a8f8-04061cab71c5


## Features

- **Swipe Left to Right**: Allows the user to delete a contact from their list.
- **Swipe Right to Left**: Enables marking a contact as checked or closing the swipe.
- **Smooth Animations**: Swipe gestures are supported by `react-native-reanimated` for a seamless user experience.
- **Reusable Component**: The swipeable functionality can be adapted for other list items.

## Libraries Used

- [React Native Gesture Handler](https://github.com/software-mansion/react-native-gesture-handler): For handling touch gestures.
- [React Native Reanimated](https://github.com/software-mansion/react-native-reanimated): For handling animations with gestures.
- `Swipeable` component from `react-native-gesture-handler/ReanimatedSwipeable`.

## How It Works

- **Expo**: The project is built using [Expo](https://expo.dev/), which simplifies the development process and makes it easier to test across different devices.
- **Swipe Actions**: 
  - **Left Swipe (Right to Left)**: The user can check a contact or close the swipe action.
  - **Right Swipe (Left to Right)**: The user can delete a contact from the list.
- **Animation and Gestures**: Powered by `react-native-reanimated` for a smooth and responsive interaction.

## Setup and Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/joaoSouza-js/Swipeable-List
    ```

2. Navigate to the project directory:

    ```bash
    cd Swipeable-List
    ```

3. Install the required dependencies:

    ```bash
    npm install
    ```

    or

    ```bash
    yarn install
    ```


## Future Enhancements
- actually connect with deivce contact list
- Integrate additional swipe actions for each list item.
- Implement undo functionality for accidental deletions.

## License

This project is licensed under the MIT License.


