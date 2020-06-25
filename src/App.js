import React from 'react';


import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import './App.css';

function App() {
  return (
    <Container className="p-3">
      <Form>

      <div class="form-group">

          <label for="exampleInputISBN">ISBN</label>
          <input type="text" class="form-control" id="exampleInputISBN" aria-describedby="ISBNHelp"/>
          <small id="ISBNHelp" class="form-text text-muted">Introduce o escanea el ISBN</small>
          <input type="text" class="form-control mt-4 vh-50" id="OutputISBN" />

      </div>

      </Form>
    </Container>
    
  );
}

export default App;
