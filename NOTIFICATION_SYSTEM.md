# User Notification System

## Overview
This document describes the user-facing notification system that has been added to the application. The system uses Socket.IO for real-time notification delivery.

## Implementation Details

### Components Modified

#### 1. AppRouter.js (`src/router/AppRouter.js`)
- **Socket.IO Integration**: Imported socket.io-client and established connection to the backend
- **State Management**: Added `notification` state to store received notifications
- **Event Listeners**: Set up listener for `receiveNotification` events from the server
- **Notification Rendering**: Added `notificationrender()` function that emits user ID to request notifications
- **Props Passing**: Passes notification data to the Header component

```javascript
const [notification, setNotification] = useState([]);
const socket = io(SOCEKT);

const notificationrender = () => {
  socket.emit("notification", {
    id: localStorage.getItem("_userId"),
  });
};

useEffect(() => {
  socket.on("receiveNotification", (data) => {
    setNotification(data.notification);
  });
  notificationrender();
}, []);
```

#### 2. Header.js (`src/components/Header.js`)
- **Notification Display**: Added notification bell icon (🔔) in the header
- **Dropdown UI**: Implemented dropdown menu to show notification list
- **State Management**: Added `showNotifications` state to control dropdown visibility
- **Badge Counter**: Shows notification count when notifications are present
- **Responsive Design**: Uses Bootstrap grid for responsive layout

### Features

1. **Real-time Notifications**: Uses Socket.IO for instant notification delivery
2. **Visual Indicator**: Bell icon with red badge showing unread count
3. **Dropdown Menu**: Click to view all notifications
4. **User Session**: Notifications are tied to logged-in user via localStorage `_userId`
5. **Clean UI**: Minimal and clean notification interface

### Socket.IO Events

#### Emitted Events
- `notification`: Sent to server with user ID to request notifications
  ```javascript
  socket.emit("notification", {
    id: localStorage.getItem("_userId")
  });
  ```

#### Listened Events
- `receiveNotification`: Received from server with notification data
  ```javascript
  socket.on("receiveNotification", (data) => {
    setNotification(data.notification);
  });
  ```

### Data Structure

Notifications are expected to be an array of objects with at least a `message` property:
```javascript
[
  { message: "Your assignment has been graded" },
  { message: "New message from instructor" }
]
```

### Usage

The notification system automatically initializes when a user is logged in and has a valid `_userId` in localStorage. No additional setup is required for users.

### Future Enhancements

Potential improvements that could be made:
1. Mark notifications as read
2. Delete notifications
3. Notification types with different icons
4. Click handlers for notification actions
5. Notification sound alerts
6. Push notifications
7. Notification preferences/settings
