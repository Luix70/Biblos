import React, { Component } from "react";
import { getData } from "./datosWeb.js";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";

class Buscador extends Component {
  handleInputChange = async (event) => {
    const val = event.target.value;
    const rval = val.replace(/-/g, "");
    if (rval.length === 10 || rval.length === 13) {
      const result = await getData(rval);

      this.setState({ result });

      // const items = result.totalItems;
      //const titulo =
      // items > 0 ? result.items[0].volumeInfo.title : "No Encontrado";

      // const cover =
      //   items > 0 ? result.items[0].volumeInfo.imageLinks.thumbnail : "";

      //document.getElementById("OutputISBN").value = titulo;
      //document.getElementById("cover").src = cover;
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
              className="form-control"
              id="exampleInputISBN"
              aria-describedby="ISBNHelp"
              onChange={this.handleInputChange}
            />
            <small id="ISBNHelp" className="form-text text-muted">
              Introduce o escanea el ISBN
            </small>

            <input
              type="text"
              className="form-control mt-4 vh-50"
              value={libro.title}
              readOnly="true"
            />

            <input
              type="text"
              className="form-control mt-4 vh-50"
              value={libro.description}
              readOnly="true"
            />

            <Image id="cover" src={libro.imageLinks.thumbnail} fluid />
          </div>
        </Form>
      </Container>
    );
  }
}

export default Buscador;
