# 💻 frontend-sandbox 🎭🎮
Web based project sandbox for all made in typescript by some frontend students<br/>
A place to post weird crazy ideas and projects!<br/>
Link to live project will be added when availible.

## How to use 📖
*Note: this project is under construction and does not yet work. <br/> 
things written here are merely ideas and plans, and should be interpreted as such.*

It's easy, really! <br/>
Create a folder to store your scenes files inside using the scenes folder as root. <br/>
Then create a class that inherits from the Scene class and add a new instance of it inside the SceneRepository.ts file <br/>
From there the SceneManager will handle adding your button to the sidebar and make the necessary state calls through your module.<br/>
The class contains an enter and an exit method that you may override. <br/>
Don't forget to also create a html and css file for your scene.

**Breakdown:**
1. Create a folder for your files in the /scenes folder
2. Create a .ts, .html and .css file for your scene inside your folder
3. Enter the .ts file and create a class that extends Scene then export the class
4. Enter the SceneRepository.ts file and add an instance of your scene to the array
5. Enter the .ts file and start writing your logic inside the enter method

## Rules 🛑

Admittedly, not many. Let loose your inner creative freak! <br/>
But... Adhere to these at least.<br/>

* Do not create scenes you wouldn't put on your portfolio - keep it pegi 16.
* Do not create scenes outside of the dedicated "src/scenes" folder.
* Do not override anything other than main in your scenes custom css.
* Do not make changes in other peoples scenes unless explicit permission exists.
* Do not change the default css file.
* Do not change the tsconfig file.

## 🎊 That's it! 🎊