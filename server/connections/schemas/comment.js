var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
    postId: String,
    name: String,
    content: String,
    createdDate: Date
}, {
    collection: 'comments'
}
);

module.exports = mongoose.model('Comment', commentSchema);