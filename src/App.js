import Visitor from "../src/pages/Visitor";
import { Routes, Route } from "react-router-dom";
import ContactInvited from "../src/pages/ContactInvited";
import "./global-css.css";
import "animate.css/animate.css";

import { ThemeProvider, createTheme } from "@mui/material/styles";

const ThemeLiaAdib = createTheme({
  palette: {
    primary: {
      main: "#6b0f10",
    },
    secondary: {
      main: "#fcf8f1",
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={ThemeLiaAdib}>
        <Routes>
          <Route path="/" element={<Visitor />} />
          <Route path="/rsvp/to/:slug" element={<ContactInvited />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
