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
    21. Web-folder Frontend(For basic chat application for our backend):- <br>
				· Made an input box and a button .On clicking button routing to /room/roomID.(room folder).<br>
				· Made a folder Room in App where I created page.tsx file which contains ChatRoom function..which fetches the roomId and send it as prop to chatroom.jsx<br>
				· Config.ts file contains BACKEND_URL and WS_URL<br>
				· Made components folder which contain chatroom.jsx and chatroomclient.jsx.<br>
				· Chatroom.jsx function fetches all chats with room id and stores in msgs[] and send to Chatroomclient.jsx as prop.<br>
				· ChatroomClient.jsx for ws connection and show chats on UI.<br>
		This was frontend for the basic chat application. Now ,building excelidraw frontend.<br>
  


<<<<<<< HEAD
	  <h1>EXCELIDRAW - FRONTEND</h1> <br>
	    1.Initialize new  next.js project named excelidraw frontend<br>
		2. Used bolt ai for landing page ui (saves time)<br>
		3. Created components folder and inside it created AuthPage.tsx which contains form logic for signin sign up.<br>
		4. Created 2 folders each for sign in and sign up.<br>
		5. Designed landing or home page <br>
		6. Building logic for creating shapes using canvas from scratch(no library).<br>
		7. Completed rectangle shape logic and drawing multiple rectangles on canvas.<br>
		8. Connecting backend and frontend..From backend , chats which was storing all messages..would now store shapes data and thus fetching all existing shapes on canvas.<br>
		9. ClearCanvas function re-renders the complete canvas and display existingshapes.<br>
		10. Debugged all errors for now ..Canvas is working multiple clients or users can draw rectangles an d it will be stored in db and broadcasted to all users in that room.<br>
		11. Fixed canvas size to the window size so disabled scrolling.<br>
		12. Making topbar containing icons of shapes to select shapes. Used icon buttons and give them functionality to change whether to draw rectangle , circle or pencil.<br>
		13. Figured out logic for drawing a circle and given conditions acc to it at many places like first maintaining schema of shape if its circle and then in clearcanvas function to draw a circle.<br>
		14. Made a class in different file to reduce chunk of code and make it look easy.<br>
	    15. Completed the basic excelidraw.<br>	
	
	   # TO DO NEXT:-<br>
	   1. Adding pencil functionality.<br>
	   2. Add Panning and zooming functionality.<br>
	



