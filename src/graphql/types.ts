import { gql } from 'apollo-server-micro';

const typeDefs = gql`
    type Query {
        hello: String
    }
    type Routine {
        id: ID!
        title: String!
        startTime: Int!
        endTime: Int!
        habits: [Habit]!
    }
    type Habit {
        id: ID!
        title: String!
        activeDays: [activeDay]!
    }
    enum activeDay {
        Monday
        Tuesday
        Wednesday
        Thursday
        Friday
        SaturDay
        Sunday
    }
    input RoutineInput {
        title: String!
        startTime: Int!
        endTime: Int!
    }
    type Mutation {
        createRoutine(routineInput: RoutineInput): Routine
    }
`;

export default typeDefs;