# React Web Theme

React Web Theme is a simple and customizable component to handle theme in web applications created using React.

## Implemented Technologies
![image](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![image](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

## Installation

You can install React Web Theme via npm:

```bash
  npm install react-web-theme
```

## Usage

To use React Web Theme in your React application, follow these steps:

Import the ThemeProvider component and wrap your parent element with this:

```jsx
return (
  <ThemeProvider>
    <MainComponent />
  </ThemeProvider>
);
```

Inside any child component you can call useTheme method to get the latest selected theme name in appTheme variable

```jsx
const { appTheme }: ThemeContextType = useTheme();
```

Inside any child component you can call useTheme method to get the theme alteration method reference.

```jsx
const { toggleTheme }: ThemeContextType = useTheme();
```

Inside any child component you can call ToggleSwitch component with following parameters to get Theme changing Switch UI.

```jsx
<ToggleSwitch appTheme={appTheme} onChange={toggleTheme} />
```

If you want to customize from default styles you can pass css class to parent HTML element and alter like below:

```jsx
<ToggleSwitch
  className="custom_style"
  appTheme={appTheme}
  onChange={toggleTheme}
/>
```

## Author

- [Souryadeep RC](https://github.com/souryadeepRC)

## Acknowledgements

- [React Context](https://react.dev/reference/react/useContext)

## 🚀 About Me

I'm a Experienced Frontend software engineer
with 7+ years of hands-on and analytical
skills in ReactJS and JavaScript, Restful
API. Skilled in designing, developing,
and deploying web applications.
Proficient in building responsive,
performant, and accessible user
interfaces. Strong problem-solving and
teamwork abilities.
