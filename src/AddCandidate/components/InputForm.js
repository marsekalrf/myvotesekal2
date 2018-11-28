import React from 'react'
import { Container, Form, FormGroup, Label, Input, Button} from 'reactstrap'

class InputForm extends React.Component {
  render(){
    return(
      <Container >
      <Form>
        <FormGroup>
          <Label for="addingCandidate">Add Candidate</Label>
          <Input type="text" name="input_candidate" id="input_candidate" placeholder="Name of Candidate" />
        </FormGroup>
      </Form>
       <Button>Submit</Button>
      </Container>
    )
  }
}

export default InputForm
