import React from 'react'
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap'
import FaArrowUp from 'react-icons/lib/fa/arrow-up'
import FaArrowDown from 'react-icons/lib/fa/arrow-down'
import FaComment from 'react-icons/lib/fa/comment'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { increaseVotes, decreaseVotes } from '../redux/actions/posts'
import AddCommentForm from './AddCommentForm'

const Post = props => {
  console.log(props)
  let { id, title, author, content, createdAt, votes, img_url } = props.post
  return (
    <Row className="mt-3">
      <Col>
        <Card>
          <CardImg top width="100%" src={img_url} alt="Card image cap" />
          <CardBody>
            <CardTitle>
              {title} | <FaArrowUp onClick={() => props.increaseVotes(id)} />{' '}
              {votes} <FaArrowDown onClick={() => props.decreaseVotes(id)} />
            </CardTitle>
            <CardSubtitle>{author}</CardSubtitle>
            <CardText>{content}</CardText>
            <hr />
            {createdAt} | <FaComment /> {props.comments.length}{' '}
            {props.comments.length !== 1 ? 'Comments' : 'Comment'}
            <AddCommentForm postId={id} />
            <ul className="mt-2">
              {props.comments.map(comment => (
                <li key={comment.id}>{comment.content}</li>
              ))}
            </ul>
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}

const mapStateToProps = (state, props) => ({
  comments: state.comments.filter(comment => comment.post_id === props.post.id)
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ increaseVotes, decreaseVotes }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Post)
