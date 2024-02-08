import logo from "./logo.svg";
import "./App.css";
import { Regularlist } from "./Component/list/Regularlist";
import { authors } from "./Data/authors";
import { LargeListItem } from "./Component/author/LargeListItem";
import { SmallListItem } from "./Component/author/SmallListItem";
// import LargeListBook from "./Component/book/Longlistbook";
// import LargeListBook from "./Component/book/Longlistbook";
import { books } from "./Data/books";
import sample from "./Component/book/sample";
import SmalllistBook from "./Component/book/SmalllistBook";
// import LargeListBook from "./Component/book/Longlistbook";
function App() {
  return (
    <>
      <h1> hello APP</h1>
      <Regularlist
        items={authors}
        ItemComponent={LargeListItem}
        sourceName={"author"}
      />
      <Regularlist
        items={authors}
        ItemComponent={SmallListItem}
        sourceName={"author"}
      />
       <Regularlist
        items={books}
        ItemComponent={sample}
        sourceName={"books"}
      />

<Regularlist
        items={books}
        ItemComponent={SmalllistBook}
        sourceName={"books"}
      />
    </>
  );
}

export default App;
