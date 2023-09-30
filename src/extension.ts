// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as fs from 'fs';
// import { Dependency, DepNodeProvider } from './lib/treeView/nodeDependencies';
import * as fileExplorer from './lib/treeView/fileExplorer';
import { VirtualFolderNodeTypeHolder, VirtualFolderTreeView } from './main/treeView/VirtualFolderTreeView';

// let context_global_forPersistence: vscode.ExtensionContext;
// let virtualFolderTreeView_global_forPersistence: VirtualFolderTreeView;

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  //   // // Use the console to output diagnostic information (console.log) and errors (console.error)
  //   // // This line of code will only be executed once when your extension is activated
  //   // console.log('Congratulations, your extension "virtualfoldervsc" is now active!');
  //
  //   let disposable;
  //
  //   //SECTION ### Simple Case - Intro
  //
  //   // The command has been defined in the package.json file
  //   // Now provide the implementation of the command with registerCommand
  //   // The commandId parameter must match the command field in package.json
  //   disposable = vscode.commands.registerCommand('virtualfoldervsc.helloWorld', () => {
  //     // The code you place here will be executed every time your command is executed
  //     // Display a message box to the user
  //     vscode.window.showInformationMessage('Hello World from VirtualFolderVsc!');
  //   });
  //   context.subscriptions.push(disposable);
  //
  //   disposable = vscode.commands.registerCommand('vstodo.askQuestion', async () => {
  //     const answer = await vscode.window.showInformationMessage('How was your day?', 'good', 'bad');
  //
  //     if (answer === 'bad') {
  //       vscode.window.showInformationMessage('Sorry to hear that');
  //     } else {
  //       console.log({ answer });
  //     }
  //   });
  //   context.subscriptions.push(disposable);
  //
  //   //!SECTION
  //
  //   //SECTION ### Web View
  //
  //   // []
  //   // const  panel = vscode.window.createWebviewPanel(
  //   // <>
  //   // https://code.visualstudio.com/api/extension-guides/webview
  //   disposable = vscode.commands.registerCommand('virtualfoldervsc.openHtml_t1', () => {
  //     // Create and show a new webview
  //     const panel = vscode.window.createWebviewPanel(
  //       'catCoding', // Identifies the type of the webview. Used internally
  //       'Cat Coding', // Title of the panel displayed to the user
  //       vscode.ViewColumn.One, // Editor column to show the new webview panel in.
  //       {
  //         // enableScripts: true,
  //         // retainContextWhenHidden: true
  //       }
  //       // // Webview options. More on these later.
  //     );
  //
  //     // And set its HTML content
  //     function getWebviewContent() {
  //       return /* html */ `<!DOCTYPE html>
  //                           <html lang="en">
  //                           <head>
  //                               <meta charset="UTF-8">
  //                               <meta name="viewport" content="width=device-width, initial-scale=1.0">
  //                               <title>Cat Coding</title>
  //                           </head>
  //                           <body>
  //                               <img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" width="300" />
  //                           </body>
  //                           </html>`;
  //     }
  //     panel.webview.html = getWebviewContent();
  //   });
  //   context.subscriptions.push(disposable);
  //
  //   //!SECTION
  //
  //   //SECTION ### Tree View
  //
  //   const rootPath = vscode.workspace.workspaceFolders && vscode.workspace.workspaceFolders.length > 0 ? vscode.workspace.workspaceFolders[0].uri.fsPath : undefined;
  //   if (rootPath === undefined) {
  //     throw new TypeError();
  //   }
  //   const nodeDependenciesProvider = new DepNodeProvider(rootPath);
  //   vscode.window.registerTreeDataProvider('nodeDependencies', nodeDependenciesProvider);
  //   // vscode.window.createTreeView('nodeDependencies', {
  //   //   treeDataProvider: new NodeDependenciesProvider(rootPath),
  //   // });
  //
  //   //       "explorer": [
  //   //         {
  //   //           "id": "nodeDependencies",
  //   //           "name": "Node Dependencies"
  //   //         }
  //   //       ],
  //   // ~~~// package.json still cannot do comment ...
  //
  //   // []
  //   // ## [contributes.viewsContainers](https://code.visualstudio.com/api/references/contribution-points#contributes.viewsContainers)
  //   //
  //   // Contribute a view container into which [Custom views](https://code.visualstudio.com/api/references/contribution-points#contributes.views) can be contributed. You must specify an identifier, title, and an icon for the view container. At present, you can contribute them to the Activity Bar (`activitybar`) and Panel (`panel`). Below example shows how the `Package Explorer` view container is contributed to the Activity Bar and how views are contributed to it.
  //   // <>
  //   // https://code.visualstudio.com/api/references/contribution-points#contributes.viewsContainers
  //   // []
  //   // *   [Custom view containers](https://code.visualstudio.com/api/references/contribution-points#contributes.viewsContainers) contributed by Extensions.
  //   // <>
  //   // https://code.visualstudio.com/api/references/contribution-points#contributes.views
  //   // []
  //   // View Actions
  //   // <>
  //   // https://code.visualstudio.com/api/extension-guides/tree-view
  //   // ~~~// feels linkage is so broken ...
  //   // 2 places to specify.
  //   // 1 for location
  //   // 1 for title
  //   // -- linked by "command" as "id" ...
  //
  //   vscode.commands.registerCommand('nodeDependencies.refreshEntry', () => nodeDependenciesProvider.refresh());
  //   //           return new Dependency(moduleName, version, vscode.TreeItemCollapsibleState.None, {
  //   //             command: 'extension.openPackageOnNpm',
  //   // ~~~// for that
  //   vscode.commands.registerCommand('extension.openPackageOnNpm', (moduleName) => vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(`https://www.npmjs.com/package/${moduleName}`)));
  //   vscode.commands.registerCommand('nodeDependencies.addEntry', () => vscode.window.showInformationMessage(`Successfully called add entry.`));
  //   vscode.commands.registerCommand('nodeDependencies.editEntry', (node: Dependency) => vscode.window.showInformationMessage(`Successfully called edit entry on ${node.label}.`));
  //   vscode.commands.registerCommand('nodeDependencies.deleteEntry', (node: Dependency) => vscode.window.showInformationMessage(`Successfully called delete entry on ${node.label}.`));
  //
  //   //       "view/item/context": [
  //   //         {
  //   //           "command": "nodeDependencies.editEntry",
  //   //           "// when": "view == nodeDependencies && viewItem == dependency",
  //   // ~~~// doesnt work with `when`, dk why
  //   // Note: If you want to show an action for specific tree items, you can do so by defining the context of a tree item using TreeItem.contextValue
  //   // ~~~//solved this reason in Dependency class ...
  //
  //   //!SECTION

  //SECTION ### File Explorer Tree View

  // const fileSystemProvider = new FileSystemProvider();
  // vscode.window.registerTreeDataProvider('idVal_virtualFolderTreeView', fileSystemProvider);
  const virtualFolderTreeView = new VirtualFolderTreeView();
  // ;halt; const virtualFolderTreeView_nodeRoot_prev = context.globalState.get('VirtualFolderTreeView_RootNode');
  // ;halt; const virtualFolderTreeView = new VirtualFolderTreeView(virtualFolderTreeView_nodeRoot_prev as VirtualFolderNodeTypeHolder | undefined);
  vscode.window.registerTreeDataProvider('idVal_virtualFolderTreeView', virtualFolderTreeView);

  // vscode command identifier syntax.. still dk no_knowlres
  // No view is registered with id: idVal_virtualFolderTreeView.fileExplorer
  // dont think its multi pb.. just json need add, but is this necessary? ..
  // vscode.window.registerTreeDataProvider('idVal_virtualFolderTreeView.fileExplorer', virtualFolderTreeView.fileSystemProvider);

  // []
  // callback: (args: any[]) => any
  // A command handler function.
  // <>
  // https://code.visualstudio.com/api/references/vscode-api
  // ~~//? still where is that ` (node: Dependency) =>` coming from?
  context.subscriptions.push(
    vscode.commands.registerCommand('idVal_virtualFolderTreeView.addEntry', (node: VirtualFolderNodeTypeHolder) => {
      // cannot be Entry -- cmd should not activated for that -- det by contextValue
      node.addChildNode(new VirtualFolderNodeTypeHolder('New_Folder', vscode.TreeItemCollapsibleState.Collapsed));
      virtualFolderTreeView.refresh();
      vscode.window.showInformationMessage(`Executed add :: ${node.label}.`);
    })
  );
  context.subscriptions.push(
    vscode.commands.registerCommand('idVal_virtualFolderTreeView.editEntry', async (node: VirtualFolderNodeTypeHolder) => {
      // Ability to edit the label in a treeview · Issue #117502 · microsoft/vscode
      // https://github.com/microsoft/vscode/issues/117502
      //
      // [Extension API] Allow input box in tree view. · Issue #179938 · microsoft/vscode
      // https://github.com/microsoft/vscode/issues/179938
      //
      // Provide some richer (optional) UI for custom tree views · Issue #97190 · microsoft/vscode
      // https://github.com/microsoft/vscode/issues/97190
      //
      // vscode extension command for input - Google 搜索
      // https://www.google.ca/search?q=vscode+extension+command+for+input&newwindow=1&sca_esv=569594169&sxsrf=AM9HkKnBwLzXbneS4nY4ulPAijYlroMDDQ%3A1696032168874&ei=qGUXZfSANYSxptQP75GEMA&ved=0ahUKEwj09M-XhNGBAxWEmIkEHe8IAQYQ4dUDCBA&uact=5&oq=vscode+extension+command+for+input&gs_lp=Egxnd3Mtd2l6LXNlcnAiInZzY29kZSBleHRlbnNpb24gY29tbWFuZCBmb3IgaW5wdXQyBRAhGKABSMQlULYRWJUicAF4AZABAJgBeaABxQqqAQQxNS4yuAEDyAEA-AEBwgIKEAAYRxjWBBiwA8ICCBAAGMsBGIAEwgIFEAAYgATCAgQQABgewgIGEAAYHhgKwgIGEAAYCBgewgIHECEYoAEYCuIDBBgAIEGIBgGQBgo&sclient=gws-wiz-serp
      //
      // Get user input from input box in visual studio code – CodepediaOrg
      // https://www.codepedia.org/snippets/60dbfb494095c204661309bf/get-user-input-from-input-box-in-visual-studio-code
      //
      // VS Code API | Visual Studio Code Extension API
      // https://code.visualstudio.com/api/references/vscode-api#window.createInputBox
      const inputText = await vscode.window.showInputBox({
        placeHolder: 'place your folder name here',
        prompt: 'Edit virtual folder name',
        value: 'Folder 1',
      });
      if (inputText !== undefined) {
        node.label = inputText;
        virtualFolderTreeView.refresh(); // well this gen hum
        vscode.window.showInformationMessage(`Executed edit :: ${node.label}.`);
      }
      // []
      //         "keybindings": [
      //             {
      //                 "command": "extension.insertLink",
      //                 "key": "ctrl+alt+l",
      //                 "mac": "shift+cmd+f"
      //             },
      // <>
      // https://stackoverflow.com/questions/42164748/how-do-i-set-a-keybinding-for-an-extension-in-vscode
    })
  );
  context.subscriptions.push(
    vscode.commands.registerCommand('idVal_virtualFolderTreeView.deleteEntry', (node: VirtualFolderNodeTypeHolder) => {
      node.removeSelf();
      virtualFolderTreeView.refresh();
      // vscode.window.showInformationMessage(`Executed delete :: ${node instanceof VirtualFolderNodeTypeHolder ? node.label : virtualFolderTreeView.getTreeItem(node).label}.`);
      vscode.window.showInformationMessage(`Executed delete :: ${node.label}.`);
    })
  );
  //
  context.subscriptions.push(
    vscode.commands.registerCommand('idVal_virtualFolderTreeView.refreshEntry', () => {
      virtualFolderTreeView.refresh();
      // let msg;
      // if (node) {
      //   msg = node instanceof VirtualFolderNodeTypeHolder ? node.label : virtualFolderTreeView.getTreeItem(node).label;
      // } else {
      //   msg = node;
      // }
      // this just nothing passing in guess / wel pb
      vscode.window.showInformationMessage(`Executed refresh.`);
    })
  );

  // #--<
  context.subscriptions.push(
    // idVal_virtualFolderTreeView.fileExplorer.openFile // dk confliction // but its hardcoded `treeItem.command = { command: 'fileExplorer.openFile', `
    vscode.commands.registerCommand('fileExplorer.openFile', (resource: vscode.Uri) => {
      // ~~~//copied-modified-from fileExplorer // @messy
      vscode.window.showTextDocument(resource);
    })
  );

  let node_Clipped: VirtualFolderNodeTypeHolder | fileExplorer.Entry | null = null;

  //
  context.subscriptions.push(
    vscode.commands.registerCommand('idVal_virtualFolderTreeView.cmd_cut_FileorfolderNode', (node: VirtualFolderNodeTypeHolder | fileExplorer.Entry) => {
      if (node instanceof VirtualFolderNodeTypeHolder) {
        node_Clipped = node;
        vscode.window.showInformationMessage(`Executed cut :: ${node.label}.`);
      } else if ((node as fileExplorer.Entry).uri !== undefined) {
        node_Clipped = node;
        vscode.window.showInformationMessage(`Executed copy instead of cut -- cuz you cannot modify real FileSystem Structure :: ${node.uri}.`);
      } else {
        throw new TypeError();
      }
    })
  );
  context.subscriptions.push(
    vscode.commands.registerCommand('idVal_virtualFolderTreeView.cmd_paste_FileorfolderNode', (node: VirtualFolderNodeTypeHolder | fileExplorer.Entry) => {
      if (node_Clipped === null) {
        vscode.window.showInformationMessage(`[Mistake]: cannot paste, cuz node_Clipped === null.`);
      } else {
        if (node instanceof VirtualFolderNodeTypeHolder) {
          // @codepath[normal] paste virtual folder / virtual real mix folder to virtual folder
          if (node_Clipped instanceof VirtualFolderNodeTypeHolder) {
            node.addChildNode(node_Clipped);
            const label = node_Clipped.label;
            node_Clipped = null;
            virtualFolderTreeView.refresh();
            vscode.window.showInformationMessage(`Executed paste :: pasted ${label} on ${node.label}.`);
          }
          // @codepath[normal] paste real folder / real real mix file to virtual folder
          else if ((node_Clipped as fileExplorer.Entry).uri !== undefined) {
            // here need to check folder or file too .. @check ...
            let state_CollapsedOr = vscode.TreeItemCollapsibleState.Collapsed;
            if (node_Clipped.type === vscode.FileType.Directory) {
              state_CollapsedOr = vscode.TreeItemCollapsibleState.Collapsed;
            } else if (node_Clipped.type === vscode.FileType.File) {
              state_CollapsedOr = vscode.TreeItemCollapsibleState.None;
              // const fsPath = node_Clipped.uri.fsPath;
              // if (fs.lstatSync(fsPath).isDirectory()) {
              //   state_CollapsedOr = vscode.TreeItemCollapsibleState.Collapsed;
              // } else if (fs.lstatSync(fsPath).isFile()) {
              //   // console.error('>>>>>> file ');
              //   state_CollapsedOr = vscode.TreeItemCollapsibleState.None;
            } else {
              throw new TypeError();
            }
            // TODO ;not_needed;[dk why not, still a gap]
            // actually the paste is correct ... just that gap is really confusing ...
            // Idk that extra padding right
            // cuz even in Simple Test it wouldnt be that far off ...
            // but align-icon-with-twisty is indeed the solve
            // collapse need specify too yeah

            //         H(be, Te) {
            //             be.parentElement.classList.toggle("align-icon-with-twisty", !this.g && this.m.alignIconWithTwisty(Te))
            //         }
            // Developer Tools - vscode-file://vscode-app/g:/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html workbench.desktop.main.js

            node.addChildNode(new VirtualFolderNodeTypeHolder(null, state_CollapsedOr, node_Clipped));
            const uri = node_Clipped.uri;
            node_Clipped = null;
            virtualFolderTreeView.refresh();
            vscode.window.showInformationMessage(`Executed paste :: pasted ${uri} on ${node.label}.`);
          } else {
            throw new TypeError();
          }
        } else if ((node as fileExplorer.Entry).uri !== undefined) {
          vscode.window.showInformationMessage(`[Mistake]: cannot paste -- cuz you cannot modify real FileSystem Structure :: ${node.uri}.`);
        } else {
          throw new TypeError();
        }
      }
    })
  );

  //     "views": {
  //       "idVal_virtualFolderViewContainer": [
  // ~~~// seem no need for that contribution.. just drag drop can do too... idk ..

  // just registered & the view is shown ... emmm why & where is the root ... // nvm still using FileSystemProvider ...
  // When the user opens the Tree View, the getChildren method will be called without an element. From there, your TreeDataProvider should return your top-level tree items. In our example, the collapsibleState of the top-level tree items is TreeItemCollapsibleState.Collapsed, meaning that the top-level tree items will show as collapsed.
  // https://code.visualstudio.com/api/extension-guides/tree-view
  //
  // agaaaa then

  // []
  // Command arguments
  // You can invoke a command with arguments. This is useful if you often perform the same operation on a specific file or folder. You can add a custom keyboard shortcut to do exactly what you want.
  //
  // The following is an example overriding the Enter key to print some text:
  //
  // {
  //   "key": "enter",
  //   "command": "type",
  //   "args": { "text": "Hello World" },
  //   "when": "editorTextFocus"
  // }
  // <>
  // https://code.visualstudio.com/docs/getstarted/keybindings
  // ~~~// well this arg from then ... but still need more explain where from

  //
  // ;halt; context.subscriptions.push(
  // ;halt;   vscode.commands.registerCommand('idVal_virtualFolderTreeView.cmd_save_VirtualFolderStructure', () => {
  // ;halt;     console.log(JSON.stringify(virtualFolderTreeView.nodeRoot, null, 2));
  // ;halt;     context.globalState.update('VirtualFolderTreeView_RootNode', virtualFolderTreeView.nodeRoot);
  // ;halt;   })
  // ;halt; );
  // ,
  //         {
  //           "// command": "idVal_virtualFolderTreeView.cmd_save_VirtualFolderStructure",
  //           "// when": "view == idVal_virtualFolderTreeView",
  //           "// group": "navigation"
  //         }
  // TODO save & serialization ...
  // TODO "title": "Restore to Factory"

  //!SECTION
}

