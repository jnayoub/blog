var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
    title: String,
    slug: String,
    image: String,
    content: String,
    createdDate: Date,
    modifiedDate: Date,
    tags: Array,
    category: String,
    views: Number
},
{
    collection: 'posts'
}
);

module.exports = mongoose.model('Post', postSchema);