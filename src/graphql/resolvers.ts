import { Context } from "../clients/prisma";
import { RoutineInput } from "../generated/graphql";

const resolvers = {
    Query: {
        hello : () => {
            return "Hi, nDrugal!";
        }
    },
    Mutation: {
        createRoutine: async (
            _,
            { routineInput }: {routineInput: RoutineInput},
            context: Context 
            ) => {
                const routine = await context.prisma.routine.create({
                    data: { ...routineInput },
                });
                if (routine) {
                    console.log('Success created routine');
                    return routine;
                }
                return null;
            }
        }
}

export default resolvers;