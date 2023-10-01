### Introduction

- This is a Virtual Folder.

  You can **create more virtual folders** inside. \
  Then **move** your workspace (**real**) files/folders inside \
  & **manage** them better **inside** the Virtual Folder. 

  The underlying (real) files/folders **will not be changed** \
  (-- thats what Virtual stands for).

- These below are Project Folders copied from your current workspace.

  You drag files/folders from here into the Virtual Folder.

- ![image](https://github.com/Norlandz/virtualfoldervsc/assets/43581880/16703b54-49cc-46cb-909d-dc4f1428e75d)

### Functionality

- has a Root Virtual Folder \
  have your workspace (real) files/folders below
 
- create Virtual Folder inside the Root Virtual Folder
 
- copy real files/folders into virtual folders
 
- The below/copied underlying (real) files/folders will not be changed 
  - (if you attempt to do so, it will either only appears in the virtual way, or not respond to your action)
  - though, of course you **are** allowed to open the file & **edit** them in the editors 
  - the thing wont chagne is the **Folder Structure** in your file system
 
- drag and drop the files/folders
 
- save the Virtual Folder Structure on every modification 
 
- restore the Virtual Folder Structure back to Factory (empty the Root Virtual Folder)

### Limiations / Problems

- you cannot use hotkeys on the Tree Item \
  -- I think this is the Vscode problem (the Tree Item context just wont get passed into the command handler)

- save the Virtual Folder Structure is executed on every modification \
  -- bad for performance -- should do it when you close the Extension/Vscode \
  -- but exec on `deactivate()` cannot do the job, cuz it has a limit of 5 seconds (though, save doesnt take that long, it just wont execute) \
  & there is no other Event trigger for "on Extension Closed"

- may still have (many) bugs

- the Real and Virtual can coexist if its at the same Level (conceptually, its still Virtual folder) -- this is bit mixed (but nothing wrong, just powerful & complex). \
  but you cannot make that coexist happen for the subfolders inside below that level

- can have inf recurrsion if you drop the folder into itself (wont break, just hard to spot)

### Version & Update

XXX



