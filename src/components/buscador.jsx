import React, { Component } from "react";
import { getData } from "./datosWeb.js";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";

class Buscador extends Component {
  handleNoChange = () => {
    return null;
  };
  handleInputChange = async (event) => {
    const val = event.target.value;
    const rval = val.replace(/-/g, "");
    if (rval.length === 10 || rval.length === 13) {
      const result = await getData(rval);

      this.setState({ result });

      console.log(result);
    }
  };

  state = { result: {} };

  render() {
    //console.log(this.state.result);

    const { totalItems, items } = this.state.result;

    var libro = totalItems
      ? items[0].volumeInfo
      : {
          title: "",
          description: "",
          cover: "",
          imageLinks: { thumbnail: "" },
        };
    console.log(libro);
    return (
      <Container className="p-3">
        <Form>
          <div className="form-group">
            <label htmlFor="exampleInputISBN">ISBN</label>
            <input
              type="text"
              className="form-control w-50"
              id="exampleInputISBN"
              aria-describedby="ISBNHelp"
              onChange={this.handleInputChange}
            />
            <small id="ISBNHelp" className="form-text text-muted">
              Introduce o escanea el ISBN
            </small>

            <label htmlFor="outputTitle" className="mt-4">
              Titulo
            </label>
            <input
              type="text"
              id="outputTitle"
              className="form-control "
              defaultValue={libro.title}
            />
            <label htmlFor="outputDesc" className="mt-4">
              Descripción
            </label>
            <textarea
              type="text"
              id="outputDesc"
              className="form-control"
              defaultValue={libro.description}
            />

            <Image id="cover" src={libro.imageLinks.thumbnail} fluid />
          </div>
        </Form>
      </Container>
    );
  }
}

export default Buscador;
