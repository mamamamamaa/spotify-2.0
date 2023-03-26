# spotify-2.0

**This is my pet project which aims to learn how to use the Spotify API and practice technologies like TypeScript, React.js, Node.js, Tailwindcss, Redux-toolkit.**

## How can you run this project ?

1. **You have to buy a premium Spotify subscription!!!**

2. Create an account on [Spotify for Developers](https://developer.spotify.com/) in the Dashboard section, create a new app

3. Configure your project:
   > Add redirect URI
   > Get client id
   > Get client secret
 
4. Clone this repository : 
   > Paste in terminal: `git clone https://github.com/mamamamamaa/spotify-2.0.git .`

5. Move to client part of application :
   > Type in terminal next commands
    ```
    cd client
    npm i / yarn 
    ```
    
   > Create file `.env` and initialize environment variables such as:
   >* `REACT_APP_AUTH_URL` - https://accounts.spotify.com/authorize?client_id=<__your client id__>&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state
   >* `REACT_APP_SERVER_HOST` - your server address
   >* `REACT_APP_CLIENT_ID` - your client id
   
   > Run client : 
     ```
     npm start / yarn start
     ```
6. Move to server part of application 
   > Type in terminal next commands
    ```
    cd server
    npm i / yarn
    ```
    
   > Create file `.env` and initialize environment variables such as:
   >* `PORT` - your address port
   >* `CLIENT_ID` - your client id
   >* `CLIENT_SECRET` - your client secret key
   >* `REDIRECT_URI` - your redirect uri which must be the same as in the `REACT_APP_AUTH_URL` in query param `redirect_uri`
   
   > Run client : 
     ```
     npm start / yarn start
     ```
     
  ## Actually, that's all what you need to run this application <3
  **Good luck!**
