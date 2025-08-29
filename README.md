# Excelidraw_App
Building ✏️ ExceliDraw — A collaborative, Excel-style whiteboard for drawing, brainstorming, and real-time teamwork.<br>
	1. Installing pnpm package and initializing turbo repo.</br>
	2. First starting with backend ..Added two backend folders -> Ws-backend & http-backend.</br>
    3.This is gonna be structure or design of our app.</br>
	4. Added  package.json file in both folders.</br>
	5. Added empty typescript-config.json file and imported it from "@repo/typescript-config/base.json".</br>
	6. Added @repo/typescript-config in dependencies in both folders.<br>
	7. Added a build,start,dev scripts to both the projects.<br>
	8. Update the turbo-config in both projects(optional)<br>
	9. Initialize a http server,Initialize a websocket server.<br>
	10. Write the signup , signin, create-room endpoint.<br>
	11. Write the middlewares that decode the token and gate the create-room  ep.<br>
	12. Decode the token in the websocket server as well. Send the token to the websocket server in a query param for now.<br>
	13. Initialize a new 'db' package where you write the schema of the project.<br>
	14. Import the db package in http layer and start putting things in the DB.<br>
	15. Add a common package where we add the zod schema and the JWT_SECRET..Thus done Zod validation.<br>
	16. Defining the schema.prisma<br>
	17. Complete the http backend<br>
	18. Ws layer ,room management,broadcast messages<br>
	19. HTTP route for GET/chats?room=123<br>
	20. HTTP route for GET/room:slug for fetching room ID<br>
	21. Frontend:- <br>
	&nbsp;&nbsp;  · Made an input box and a button .On clicking button routing to /room/roomID.(room folder).<br>
	&nbsp;&nbsp;  · Made a folder Room in App where I created page.tsx file which contains ChatRoom function..which fetches the roomId and send it as prop to chatroom.jsx<br>
	&nbsp;&nbsp;  · Config.ts file contains BACKEND_URL and WS_URL<br>
	&nbsp;&nbsp; · Made components folder which contain chatroom.jsx and chatroomclient.jsx.<br>
	&nbsp;&nbsp;  · Chatroom.jsx function fetches all chats with room id and stores in msgs[] and send to Chatroomclient.jsx as prop.<br>
	&nbsp;&nbsp;  · ChatroomClient.jsx for ws connection and show chats on UI.<br>



