import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Signin from "./pages/Signin";
import Videopage from "./pages/Videopage";
import { darkTheme, lightTheme } from "./utils/theme";

const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
`;
const Main = styled.div`
  flex: 7;
`;
const Wrapper = styled.div``;
function App() {
  const [darkmode, setDarkmode] = useState(false);
  return (
    <ThemeProvider theme={darkmode ? darkTheme : lightTheme}>
      <Container>
        <BrowserRouter>
          <Menu setDarkMode={setDarkmode} darkmode={darkmode} />
          <Main>
            <Navbar />
            <Wrapper>
              <Routes>
                {" "}
                <Route path="/" element={<Homepage />} />
                <Route path="video/:id" element={<Videopage />} />
                <Route path="signin" element={<Signin />} />
              </Routes>
            </Wrapper>
          </Main>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
