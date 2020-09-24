import React from "react";
import {
  Toast,
  ToastBody,
  ToastHeader,
  FormGroup,
  Label,
  Form,
  Input,
  Alert,
  Button,
} from "reactstrap";

class RandomNumber extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      min: 1,
      max: 100,
      random: "",
    };
  }

  onRandomRun() {
    this.setState({
      random:
        Math.floor(
          Math.random() *
            (parseInt(this.state.max) - parseInt(this.state.min) + 1)
        ) + parseInt(this.state.min),
    });
  }

  onChangeNumber = (e) => {
    // console.log(e.target.name)
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    // console.log(this.state)
    return (
      <div>
        <div className="RandomElement">
          <div className="container">
            <div className="row psc">
              <div className="p-3 my-2 rounded pd1">
                <Toast>
                  <ToastHeader>Random number</ToastHeader>
                  <ToastBody>
                    <Form>
                      <FormGroup>
                        <Label>Số nhỏ nhất:</Label>
                        <Input
                          type="number"
                          name="min"
                          placeholder="nhập số nhỏ nhất"
                          defaultValue={this.state.min}
                          onChange={this.onChangeNumber}
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label>Số lớn nhất:</Label>
                        <Input
                          type="number"
                          name="max"
                          placeholder="nhập số  lớn nhất"
                          defaultValue={this.state.max}
                          onChange={this.onChangeNumber}
                        />
                      </FormGroup>
                      <Alert color="success">
                        Số may mắn: {this.state.random}
                      </Alert>
                      <Button
                        type="button"
                        onClick={() => {
                          this.onRandomRun();
                        }}
                        color="success frg"
                      >
                        Run
                      </Button>
                    </Form>
                  </ToastBody>
                </Toast>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default RandomNumber;
