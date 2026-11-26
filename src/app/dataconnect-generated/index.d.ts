import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, ExecuteQueryOptions } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface GetTaskByIdData {
  task?: {
    taskId: number;
    name: string;
    desc?: string | null;
  } & Task_Key;
}

export interface GetTaskByIdVariables {
  taskId: number;
}

export interface GetTasksData {
  tasks: ({
    taskId: number;
    name: string;
    desc?: string | null;
  } & Task_Key)[];
}

export interface Task_Key {
  taskId: number;
  __typename?: 'Task_Key';
}

interface GetTasksRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetTasksData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetTasksData, undefined>;
  operationName: string;
}
export const getTasksRef: GetTasksRef;

export function getTasks(options?: ExecuteQueryOptions): QueryPromise<GetTasksData, undefined>;
export function getTasks(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetTasksData, undefined>;

interface GetTaskByIdRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetTaskByIdVariables): QueryRef<GetTaskByIdData, GetTaskByIdVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetTaskByIdVariables): QueryRef<GetTaskByIdData, GetTaskByIdVariables>;
  operationName: string;
}
export const getTaskByIdRef: GetTaskByIdRef;

export function getTaskById(vars: GetTaskByIdVariables, options?: ExecuteQueryOptions): QueryPromise<GetTaskByIdData, GetTaskByIdVariables>;
export function getTaskById(dc: DataConnect, vars: GetTaskByIdVariables, options?: ExecuteQueryOptions): QueryPromise<GetTaskByIdData, GetTaskByIdVariables>;

