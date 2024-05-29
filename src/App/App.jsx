import Router from "../Router";
import { ThemeProvider } from "../Theme";

const App = () => {
  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
};

export default App;
