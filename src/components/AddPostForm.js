import React, { Component } from 'react'
import { Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { createPost } from '../redux/actions/posts'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class AddPostForm extends Component {
  state = {
    title: '',
    content: '',
    author: '',
    img_url: ''
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.createPost(this.state)

    this.props.toggleForm()
  }

  handleBlurAndChange = (e, stateKey) => {
    this.setState({ [stateKey]: e.target.value })
    e.target.style.boxShadow = '0px 0px 5px green'
    if (e.target.value === '') e.target.style.boxShadow = '0px 0px 5px red'
  }

  render() {
    return (
      <Row>
        <Col sm="10">
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label for="title-field">Title</Label>
              <Input
                type="text"
                name="title"
                id="title-field"
                onFocus={e => {
                  if (e.target.value === '')
                    e.target.style.boxShadow = '0 0 5px red'
                }}
                onChange={e => this.handleBlurAndChange(e, 'title')}
              />
            </FormGroup>
            <FormGroup>
              <Label for="body-field">Body</Label>
              <Input
                type="text"
                name="body"
                id="body-field"
                onFocus={e => {
                  if (e.target.value === '')
                    e.target.style.boxShadow = '0 0 5px red'
                }}
                onChange={e => this.handleBlurAndChange(e, 'content')}
              />
            </FormGroup>
            <FormGroup>
              <Label for="author-field">Author</Label>
              <Input
                type="text"
                name="author"
                id="author-field"
                onFocus={e => {
                  if (e.target.value === '')
                    e.target.style.boxShadow = '0 0 5px red'
                }}
                onChange={e => this.handleBlurAndChange(e, 'author')}
              />
            </FormGroup>
            <FormGroup>
              <Label for="image-field">Image URL</Label>
              <Input
                type="text"
                name="image"
                id="image-field"
                onFocus={e => {
                  if (e.target.value === '')
                    e.target.style.boxShadow = '0 0 5px red'
                }}
                onChange={e => this.handleBlurAndChange(e, 'img_url')}
              />
            </FormGroup>
            <Button type="submit">Submit</Button>
          </Form>
        </Col>
      </Row>
    )
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ createPost }, dispatch)

export default connect(null, mapDispatchToProps)(AddPostForm)
