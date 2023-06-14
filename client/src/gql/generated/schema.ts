/* eslint-disable max-len */
import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
const defaultOptions = {} as const
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type Item = {
  __typename?: 'Item'
  description: Scalars['String']
  id: Scalars['String']
  name: Scalars['String']
  price: Scalars['Float']
}

export type ItemInput = {
  description: Scalars['String']
  name: Scalars['String']
  price: Scalars['Float']
}

export type Mutation = {
  __typename?: 'Mutation'
  createItem: Item
  createUnitItem: UnitItem
  createUser: User
  deleteItem: Scalars['Boolean']
  deleteUnitItem: Scalars['Boolean']
  login: Scalars['String']
  logout: Scalars['Boolean']
  setUserAsAdmin: User
  updateItem: Item
  updateUnitItem: UnitItem
}

export type MutationCreateItemArgs = {
  data: ItemInput
}

export type MutationCreateUnitItemArgs = {
  data: UnitItemInput
}

export type MutationCreateUserArgs = {
  data: UserInput
}

export type MutationDeleteItemArgs = {
  id: Scalars['String']
}

export type MutationDeleteUnitItemArgs = {
  id: Scalars['String']
}

export type MutationLoginArgs = {
  data: UserLoginInput
}

export type MutationSetUserAsAdminArgs = {
  data: UserAdminInput
}

export type MutationUpdateItemArgs = {
  data: UpdatedItemInput
  id: Scalars['String']
}

export type MutationUpdateUnitItemArgs = {
  data: UnitItemStatusInput
  id: Scalars['String']
}

export type Query = {
  __typename?: 'Query'
  getAllItems: Array<Item>
  getOneItem: Item
  profile: User
  unitItems: Array<UnitItem>
  users: Array<User>
}

export type QueryGetOneItemArgs = {
  id: Scalars['String']
}

export type QueryUnitItemsArgs = {
  itemId: Scalars['String']
}

export type UnitItem = {
  __typename?: 'UnitItem'
  id: Scalars['String']
  status: Scalars['Boolean']
}

export type UnitItemId = {
  id: Scalars['String']
}

export type UnitItemInput = {
  itemId: Scalars['String']
  status: Scalars['Boolean']
}

export type UnitItemStatusInput = {
  status: Scalars['Boolean']
}

export type UpdatedItemInput = {
  description: Scalars['String']
  name: Scalars['String']
  price: Scalars['Float']
}

export type User = {
  __typename?: 'User'
  email: Scalars['String']
  firstname: Scalars['String']
  id: Scalars['String']
  lastname: Scalars['String']
  role: Scalars['String']
}

export type UserAdminInput = {
  id: Scalars['String']
}

export type UserInput = {
  email: Scalars['String']
  firstname: Scalars['String']
  lastname: Scalars['String']
  password: Scalars['String']
  role?: InputMaybe<Scalars['String']>
}

export type UserLoginInput = {
  email: Scalars['String']
  password: Scalars['String']
}

export type CreateUserMutationVariables = Exact<{
  data: UserInput
}>

export type CreateUserMutation = {
  __typename?: 'Mutation'
  createUser: { __typename?: 'User'; id: string; firstname: string; lastname: string; email: string }
}

export type GetProfileQueryVariables = Exact<{ [key: string]: never }>

export type GetProfileQuery = { __typename?: 'Query'; profile: { __typename?: 'User'; id: string; email: string } }

export type ItemQueryVariables = Exact<{
  getOneItemId: Scalars['String']
}>

export type ItemQuery = {
  __typename?: 'Query'
  getOneItem: { __typename?: 'Item'; id: string; name: string; price: number; description: string }
}

export type ItemsQueryVariables = Exact<{ [key: string]: never }>

export type ItemsQuery = {
  __typename?: 'Query'
  getAllItems: Array<{ __typename?: 'Item'; id: string; name: string; price: number; description: string }>
}

export type LoginMutationVariables = Exact<{
  data: UserLoginInput
}>

