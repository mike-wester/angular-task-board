# AngularTaskboard

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.3.0.

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

## Deploying to Firebase Hosting

The Firebase Hosting configuration serves the production build from
`dist/angular-taskboard/browser` and rewrites app routes to `index.html`.

1. Install the [Firebase CLI](https://firebase.google.com/docs/cli), then sign in:

   ```bash
   firebase login
   ```

2. From the project root, select your Firebase project (this creates a local
   `.firebaserc` file):

   ```bash
   firebase use --add
   ```

3. Build and deploy:

   ```bash
   npm run build
   firebase deploy --only hosting
   ```

## Firebase SQL Connect

The task board uses Firebase SQL Connect (Cloud SQL for PostgreSQL) for task
reads. The checked-in schema, queries, and SDK configuration are under
`dataconnect/`. The Angular app uses the SQL Connect emulator in development
and the configured Firebase project in production.

1. Install the [Firebase CLI](https://firebase.google.com/docs/cli), sign in,
   and confirm the default project in `.firebaserc`:

   ```bash
   firebase login
   firebase projects:list
   ```

2. The Angular Taskboard Web app is registered in the selected Firebase
   project, and its client options are configured in `src/app/firebase-app.ts`.

3. Generate the typed client SDK and start the local SQL Connect emulator:

   ```bash
   npm run dataconnect:generate -- --project angular-todo-task-board-6c965
   firebase emulators:start --only dataconnect --project angular-todo-task-board-6c965
   ```

   The app expects the emulator on `127.0.0.1:9399`. In a second terminal,
   seed the local emulator:

   ```bash
   npm run dataconnect:seed
   ```

   The seed uses upserts, so it is safe to rerun. Emulator data is local and
   may need reseeding after the emulator is restarted.

4. To provision and deploy the SQL Connect service to Firebase, configure
   billing for the Firebase project and run:

   ```bash
   firebase deploy --only dataconnect
   ```

   Update `dataconnect/dataconnect.yaml` if your Cloud SQL instance, database,
   or region differs from the sample values.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

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
