import React from "react";
import { Container, Table } from "react-bootstrap";
class HomeScreen extends React.Component {
  constructor(props) {
    super(props); // props state
    this.state = {
      classes: [
        {
          id: 1,
          name: "Lop1A",
        },
        {
          id: 2,
          name: "Lop1B",
        },
        {
          id: 3,
          name: "Lop1C",
        },
      ],
    };
  }

  render() {
    return (
      <Container>
        <h1>Home</h1>
        <Table>
          <thead>
            <tr>
              <th>id</th>
              <th>Class-Name</th>
            </tr>
          </thead>
          <tbody>
              <tr>
                  <th>1</th>
                  <th>Lop1A</th>
              </tr>
              <tr>
                  <th>2</th>
                  <th>Lop1B</th>
              </tr>
              <tr>
                  <th>3</th>
                  <th>Lop1C</th>
              </tr>
          </tbody>
        </Table>
      </Container>
    );
  }
}
export default HomeScreen;
