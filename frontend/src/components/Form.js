import React, { Component } from 'react'
import {
  Col,
  ControlLabel,
  FormGroup,
  FormControl,
  Button,
  Row
} from 'react-bootstrap'



class Form extends Component {
  constructor(props){
    super(props)

    this.state = {
      form: {
        rivet_type: this.props.rivet.rivet_type || '',
        content: this.props.content.content || ''
      }
    }
  }

  handleChange(event){
    const formState = Object.assign({}, this.state.form)

    formState[event.target.rivet_type] = event.target.value

    this.setState({
      form: formState
    })
  }

  handleSubmit() {
    this.props.onSubmit(this.state.form)
  }


  render(){
    return(
      <div>
          <form>
            <Row>
              <Col xs={6}>
                <FormGroup>
                  <ControlLabel id="rivet_type">Rivet Type</ControlLabel>
                  <FormControl
                    type="text"
                    name="rivet_type"
                    onChange={this.handleChange.bind(this)}
                    value={this.state.form.rivet_type}
                  />
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col xs={6}>
                <FormGroup>
                  <ControlLabel id="content">Content</ControlLabel>
                  <FormControl
                    type="textarea"
                    name="content"
                    onChange={this.handleChange.bind(this)}
                    value={this.state.form.content}
                   />
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col xs={6}>
                <Button
                  id="submit"
                  onClick={this.handleSubmit.bind(this)}
                >Submit</Button>
              </Col>
            </Row>

        </form>
      </div>
    )
  }
}

export default Form;
