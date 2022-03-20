import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Paragraph } from "./components/Paragraph";
import { Input } from "./components/Input";
import { MySelf } from "./components/MySelf";
import { Counter } from "./components/Counter";

function App() {
  return (
    <div className="App">
      * <Navbar />
      <Paragraph />
      <Input />
      <MySelf name="Blessing" age={22} gender="female" />
      <MySelf name="Joshua" age={20} gender="male" />
      <MySelf name="Ekow" age={19} gender="male" />
      <MySelf name="Tracy" age={25} gender="female" />
      <MySelf name="Emmanuel" age={22} gender="female" />
      <Counter />
    </div>
  );
}

export default App;
