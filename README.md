# Keep-It-Techy

Keep-It-Techy is a CMS-style blog site similar to a WordPress site, where developers can publish their blog posts and comment on other developers’ posts. The application follows the Model-View-Controller (MVC) paradigm and uses Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

### Installation
1. Clone the repository:
   
        git clone https://github.com/yourusername/Keep-It-Techy.git
        cd Keep-It-Techy

2. Install dependencies:
   
        npm install

3. Set up the database:
    - Install PostgreSQL if you haven't already.
    - Create a .env file in the root directory and add the following:
          
          DB_NAME=tech_blog_db  
          DB_USER=your_db_user
          DB_PASSWORD=your_db_password
          DB_HOST=localhost
          DB_DIALECT=postgres
          SESSION_SECRET=your_session_secret
      
4. Sync the database and seed data:

        npm run seed
      
5. Start the application:

        npm start
   
### Usage
1. Navigate to the application:
    - Open your web browser and go to http://localhost:3001.

2. Sign up or log in:
    - Create an account or log in to an existing account.

3. Create, view, and comment on blog posts:

    - View existing posts on the homepage.
    - Create new posts from the dashboard.
    - Comment on posts while logged in.

### Features
- User authentication with express-session
- MVC paradigm structure
- Handlebars.js for templating
- Sequelize ORM for database interactions
- Ability to create, edit, and delete posts
- Comment on posts
- User dashboard to manage posts

### Contributing
Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch:
   
        git checkout -b feature/your-feature
   
3. Make your changes and commit them:

        git commit -m 'Add some feature'
   
4. Push to the branch:

        git push origin feature/your-feature
   
5. Submit a pull request.

### License
This project is licensed under the MIT License.
