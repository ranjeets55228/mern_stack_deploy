import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/api/items").then((res) => {
      setItems(res.data);
    });
  }, []);

  const addItem = async () => {
    if (!name) return;
    const res = await axios.post("http://localhost:5000/api/items", { name });
    setItems([...items, res.data]);
    setName("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>MERN Basic</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter item" />
      <button onClick={addItem}>Add</button>
      <ul>
        {items.map((item) => (
          <li key={item._id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
