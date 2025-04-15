# AngularDeveloperTechAssessment

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.8.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

This is a simple Angular application built as part of a technical assessment for a Front-End Angular Developer position. The application fetches and displays a list of users from a public API, allows viewing detailed information for each user, and includes additional features like search functionality and responsive design.
## Features
- **User List Page**: Displays a list of users fetched from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/users) in a card-based layout, showing:
  - Full Name
  - Email
  - Company Name
  - A "View Details" button for each user
- **User Details Page**: Displays detailed information for a selected user, including:
  - Username
  - Phone
  - Website
  - Address (street, suite, city, zipcode)
- **Search Functionality**: Filter users by name or email using a search input.
- **Responsive Design**: The UI is responsive and works well on both desktop and mobile devices using Bootstrap.
- **Loading States**: Displays a loading spinner during API requests using `ngx-spinner`.
- **Error Handling**: Alerts the user in case of API errors.
- **Angular Routing**: Navigation between the user list and user details pages.



## Technologies Used
- **Angular**: v19 (for building the front-end application)
- **TypeScript**: For type-safe coding
- **Bootstrap**: v5 (for responsive styling)
- **Ngx-Spinner**: For loading state visualization
- **RxJS**: For handling asynchronous API calls
- **Angular HttpClient**: For making REST API requests
- **JSONPlaceholder API**: Public API for user data




- **Components**: 
  - `UsersListComponent`: Handles the user list display and search functionality.
  - `UserDetailsComponent`: Displays detailed user information.
- **Services**: 
  - `UserService`: Manages API requests to fetch users and user details.
- **Interceptors**: 
  - `loadingInterceptor`: Shows a spinner during HTTP requests.
- **Interfaces**: Defines TypeScript interfaces for `User` and `UserDetails`.
- **Routing**: Lazy-loaded routes for better performance.