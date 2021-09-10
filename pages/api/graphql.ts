import prisma, {Context} from '../../src/clients/prisma';
import { ApolloServer } from 'apollo-server-micro';
import {NextApiRequest, NextApiResponse} from 'next'
import {executableSchema} from '../../src/graphql/schema'
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { getSession } from "next-auth/client";


const apolloServer = new ApolloServer({
    context: async ({ req }: {req: NextApiRequest }): Promise<Context> => {

        const session = await getSession({ req })

        let uid = null;

        const email = session?.user?.email;
        if (email) {
            const user = await prisma.user.findUnique({
                where:{email}
            });
            uid = user.id;
        }

        return {
            uid,
            prisma,
        };
    },
    schema: executableSchema,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
})

const startServer = apolloServer.start();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
){
    await startServer;
    await apolloServer.createHandler({
        path: '/api/graphql'
    })(req, res)
};

export const config = {
    api: {
        bodyParser: false
    },
};