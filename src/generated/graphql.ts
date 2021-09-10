import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useQuery, UseQueryOptions } from 'react-query';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(client: GraphQLClient, query: string, variables?: TVariables, headers?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request<TData, TVariables>(query, variables, headers);
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Habit = {
  __typename?: 'Habit';
  activeDays: Array<Maybe<ActiveDay>>;
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createRoutine?: Maybe<Routine>;
};


export type MutationCreateRoutineArgs = {
  routineInput?: Maybe<RoutineInput>;
};

export type Query = {
  __typename?: 'Query';
  hello?: Maybe<Scalars['String']>;
};

export type Routine = {
  __typename?: 'Routine';
  endTime: Scalars['Int'];
  habits: Array<Maybe<Habit>>;
  id: Scalars['ID'];
  startTime: Scalars['Int'];
  title: Scalars['String'];
};

export type RoutineInput = {
  endTime: Scalars['Int'];
  startTime: Scalars['Int'];
  title: Scalars['String'];
};

export enum ActiveDay {
  Friday = 'Friday',
  Monday = 'Monday',
  SaturDay = 'SaturDay',
  Sunday = 'Sunday',
  Thursday = 'Thursday',
  Tuesday = 'Tuesday',
  Wednesday = 'Wednesday'
}

export type HelloQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type HelloQueryQuery = { __typename?: 'Query', hello?: Maybe<string> };


export const HelloQueryDocument = `
    query HelloQuery {
  hello
}
    `;
export const useHelloQueryQuery = <
      TData = HelloQueryQuery,
      TError = unknown
    >(
      client: GraphQLClient, 
      variables?: HelloQueryQueryVariables, 
      options?: UseQueryOptions<HelloQueryQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) => 
    useQuery<HelloQueryQuery, TError, TData>(
      variables === undefined ? ['HelloQuery'] : ['HelloQuery', variables],
      fetcher<HelloQueryQuery, HelloQueryQueryVariables>(client, HelloQueryDocument, variables, headers),
      options
    );