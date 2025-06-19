# Simple Expense App

A simple yet functional React Native application for tracking personal expenses. Built using Expo, Firebase, and React Navigation, it offers a modular architecture and real-time data capabilities.

---

## ✨ Features

- **React Navigation Integration**  
  Utilizes [React Navigation](https://reactnavigation.org/docs/getting-started) for seamless screen transitions and navigation logic.

- **Navigation Container Setup**  
  Wraps all navigation components using [Navigation Container](https://reactnavigation.org/docs/navigation-container/):  
  ```bash
  npm install @react-navigation/native  
  npx expo install react-native-screens react-native-safe-area-context
  ```

- **Native Stack Navigators**  
  Implements stack-based navigation via [Native Stack](https://reactnavigation.org/docs/native-stack-navigator):  
  ```bash
  npm install @react-navigation/native-stack
  ```

- **Bottom Tab Navigation**  
  Adds intuitive tab navigation using [Bottom Tabs](https://reactnavigation.org/docs/bottom-tab-navigator):  
  ```bash
  npm install @react-navigation/bottom-tabs  
  npx expo install react-native-gesture-handler react-native-reanimated
  ```

- **Expense Tracking Flows**  
  - Manage Expense (default stack navigator)  
  - List All Expenses  
  - List Recent Expenses  
  Navigators are nested for modular UI management.

- **useLayoutEffect Hook**  
  Dynamically updates screen elements such as titles and buttons.

- **Context API**  
  Stores and manages local state cleanly across components.

- **Firebase Integration**  
  Syncs data in real-time using [Firebase](https://firebase.google.com):
  - New project and real-time database setup  
  - Test-access rules enabled for development ease

- **Axios for API Requests**  
  Handles external calls with:  
  ```bash
  npm install axios
  ```

---

## 🧱 Tech Stack

- React Native  
- Expo  
- Firebase (Realtime Database)  
- React Navigation  
- Axios  

---

## 📸 Screenshots



---

## 🚀 Installation

```bash
git clone <repository-url>
cd <project-directory>
npm install
npm start
```

> **Note**: Ensure you have Node.js, Expo CLI, and either a mobile simulator or the Expo Go app installed.

---

## 📁 Project Structure

```
/store            # For Context API
/Util             # For Date formatting and axios http calls to firebase
/data
/constants
/components       # Reusable UI components  
/screens          # Screen layouts for Expense Tracker  
/App.js           # App entry point  
```
