import { Account, Client, Databases, Storage } from "appwrite"
const sdk = require('node-appwrite')
export const appwriteConfig = {
    endpoint: import.meta.env.VITE_APPWRITE_API_ENDPOINT,
    projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
    apiKey: import.meta.env.VITE_APPWRITE_API_KEY,
    databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
    userCollectionId: import.meta.env.VITE_APPWRITE_USERS_TABLE_ID,
    postCollectionId: import.meta.env.VITE_APPWRITE_POSTS_TABLE_ID,
}

const client = new sdk.Client()
    .setEndpoint(appwriteConfig.endpoint)
    .setProject(appwriteConfig.projectId)

const account = new sdk.Account(client);
const database = new sdk.Databases(client);
const storage = new sdk.Storage(client);

export {client, account, database,storage}