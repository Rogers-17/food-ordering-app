export const appwriteConfig = {
    endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT, // Your Appwrite Endpoint    
    platform:  "com.jsm.foodordering",
    projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
    databaseId: '691a2ea0000b83a32fab',
    userCollectionId: 'user'
};