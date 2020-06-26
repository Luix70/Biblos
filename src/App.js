import React from "react";
import { getData } from "./components/datosWeb.js";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

async function handleInputChange(event) {
  const val = event.target.value;
  const rval = val.replace(/-/g, "");
  if (rval.length === 10 || rval.length === 13) {
    const result = await getData(rval);
    console.log(rval);
    console.log(result);
    const items = result.totalItems;
    const titulo =
      items > 0 ? result.items[0].volumeInfo.title : "No Encontrado";
    document.getElementById("OutputISBN").value = titulo;
  }
}
function App() {
  return (
    <Container className="p-3">
      <Form>
        <div class="form-group">
          <label for="exampleInputISBN">ISBN</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputISBN"
            aria-describedby="ISBNHelp"
            onChange={handleInputChange}
          />
          <small id="ISBNHelp" class="form-text text-muted">
            Introduce o escanea el ISBN
          </small>
          <input type="text" class="form-control mt-4 vh-50" id="OutputISBN" />
        </div>
      </Form>
    </Container>
  );
}

export default App;
