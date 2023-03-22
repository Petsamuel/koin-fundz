import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { Home } from "./pages/Home";
import { isWalletConnected } from "./services/blockchain";

function App() {
  useEffect(() => {
    const loadBlockchain = async () => {
      await isWalletConnected();
    };
    loadBlockchain();
  }, []);

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
