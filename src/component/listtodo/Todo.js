import React from "react";
import "./todo.scss";
import {
  Toast,
  ToastBody,
  ToastHeader,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: ["asda", "asdasdad", "adadasdasda"],
    };
  }
  render() {
    console.log(this.state);
    return (
      <div>
        <div className="container">
          <div className="row psc">
            <div className="p-3 my-2 rounded pd1">
              <Toast>
                <ToastHeader>Todos list</ToastHeader>
                <ToastBody>
                  <Form>
                    <InputGroup>
                      <Input placeholder="Check it out" />
                    </InputGroup>
                    <br />
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <input
                          className="btn-checked"
                          type="radio"
                          checked="checked"
                        />
                        <span className="todo-func">ádsasadasdas</span>
                      </InputGroupAddon>
                    </InputGroup>
                  </Form>
                </ToastBody>
              </Toast>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Todo;
