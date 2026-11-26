# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `taskboard`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*GetTasks*](#gettasks)
  - [*GetTaskById*](#gettaskbyid)
- [**Mutations**](#mutations)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `taskboard`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `taskboard` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## GetTasks
You can execute the `GetTasks` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getTasks(options?: ExecuteQueryOptions): QueryPromise<GetTasksData, undefined>;

interface GetTasksRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetTasksData, undefined>;
}
export const getTasksRef: GetTasksRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getTasks(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetTasksData, undefined>;

interface GetTasksRef {
  ...
  (dc: DataConnect): QueryRef<GetTasksData, undefined>;
}
export const getTasksRef: GetTasksRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getTasksRef:
```typescript
const name = getTasksRef.operationName;
console.log(name);
```

### Variables
The `GetTasks` query has no variables.
### Return Type
Recall that executing the `GetTasks` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetTasksData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetTasksData {
  tasks: ({
    taskId: number;
    name: string;
    desc?: string | null;
  } & Task_Key)[];
}
```
### Using `GetTasks`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getTasks } from '@dataconnect/generated';


// Call the `getTasks()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getTasks();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getTasks(dataConnect);

console.log(data.tasks);

// Or, you can use the `Promise` API.
getTasks().then((response) => {
  const data = response.data;
  console.log(data.tasks);
});
```

### Using `GetTasks`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getTasksRef } from '@dataconnect/generated';


// Call the `getTasksRef()` function to get a reference to the query.
const ref = getTasksRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getTasksRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.tasks);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.tasks);
});
```

## GetTaskById
You can execute the `GetTaskById` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getTaskById(vars: GetTaskByIdVariables, options?: ExecuteQueryOptions): QueryPromise<GetTaskByIdData, GetTaskByIdVariables>;

interface GetTaskByIdRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetTaskByIdVariables): QueryRef<GetTaskByIdData, GetTaskByIdVariables>;
}
export const getTaskByIdRef: GetTaskByIdRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getTaskById(dc: DataConnect, vars: GetTaskByIdVariables, options?: ExecuteQueryOptions): QueryPromise<GetTaskByIdData, GetTaskByIdVariables>;

interface GetTaskByIdRef {
  ...
  (dc: DataConnect, vars: GetTaskByIdVariables): QueryRef<GetTaskByIdData, GetTaskByIdVariables>;
}
export const getTaskByIdRef: GetTaskByIdRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getTaskByIdRef:
```typescript
const name = getTaskByIdRef.operationName;
console.log(name);
```

### Variables
The `GetTaskById` query requires an argument of type `GetTaskByIdVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetTaskByIdVariables {
  taskId: number;
}
```
### Return Type
Recall that executing the `GetTaskById` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetTaskByIdData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetTaskByIdData {
  task?: {
    taskId: number;
    name: string;
    desc?: string | null;
  } & Task_Key;
}
```
### Using `GetTaskById`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getTaskById, GetTaskByIdVariables } from '@dataconnect/generated';

// The `GetTaskById` query requires an argument of type `GetTaskByIdVariables`:
const getTaskByIdVars: GetTaskByIdVariables = {
  taskId: ..., 
};

// Call the `getTaskById()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getTaskById(getTaskByIdVars);
// Variables can be defined inline as well.
const { data } = await getTaskById({ taskId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getTaskById(dataConnect, getTaskByIdVars);

console.log(data.task);

// Or, you can use the `Promise` API.
getTaskById(getTaskByIdVars).then((response) => {
  const data = response.data;
  console.log(data.task);
});
```

### Using `GetTaskById`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getTaskByIdRef, GetTaskByIdVariables } from '@dataconnect/generated';

// The `GetTaskById` query requires an argument of type `GetTaskByIdVariables`:
const getTaskByIdVars: GetTaskByIdVariables = {
  taskId: ..., 
};

// Call the `getTaskByIdRef()` function to get a reference to the query.
const ref = getTaskByIdRef(getTaskByIdVars);
// Variables can be defined inline as well.
const ref = getTaskByIdRef({ taskId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getTaskByIdRef(dataConnect, getTaskByIdVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.task);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.task);
});
```

# Mutations

No mutations were generated for the `taskboard` connector.

If you want to learn more about how to use mutations in Data Connect, you can follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

