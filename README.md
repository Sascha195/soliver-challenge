# **s.Oliver Coding Challenge - React Native App**

This repository is part of the **s.Oliver coding challenge**, developed by **Sascha Dreesmann**.  
It is a **React Native application**, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

---

## 🚀 **Getting Started**

### **Prerequisites**

Before proceeding, ensure that you have:

- A properly set up **React Native development environment** ([Set Up Your Environment](https://reactnative.dev/docs/environment-setup))
- **Node.js** and **npm** or **Yarn** installed
- **Ruby & Bundler** installed for managing CocoaPods (iOS only)

---

### **1️⃣ Clone the Repository**

```sh
git clone https://github.com/Sascha195/soliver-challenge.git
cd soliver-challenge
```

---

### **2️⃣ Install Dependencies**

```sh
npm install
```

For iOS, install CocoaPods dependencies:

```sh
cd ios && bundle exec pod install && cd ..
```

---

### **3️⃣ Start Mock API Server**

The app uses a **JSON server** to serve mock content from s.Oliver. Start the server by running:

```sh
npm run mock-api
```

---

### **4️⃣ Run the Application**

#### **Android**

```sh
npm run android
```

#### **iOS**

```sh
npm run ios
```

> **Note**: For iOS, make sure to **open an iOS simulator** or **connect a real device** before running the command.
