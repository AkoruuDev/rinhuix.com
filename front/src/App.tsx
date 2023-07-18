import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { SignIn, SignUp } from "./pages/log";
import { PageNotFound } from "./pages/PageNotFound";
import GlobalStyle from "./styles/globalStyles";
import { AboutUs, Cards, Library, Maps, NewCamp, NewChar, News, Roll, Store, Systems } from "./pages/contents";
import { Me, MyCamp, MyCards, MyChars } from "./pages/profile";

function App() {
  return (
    <div>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/sign-in" element={ <SignIn /> } />
          <Route path="/sign-up" element={ <SignUp /> } />
          <Route path="*" element={ <PageNotFound /> } />

          <Route path="/library" element={ <Library /> } />
          <Route path="/systems" element={ <Systems /> } />
          <Route path="/roll" element={ <Roll /> } />
          <Route path="/maps" element={ <Maps /> } />
          <Route path="/about-us" element={ <AboutUs /> } />
          <Route path="/news" element={ <News /> } />
          <Route path="/store" element={ <Store /> } />
          <Route path="/cards" element={ <Cards /> } />
          <Route path="/new/char" element={ <NewChar /> } />
          <Route path="/new/camp" element={ <NewCamp /> } />
          
          <Route path="/profile/me" element={ <Me /> } />
          <Route path="/profile/me/cards" element={ <MyCards /> } />
          <Route path="/profile/me/char" element={ <MyChars /> } />
          <Route path="/profile/me/camp" element={ <MyCamp /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
