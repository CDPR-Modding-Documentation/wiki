## Creating a texture replacement mod
### Starting a project
Ensure WolvenKit is properly configured by following the Setup procedure

* Create a new WolvenKit mod project

* (Optional) Configure the Editor to suit your needs using docking

* Navigate to the Asset Browser window

### Asset Browser
The Asset Browser is the most fundamental WolvenKit tool. It allows us to browse any archive and add individual files to a local mod project. Any files added from the Asset Browser will be added to the Mod directory with their folder structure intact. Files added with the Asset Browser can be viewed, studied, modified, and packed as a modded archive.

1. Use the "breadcrumb" style navigator in the left-hand side of the Asset Browser to quickly navigate folders

2. Navigate to the following path:
Archive/base/characters/common/textures/tattoos

3. Use the main file list panel inside the Asset Browser to preview individual files. The XBM file extension always represents a texture file within REDengine. WolvenKit is capable of instantly previewing texture and model files. The Properties window responds automatically to selections within the Asset Browser. Feel free to experiment by selecting a few textures.

4. For this guide we'll be using tattoo_casual_d07.xbm, but feel free to choose another if you're feeling adventurous. To verify this texture mod in game, you will need a game save with Judy available in-person. Beware depending on the texture you choose, you may experience some difficulty when it comes time to verify that the final modded archive works successfully.

5. Select tattoo_casual_d07.xbm by left-clicking or using the check box. The check boxes are useful for more extensive projects when adding multiple files.

6. Add the texture to your project by double-clicking directly on the file or using the Add Selected Item(s) to Project button from the Ribbon

### Projects

Mod Projects are the core of WolvenKit functionality. Projects are primarily used to separate and organize source and game files into distinct self-contained mods. Each project can be thought of as the source code for any given mod.

* The Project Explorer is the central component for each mod project. Project files are separated into two main system directories:

* The Mod directory is for W2RC files.

* The Raw directory is for Raw source files.

These are core directories for WolvenKit's file operations. These folders are never exposed to the game inside the packed mod.

* (Optional) Navigate to the Project Explorer window to examine the new file added to the Mod directory. The preview functionality of the Properties window also works for local project files. Many REDengine assets and common image files (png, tga, etc.) can be automatically previewed by selecting them within the Project Explorer.

* (Optional) Files within the Project Explorer can be managed by right-clicking them directly. Additionally, with a file (or folder) selected, the same options become available from the Actions section of the Ribbon.

### Exporting REDengine Files

WolvenKit features a bespoke tool for conversions between W2RC and Raw formats, creatively named Import/Export. The tool can be accessed through the View tab of the Ribbon. The Import/Export tool is extremely robust, featuring advanced options and batch functionality.

The Mod and Raw directories within the Project Explorer behave as a mirror to one another; REDengine files are always stored in the Mod directory, and the analogous "generic" format file will be stored in the Raw directory with the same folder structure. Import and export destinations never need to be specified enabling ultra-fast file I/O, with the added benefit of automatically-organized Raw files.

1. Navigate to the Import/Export window, then ensure the Export toggle is selected

2. Double-click the tattoo_casual_d07.xbm file within the Export grid to view advanced options. Any asset within the Import/Export grid can be doubled clicked to adjust advanced I/O options for each file format.

3. Inspect the XBM Export Type drop down menu, in this case we want to export the texture as a TGA

4. Press the Confirm button to proceed. For batch exports, using the checkbox for Apply to all files of the same extension will ensure that any XBM currently within the Import/Export grid will inherit the same advanced options.

5. Press Process Selected to complete the export operation. A new TGA image will now be available within the Project Explorer Raw directory.
Cyberpunk textures appear to be upside-down. This is not a bug or issue with WolvenKit, nearly all textures are inverted. The Import/Export tool is capable of inverting processed textures during Import and Export.

### Editing Textures
While this guide is step-by-step, it's counter-productive for the WolvenKit team to guide users on using other software. We can recommend free tools such as Krita, Paint.net, or Gimp for editing TGA format textures. If you're not familiar with image editing software, we recommend learning how to use creative software from experts in those fields. YouTube is an excellent resource for learning the basics of most applications.

1. Import the tattoo_casual_d07.tga texture file to an image editing software of your choice

2. Make a distinct and recognizable change to the image

3. Export the tattoo_casual_d07.tga texture file as a TGA, overwriting the original TGA file
Importing REDengine Files
Return to the WolvenKit Editor

4. Navigate to the Import/Export window, then ensure the Import toggle is selected

5. Select the tattoo_casual_d07.tga file within the Import grid. Double-click the TGA file within the Import grid to access advanced options.

6. Within the advanced options, uncheck Use existing file. This ensures a successful import while using TGA with WolvenKit 8.4.3. Press Confirm to proceed.

7. Press Process Selected to complete the Import operation

8. Verify the updated texture by selecting the XBM within the Project Explorer. The new texture should be viewable with the Properties window. Custom TGA files may appear upside down within the file previewer! There is a known visual issue with WolvenKit 8.4.3. The imported XBM file preview will be correct.

### File Editing
The core feature of WolvenKit is the File Editor. Any REDengine file can be modified and saved with the built in REDengine document viewer.

1. Double-click the tattoo_casual_d07.xbm file within the Project Explorer.

2. Within the document view, select CBitmapTexture. Then use the panel on the righthand side to expand the Setup category.

3. Within the Setup category press the empty checkbox for the isGamma property. The box should now display an X for true. This step is necessary for all color textures to display as sRGB. Without isGamma checked color textures will appear bright and washed out.

### Building
WolvenKit features a one-click mod building solution. The build process packs any Mod directory files into archive format and installs to the game automatically.
WolvenKit only supports unbundled files. Files that have been decompressed with Oodle Kraken will not be packed correctly. Buffers must be compressed within the main W2RC file. Files added with the built-in Asset Browser will always be the correct format.

1. From within the General section of the Ribbon, select the Pack Project button

2. Verify the mod project has been packed and installed by viewing the Log window

3. Congratulations! Launch Cyberpunk and check out your first mod with WolvenKit!
