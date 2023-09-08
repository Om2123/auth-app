import { Client, Account, ID } from "appwrite";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject(String(process.env.REACT_APP_PROJECT_ID)); // Your project ID;               // Your project ID

const account = new Account(client);

const isLogIN = async () => {
    const user = await account.getPrefs();
    console.log(user);
    // user.then((r)=>{return true}, (er)=>{return false})
}
const logOut = async () => {
    try {
        await account.deleteSession();

    } catch (error) {
        console.log(error.message);
    }
}
const getUser = async () => {
    try {
        const user = (await account.get());
        
        return user;
    } catch (error) {
        return null;
    }
}
export { isLogIN, logOut , getUser};
export default account;