import { makeExecutableSchema } from "@graphql-tools/schema";
import typeDefs from './types';
import resolvers from './resolvers';
import { applyMiddleware } from "graphql-middleware";
import { Context } from "../clients/prisma";
import { AuthenticationError } from "apollo-server-errors";

const checkUserId = async (resolve, root, args, context: Context, info) => {
    if (!context.uid) {
        throw new AuthenticationError("Not authenticated");
    } else {
        const result = await resolve(root, args, context, info)
        return result
    }
  }

const schema = makeExecutableSchema({typeDefs, resolvers});
export const executableSchema = applyMiddleware(schema, checkUserId)