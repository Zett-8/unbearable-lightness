<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img src="https://github.com/Zett-8/images/blob/master/gg.png" width="500px" />
  </a>
</p>
<h1 align="center">
  Gatsby's custom starter
</h1>

Kick off your project with this default boilerplate. This starter ships with the main Gatsby configuration files you might need to get up and running blazing fast with the blazing fast app generator for React.

## 🖥️ Tech stack

- **[Gatsby.js](https://www.gatsbyjs.org/)** for client side

  - Styled-component
  - Material-UI
  - PWA (optional)

- **[Hasura](https://hasura.io/)** for backend and DB

- **[Apollo](https://www.apollographql.com/)** for handling graphql and management state

- **[Heroku](https://www.heroku.com)** for deploying Hasura

- **[Firebase](https://firebase.google.com)**

  - **Hosting** for deploying gatsby file
  - **Authentication** for secure access to Hasura DB
  - **Cloud Functions** for handling JWT
  - **Cloud Firestore** for token refresh

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying this repo.

    ```shell
    gatsby new <appname> https://github.com/Zett-8/great-gatsby
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd <appname>/
    gatsby develop
    ```

1.  **Check on browser**

    The site is now running at `http://localhost:8000`

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

## ⚙️ Set up dependencies

1.  **Init Firebase project**

    **-- Caution! --  
    DO NOT overwrite functions/index.js**

    ```shell
    npm install -g firebase-tools

    firebase init

    firebase deploy
    ```

    then fill Firebase config

    ./src/provider/firebase.js

    ```javascript
    if (!firebase.apps.length)
      firebase.initializeApp({
        apiKey: '',
        authDomain: '',
        databaseURL: '',
        projectId: '',
        storageBucket: '',
        messagingSenderId: '',
        appId: '',
      })
    ```

1.  **Build postgres DB and Hasura on Heroku**

    You can easily do this just by clicking the button!  
    Follow the official document of Hasura  
    **[https://hasura.io/](https://hasura.io/)**
    
1.  **Set config on heroku**
    ```json
    {
      "HASURA_GRAPHQL_ADMIN_SECRET": "<randomString>",
      "HASURA_GRAPHQL_CORS_DOMAIN": "*",
      "HASURA_GRAPHQL_UNAUTHORIZED_ROLE": "anonymous",
      "HASURA_GRAPHQL_JWT_SECRET": {
        "type": "RS256",
        "jwk_url": "https://www.googleapis.com/service_accounts/v1/jwk/securetoken@system.gserviceaccount.com", 
        "audience": "<FIREBASE_PROJECT_ID>", 
        "issuer": "https://securetoken.google.com/<FIREBASE_PROJECT_ID>"
        }
    }
    ```
    *[JWT secret generator](https://hasura.io/jwt-config/)

1.  **Specify graphql endpoint for Apollo**

    ./src/provider/apolloAuth.js

    ```javascript
    const client = new ApolloClient({
      uri: '<ENDPOINT HERE>',
    })
    ```

    then enable Apollo Provider!

    ./gatsby-wrapper.js

    ```javascript
    export default ({ element }) => (
      <>
        <ApolloAuthProvider>
          <CssBaseline />
          {element}
        </ApolloAuthProvider>
      </>
    )
    ```

1. **Set up hasura info**  
    ./functions/index.js
    
    ```javascript
    const client = new ApolloClient({
      fetch,
      uri: functions.config().hasura.url,
      request: (operation) => {
        operation.setContext({
          headers: {
            'x-hasura-admin-secret': functions.config().hasura.admin_secret,
          },
        })
      },
    })
    ```
    
    make sure user model or modify
    
    ```javascript
    client.mutate({
      variables: { id: user.uid, email: user.email || '' },
      mutation: gql`
        mutation InsertUsers($id: String, $email: String) {
          insert_users(objects: { id: $id, name: $name }) {
            returning {
              id
              name
              email
              created_at
            }
          }
        }
      `,
    })
    ```
    
    
## 📝 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── functions
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── gatsby-wrapper.js
    ├── jest.config.js
    ├── jest-preprocess.js
    ├── loadershim.js
    ├── setup-test-env.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

<!-- AUTO-GENERATED-CONTENT:END -->
