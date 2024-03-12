const User = require('./User');
const Blogpost = require('./Blogpost');
const Comment = require('./Comment');

Blogpost.hasOne(User, {
  foreignKey: 'authorId',
});

User.hasMany(Blogpost, {
  foreignKey: 'authorId',
  onDelete: 'CASCADE',
});

Comment.hasOne(User, {
  foreignKey: 'authorId',
});

User.hasMany(Comment, {
  foreignKey: 'authorId',
  onDelete: 'CASCADE',
});

module.exports = { User, Blogpost, Comment };
