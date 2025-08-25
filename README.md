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



