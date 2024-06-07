# Components Documentation

---

## AlertBanner

### Description
The `AlertBanner` component displays an alert banner with a message and an icon. It's typically used to show important alerts or notifications to the user.

### Props
- `message` (string): The message to be displayed in the alert banner.
- `type` (string): The type of alert (e.g., "error", "warning", "info"). This can be used to style the banner accordingly.

### Usage
```jsx
import AlertBanner from './components/AlertBanner';

<AlertBanner message="This is an alert message" type="info" />
```

---

## CustomButton

### Description
The `CustomButton` component is a customizable button that can be used throughout the app. It supports custom styles and a click handler.

### Props
- `title` (string): The text to display inside the button.
- `buttonStyles` (string): Additional styles for the button.
- `handlePress` (function): Function to call when the button is pressed.
- `textStyles` (string): Additional styles for the text inside the button.

### Usage
```jsx
import CustomButton from './components/CustomButton';

<CustomButton
  title="Click Me"
  buttonStyles="bg-blue-500"
  handlePress={() => console.log('Button Pressed')}
  textStyles="text-white"
/>
```

---

## CustomInputField

### Description
The `CustomInputField` component is a customizable input field with validation capabilities. It can be used for different types of inputs such as email, password, and text.

### Props
- `label` (string): The label for the input field.
- `placeholder` (string): The placeholder text for the input field.
- `errorMessage` (string): The error message to display when validation fails.
- `keyboardType` (string): The type of keyboard to display (e.g., `default`, `numeric`, `email-address`).
- `validationType` (string): The type of validation to perform (`Email`, `Password`, `String`).
- `preventSpaces` (boolean): Whether to prevent spaces in the input.
- `sendDataToParent` (function): Function to call with the input value.

### Usage
```jsx
import CustomInputField from './components/CustomInputField';

<CustomInputField
  label="Email"
  placeholder="Enter your email"
  errorMessage="Invalid email address"
  keyboardType="email-address"
  validationType="Email"
  preventSpaces={false}
  sendDataToParent={(value) => console.log(value)}
/>
```

---

## ElectricEdgeHeader

### Description
The `ElectricEdgeHeader` component displays the app's header with the logo and name.

### Props
- `customStyles` (string): Additional styles for the header container.

### Usage
```jsx
import ElectricEdgeHeader from './components/ElectricEdgeHeader';

<ElectricEdgeHeader customStyles="mb-4" />
```

---

## ExploreChargerCard

### Description
The `ExploreChargerCard` component displays information about a charger, including type, location, rate, and an image.

### Props
- `chargerType` (string): The type of the charger.
- `chargerLocation` (string): The location of the charger.
- `chargerRate` (number): The rate for using the charger.
- `imageFile` (object): The image file to display.
- `cardStyles` (string): Additional styles for the card container.

### Usage
```jsx
import ExploreChargerCard from './components/ExploreChargerCard';

<ExploreChargerCard
  chargerType="Fast Charger"
  chargerLocation="Downtown"
  chargerRate={15}
  imageFile={require('../assets/images/charger.png')}
  cardStyles="mb-6"
/>
```

---

## ExploreSearchAndFilter

### Description
The `ExploreSearchAndFilter` component provides a search bar and a filter button for exploring chargers.

### Usage
```jsx
import ExploreSearchAndFilter from './components/ExploreSearchAndFilter';

<ExploreSearchAndFilter />
```

---

## ListYourCharger

### Description
The `ListYourCharger` component encourages users to list their chargers on the platform, providing a brief message and an image.

### Usage
```jsx
import ListYourCharger from './components/ListYourCharger';

<ListYourCharger />
```

---

## ProfileCard

### Description
The `ProfileCard` component displays the user's profile information, including their email and profile picture.

### Usage
```jsx
import ProfileCard from './components/ProfileCard';

<ProfileCard />
```

---

## ProfileSettingsList

### Description
The `ProfileSettingsList` component displays a list of profile settings and project links.

### Usage
```jsx
import ProfileSettingsList from './components/ProfileSettingsList';

<ProfileSettingsList />
```

---

## ProfileSettingsTab

### Description
The `ProfileSettingsTab` component displays an individual setting item with an icon and text.

### Props
- `iconName` (string): The name of the icon to display.
- `text` (string): The text to display next to the icon.

### Usage
```jsx
import ProfileSettingsTab from './components/ProfileSettingsTab';

<ProfileSettingsTab iconName="github" text="View Source Code" />
```

---
