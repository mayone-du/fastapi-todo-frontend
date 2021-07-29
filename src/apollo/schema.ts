import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * The `DateTime` scalar type represents a DateTime
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  DateTime: any;
  /**
   * Allows use of a JSON String for input / output from the GraphQL schema.
   *
   * Use of this type is *not recommended* as you lose the benefits of having a defined, static
   * schema (one of the key benefits of GraphQL).
   */
  JSONString: any;
};

export type CreateCustomUser = {
  __typename?: 'CreateCustomUser';
  ok?: Maybe<Scalars['Boolean']>;
};

export type CreateTask = {
  __typename?: 'CreateTask';
  ok?: Maybe<Scalars['Boolean']>;
};

export type CustomUserNode = Node & {
  __typename?: 'CustomUserNode';
  ulid: Scalars['String'];
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  fullName?: Maybe<Scalars['String']>;
  isVerified: Scalars['Boolean'];
  tasks?: Maybe<TaskNodeConnection>;
  /** The ID of the object. */
  id: Scalars['ID'];
};


export type CustomUserNodeTasksArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type CustomUserNodeConnection = {
  __typename?: 'CustomUserNodeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<CustomUserNodeEdge>>;
};

/** A Relay edge containing a `CustomUserNode` and its cursor. */
export type CustomUserNodeEdge = {
  __typename?: 'CustomUserNodeEdge';
  /** The item at the end of the edge */
  node?: Maybe<CustomUserNode>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};


export type DeleteTask = {
  __typename?: 'DeleteTask';
  ok?: Maybe<Scalars['Boolean']>;
};


export type Mutation = {
  __typename?: 'Mutation';
  createCustomUser?: Maybe<CreateCustomUser>;
  updateVerifyCustomUser?: Maybe<UpdateVerifyCustomUser>;
  createTask?: Maybe<CreateTask>;
  updateTask?: Maybe<UpdateTask>;
  deleteTask?: Maybe<DeleteTask>;
  updateTokens?: Maybe<UpdateTokens>;
  sendMagicLinkEmail?: Maybe<SendMagicLinkEmail>;
  reAuthentication?: Maybe<ReAuthentication>;
};


export type MutationCreateCustomUserArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationCreateTaskArgs = {
  content?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};


export type MutationUpdateTaskArgs = {
  content: Scalars['String'];
  id: Scalars['ID'];
  isDone: Scalars['Boolean'];
  title: Scalars['String'];
};


export type MutationDeleteTaskArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateTokensArgs = {
  oldRefreshToken: Scalars['String'];
};


export type MutationSendMagicLinkEmailArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationReAuthenticationArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

/** An object with an ID */
export type Node = {
  /** The ID of the object. */
  id: Scalars['ID'];
};

/** The Relay compliant `PageInfo` type, containing data necessary to paginate this connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  node?: Maybe<Node>;
  currentUser?: Maybe<CustomUserNode>;
  user?: Maybe<CustomUserNode>;
  allUsers?: Maybe<CustomUserNodeConnection>;
  task?: Maybe<TaskNode>;
  allTasks?: Maybe<TaskNodeConnection>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryAllUsersArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryTaskArgs = {
  id: Scalars['ID'];
};


export type QueryAllTasksArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type ReAuthentication = {
  __typename?: 'ReAuthentication';
  tokensObject?: Maybe<Scalars['JSONString']>;
};


export type ReAuthenticationTokensObjectArgs = {
  accessToken?: Maybe<Scalars['String']>;
  accessTokenExp?: Maybe<Scalars['DateTime']>;
  refreshToken?: Maybe<Scalars['String']>;
  refreshTokenExp?: Maybe<Scalars['DateTime']>;
};

export type SendMagicLinkEmail = {
  __typename?: 'SendMagicLinkEmail';
  ok?: Maybe<Scalars['Boolean']>;
};

export type TaskNode = Node & {
  __typename?: 'TaskNode';
  /** The ID of the object. */
  id: Scalars['ID'];
  taskCreatorUlid: Scalars['String'];
  title: Scalars['String'];
  content: Scalars['String'];
  isDone: Scalars['Boolean'];
  createdAt?: Maybe<Scalars['DateTime']>;
};

export type TaskNodeConnection = {
  __typename?: 'TaskNodeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<TaskNodeEdge>>;
};

