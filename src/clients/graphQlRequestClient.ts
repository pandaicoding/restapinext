import { GraphQLClient } from 'graphql-request'
const requestHeader = {
    authorization: 'Bearer MY_TOKEN',
};

const graphqlRequestClient = new GraphQLClient(
    process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
    {
        headers: requestHeader,
    }
)

export default graphqlRequestClient;