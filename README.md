# Inkwell-Journal

| Method |      Path     |         Location         |                  Purpose                  |
|:------:|:-------------:|:------------------------:|:-----------------------------------------:|
|   GET  |       /       |         index.js         |              Login form page              |
|  POST  |       /       |         index.js         |           Login form submission           |
|   GET  |    /profile   |  controllers/profile.js  |      Profile page (authorization req)     |
|   GET  | /profile/edit |  controllers/profile.js  |             Profile form page             |
|   PUT  | /profile/edit |  controllers/profile.js  |             Edit profile page             |
|   GET  |  /auth/signup |    controllers/auth.js   |              Signup form page             |
|  POST  |  /auth/signup |    controllers/auth.js   |   Signup submission; Redirect to Profile  |
|   GET  |  /auth/logout |    controllers/auth.js   |          Logout; Redirect to Home         |
|   GET  |   /dashboard  | controllers/dashboard.js |        Journal stats/entries (Home)       |
|   GET  |    /journal   |  controllers/journal.js  |              View all entries             |
|   GET  |  /journal/new |  controllers/journal.js  | Create journal entry form (toggle public) |
|  POST  |    /journal   |  controllers/journal.js  |             Post journal entry            |
| DELETE |  /journal/:id |  controllers/journal.js  |            Delete journal entry           |
|   GET  |    /public    |   controllers/public.js  |       Index page for public entries       |