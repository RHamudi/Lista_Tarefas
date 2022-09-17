import { useState } from "react";
import * as C from "./App.styles";
import { ListItem } from "./Components/ListItem";
import { Item } from "./Types/item";

function App() {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: "Comprar o Pão na padaria", done: false },
    { id: 2, name: "Comprar o bolo na padaria", done: false },
  ]);

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista De Tarefas</C.Header>

        {list.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </C.Area>
    </C.Container>
  );
}
export default App;
