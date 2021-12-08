# To make Subscription in Apollo-Server

1). In TypeDef File make type Subscription
2). Then in main index.js file import Subscription from graphql-subscription dependancies. and add pubsub in server apollo-server context
3). Then in post.js file of resolvers Subsription PUBSUB.AsyncIterator that will emit the messages to send over to the client for NEW_POST
4). Then Publish it by context.pubsub.publish in createPost after new Post added.
5). Then add Subscription resolvers in index.js file of resolvers

# To count like and comment

1). likeCount and commentCount in typeDefs file.
2). then index.js file of resolvers add Post: {
likeCount(parent) => parent.likes.length,
commentCount(parent) => parent.comments.length
}
