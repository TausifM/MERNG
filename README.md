## To make Subscription in Apollo-Server

1). In TypeDef File make type Subscription
2). Then in main index.js file import Subscription from graphql-subscription dependancies. and add pubsub in server apollo-server context
3). Then in post.js file of resolvers Subsription PUBSUB.AsyncIterator that will emit the messages to send over to the client for NEW_POST
4). Then Publish it by context.pubsub.publish in createPost after new Post added.
5). Then add Subscription resolvers in index.js file of resolvers

## To count like and comment

1). likeCount and commentCount in typeDefs file.
2). then index.js file of resolvers add Post: {
likeCount(parent) => parent.likes.length,
commentCount(parent) => parent.comments.length
}

# For Frontend using React JS

1). Download [Dependancies] such as
[
"apollo-cache-inmemory": "^1.6.6",
"apollo-client": "^2.6.10",
"apollo-link-http": "^1.5.17",
"@apollo/react-hooks": "^4.0.0",
]
2). ApolloProvider.js file and Bind App.js file in Provider.
3). Call File in index.js file

## MenuBar using Semantic-UI

1). npm i semantic-ui-react-hooks semantic-ui-css
2). MenuBar.js file where class component made to functional by removing this. & adding useState hooks
3). Specify the pathname widndow.location.pathname
4). then const path = pathname === "/" ? home : pathname.substr(1);
5). useState(path);

## Register Page with useMutation hooks from @apollo/react-hooks

1). By using JSX and useState hooks values defined.
2). const REGISTER_USER with mutation register.
3). then useMutation hooks object AddUser added in onSubmit of form.
4). In useMutation Hooks three things update, onError their is a setErrors inside err.graphQLErrors[0].extensions.exception.errors, and variables is a values
5). onChange setValues({...values, [e.target.name]: e.target.value});
6). UI from semantic ui.
