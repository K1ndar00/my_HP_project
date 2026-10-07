import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Works from "./pages/Works";
import Diary from "./pages/Diary";

// ページを増やすときは Route を足し、Layout.tsx の nav にも追加
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="works" element={<Works />} />
        <Route path="diary" element={<Diary />} />
        <Route path="*" element={<p>ページが見つかりません。</p>} />
      </Route>
    </Routes>
  );
}
