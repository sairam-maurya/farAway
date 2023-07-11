import { useState } from "react";
import Logo from './Logo'
import Form from './Form'
import PackingList from "./PackingList";
import Stats from "./Stats";



export default function App() {
  const [items, setItems] = useState([]);

  function handelAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handelDeleteIitem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handelToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handelClearList() {
    const confirmed = window.confirm('Are you sure yo want to delete items?');

    if (confirmed) setItems([]);
  }


  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handelAddItems} />
      <PackingList
        items={items}
        onDeleteItems={handelDeleteIitem}
        onToggleItem={handelToggleItem}
        handelClearList={handelClearList} />
      <Stats items={items} />
    </div>
  );
}