export type LoginMutation = { __typename?: 'Mutation'; login: string }

export type LogoutMutationVariables = Exact<{ [key: string]: never }>

export type LogoutMutation = { __typename?: 'Mutation'; logout: boolean }

export type UsersQueryVariables = Exact<{ [key: string]: never }>

export type UsersQuery = {
  __typename?: 'Query'
  users: Array<{ __typename?: 'User'; id: string; firstname: string; lastname: string; email: string }>
}

export const CreateUserDocument = gql`
  mutation CreateUser($data: UserInput!) {
    createUser(data: $data) {
      id
      firstname
      lastname
      email
    }
  }
`
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateUserMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options)
}
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>
export const GetProfileDocument = gql`
  query getProfile {
    profile {
      id
      email
    }
  }
`

/**
 * __useGetProfileQuery__
 *
 * To run a query within a React component, call `useGetProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProfileQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProfileQuery(baseOptions?: Apollo.QueryHookOptions<GetProfileQuery, GetProfileQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetProfileQuery, GetProfileQueryVariables>(GetProfileDocument, options)
}
export function useGetProfileLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetProfileQuery, GetProfileQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetProfileQuery, GetProfileQueryVariables>(GetProfileDocument, options)
}
export type GetProfileQueryHookResult = ReturnType<typeof useGetProfileQuery>
export type GetProfileLazyQueryHookResult = ReturnType<typeof useGetProfileLazyQuery>
export type GetProfileQueryResult = Apollo.QueryResult<GetProfileQuery, GetProfileQueryVariables>
export const ItemDocument = gql`
  query Item($getOneItemId: String!) {
    getOneItem(id: $getOneItemId) {
      id
      name
      price
      description
    }
  }
`

/**
 * __useItemQuery__
 *
 * To run a query within a React component, call `useItemQuery` and pass it any options that fit your needs.
 * When your component renders, `useItemQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useItemQuery({
 *   variables: {
 *      getOneItemId: // value for 'getOneItemId'
 *   },
 * });
 */
export function useItemQuery(baseOptions: Apollo.QueryHookOptions<ItemQuery, ItemQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<ItemQuery, ItemQueryVariables>(ItemDocument, options)
}
export function useItemLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ItemQuery, ItemQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<ItemQuery, ItemQueryVariables>(ItemDocument, options)
}
export type ItemQueryHookResult = ReturnType<typeof useItemQuery>
export type ItemLazyQueryHookResult = ReturnType<typeof useItemLazyQuery>
export type ItemQueryResult = Apollo.QueryResult<ItemQuery, ItemQueryVariables>
export const ItemsDocument = gql`
  query Items {
    getAllItems {
      id
      name
      price
      description
    }
  }
`

/**
 * __useItemsQuery__
 *
 * To run a query within a React component, call `useItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useItemsQuery({
 *   variables: {
 *   },
 * });
 */
export function useItemsQuery(baseOptions?: Apollo.QueryHookOptions<ItemsQuery, ItemsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<ItemsQuery, ItemsQueryVariables>(ItemsDocument, options)
}
export function useItemsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ItemsQuery, ItemsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<ItemsQuery, ItemsQueryVariables>(ItemsDocument, options)
}
export type ItemsQueryHookResult = ReturnType<typeof useItemsQuery>
export type ItemsLazyQueryHookResult = ReturnType<typeof useItemsLazyQuery>
export type ItemsQueryResult = Apollo.QueryResult<ItemsQuery, ItemsQueryVariables>
export const LoginDocument = gql`
  mutation Login($data: UserLoginInput!) {
    login(data: $data)
  }
`
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options)
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>
export const LogoutDocument = gql`
  mutation Logout {
    logout
  }
`
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options)
}
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>
export const UsersDocument = gql`
  query Users {
    users {
      id
      firstname
      lastname
      email
    }
  }
`

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useUsersQuery(baseOptions?: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options)
}
export function useUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options)
}
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>
export type UsersQueryResult = Apollo.QueryResult<UsersQuery, UsersQueryVariables>
