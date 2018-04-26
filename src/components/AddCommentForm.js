import React, { Component } from 'react'
import { Form, FormGroup, Input, Button } from 'reactstrap'
import { createComment } from '../redux/actions/comments'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class AddCommentForm extends Component {
  state = {
    newComment: ''
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log(this.props)
    this.props.createComment({
      content: this.state.newComment,
      post_id: this.props.postId
    })
    this.setState({ newComment: '' })
  }

  render() {
    console.log(this.state)
    return (
      <Form inline onSubmit={this.handleSubmit}>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Input
            type="text"
            name="comment"
            id="comment-field"
            placeholder="Enter a comment here"
            onChange={e => this.setState({ newComment: e.target.value })}
            value={this.state.newComment}
          />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    )
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ createComment }, dispatch)

export default connect(null, mapDispatchToProps)(AddCommentForm)