// This method is called when your extension is deactivated
export function deactivate() {
  // ;not_working; console.error('zzzzzzzzzzzzzzzzzz');
  // ;not_working; console.log(JSON.stringify(virtualFolderTreeView_global_forPersistence.nodeRoot, null, 2));
  // ;not_working; context_global_forPersistence.globalState.update('VirtualFolderTreeView_RootNode', virtualFolderTreeView_global_forPersistence.nodeRoot);
}

// TODO
// 1. folder icon & virtual real mix thing
// 1. scope of delete is bad ... though works for now ..
// 1. edit name
// 1. localStorage
// 1. hotkey trigger

// "// when": "view == idVal_virtualFolderTreeView // need remove this, dk why, // but still wont work, cuz no context is passed https://github.com/microsoft/vscode/issues/72442 "

// []
// // Check if we have an old state to restore from
// const previousState = vscode.getState();
// <>
// https://code.visualstudio.com/api/extension-guides/webview

///
// vscode extension how to persist data when reload -
// vscode extension how to save data when reload -
// vscode extension how to save a when reload -
// vscode extension how to save a view -
//no_knowlres

// visual studio code - Where to store the extension related information in vscode - Stack Overflow
// https://stackoverflow.com/questions/43591105/where-to-store-the-extension-related-information-in-vscode
//
// visual studio code - How to persist information for a vscode extension? - Stack Overflow
// https://stackoverflow.com/questions/51821924/how-to-persist-information-for-a-vscode-extension
//
// VS Code API | Visual Studio Code Extension API
// https://code.visualstudio.com/api/references/vscode-api#Memento

// Activation Events | Visual Studio Code Extension API
// https://code.visualstudio.com/api/references/activation-events#onView
//~~~//not helping

// []
// *   The extensions run in a separate process, called the extension host process.
// *   When closing a window, the renderer process goes down immediately.
// *   The extension host process has at most 5 seconds to shut down, after which it will exit.
// *   The `vscode` API will be unreliable at deactivation time, especially parts that are serviced by the renderer process (like e.g. `openTextDocument`, etc.)
// <>
// https://github.com/Microsoft/vscode/issues/47881
// ~~~// dk
