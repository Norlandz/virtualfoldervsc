// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as fs from 'fs';
// import { Dependency, DepNodeProvider } from './lib/treeView/nodeDependencies';
import * as fileExplorer from './lib/treeView/fileExplorer';
import { VirtualFolderNodeTypeHolder, VirtualFolderTreeView } from './main/treeView/VirtualFolderTreeView';
import Flatted = require('flatted');
import * as classTransformer from 'class-transformer';

// let context_global_forPersistence: vscode.ExtensionContext;
// let virtualFolderTreeView_global_forPersistence: VirtualFolderTreeView;
// @messy
// let funcGenerate_SaveNodeStructure: ((det_SaveNodeStructure: boolean) => () => void) | null = null;
// let saveNodeStructure_onExtensionClose: (() => Promise<Record<string, any>>) | null = null;

const globalStateItemName_VirtualFolderTreeView_RootNode = 'VirtualFolderTreeView_RootNode';

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

  function load_virtualFolderTreeView() {
    // let virtualFolderTreeView_i;
    const nodeRootJsonStr_Saved = context.globalState.get(globalStateItemName_VirtualFolderTreeView_RootNode);
    if (nodeRootJsonStr_Saved === undefined) {
      // const nodeRootJsonStr_Saved_T1 = /* json */ `@¦  {@¦    "collapsibleState": 2,@¦    "label": "root VirtualFolderNode",@¦    "realFileExplorerEntry": null,@¦    "contextValue": "ctxvalueVal_virtualFolder",@¦    "virtualFolderNode": {@¦      "arr_node_child": [@¦        {@¦          "collapsibleState": 2,@¦          "label": "h:\\\\Using\\\\JsParserSub\\\\src - Lv2 RealFileNode Test",@¦          "realFileExplorerEntry": {@¦            "uri": {@¦              "scheme": "file",@¦              "authority": "",@¦              "path": "/h:/Using/JsParserSub/src",@¦              "query": "",@¦              "fragment": "",@¦              "_formatted": null,@¦              "_fsPath": "h:\\\\Using\\\\JsParserSub\\\\src"@¦            },@¦            "type": 2@¦          },@¦          "contextValue": "ctxvalueVal_virtualFolder",@¦          "virtualFolderNode": {@¦            "arr_node_child": [],@¦            "name": "h:\\\\Using\\\\JsParserSub\\\\src - Lv2 RealFileNode Test"@¦          }@¦        },@¦        {@¦          "collapsibleState": 0,@¦          "label": "h:\\\\Using\\\\JsParserSub\\\\tsconfig.json - Lv2 RealFileNode Test",@¦          "realFileExplorerEntry": {@¦            "uri": {@¦              "scheme": "file",@¦              "authority": "",@¦              "path": "/h:/Using/JsParserSub/tsconfig.json",@¦              "query": "",@¦              "fragment": "",@¦              "_formatted": null,@¦              "_fsPath": "h:\\\\Using\\\\JsParserSub\\\\tsconfig.json"@¦            },@¦            "type": 1@¦          },@¦          "contextValue": "ctxvalueVal_virtualFolder",@¦          "virtualFolderNode": {@¦            "arr_node_child": [],@¦            "name": "h:\\\\Using\\\\JsParserSub\\\\tsconfig.json - Lv2 RealFileNode Test"@¦          }@¦        },@¦        {@¦          "collapsibleState": 0,@¦          "label": "Lv2 VirtualFileNode Test",@¦          "realFileExplorerEntry": null,@¦          "contextValue": "ctxvalueVal_virtualFolder",@¦          "virtualFolderNode": {@¦            "arr_node_child": [],@¦            "name": "Lv2 VirtualFileNode Test"@¦          }@¦        },@¦        {@¦          "collapsibleState": 1,@¦          "label": "Lv2 VirtualFileNode Collapsed Test",@¦          "realFileExplorerEntry": null,@¦          "contextValue": "ctxvalueVal_virtualFolder",@¦          "virtualFolderNode": {@¦            "arr_node_child": [],@¦            "name": "Lv2 VirtualFileNode Collapsed Test"@¦          }@¦        }@¦      ],@¦      "node_parent": null,@¦      "name": "root VirtualFolderNode"@¦    }@¦  }`;
      // const nodeRoot_Saved = classTransformer.plainToInstance(VirtualFolderNodeTypeHolder, JSON.parse(nodeRootJsonStr_Saved_T1) as { length?: never }, {
      return new VirtualFolderTreeView();
    } else {
      const nodeRoot_Saved = classTransformer.plainToInstance(VirtualFolderNodeTypeHolder, nodeRootJsonStr_Saved as { length?: never }, {
        enableCircularCheck: true,
      });
      return new VirtualFolderTreeView(nodeRoot_Saved);
    }
  }
  const virtualFolderTreeView = load_virtualFolderTreeView();
  // vscode.window.registerTreeDataProvider('idVal_virtualFolderTreeView', virtualFolderTreeView);
  const view = vscode.window.createTreeView('idVal_virtualFolderTreeView', {
    treeDataProvider: virtualFolderTreeView,
    showCollapseAll: true,
    canSelectMany: true,
    dragAndDropController: virtualFolderTreeView, // k this
  });
  // ;seems cannot use this if need reload..; context.subscriptions.push(view);

  // ## add & edit & delete & refresh
  {
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
      vscode.commands.registerCommand('idVal_virtualFolderTreeView.addEntry', async (node: VirtualFolderNodeTypeHolder) => {
        // cannot be Entry -- cmd should not activated for that -- det by contextValue
        // node.addChildNode(new VirtualFolderNodeTypeHolder('New_Folder', vscode.TreeItemCollapsibleState.Collapsed));
        const inputText = await vscode.window.showInputBox({
          placeHolder: 'place your folder name here',
          prompt: 'Edit virtual folder name',
          value: 'Folder 1',
        });
        if (inputText !== undefined) {
          node.addChildNode(new VirtualFolderNodeTypeHolder(inputText, vscode.TreeItemCollapsibleState.Collapsed));
          refreshView_and_saveNodeStructure();
          vscode.window.showInformationMessage(`Executed add :: ${node.label}.`);
        }
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
          refreshView_and_saveNodeStructure(); // well this gen hum
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
        refreshView_and_saveNodeStructure();
        // vscode.window.showInformationMessage(`Executed delete :: ${node instanceof VirtualFolderNodeTypeHolder ? node.label : virtualFolderTreeView.getTreeItem(node).label}.`);
        vscode.window.showInformationMessage(`Executed delete :: ${node.label}.`);
      })
    );
  }
  {
    //
    context.subscriptions.push(
      vscode.commands.registerCommand('idVal_virtualFolderTreeView.refreshEntry', () => {
        refreshView_and_saveNodeStructure();
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
  }

  // ## fileExplorer.openFile
  {
    // #--<
    context.subscriptions.push(
      // idVal_virtualFolderTreeView.fileExplorer.openFile // dk confliction // but its hardcoded `treeItem.command = { command: 'fileExplorer.openFile', `
      vscode.commands.registerCommand('fileExplorer.openFile', (resource: vscode.Uri) => {
        // ~~~//copied-modified-from fileExplorer // @messy
        vscode.window.showTextDocument(resource);
      })
    );
  }

  // ## Cut & Paste
  {
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
              refreshView_and_saveNodeStructure();
              vscode.window.showInformationMessage(`Executed paste :: pasted ${label} on ${node.label}.`);
            }

            // @pb //? why cut paste fileExplorer.Entry is able to be removed from old parent? ...
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
              // ;not_needed;[dk why not, still a gap]
              // actually the paste is correct ... just that gap is really confusing ...
              // Idk that extra padding right
              // cuz even in Simple Test it wouldnt be that far off ...
              // but align-icon-with-twisty is indeed the solve
              // collapse need specify too yeah
              //
              //         H(be, Te) {
              //             be.parentElement.classList.toggle("align-icon-with-twisty", !this.g && this.m.alignIconWithTwisty(Te))
              //         }
              // Developer Tools - vscode-file://vscode-app/g:/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html workbench.desktop.main.js
              // 41.98 >> 37.99 // 20px >> 16px // dk now that smaller emm.. (so kinda correct e)
              // cant compare too much, visually seems no diff... ; and the uri still doesnt help em // super(vscode.Uri.file('/v/fake'), collapsibleState);
              // @solved: its the folder cannot have icon ...

              node.addChildNode(new VirtualFolderNodeTypeHolder(null, state_CollapsedOr, node_Clipped));
              const uri = node_Clipped.uri;
              node_Clipped = null;
              refreshView_and_saveNodeStructure();
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
  }

  // ## (Print &) Save & Load
  async function saveNodeStructure() {
    // I think the reason this wont work cuz the view is already cleared before activate() is called ....
    // seems more of async issue ...
    // seems like timing is the pb too must clean up fast? f there just no event to update these?
    // []
    //  Extensions have at most 5 seconds to clean up after themselves.
    // <>
    // https://github.com/microsoft/vscode/issues/114688
    // console.error(`zzzzzzzzzzz`)
    // await new Promise((r) => setTimeout(r, 2000, ''));
    // console.error(virtualFolderTreeView)
    // console.error(virtualFolderTreeView.nodeRoot)
    // console.error(context)
    // console.error(context.globalState)
    const nodeRoot_classTransformer_instanceToPlain = classTransformer.instanceToPlain(virtualFolderTreeView.nodeRoot, {
      enableCircularCheck: true,
    });
    await context.globalState.update(globalStateItemName_VirtualFolderTreeView_RootNode, nodeRoot_classTransformer_instanceToPlain);
    // console.error(new Date()) // cant exec to this point ...
    return nodeRoot_classTransformer_instanceToPlain;
  }

  // @performance I dont want to, but seem have to bind this to refresh ...
  function refreshView_and_saveNodeStructure() {
    virtualFolderTreeView.refresh();
    saveNodeStructure(); // << yes this is async ...
  }
  // @messy
  virtualFolderTreeView.refreshView_and_saveNodeStructure__import_messy = refreshView_and_saveNodeStructure;

  {
    context.subscriptions.push(
      vscode.commands.registerCommand('idVal_virtualFolderTreeView.cmd_print_RootVirtualFolderNode_inJson', () => {
        // ;learn,test;         // console.log(virtualFolderTreeView.nodeRoot);
        // ;learn,test;         // console.log(JSON.stringify(virtualFolderTreeView.nodeRoot));
        // ;learn,test;         // use a library like [JSONC](https://www.npmjs.com/package/jsonc) that supports
        // ;learn,test;         // https://stackoverflow.com/questions/4816099/chrome-sendrequest-error-typeerror-converting-circular-structure-to-json
        // ;learn,test;         // console.log(Flatted.stringify(virtualFolderTreeView.nodeRoot, null, 2));
        // ;learn,test;         // console.log(Flatted.toJSON(virtualFolderTreeView.nodeRoot));
        // ;learn,test;         // ~~~// not the structure I like ...
        // ;learn,test;         // []
        // ;learn,test;         // const result = serialize(instance, { enableCircularCheck: true });
        // ;learn,test;         // <>
        // ;learn,test;         // https://github.com/typestack/class-transformer/issues/501
        // ;learn,test;
        // ;learn,test;         const nodeRoot_Flatted_stringify = Flatted.stringify(virtualFolderTreeView.nodeRoot);
        // ;learn,test;         const nodeRoot_Flatted_parse = Flatted.parse(nodeRoot_Flatted_stringify);
        // ;learn,test;         const nodeRoot_classTransformer_plainToInstance_fromFlatted = classTransformer.plainToInstance(VirtualFolderNodeTypeHolder, nodeRoot_Flatted_parse as { length?: never }, {
        // ;learn,test;           enableCircularCheck: true,
        // ;learn,test;         });
        // ;learn,test;         const nodeRoot_classTransformer_instanceToPlain = classTransformer.instanceToPlain(virtualFolderTreeView.nodeRoot, {
        // ;learn,test;           enableCircularCheck: true,
        // ;learn,test;         });
        // ;learn,test;         const nodeRoot_classTransformer_plainToInstance = classTransformer.plainToInstance(VirtualFolderNodeTypeHolder, JSON.parse(JSON.stringify(nodeRoot_classTransformer_instanceToPlain)) as { length?: never }, {
        // ;learn,test;           enableCircularCheck: true,
        // ;learn,test;         });
        // ;learn,test;
        // ;learn,test;         console.log(virtualFolderTreeView.nodeRoot);
        // ;learn,test;         console.log(nodeRoot_Flatted_parse);
        // ;learn,test;         console.log(nodeRoot_classTransformer_plainToInstance_fromFlatted);
        // ;learn,test;         console.log(nodeRoot_classTransformer_instanceToPlain);
        // ;learn,test;         console.log(nodeRoot_classTransformer_plainToInstance); //  as { length?: never } welwlel
        // ;learn,test;
        // ;learn,test;         console.log(virtualFolderTreeView.nodeRoot.constructor.name); // console.log(typeof virtualFolderTreeView.nodeRoot)
        // ;learn,test;         console.log(nodeRoot_classTransformer_plainToInstance_fromFlatted.constructor.name);
        // ;learn,test;         console.log(nodeRoot_Flatted_parse.constructor.name); // console.log(typeof nodeRoot_Flatted_parse)
        // ;learn,test;         console.log(nodeRoot_classTransformer_instanceToPlain.constructor.name);
        // ;learn,test;         console.log(nodeRoot_classTransformer_plainToInstance.constructor.name);

        const nodeRoot_classTransformer_instanceToPlain = classTransformer.instanceToPlain(virtualFolderTreeView.nodeRoot, {
          enableCircularCheck: true,
        });

        console.log(virtualFolderTreeView.nodeRoot);
        console.log(JSON.stringify(nodeRoot_classTransformer_instanceToPlain, null, 2));

        // ;moved; for test case
      })
    );

    //
    // saveNodeStructure_onExtensionClose = saveNodeStructure; // @messy aga
    // why typescript dont call an error here?  // seem void can take that ...
    context.subscriptions.push(
      vscode.commands.registerCommand('idVal_virtualFolderTreeView.cmd_save_VirtualFolderStructure', async () => {
        const result = await saveNodeStructure();
        vscode.window.showInformationMessage(`Executed save :: here is the data saved \n\n${JSON.stringify(result, null, 2)}`);
      })
    );
    context.subscriptions.push(
      vscode.commands.registerCommand('idVal_virtualFolderTreeView.cmd_restoreToFactory_VirtualFolderStructure', async () => {
        // []
        // What I wish to do is to find a way to remove the key, not only clear the value.
        // <>
        // https://stackoverflow.com/questions/57845512/remove-useless-keys-from-vscode-extensioncontext-globalstate
        await context.globalState.update(globalStateItemName_VirtualFolderTreeView_RootNode, undefined);
        // saveNodeStructure_onExtensionClose = null; // @messy
        await vscode.commands.executeCommand('idVal_virtualFolderTreeView.reloadExtension');
        vscode.window.showInformationMessage(`Executed restore & reload extension.`);
      })
    );
  }

  // ## reload extension
  {
    // []
    // [![enter image description here](https://i.stack.imgur.com/I1prf.png)](https://i.stack.imgur.com/I1prf.png) Press **Ctrl + Shift + P** to Open **Command Palette** and Type **Restart Extension Host**
    // <>
    // https://stackoverflow.com/questions/62352029/how-to-manually-restart-an-extension-in-vscode

    // []
    // I added a command that calls `deactivate`, then `dispose()` on everything in `subscriptions` and then calls `activate` again. Seems to be working OK (with some minor supporting changes).
    // <>
    // https://github.com/microsoft/vscode/issues/45774

    // >"
    // No tree view with id 'idVal_virtualFolderTreeView' registered.:
    // ...
    // ;seems cannot use this if need reload..; context.subscriptions.push(view); @check

    context.subscriptions.push(
      vscode.commands.registerCommand('idVal_virtualFolderTreeView.reloadExtension', () => {
        deactivate();
        for (const sub of context.subscriptions) {
          sub.dispose();
        }
        activate(context);
      })
    );
  }

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

  //!SECTION
}

// This method is called when your extension is deactivated
// ;seems cannot pass arg; export function deactivate(context: vscode.ExtensionContext, det_SaveNodeStructure = true, virtualFolderTreeView: VirtualFolderTreeView) {
// ;seems cannot pass arg;   console.error(']]]]]]')
// ;seems cannot pass arg;   console.error(context)
// ;seems cannot pass arg;   // @duplicated_code
// ;seems cannot pass arg;   if (det_SaveNodeStructure === true) {
// ;seems cannot pass arg;     const nodeRoot_classTransformer_instanceToPlain = classTransformer.instanceToPlain(virtualFolderTreeView.nodeRoot, {
// ;seems cannot pass arg;       enableCircularCheck: true,
// ;seems cannot pass arg;     });
// ;seems cannot pass arg;     context.globalState.update(globalStateItemName_VirtualFolderTreeView_RootNode, nodeRoot_classTransformer_instanceToPlain);
// ;seems cannot pass arg;   }
// ;seems cannot pass arg; }

export function deactivate() {
  // ;not_working; if (saveNodeStructure_onExtensionClose !== null) {
  // ;not_working;   await saveNodeStructure_onExtensionClose();
  // ;not_working; }
}

// TODO
// 1. folder icon & virtual real mix thing
// 1. scope of delete is bad ... though works for now ..
// 1. edit name
// 1. localStorage
// 1. hotkey trigger

// TODO-v save & serialization ...
// TODO-v "title": "Restore to Factory"

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

// TODO if paste inside itself -- inf recursion?

// >"
// 			"request": "launch", // seems like sometimes need to open this launch.json file so the run `npm: watch ` knows where to start ...
// 			"args": [
// 				"--extensionDevelopmentPath=${workspaceFolder}"
// 			],
// <>
// H:\Using\virtualfoldervsc\.vscode\launch.json

// ok that becomes that one why
// ~~~// still feels missing? shouldnt .. just drag .. emm cmd should be just all those ..

// well icon said whatever ..

// just reload .... guess svg file ones need bigger reload
