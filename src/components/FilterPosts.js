import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Post from './Post'
import { filterPosts } from '../redux/actions/posts'

class FilterPosts extends Component {
  render() {
    console.log('props', this.props)
    console.log(this.state)
    return (
      <Form inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="filter-field" className="mr-sm-2">
            Filter by title:
          </Label>
          <Input
            onChange={e => this.props.filterPosts(e.target.value)}
            type="text"
            name="email"
            id="filter-field"
          />
        </FormGroup>
      </Form>
    )
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ filterPosts }, dispatch)

export default connect(null, mapDispatchToProps)(FilterPosts)