/** A Relay edge containing a `TaskNode` and its cursor. */
export type TaskNodeEdge = {
  __typename?: 'TaskNodeEdge';
  /** The item at the end of the edge */
  node?: Maybe<TaskNode>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type UpdateTask = {
  __typename?: 'UpdateTask';
  ok?: Maybe<Scalars['Boolean']>;
};

export type UpdateTokens = {
  __typename?: 'UpdateTokens';
  tokensObject?: Maybe<Scalars['JSONString']>;
};


export type UpdateTokensTokensObjectArgs = {
  accessToken?: Maybe<Scalars['String']>;
  accessTokenExp?: Maybe<Scalars['DateTime']>;
  refreshToken?: Maybe<Scalars['String']>;
  refreshTokenExp?: Maybe<Scalars['DateTime']>;
};

export type UpdateVerifyCustomUser = {
  __typename?: 'UpdateVerifyCustomUser';
  refreshTokenObject?: Maybe<Scalars['JSONString']>;
};


export type UpdateVerifyCustomUserRefreshTokenObjectArgs = {
  refreshToken?: Maybe<Scalars['String']>;
  expirationDate?: Maybe<Scalars['String']>;
};

export type CreateCustomUserMutationVariables = Exact<{
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type CreateCustomUserMutation = (
  { __typename?: 'Mutation' }
  & { createCustomUser?: Maybe<(
    { __typename?: 'CreateCustomUser' }
    & Pick<CreateCustomUser, 'ok'>
  )> }
);

export type UpdateVerifyCustomUserMutationVariables = Exact<{ [key: string]: never; }>;


export type UpdateVerifyCustomUserMutation = (
  { __typename?: 'Mutation' }
  & { updateVerifyCustomUser?: Maybe<(
    { __typename?: 'UpdateVerifyCustomUser' }
    & Pick<UpdateVerifyCustomUser, 'refreshTokenObject'>
  )> }
);


export const CreateCustomUserDocument = gql`
    mutation CreateCustomUser($username: String!, $email: String!, $password: String!) {
  createCustomUser(username: $username, email: $email, password: $password) {
    ok
  }
}
    `;
export type CreateCustomUserMutationFn = Apollo.MutationFunction<CreateCustomUserMutation, CreateCustomUserMutationVariables>;

/**
 * __useCreateCustomUserMutation__
 *
 * To run a mutation, you first call `useCreateCustomUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCustomUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCustomUserMutation, { data, loading, error }] = useCreateCustomUserMutation({
 *   variables: {
 *      username: // value for 'username'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useCreateCustomUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateCustomUserMutation, CreateCustomUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCustomUserMutation, CreateCustomUserMutationVariables>(CreateCustomUserDocument, options);
      }
export type CreateCustomUserMutationHookResult = ReturnType<typeof useCreateCustomUserMutation>;
export type CreateCustomUserMutationResult = Apollo.MutationResult<CreateCustomUserMutation>;
export type CreateCustomUserMutationOptions = Apollo.BaseMutationOptions<CreateCustomUserMutation, CreateCustomUserMutationVariables>;
export const UpdateVerifyCustomUserDocument = gql`
    mutation UpdateVerifyCustomUser {
  updateVerifyCustomUser {
    refreshTokenObject
  }
}
    `;
export type UpdateVerifyCustomUserMutationFn = Apollo.MutationFunction<UpdateVerifyCustomUserMutation, UpdateVerifyCustomUserMutationVariables>;

/**
 * __useUpdateVerifyCustomUserMutation__
 *
 * To run a mutation, you first call `useUpdateVerifyCustomUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateVerifyCustomUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateVerifyCustomUserMutation, { data, loading, error }] = useUpdateVerifyCustomUserMutation({
 *   variables: {
 *   },
 * });
 */
export function useUpdateVerifyCustomUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateVerifyCustomUserMutation, UpdateVerifyCustomUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateVerifyCustomUserMutation, UpdateVerifyCustomUserMutationVariables>(UpdateVerifyCustomUserDocument, options);
      }
export type UpdateVerifyCustomUserMutationHookResult = ReturnType<typeof useUpdateVerifyCustomUserMutation>;
export type UpdateVerifyCustomUserMutationResult = Apollo.MutationResult<UpdateVerifyCustomUserMutation>;
export type UpdateVerifyCustomUserMutationOptions = Apollo.BaseMutationOptions<UpdateVerifyCustomUserMutation, UpdateVerifyCustomUserMutationVariables>;