const defaultSettings = {
  theme: "light",
  notifications: {
    email: true,
    sms: false
  }
};

const userSettings = {
  notifications: {
    sms: true
  }
};

const finalSettings = {
  ...defaultSettings,
  notifications: {
    ...defaultSettings.notifications,
    ...userSettings.notifications
  }
};

console.log(finalSettings);