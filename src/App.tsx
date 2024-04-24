import { Box } from "@mui/material";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

function App() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh"
      alignItems="center"
      justifyContent="space-between"
    >
      <Navigation />
      <Footer />
    </Box>
  );
}

export default App;
