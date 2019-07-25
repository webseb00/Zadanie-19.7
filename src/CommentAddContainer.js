import { connect } from 'react-redux';
import Add from './CommentAdd';
import { addComment } from './action';

const mapDispatchToProps = dispatch => ({
	addComment: (text) => dispatch(addComment(text))
});

export default connect(null, mapDispatchToProps)(Add);