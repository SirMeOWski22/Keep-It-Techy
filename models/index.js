const Sequelize = require('sequelize');
const dotenv = require('dotenv');
const UserModel = require('./User');
const PostModel = require('./Post');
const CommentModel = require('./Comment');

dotenv.config();

const sequelize = new Sequelize(
  process.env.DATABASE_URL || 'postgres://your-username:your-password@localhost:5432/tech_blog_db'
);

const User = UserModel(sequelize, Sequelize);
const Post = PostModel(sequelize, Sequelize);
const Comment = CommentModel(sequelize, Sequelize);

User.hasMany(Post, { foreignKey: 'userId' });
Post.belongsTo(User, { foreignKey: 'userId' });

Post.hasMany(Comment, { foreignKey: 'postId' });
Comment.belongsTo(Post, { foreignKey: 'postId' });

Comment.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(Comment, { foreignKey: 'userId' });

module.exports = { User, Post, Comment, sequelize };
