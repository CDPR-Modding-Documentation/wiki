## How WolvenKit fits in to the modding workflow
### Essentials
When modding Cyberpunk 2077, WolvenKit helps with:
* Browsing game files, and helping you bring these into project folders that it helps you set up to organise the content you are modding
* Exporting these W2RC RedEngine format game files into formats that can be read and edited by other apps
* Reimporting and converting these edited files back into the RedEngine format
* Packing and installing/copying these files to the correct part of the game folder

### Game entities
When modding, you will need to get your head around fhe following W2RC files:
* .ent files are entity files and equivalent to game objects and are what can be spawned within game. They link in various basic logic and rules that govern that object. They will either link .mesh files in directly for simple objects, or specify a list of appearance variations to call from a dedicated .app file. Note: For characters you should mod the .ent files in the quest subfolder
* .app files hold the different configuration of appearances that can be switched for more complex game entities such as characters or vehicles. These files then directly link in the relevant .mesh geometry, .rig files and .anim animation files for each appearance. 
* .mesh files are the actual 3d objects that hold the geometry but also hold a list of materials to use for different appearances requested of that mesh in game, which are embedded within compressed buffers within the .mesh file itself. 

### Materials
Materials are fairly complex in the way they are organised. The key thing is that materials are often embedded within compressed buffers inside the .mesh files. However, they can be and are sometimes referenced as external files with some simpler game objects.
Wkit can't edit these material buffers yet, a feature which is in advanced development for v8.6. In the meantime, you can export the .mesh using the WithMaterials option to get a json file which lists the material assignments. You can edit this file in an external text/script editor, then use the import option to bring the material assignments back into the .mesh file.
* .mt files are material templates that are the lowest level of abstraction and the source for material files. 
* .mi material instance files instantiate different settings based  on a .mt material template file to describe single-layer materials

One of the .mt files is the multilayered.mt, which is used a lot by characters and vehicles as the core template for multilayered complex materials. Back in the .mesh file, they are referenced within the mesh material buffers as follows:
* .multilayered.mt as the base template
* .mlsetup files to describe the kinds of .mi material assigned to each layer for this instance of the .multilayered.mt
* .mlmask files which combine internally a set of grayscale textures which describes which layer is used by which part of the mesh
* .xbm files hold textures
