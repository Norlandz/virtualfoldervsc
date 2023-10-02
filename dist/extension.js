/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

"use strict";
module.exports = require("vscode");

/***/ }),
/* 2 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VirtualFolderNodeTypeHolder = exports.VirtualFolderTreeView = void 0;
const vscode = __webpack_require__(1);
const fs = __webpack_require__(3);
const fileExplorer = __webpack_require__(4);
const classTransformer = __webpack_require__(26);
__webpack_require__(44);
const url = __webpack_require__(45);
class VirtualFolderTreeView {
    // ;not_helping the indent css bug; , vscode.FileSystemProvider {@¦  // ;not_helping the indent css bug;  private _onDidChangeFile: vscode.EventEmitter<vscode.FileChangeEvent[]>;@¦  // ;not_helping the indent css bug;@¦  // ;not_helping the indent css bug;  constructor() {@¦  // ;not_helping the indent css bug;    this._onDidChangeFile = new vscode.EventEmitter<vscode.FileChangeEvent[]>();@¦  // ;not_helping the indent css bug;  }@¦  // ;not_helping the indent css bug;@¦  // ;not_helping the indent css bug;  get onDidChangeFile(): vscode.Event<vscode.FileChangeEvent[]> {@¦  // ;not_helping the indent css bug;    return this._onDidChangeFile.event;@¦  // ;not_helping the indent css bug;  }@¦  // ;not_helping the indent css bug;@¦  // ;not_helping the indent css bug;  watch(uri: vscode.Uri, options: { recursive: boolean; excludes: string[] }): vscode.Disposable {@¦  // ;not_helping the indent css bug;    const watcher = fs.watch(uri.fsPath, { recursive: options.recursive }, async (event, filename) => {@¦  // ;not_helping the indent css bug;      if (filename) {@¦  // ;not_helping the indent css bug;        const filepath = path.join(uri.fsPath, _.normalizeNFC(filename.toString()));@¦  // ;not_helping the indent css bug;@¦  // ;not_helping the indent css bug;        // TODO support excludes (using minimatch library?)@¦  // ;not_helping the indent css bug;@¦  // ;not_helping the indent css bug;        this._onDidChangeFile.fire([@¦  // ;not_helping the indent css bug;          {@¦  // ;not_helping the indent css bug;            type: event === 'change' ? vscode.FileChangeType.Changed : (await _.exists(filepath)) ? vscode.FileChangeType.Created : vscode.FileChangeType.Deleted,@¦  // ;not_helping the indent css bug;            uri: uri.with({ path: filepath }),@¦  // ;not_helping the indent css bug;          } as vscode.FileChangeEvent,@¦  // ;not_helping the indent css bug;        ]);@¦  // ;not_helping the indent css bug;      }@¦  // ;not_helping the indent css bug;    });@¦  // ;not_helping the indent css bug;@¦  // ;not_helping the indent css bug;    return { dispose: () => watcher.close() };@¦  // ;not_helping the indent css bug;  }@¦  // ;not_helping the indent css bug;@¦  // ;not_helping the indent css bug;  stat(uri: vscode.Uri): vscode.FileStat | Thenable<vscode.FileStat> {@¦  // ;not_helping the indent css bug;    return this._stat(uri.fsPath);@¦  // ;not_helping the indent css bug;  }@¦  // ;not_helping the indent css bug;@¦  // ;not_helping the indent css bug;  async _stat(path: string): Promise<vscode.FileStat> {@¦  // ;not_helping the indent css bug;    return new FileStat(await _.stat(path));@¦  // ;not_helping the indent css bug;  }@¦  // ;not_helping the indent css bug;@¦  // ;not_helping the indent css bug;  readDirectory(uri: vscode.Uri): [string, vscode.FileType][] | Thenable<[string, vscode.FileType][]> {@¦  // ;not_helping the indent css bug;    return this._readDirectory(uri);@¦  // ;not_helping the indent css bug;  }@¦  // ;not_helping the indent css bug;@¦  // ;not_helping the indent css bug;  async _readDirectory(uri: vscode.Uri): Promise<[string, vscode.FileType][]> {@¦  // ;not_helping the indent css bug;    const children = await _.readdir(uri.fsPath);@¦  // ;not_helping the indent css bug;@¦  // ;not_helping the indent css bug;    const result: [string, vscode.FileType][] = [];@¦  // ;not_helping the indent css bug;    for (let i = 0; i < children.length; i++) {@¦  // ;not_helping the indent css bug;      const child = children[i];@¦  // ;not_helping the indent css bug;      const stat = await this._stat(path.join(uri.fsPath, child));@¦  // ;not_helping the indent css bug;      result.push([child, stat.type]);@¦  // ;not_helping the indent css bug;    }@¦  // ;not_helping the indent css bug;@¦  // ;not_helping the indent css bug;    return Promise.resolve(result);@¦  // ;not_helping the indent css bug;  }@¦  // ;not_helping the indent css bug;@¦  // ;not_helping the indent css bug;  createDirectory(uri: vscode.Uri): void | Thenable<void> {@¦  // ;not_helping the indent css bug;    return _.mkdir(uri.fsPath);@¦  // ;not_helping the indent css bug;  }@¦  // ;not_helping the indent css bug;@¦  // ;not_helping the indent css bug;  readFile(uri: vscode.Uri): Uint8Array | Thenable<Uint8Array> {@¦  // ;not_helping the indent css bug;    return _.readfile(uri.fsPath);@¦  // ;not_helping the indent css bug;  }@¦  // ;not_helping the indent css bug;@¦  // ;not_helping the indent css bug;  writeFile(uri: vscode.Uri, content: Uint8Array, options: { create: boolean; overwrite: boolean }): void | Thenable<void> {@¦  // ;not_helping the indent css bug;    return this._writeFile(uri, content, options);@¦  // ;not_helping the indent css bug;  }@¦  // ;not_helping the indent css bug;@¦  // ;not_helping the indent css bug;  async _writeFile(uri: vscode.Uri, content: Uint8Array, options: { create: boolean; overwrite: boolean }): Promise<void> {@¦  // ;not_helping the indent css bug;    const exists = await _.exists(uri.fsPath);@¦  // ;not_helping the indent css bug;    if (!exists) {@¦  // ;not_helping the indent css bug;      if (!options.create) {@¦  // ;not_helping the indent css bug;        throw vscode.FileSystemError.FileNotFound();@¦  // ;not_helping the indent css bug;      }@¦  // ;not_helping the indent css bug;@¦  // ;not_helping the indent css bug;      await _.mkdir(path.dirname(uri.fsPath));@¦  // ;not_helping the indent css bug;    } else {@¦  // ;not_helping the indent css bug;      if (!options.overwrite) {@¦  // ;not_helping the indent css bug;        throw vscode.FileSystemError.FileExists();@¦  // ;not_helping the indent css bug;      }@¦  // ;not_helping the indent css bug;    }@¦  // ;not_helping the indent css bug;@¦  // ;not_helping the indent css bug;    return _.writefile(uri.fsPath, content as Buffer);@¦  // ;not_helping the indent css bug;  }@¦  // ;not_helping the indent css bug;@¦  // ;not_helping the indent css bug;  delete(uri: vscode.Uri, options: { recursive: boolean }): void | Thenable<void> {@¦  // ;not_helping the indent css bug;    if (options.recursive) {@¦  // ;not_helping the indent css bug;      return _.rmrf(uri.fsPath);@¦  // ;not_helping the indent css bug;    }@¦  // ;not_helping the indent css bug;@¦  // ;not_helping the indent css bug;    return _.unlink(uri.fsPath);@¦  // ;not_helping the indent css bug;  }@¦  // ;not_helping the indent css bug;@¦  // ;not_helping the indent css bug;  rename(oldUri: vscode.Uri, newUri: vscode.Uri, options: { overwrite: boolean }): void | Thenable<void> {@¦  // ;not_helping the indent css bug;    return this._rename(oldUri, newUri, options);@¦  // ;not_helping the indent css bug;  }@¦  // ;not_helping the indent css bug;@¦  // ;not_helping the indent css bug;  async _rename(oldUri: vscode.Uri, newUri: vscode.Uri, options: { overwrite: boolean }): Promise<void> {@¦  // ;not_helping the indent css bug;    const exists = await _.exists(newUri.fsPath);@¦  // ;not_helping the indent css bug;    if (exists) {@¦  // ;not_helping the indent css bug;      if (!options.overwrite) {@¦  // ;not_helping the indent css bug;        throw vscode.FileSystemError.FileExists();@¦  // ;not_helping the indent css bug;      } else {@¦  // ;not_helping the indent css bug;        await _.rmrf(newUri.fsPath);@¦  // ;not_helping the indent css bug;      }@¦  // ;not_helping the indent css bug;    }@¦  // ;not_helping the indent css bug;@¦  // ;not_helping the indent css bug;    const parentExists = await _.exists(path.dirname(newUri.fsPath));@¦  // ;not_helping the indent css bug;    if (!parentExists) {@¦  // ;not_helping the indent css bug;      await _.mkdir(path.dirname(newUri.fsPath));@¦  // ;not_helping the indent css bug;    }@¦  // ;not_helping the indent css bug;@¦  // ;not_helping the indent css bug;    return _.rename(oldUri.fsPath, newUri.fsPath);@¦  // ;not_helping the indent css bug;  }
    // ########################
    // ########################
    // ########################
    getTreeItem(node) {
        // console.log(`>> getTreeItem() ${node}`);
        // // ~~~//copied-from fileExplorer
        // function getTreeItem_fileExplorer_static(element: fileExplorer.Entry): vscode.TreeItem {
        //   const treeItem = new vscode.TreeItem(element.uri, element.type === vscode.FileType.Directory ? vscode.TreeItemCollapsibleState.Collapsed : vscode.TreeItemCollapsibleState.None);
        //   if (element.type === vscode.FileType.File) {
        //     treeItem.command = { command: 'fileExplorer.openFile', title: 'Open File', arguments: [element.uri] };
        //     treeItem.contextValue = 'file';
        //   }
        //   // should change these pasted ones es contextValue ... should be able to removed
        //   return treeItem;
        // }
        if (node instanceof VirtualFolderNodeTypeHolder) {
            // if (element.isVirtualFolderNode()) {
            //   return element;
            //   // dk maybe not need this ...
            // // } else {
            // //   return element.getRealFileSystemProvider()!.getTreeItem(element);
            // }
            // or just use the real file .... -- need add detection for this is folder or file
            // []
            // fs.lstatSync(path_string).isDirectory()
            // <>
            // https://stackoverflow.com/questions/15630770/node-js-check-if-path-is-file-or-directory
            // ~~~// em usage
            // ok this is the place add not below ...
            if (node.realFileExplorerEntry === null) {
                return node;
            }
            else {
                // const fsPath = node.realFileExplorerEntry.uri.fsPath;
                // if (fs.lstatSync(fsPath).isDirectory()) {
                if (node.realFileExplorerEntry.type === vscode.FileType.Directory) {
                    return node; // delegate to virtual real mix folder to deal with
                }
                else if (node.realFileExplorerEntry.type === vscode.FileType.File) {
                    // // if (node.realFileExplorerEntry.type !== vscode.FileType.File) {
                    // //   throw new TypeError('???');
                    // // }
                    // return getTreeItem_fileExplorer_static(node.realFileExplorerEntry);
                    // // return new VirtualFolderNodeTypeHolder('Test css Aligh', vscode.TreeItemCollapsibleState.None);
                    return this.fileSystemProvider.getTreeItem(node.realFileExplorerEntry);
                }
                else {
                    throw new TypeError();
                }
            }
        }
        else if (node.uri !== undefined) {
            // https://stackoverflow.com/questions/46703364/why-does-instanceof-in-typescript-give-me-the-error-foo-only-refers-to-a-ty
            // m
            // https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates
            // []
            // function isFish(pet: Fish | Bird): pet is Fish {
            //   return (pet as Fish).swim !== undefined;
            // }
            // <>
            // https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates
            // https://stackoverflow.com/questions/14425568/interface-type-check-with-typescript
            // return getTreeItem_fileExplorer_static(node);
            return this.fileSystemProvider.getTreeItem(node);
            // ;not_working; const fsPath = node.uri.fsPath;
            // ;not_working; if (fs.lstatSync(fsPath).isDirectory()) {
            // ;not_working;   node.type = vscode.FileType.Directory;
            // ;not_working;   return getTreeItem_fileExplorer_static(node);
            // ;not_working; } else if (fs.lstatSync(fsPath).isFile()) {
            // ;not_working;   node.type = vscode.FileType.File;
            // ;not_working;   return getTreeItem_fileExplorer_static(node);
            // ;not_working; } else {
            // ;not_working;   throw new TypeError();
            // ;not_working; }
        }
        else if (node === undefined || node === null) {
            // console.error('>> getTreeItem() ' + `why is this undefined? ${node}`);
            // const treeItem = new vscode.TreeItem('undefined node testing', vscode.TreeItemCollapsibleState.Expanded);
            // treeItem.contextValue = 'undefined_node';
            // return treeItem;
            // return this.nodeRoot;
            // // Type 'VirtualFolderNodeTypeHolder | undefined' is not assignable to type 'TreeItem'.
            // // ~~~// that may explain it ... ~~~// aga those think of special null hum      // doc missing_details..
            throw new TypeError('why is this undefined || null? I think this is the root node & you should initalize it first?');
        }
        else {
            throw new TypeError();
        }
    }
    nodeRoot = new VirtualFolderNodeTypeHolder('root VirtualFolderNode', vscode.TreeItemCollapsibleState.Expanded);
    // /**
    //  * @deprecated better private not public...
    //  */
    fileSystemProvider = new fileExplorer.FileSystemProvider();
    // // seems only have Static initialization blocks, not instance initialization block typescript ...
    // constructor() {
    // } // maybe better regi in extention ...
    /**
     * for persistance & restore only
     * @param nodeRoot
     */
    constructor(nodeRoot) {
        if (nodeRoot !== undefined) {
            this.nodeRoot = nodeRoot;
        }
    }
    async getChildren(node) {
        if (node === undefined) {
            // ;;Ma const node_root = VirtualFolderNodeTypeHolder.initVirtualFolder('root VirtualFolderNode', vscode.TreeItemCollapsibleState.Expanded);
            // ;;Ma return Promise.resolve([node_root]);
            // ;;Mb const node_root = VirtualFolderNodeTypeHolder.initVirtualFolder('root VirtualFolderNode', vscode.TreeItemCollapsibleState.Expanded);
            // ;;Mb const treeDataProvider = new FileSystemProvider();
            // ;;Mb // ~~~//copied-from fileExplorer // @messy -- cuz this is kinda static only when that element arg is undefined .. I think?
            // ;;Mb return treeDataProvider.getChildren(undefined).then((children) => {
            // ;;Mb   return [node_root, ...children]; // ~~~~// (need mix type)
            // ;;Mb });
            // ;;Mc const _nodeRoot = VirtualFolderNodeTypeHolder.initVirtualFolder('root VirtualFolderNode', vscode.TreeItemCollapsibleState.Expanded);
            // ;;Mc this.nodeRoot = _nodeRoot;
            // ;;Mc _nodeRoot.addChildNode(VirtualFolderNodeTypeHolder.initVirtualFolder('Lv2 Node Test'));
            // ;;Mc // ~~~//copied-from fileExplorer // @messy -- cuz this is kinda static only when that element arg is undefined .. I think?
            // ;;Mc const treeDataProvider = new FileSystemProvider();
            // ;;Mc const arr_node_FileExplorerEntry_child = await treeDataProvider.getChildren(undefined);
            // ;;Mc return [_nodeRoot, ...arr_node_FileExplorerEntry_child];
            // ;;Md // ;test; this.nodeRoot.addChildNode(VirtualFolderNodeTypeHolder.initVirtualFolder('Lv2 Node Test'));
            // ;;Md // ~~~//copied-from fileExplorer // @messy -- cuz this is kinda static only when that element arg is undefined .. I think?
            // ;;Md const fileSystemProvider = new FileSystemProvider();
            // ;;Md const arr_node_FileExplorerEntry_child = await fileSystemProvider.getChildren(undefined);
            // ;;Md return [this.nodeRoot, ...arr_node_FileExplorerEntry_child];
            // ;test;      this.nodeRoot.addChildNode(new VirtualFolderNodeTypeHolder('Lv2 VirtualNode Test'));
            // ;test;
            // ;test;      // ;test,trivial; const uri_SrcStr = path.join((vscode.workspace.workspaceFolders ?? []).filter((folder) => folder.uri.scheme !== undefined)[0].uri.fsPath, 'src');
            // ;test;      // ;test,trivial; const uri_SrcVsUri = vscode.Uri.file(uri_SrcStr);
            // ;test;      // ;test,trivial; // {$mid: 1, path: '/h:/Using/JsParserSub/src', scheme: 'file'}
            // ;test;      // ;test,trivial; // ~~~// seems like Linurx -- everything is a file? ...
            // ;test;      // ;test,trivial; // 		/**
            // ;test;      // ;test,trivial; // 		 * Scheme is the `http` part of `http://www.example.com/some/path?query#fragment`.
            // ;test;      // ;test,trivial; // 		 * The part before the first colon.
            // ;test;      // ;test,trivial; // 		 */
            // ;test;      // ;test,trivial; // 		readonly scheme: string;
            // ;test;      // ;test,trivial; // ~~~// emmm
            // ;test;      // ;test,trivial; console.log(uri_SrcStr);
            // ;test;      // ;test,trivial; console.log(uri_SrcVsUri);
            // ;test;
            // ;test;      // []
            // ;test;      // The callback will receive an argument with a vscode.Uri object:
            // ;test;      // <>
            // ;test;      // https://stackoverflow.com/questions/51961457/how-to-get-file-name-or-path-in-vscode-extension-when-user-right-click-on-file-i
            // ;test;
            //
            //  this.nodeRoot.addChildNode(
            //    new VirtualFolderNodeTypeHolder(
            //      'Lv2 RealFileNode Test', //
            //      vscode.TreeItemCollapsibleState.Expanded,
            //      {
            //        uri: vscode.Uri.file('h:\\Using\\JsParserSub\\src'),
            //        type: vscode.FileType.Directory,
            //      }
            //    )
            //  );
            //
            //  this.nodeRoot.addChildNode(
            //    new VirtualFolderNodeTypeHolder(
            //      'Lv2 RealFileNode Test', //
            //      vscode.TreeItemCollapsibleState.None, // that proves is not related to this pb then ..
            //      {
            //        uri: vscode.Uri.file('h:\\Using\\JsParserSub\\tsconfig.json'),
            //        type: vscode.FileType.File,
            //      }
            //    )
            //  );
            //
            //  this.nodeRoot.addChildNode(
            //    new VirtualFolderNodeTypeHolder(
            //      'Lv2 VirtualFileNode Test', //
            //      vscode.TreeItemCollapsibleState.None
            //    )
            //  );
            //
            //  this.nodeRoot.addChildNode(
            //    new VirtualFolderNodeTypeHolder(
            //      'Lv2 VirtualFileNode Collapsed Test', //
            //      vscode.TreeItemCollapsibleState.Collapsed
            //    )
            //  );
            // ~~~//copied-modified-from fileExplorer // @messy
            async function getWorkspaceFolders() {
                if (vscode.workspace.workspaceFolders !== undefined) {
                    return (vscode.workspace.workspaceFolders
                        // .filter((folder) => folder.uri !== undefined) // dk why need this
                        .filter((folder) => folder.uri.scheme === 'file')
                        .map((folder) => ({ uri: vscode.Uri.file(folder.uri.fsPath), type: vscode.FileType.Directory })));
                }
                else {
                    return [];
                }
            }
            return [this.nodeRoot, ...(await getWorkspaceFolders())];
            // ;problematic,deprecated; } else if (node instanceof VirtualFolderNodeTypeHolder) {
            // ;problematic,deprecated;   // ~~~~// (no need mix type?)
            // ;problematic,deprecated;   if (node.isVirtualFolderNode()) {
            // ;problematic,deprecated;     // return Promise.resolve(node.getChildren());
            // ;problematic,deprecated;     return node.getChildren();
            // ;problematic,deprecated;   } else {
            // ;problematic,deprecated;     // return Promise.resolve([]);
            // ;problematic,deprecated;     // return Promise.resolve(node.getRealFileSystemProvider()!.getChildren());
            // ;problematic,deprecated;     // return node.getRealFileSystemProvider()!.getChildren();
            // ;problematic,deprecated;     throw new Error('getRealFileSystemProvider is problematic, should never reach...');
            // ;problematic,deprecated;   }
            // ;problematic,deprecated; } else if ((node as Entry).uri !== undefined) {
            // ;problematic,deprecated;   // ~~~//copied-modified-from fileExplorer // @messy
            // ;problematic,deprecated;   const fileSystemProvider = new FileSystemProvider(); // @pb: should I use new onoe / search in the root tree for reference?
            // ;problematic,deprecated;   // actually .. should have only one outside ...
            // ;problematic,deprecated;   // that design of `  private static initRealFileandfolder(name: string, c` is problematic
            // ;problematic,deprecated;   return await fileSystemProvider.getChildren(node);
            // ;problematic,deprecated; } else {
            // ;problematic,deprecated;   throw new TypeError();
            // ;problematic,deprecated; }
        }
        else if (node instanceof VirtualFolderNodeTypeHolder) {
            // ~~~~// (no need mix type?)
            if (node.realFileExplorerEntry === null) {
                // if (node.isVirtualFolderNode()) {
                return node.getChildren();
            }
            else {
                // ;archived; console.error('aaaaaaaaaaaaaaaa');
                // ;archived; throw new Error(
                // ;archived;   'getRealFileSystemProvider is problematic, should never reach... ' +
                // ;archived;     '\n// well maybe the Entry will go inside FileSystemProvider es getChildren() not here.' +
                // ;archived;     '\nemm once add in, I think it will go here -- and even better -- should go in both ... ' +
                // ;archived;     '\nthat loop (breadth loop) so should be able to recursively go inside both ..' +
                // ;archived;     '\nstill, ok now how to GET & then put the entry inside this'
                // ;archived;   // seems the getting is from readDirectory() ... & Entry type just a subset ...
                // ;archived;   // return children.map(([name, type]) => ({ uri: vscode.Uri.file(path.join(workspaceFolder.uri.fsPath, name)), type }));
                // ;archived;   // yeah this line
                // ;archived; );
                return [...node.getChildren(), ...(await this.fileSystemProvider.getChildren(node.realFileExplorerEntry))];
            }
        }
        else if (node.uri !== undefined) {
            // ~~~//copied-modified-from fileExplorer // @messy
            // @pb: should I use new onoe / search in the root tree for reference?
            // actually .. should have only one outside ...
            // that design of `  private static initRealFileandfolder(name: string, c` is problematic
            return await this.fileSystemProvider.getChildren(node);
            // FileExplorerEntry does get passed in here , not as the VirtualFolderNodeTypeHolder .. hum -- well once that getTreeItem thing then, but the not need ref to get inside so?
        }
        else {
            throw new TypeError();
        }
    }
    // ########################
    // ~~~// dk how that event works .. but wel
    // 	export interface TreeDataProvider<T> {
    // 		/**
    // 		 * An optional event to signal that an element or root has changed.
    // 		 * This will trigger the view to update the changed element/root and its children recursively (if shown).
    // 		 * To signal that root has changed, do not pass any argument or pass `undefined` or `null`.
    // 		 */
    // 		onDidChangeTreeData?: Event<T | T[] | undefined | null | void>;
    // ~~~// but the syntax ... is this how it impl well ok interface ok
    // em that manual refresh every time ...
    _onDidChangeTreeData = new vscode.EventEmitter();
    onDidChangeTreeData = this._onDidChangeTreeData.event;
    refresh() {
        this._onDidChangeTreeData.fire();
    }
    // ########################
    // ########################
    // ########################
    // What is the purpose of dragMimeTypes? · Issue #145907 · microsoft/vscode
    // https://github.com/microsoft/vscode/issues/145907
    //
    // How to understand Drag and Drop MIME types ? | Qt Forum
    // https://forum.qt.io/topic/11160/how-to-understand-drag-and-drop-mime-types
    //
    // MIME types (IANA media types) - HTTP | MDN
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_Types
    //
    // Chapter 4. Metadata Design
    // file:///H:/Book/debug/RestApiRule/oebps/ch04.html#type_____subtype________parameter__
    //
    // Custom mimetypes (MIME types) — Jupyter Documentation 4.1.1 alpha documentation
    // https://docs.jupyter.org/en/latest/reference/mimetype.html
    //
    // vscode extensions - Is it possible to drag & drop between custom VS Code tree views? - Stack Overflow
    // https://stackoverflow.com/questions/72055681/is-it-possible-to-drag-drop-between-custom-vs-code-tree-views
    //
    // ~~~// missing_details dk how that custom works hum // also the auto set .. em
    // to support drag from others hum , but guess this drag wont get called & btw just this impl was messy already // @messy
    // where_talked the *file universal type? & where that ex to check type did it? // no_knowlres ...
    dragMimeTypes = ['application/vnd.code.tree.idval_virtualfoldertreeview']; // , 'text/uri-list'];
    dropMimeTypes = ['application/vnd.code.tree.idval_virtualfoldertreeview', 'text/uri-list'];
    // TODO allow drop from Window FileSystem ... -- so any file
    arr_node_Clipped = [];
    /**
     * must pass in before drag & drop
     */
    refreshView_and_saveNodeStructure__import_messy = null; // @messy
    // do I need async?
    handleDrag(source, dataTransfer, token) {
        // console.log('>> handleDrag()');
        // ;M; // can be an array.... not_sure
        // ;M; const nodeJsobj_Source = instanceToPlain(source, {
        // ;M;   enableCircularCheck: true,
        // ;M; });
        // ;M; dataTransfer.set('application/vnd.code.tree.idval_virtualfoldertreeview', new vscode.DataTransferItem(nodeJsobj_Source));
        // javascript - Copy array by value - Stack Overflow
        // https://stackoverflow.com/questions/7486085/copy-array-by-value
        //
        // How to extend an existing JavaScript array with another array, without creating a new array - Stack Overflow
        // https://stackoverflow.com/questions/1374126/how-to-extend-an-existing-javascript-array-with-another-array-without-creating
        // ~~~~// been ..
        // feels hacky... & cannot handle other kinds of drop .. @messy
        this.arr_node_Clipped.length = 0;
        this.arr_node_Clipped.push(...source);
        // when cancel, the old move ones are still in side .. seems this is by design which is bad .. need cancellation
        // []
        //       customCancellationToken.token.onCancellationRequested(() => {
        //         customCancellationToken?.dispose();
        //         customCancellationToken = null;
        // <>
        // https://www.eliostruyf.com/cancel-progress-programmatically-visual-studio-code-extensions/
        // @check //;not_working; maybe just clear everytime before ...
        token.onCancellationRequested(() => {
            console.log('>> token.onCancellationRequested()');
            this.arr_node_Clipped.length = 0;
        });
    }
    // @duplicated_code @messy -- type conversion is very Unsafe ...
    handleDrop(target, dataTransfer, token) {
        // console.log('>> handleDrop()');
        // token.onCancellationRequested(() => {
        //   this.arr_node_Clipped.length = 0;
        // });
        // "token.onCancellationRequested is not a function"
        // console.log(token)
        // ~~~// ? no idea but only that is accessible , is that how its used ? ...
        // @check //;not_working; maybe just clear everytime before ...
        if (token.isCancellationRequested) {
            console.log('>> token.isCancellationRequested');
            this.arr_node_Clipped.length = 0;
            return;
        }
        if (target === undefined) {
            this.arr_node_Clipped.length = 0;
            throw new TypeError();
        }
        else if (target instanceof VirtualFolderNodeTypeHolder) {
            // ;M; const transferItem = dataTransfer.get('application/vnd.code.tree.idval_virtualfoldertreeview');
            // ;M; if (!transferItem) {
            // ;M;   return;
            // ;M; }
            // ;M; const treeItems = transferItem.value; // @check @pb so this is an array? but then convert before can screw up things, ; dk those auto convert hum ...
            // ;M; console.log(treeItems);
            // ;M; for (const treeItem of treeItems) {
            // ;M;   if ((treeItem as VirtualFolderNodeTypeHolder).realFileExplorerEntry !== undefined) {
            // ;M;     // if (treeItem instanceof VirtualFolderNodeTypeHolder) {
            // ;M;     const treeItem_VF = plainToInstance(VirtualFolderNodeTypeHolder, treeItem as { length?: never }, {
            // ;M;       enableCircularCheck: true,
            // ;M;     });
            // ;M;     target.addChildNode(treeItem_VF);
            // ;M;     this.refresh();
            // ;M;     // @pb: this cannot remove the old instance ... because this is after serialization ..
            // ;M;     // @pb //? why cut paste fileExplorer.Entry is able to be removed from old parent? ...
            // ;M;     //   // that chekc just hard... cache pb & session scope , serialization will trigger this too ... just bad that drag drop ... -- its not actually passing the instance hum ..
            // ;M;     //   // well, maybe just one time array -- dont persist and check again ...
            // ;M;     //   private mpp__uuid_vs_virtualFolderNodeTypeHolder = new Map<string, VirtualFolderNodeTypeHolder>();
            // ;M;     // that duplicate of code just no going back ....
            // ;M;   } else if ((treeItem as fileExplorer.Entry).uri !== undefined) {
            // ;M;     // aga dk if classtransform has better handle on mixed type
            // ;M;     function convertTo_FileExplorerEntry(item_convertFrom: any): fileExplorer.Entry | null {
            // ;M;       const value = item_convertFrom as fileExplorer.Entry;
            // ;M;       if (value === undefined) {
            // ;M;         throw new TypeError('realFileExplorerEntry cannot be undefined');
            // ;M;       }
            // ;M;       if (value !== null) {
            // ;M;         return {
            // ;M;           uri: vscode.Uri.file(value.uri.path),
            // ;M;           type: value.type,
            // ;M;         };
            // ;M;       } else {
            // ;M;         return null;
            // ;M;       }
            // ;M;     }
            // ;M;     const treeItem_RF = convertTo_FileExplorerEntry(treeItem);
            // ;M;     if (treeItem_RF === null) {
            // ;M;       throw new TypeError();
            // ;M;     }
            // ;M;     let state_CollapsedOr = vscode.TreeItemCollapsibleState.Collapsed;
            // ;M;     if (treeItem_RF.type === vscode.FileType.Directory) {
            // ;M;       state_CollapsedOr = vscode.TreeItemCollapsibleState.Collapsed;
            // ;M;     } else if (treeItem_RF.type === vscode.FileType.File) {
            // ;M;       state_CollapsedOr = vscode.TreeItemCollapsibleState.None;
            // ;M;     } else {
            // ;M;       throw new TypeError();
            // ;M;     }
            // ;M;     target.addChildNode(new VirtualFolderNodeTypeHolder(null, state_CollapsedOr, treeItem_RF));
            // ;M;     this.refresh();
            // ;M;   } else {
            // ;M;     throw new TypeError();
            // ;M;   }
            // ;M; }
            // conditional statements - Why would you use an assignment in a condition? - Stack Overflow
            // https://stackoverflow.com/questions/151850/why-would-you-use-an-assignment-in-a-condition
            //
            // java - Assign variable value inside if-statement - Stack Overflow
            // https://stackoverflow.com/questions/16148580/assign-variable-value-inside-if-statement
            //
            // javascript - Assign variable in if condition statement, good practice or not? - Stack Overflow
            // https://stackoverflow.com/questions/2576571/assign-variable-in-if-condition-statement-good-practice-or-not
            //
            // []
            // Because unlike [`while`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while) loops, the condition is only evaluated once, so the assignment is only performed once. The code above is equivalent to:
            // <>
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
            let transferItem;
            // ## drag and drop for Virtual Folder Tree View only
            if ((transferItem = dataTransfer.get('application/vnd.code.tree.idval_virtualfoldertreeview'))) {
                transferItem; // by design, this has no use here... @messy
                // console.log(`if ((transferItem = dataTransfer.get('application/vnd.code.tree.idval_virtualfoldertreeview'))) {`);
                // console.log(transferItem);
                for (const node_Clipped of this.arr_node_Clipped) {
                    if (node_Clipped instanceof VirtualFolderNodeTypeHolder) {
                        if (target.realFileExplorerEntry === null) {
                            target.addChildNode(node_Clipped);
                        }
                        else {
                            // TODO if drop at a real file, its gone ....
                            console.error('Target is fileExplorer.Entry, cannot drop.');
                        }
                    }
                    else if (node_Clipped.uri !== undefined) {
                        let state_CollapsedOr;
                        if (node_Clipped.type === vscode.FileType.Directory) {
                            state_CollapsedOr = vscode.TreeItemCollapsibleState.Collapsed;
                        }
                        else if (node_Clipped.type === vscode.FileType.File) {
                            state_CollapsedOr = vscode.TreeItemCollapsibleState.None;
                        }
                        else {
                            throw new TypeError();
                        }
                        target.addChildNode(new VirtualFolderNodeTypeHolder(null, state_CollapsedOr, node_Clipped));
                    }
                    else {
                        throw new TypeError();
                    }
                }
                this.arr_node_Clipped.length = 0;
                // this.refresh(); // must call save too ...
                this.refreshView_and_saveNodeStructure__import_messy();
            }
            // ## add support to drag and drop from other file explorers
            else if ((transferItem = dataTransfer.get('text/uri-list'))) {
                // console.log(`} else if ((transferItem = dataTransfer.get('text/uri-list'))) {`)
                // console.log(transferItem);
                if (this.arr_node_Clipped.length !== 0) {
                    throw new Error('Should be 0, nothing should be in the clipboard -- cuz this is not from the Virtual Folder Tree View');
                }
                // const arr_pathUri = transferItem.value as string[];
                const arrStr_pathUri = transferItem.value;
                const arr_pathUri = arrStr_pathUri.split(/\r\n|\r|\n/);
                for (const pathUri of arr_pathUri) {
                    // @note: this is not an array -- this is a single string with \r\n linebreak... idkwhy
                    // const pathUri = transferItem.value as string;
                    const pathFile = url.fileURLToPath(pathUri);
                    // https://stackoverflow.com/questions/20619488/how-to-convert-local-file-path-to-a-file-url-safely-in-node-js
                    // console.log(pathUri)
                    // console.log(pathFile)
                    // console.log(vscode.Uri.file(pathUri)) // wrong
                    // console.log(vscode.Uri.file(pathFile)) // correct
                    // console.log(vscode.Uri.parse(pathUri)) // correct
                    // console.log(vscode.Uri.parse(pathFile)) // wrong
                    let state_CollapsedOr;
                    let fileType;
                    if (fs.lstatSync(pathFile).isDirectory()) {
                        state_CollapsedOr = vscode.TreeItemCollapsibleState.Collapsed;
                        fileType = vscode.FileType.Directory;
                    }
                    else if (fs.lstatSync(pathFile).isFile()) {
                        state_CollapsedOr = vscode.TreeItemCollapsibleState.None;
                        fileType = vscode.FileType.File;
                    }
                    else {
                        throw new TypeError();
                    }
                    target.addChildNode(new VirtualFolderNodeTypeHolder(null, state_CollapsedOr, {
                        // uri: vscode.Uri.parse(path), // seems use parse not file
                        uri: vscode.Uri.file(pathFile),
                        type: fileType,
                    }));
                }
                this.refreshView_and_saveNodeStructure__import_messy();
            }
            else {
                throw new TypeError();
            }
        }
        else if (target.uri !== undefined) {
            this.arr_node_Clipped.length = 0;
            console.error('Targe is fileExplorer.Entry, cannot drop.');
        }
        else {
            this.arr_node_Clipped.length = 0;
            throw new TypeError();
        }
    }
}
exports.VirtualFolderTreeView = VirtualFolderTreeView;
/**
 * @think: @rule: cannot have virtual folder inside real folder
 * @think: dk that always the multi Type in a Node pb ...
 * -- make null or just diff Type in loop ...
 * actually quite nested mixed cuz that both need...
 * actually can sep
 * actually that relation is jumping around
 *
 * Parent cannot final... unless really mean it.....
 *
 * // export class VirtualFolderTree{
 * //   public readonly node_root: VirtualFolderNodeTypeHolder;
 * // }
 * // dk feels this not needed, if just have the node then do method in that node?... feels wrong.. just make them all tree so another lv of layer .. emmm
 * // forgot private readonly virtualFolderNode: VirtualFolderNode | null; cannot be null ...
 */
class VirtualFolderNodeTypeHolder extends vscode.TreeItem {
    // https://stackoverflow.com/questions/28513780/final-keyword-in-typescript
    /**
     * @underlying node for folder structure
     */
    //     // https://github.com/typestack/class-transformer/issues/1584
    //     // ~~~// dk & that offline
    //     "experimentalDecorators": true
    // https://stackoverflow.com/questions/36446480/typescript-decorator-reports-unable-to-resolve-signature-of-class-decorator-whe
    virtualFolderNode;
    /**
     * @deprecated Only for debug (well @messy ...)
     */
    get_virtualFolderNode_debug() {
        return this.virtualFolderNode;
    }
    /**
     * reference to realFileExplorerEntry
     * @rule:
     * - can coexist virtual folder & real folder (bit messy & complex)
     *   (but only at this level, but no further down -- cuz internal of FileExplorer doesnt allow -- unless I rewrite it)
     * - cannot coexit virtual folder & real file
     *   -- real file wil take over
     */
    // ;X @Transform((tinfo) => plainToInstance(VirtualFolderNodeTypeHolder, tinfo.value))
    // @Type(() => fileExplorer.Entry)
    realFileExplorerEntry = null;
    constructor(name, collapsibleState, realFileExplorerEntry) {
        // fix name when null
        {
            if (name === null) {
                if (realFileExplorerEntry !== undefined) {
                    name = realFileExplorerEntry.uri.fsPath;
                }
                else {
                    throw new Error('name cannot be null');
                }
            }
            else {
                if (realFileExplorerEntry !== undefined) {
                    name = realFileExplorerEntry.uri.fsPath + ' - ' + name; // cant use 📁 hum ..
                }
                // if pure file -- it will just pass to as fileExplorer.Entry, will not be here
            }
        }
        //
        super(name, collapsibleState);
        // super(vscode.Uri.file('/v/fake'), collapsibleState);
        // super(vscode.Uri.file('H:/Using/JsParserSub'), collapsibleState);
        this.virtualFolderNode = new VirtualFolderNode(name);
        if (realFileExplorerEntry !== undefined) {
            this.realFileExplorerEntry = realFileExplorerEntry;
            // seems no right side Nullish coalescing assignment? ... . can add, but those syntax sugar just mess things
        }
        // @pb[folder with icon cause file with large ident] } else {
        // @pb[folder with icon cause file with large ident]   this.iconPath = {
        // @pb[folder with icon cause file with large ident]     light: path.join(__filename, '..', '..', 'resources', 'light', 'dependency.svg'),
        // @pb[folder with icon cause file with large ident]     dark: path.join(__filename, '..', '..', 'resources', 'dark', 'dependency.svg'),
        // @pb[folder with icon cause file with large ident]   };
    }
    // 2 cstu init method removed
    // ############
    // isVirtualFolderNode() {
    //   return this.realFileExplorerEntry === null;
    // }
    /*
    wait ... deduplication concern too ....
    was this that complex?
    */
    addChildNode(child) {
        // when move, need ori parent to remove the link too ...
        // child.virtualFolderNode.node_parent?.removeChildNode(child);
        if (child.virtualFolderNode.node_parent === null) {
            // @do_nothing
        }
        else if (child.virtualFolderNode.node_parent === undefined) {
            throw new TypeError('maybe: classtransformer ignores circular dependency, so the parent is undefined (in jsobj) / default to null (in class)?'); // remains default value -- null'); // not become undefined .. // actuall idk seems null.. not string Circular either so ..
            // actually if js obj its undefined, if class is default value ...
        }
        else {
            child.virtualFolderNode.node_parent.removeChildNode(child);
        }
        child.virtualFolderNode.node_parent = this;
        this.virtualFolderNode.arr_node_child.push(child);
    }
    removeChildNode(child) {
        // []
        // Find the `index` of the array element you want to remove using [`indexOf`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf), and then remove that index with [`splice`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/splice).
        // <>
        // https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array-in-javascript
        // ~~~// why I never knew this ...
        const index = this.virtualFolderNode.arr_node_child.indexOf(child);
        if (index > -1) {
            this.virtualFolderNode.arr_node_child.splice(index, 1);
            return true;
        }
        else {
            return false;
        }
    }
    removeSelf() {
        if (this.virtualFolderNode.node_parent !== null) {
            this.virtualFolderNode.node_parent.removeChildNode(this);
        }
        this.virtualFolderNode.node_parent = null;
        // []
        // A.length = 0;
        // <>
        // https://stackoverflow.com/questions/1232040/how-do-i-empty-an-array-in-javascript
        this.virtualFolderNode.arr_node_child.length = 0;
    }
    getChildren() {
        return this.virtualFolderNode.arr_node_child;
    }
    // ############
    // Context value of the tree item. This can be used to contribute item specific actions in the tree. For example, a tree item is given a context value as folder. When contributing actions to view/item/context using menus extension point, you can specify context value for key viewItem in when expression like viewItem == folder.
    // ~~~// still arg passing dk
    contextValue = 'ctxvalueVal_virtualFolder';
}
exports.VirtualFolderNodeTypeHolder = VirtualFolderNodeTypeHolder;
__decorate([
    classTransformer.Type(() => VirtualFolderNode)
    // ;not_working;[circular dep hack fail]   @classTransformer.Transform((tinfo) => {
    // ;not_working;[circular dep hack fail]     console.log('@classTransformer.Transform((tinfo) => { private readonly virtualFolderNode: VirtualFolderNode;');
    // ;not_working;[circular dep hack fail]     console.log(tinfo);
    // ;not_working;[circular dep hack fail]
    // ;not_working;[circular dep hack fail]     const value = tinfo.value as VirtualFolderNode;
    // ;not_working;[circular dep hack fail]     if (value === undefined || value === null) {
    // ;not_working;[circular dep hack fail]       throw new TypeError('VirtualFolderNodeTypeHolder cannot be undefined or null');
    // ;not_working;[circular dep hack fail]     }
    // ;not_working;[circular dep hack fail]
    // ;not_working;[circular dep hack fail]     if (value.node_parent === null) {
    // ;not_working;[circular dep hack fail]       const pointer2ndLayerHolder: {
    // ;not_working;[circular dep hack fail]         pointer: string | VirtualFolderNode;
    // ;not_working;[circular dep hack fail]       } = {
    // ;not_working;[circular dep hack fail]         pointer: 'this should be changed to the value of `this` (-- the return `result`) after this transformation is done',
    // ;not_working;[circular dep hack fail]       };
    // ;not_working;[circular dep hack fail]
    // ;not_working;[circular dep hack fail]       // js can i menipulate reference address - Google 搜索
    // ;not_working;[circular dep hack fail]       // https://www.google.ca/search?q=js+can+i+menipulate+reference+address
    // ;not_working;[circular dep hack fail]       //
    // ;not_working;[circular dep hack fail]       // Is JavaScript a pass-by-reference or pass-by-value language? - Stack Overflow
    // ;not_working;[circular dep hack fail]       // https://stackoverflow.com/questions/518000/is-javascript-a-pass-by-reference-or-pass-by-value-language
    // ;not_working;[circular dep hack fail]       //
    // ;not_working;[circular dep hack fail]       // Are there pointers in javascript? - Stack Overflow
    // ;not_working;[circular dep hack fail]       // https://stackoverflow.com/questions/17382427/are-there-pointers-in-javascript
    // ;not_working;[circular dep hack fail]       // ~~~// feels can add another layer of ojbect though ...
    // ;not_working;[circular dep hack fail]       (value as any).refHolderTo_CircularDependencyObj_hack = pointer2ndLayerHolder.pointer;
    // ;not_working;[circular dep hack fail]       // []
    // ;not_working;[circular dep hack fail]       // (user as any).otherProperty = 'hello';
    // ;not_working;[circular dep hack fail]       // <>
    // ;not_working;[circular dep hack fail]       // https://stackoverflow.com/questions/12710905/how-do-i-dynamically-assign-properties-to-an-object-in-typescript
    // ;not_working;[circular dep hack fail]       // const result = Object.assign(new VirtualFolderNode('@dummy will be overwritten'), value);
    // ;not_working;[circular dep hack fail]       // but if that call is recursive, this wont return yet ... dk internal ...
    // ;not_working;[circular dep hack fail]       // well that recursion should call classTransform aga just .
    // ;not_working;[circular dep hack fail]       // console.log(value)
    // ;not_working;[circular dep hack fail]       const result = classTransformer.plainToInstance(VirtualFolderNode, value as { length?: never }, {
    // ;not_working;[circular dep hack fail]         enableCircularCheck: true,
    // ;not_working;[circular dep hack fail]       });
    // ;not_working;[circular dep hack fail]       // console.log('Should exec later') // indeed, so its recursive , order correct
    // ;not_working;[circular dep hack fail]       pointer2ndLayerHolder.pointer = result;
    // ;not_working;[circular dep hack fail]       return result;
    // ;not_working;[circular dep hack fail]     } else {
    // ;not_working;[circular dep hack fail]       // console.log('Should exec first')
    // ;not_working;[circular dep hack fail]       // How do I check if an object has a specific property in JavaScript? - Stack Overflow
    // ;not_working;[circular dep hack fail]       // https://stackoverflow.com/questions/135448/how-do-i-check-if-an-object-has-a-specific-property-in-javascript
    // ;not_working;[circular dep hack fail]       //
    // ;not_working;[circular dep hack fail]       // javascript - How to check if object property exists with a variable holding the property name? - Stack Overflow
    // ;not_working;[circular dep hack fail]       // https://stackoverflow.com/questions/11040472/how-to-check-if-object-property-exists-with-a-variable-holding-the-property-name
    // ;not_working;[circular dep hack fail]       // ~~~// not check undefined? ...
    // ;not_working;[circular dep hack fail]       // if (!Object.hasOwn(value.node_parent, 'refHolderTo_CircularDependencyObj_hack')) {
    // ;not_working;[circular dep hack fail]       if (!Object.hasOwn(value.node_parent.virtualFolderNode, 'refHolderTo_CircularDependencyObj_hack')) { // @note: not at the parent -- need go inside the wrapper...  weell my design ...
    // ;not_working;[circular dep hack fail]         // isnt that is private?...... whatever ..
    // ;not_working;[circular dep hack fail]         console.error(value);
    // ;not_working;[circular dep hack fail]         console.error(value.node_parent.virtualFolderNode);
    // ;not_working;[circular dep hack fail]         throw new Error('it should have a parent, & the ref hack should have been set');
    // ;not_working;[circular dep hack fail]       }
    // ;not_working;[circular dep hack fail]       const pointer2ndLayerHolder: {
    // ;not_working;[circular dep hack fail]         pointer: string | VirtualFolderNode;
    // ;not_working;[circular dep hack fail]       } = {
    // ;not_working;[circular dep hack fail]         pointer: 'this should be changed to the value of `this` (-- the return `result`) after this transformation is done',
    // ;not_working;[circular dep hack fail]       };
    // ;not_working;[circular dep hack fail]       (value as any).refHolderTo_CircularDependencyObj_hack = pointer2ndLayerHolder.pointer;
    // ;not_working;[circular dep hack fail]       const result = classTransformer.plainToInstance(VirtualFolderNode, value as { length?: never }, {
    // ;not_working;[circular dep hack fail]         enableCircularCheck: true,
    // ;not_working;[circular dep hack fail]       });
    // ;not_working;[circular dep hack fail]       result.node_parent = (value.node_parent.virtualFolderNode as any).refHolderTo_CircularDependencyObj_hack;
    // ;not_working;[circular dep hack fail]       return result;
    // ;not_working;[circular dep hack fail]     }
    // ;not_working;[circular dep hack fail]   })
    // ;not_working;[circular dep hack fail] << seems classTransform init new instead of use jsobj ref, ....... just brute force add parent ...
], VirtualFolderNodeTypeHolder.prototype, "virtualFolderNode", void 0);
__decorate([
    classTransformer.Transform((tinfo) => {
        // console.log('>> @Transform((tinfo) => ');
        // console.log(tinfo);
        // console.log(JSON.stringify(tinfo, null, 2));
        // // key: "realFileExplorerEntry"
        // // obj:
        // //   collapsibleState: 2
        // //   contextValue: "ctxvalueVal_virtualFolder"
        // //   label: "root VirtualFolderNode"
        // //   realFileExplorerEntry: null
        // //   virtualFolderNode: {arr_node_child: Array(4), node_parent: null, name: 'root VirtualFolderNode'}
        // //   [[Prototype]]: Object
        // // options: {enableCircularCheck: true, enableImplicitConversion: false, excludeExtraneousValues: false, exposeDefaultValues: false, exposeUnsetFields: true, …}
        // // type: 0
        // // value: null
        //    // if (tinfo.type === PLAIN_TO_CLASS) {
        // if (tinfo.key === 'uri') {
        //   return vscode.Uri.file((tinfo.value as vscode.Uri).path);
        // } else if (tinfo.key === 'type') {
        //   return tinfo.value as vscode.FileType;
        // } else {
        //   throw new TypeError();
        // }
        //
        // const obj = tinfo.obj as VirtualFolderNodeTypeHolder;
        // if (obj.realFileExplorerEntry === undefined) {
        //   throw new Error('realFileExplorerEntry cannot be undefined');
        // }
        // if (obj.realFileExplorerEntry !== null) {
        //   console.error('ssssssssss')
        //   console.log(obj.realFileExplorerEntry)
        //   return {
        //     uri: vscode.Uri.file(obj.realFileExplorerEntry.uri.path),
        //     type: obj.realFileExplorerEntry.type,
        //   };
        // }
        // // just use the value ... -- yes ok indeed is that -- this seems the whole obj em (well should works though .. idk )
        // ;wrong; [cannot add this, else the fileExplorer.Entry is wrong converted & no icon] if (tinfo.type === TransformationType.PLAIN_TO_CLASS) {
        // ~~~// maybe this is reverse direction in reverse process , hum ...
        const value = tinfo.value;
        if (value === undefined) {
            throw new TypeError('realFileExplorerEntry cannot be undefined');
        }
        if (value !== null) {
            return {
                uri: vscode.Uri.file(value.uri.path),
                type: value.type,
            };
        }
        else {
            return null;
        }
        // `} else {       return null;     }` this welll ..
        // `@Transform((tinfo): fileExplorer.Entry | null => {` seems cannot, cuz other way transformation
    })
], VirtualFolderNodeTypeHolder.prototype, "realFileExplorerEntry", void 0);
class VirtualFolderNode {
    /**
     * @deprecated not much of use... but for common sense leave it here ....
     */
    name;
    arr_node_child = [];
    // // []
    //   // ## [How does it handle circular references?](https://github.com/typestack/class-transformer#how-does-it-handle-circular-references)[⬆](https://github.com/typestack/class-transformer#table-of-contents)
    //   //
    //   // Circular references are ignored. For example, if you are transforming class `User` that contains property `photos` with type of `Photo`, and `Photo` contains link `user` to its parent `User`, then `user` will be ignored during transformation. Circular references are not ignored only during `classToClass` operation.
    //   // <>
    //   // https://github.com/typestack/class-transformer
    //   // TODO Restored items seems not able to constructe the parent?... thus not removing itself
    node_parent = null;
    constructor(name) {
        this.name = name;
    }
}
__decorate([
    classTransformer.Type(() => VirtualFolderNodeTypeHolder)
], VirtualFolderNode.prototype, "arr_node_child", void 0);
__decorate([
    classTransformer.Type(() => VirtualFolderNodeTypeHolder)
], VirtualFolderNode.prototype, "node_parent", void 0);


/***/ }),
/* 3 */
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// https://github.com/microsoft/vscode-extension-samples/blob/main/tree-view-sample/src/fileExplorer.ts
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FileExplorer = exports.FileSystemProvider = exports.FileStat = void 0;
const vscode = __webpack_require__(1);
const path = __webpack_require__(5);
const fs = __webpack_require__(3);
const mkdirp = __webpack_require__(6);
const rimraf = __webpack_require__(7);
//#region Utilities
var _;
(function (_) {
    function handleResult(resolve, reject, error, result) {
        if (error) {
            reject(massageError(error));
        }
        else {
            resolve(result);
        }
    }
    function massageError(error) {
        if (error.code === 'ENOENT') {
            return vscode.FileSystemError.FileNotFound();
        }
        if (error.code === 'EISDIR') {
            return vscode.FileSystemError.FileIsADirectory();
        }
        if (error.code === 'EEXIST') {
            return vscode.FileSystemError.FileExists();
        }
        if (error.code === 'EPERM' || error.code === 'EACCES') {
            return vscode.FileSystemError.NoPermissions();
        }
        return error;
    }
    function checkCancellation(token) {
        if (token.isCancellationRequested) {
            throw new Error('Operation cancelled');
        }
    }
    _.checkCancellation = checkCancellation;
    function normalizeNFC(items) {
        if (process.platform !== 'darwin') {
            return items;
        }
        if (Array.isArray(items)) {
            return items.map(item => item.normalize('NFC'));
        }
        return items.normalize('NFC');
    }
    _.normalizeNFC = normalizeNFC;
    function readdir(path) {
        return new Promise((resolve, reject) => {
            fs.readdir(path, (error, children) => handleResult(resolve, reject, error, normalizeNFC(children)));
        });
    }
    _.readdir = readdir;
    function stat(path) {
        return new Promise((resolve, reject) => {
            fs.stat(path, (error, stat) => handleResult(resolve, reject, error, stat));
        });
    }
    _.stat = stat;
    function readfile(path) {
        return new Promise((resolve, reject) => {
            fs.readFile(path, (error, buffer) => handleResult(resolve, reject, error, buffer));
        });
    }
    _.readfile = readfile;
    function writefile(path, content) {
        return new Promise((resolve, reject) => {
            fs.writeFile(path, content, error => handleResult(resolve, reject, error, void 0));
        });
    }
    _.writefile = writefile;
    function exists(path) {
        return new Promise((resolve, reject) => {
            fs.exists(path, exists => handleResult(resolve, reject, null, exists));
        });
    }
    _.exists = exists;
    function rmrf(path) {
        return new Promise((resolve, reject) => {
            rimraf(path, error => handleResult(resolve, reject, error, void 0));
        });
    }
    _.rmrf = rmrf;
    function mkdir(path) {
        return new Promise((resolve, reject) => {
            mkdirp(path, error => handleResult(resolve, reject, error, void 0));
        });
    }
    _.mkdir = mkdir;
    function rename(oldPath, newPath) {
        return new Promise((resolve, reject) => {
            fs.rename(oldPath, newPath, error => handleResult(resolve, reject, error, void 0));
        });
    }
    _.rename = rename;
    function unlink(path) {
        return new Promise((resolve, reject) => {
            fs.unlink(path, error => handleResult(resolve, reject, error, void 0));
        });
    }
    _.unlink = unlink;
})(_ || (_ = {}));
class FileStat {
    fsStat;
    constructor(fsStat) {
        this.fsStat = fsStat;
    }
    get type() {
        return this.fsStat.isFile() ? vscode.FileType.File : this.fsStat.isDirectory() ? vscode.FileType.Directory : this.fsStat.isSymbolicLink() ? vscode.FileType.SymbolicLink : vscode.FileType.Unknown;
    }
    get isFile() {
        return this.fsStat.isFile();
    }
    get isDirectory() {
        return this.fsStat.isDirectory();
    }
    get isSymbolicLink() {
        return this.fsStat.isSymbolicLink();
    }
    get size() {
        return this.fsStat.size;
    }
    get ctime() {
        return this.fsStat.ctime.getTime();
    }
    get mtime() {
        return this.fsStat.mtime.getTime();
    }
}
exports.FileStat = FileStat;
//#endregion
class FileSystemProvider {
    _onDidChangeFile;
    constructor() {
        this._onDidChangeFile = new vscode.EventEmitter();
    }
    get onDidChangeFile() {
        return this._onDidChangeFile.event;
    }
    watch(uri, options) {
        const watcher = fs.watch(uri.fsPath, { recursive: options.recursive }, async (event, filename) => {
            if (filename) {
                const filepath = path.join(uri.fsPath, _.normalizeNFC(filename.toString()));
                // TODO support excludes (using minimatch library?)
                this._onDidChangeFile.fire([{
                        type: event === 'change' ? vscode.FileChangeType.Changed : await _.exists(filepath) ? vscode.FileChangeType.Created : vscode.FileChangeType.Deleted,
                        uri: uri.with({ path: filepath })
                    }]);
            }
        });
        return { dispose: () => watcher.close() };
    }
    stat(uri) {
        return this._stat(uri.fsPath);
    }
    async _stat(path) {
        return new FileStat(await _.stat(path));
    }
    readDirectory(uri) {
        return this._readDirectory(uri);
    }
    async _readDirectory(uri) {
        const children = await _.readdir(uri.fsPath);
        const result = [];
        for (let i = 0; i < children.length; i++) {
            const child = children[i];
            const stat = await this._stat(path.join(uri.fsPath, child));
            result.push([child, stat.type]);
        }
        return Promise.resolve(result);
    }
    createDirectory(uri) {
        return _.mkdir(uri.fsPath);
    }
    readFile(uri) {
        return _.readfile(uri.fsPath);
    }
    writeFile(uri, content, options) {
        return this._writeFile(uri, content, options);
    }
    async _writeFile(uri, content, options) {
        const exists = await _.exists(uri.fsPath);
        if (!exists) {
            if (!options.create) {
                throw vscode.FileSystemError.FileNotFound();
            }
            await _.mkdir(path.dirname(uri.fsPath));
        }
        else {
            if (!options.overwrite) {
                throw vscode.FileSystemError.FileExists();
            }
        }
        return _.writefile(uri.fsPath, content);
    }
    delete(uri, options) {
        if (options.recursive) {
            return _.rmrf(uri.fsPath);
        }
        return _.unlink(uri.fsPath);
    }
    rename(oldUri, newUri, options) {
        return this._rename(oldUri, newUri, options);
    }
    async _rename(oldUri, newUri, options) {
        const exists = await _.exists(newUri.fsPath);
        if (exists) {
            if (!options.overwrite) {
                throw vscode.FileSystemError.FileExists();
            }
            else {
                await _.rmrf(newUri.fsPath);
            }
        }
        const parentExists = await _.exists(path.dirname(newUri.fsPath));
        if (!parentExists) {
            await _.mkdir(path.dirname(newUri.fsPath));
        }
        return _.rename(oldUri.fsPath, newUri.fsPath);
    }
    // tree data provider
    async getChildren(element) {
        if (element) {
            const children = await this.readDirectory(element.uri);
            return children.map(([name, type]) => ({ uri: vscode.Uri.file(path.join(element.uri.fsPath, name)), type }));
        }
        const workspaceFolder = (vscode.workspace.workspaceFolders ?? []).filter(folder => folder.uri.scheme === 'file')[0];
        if (workspaceFolder) {
            const children = await this.readDirectory(workspaceFolder.uri);
            children.sort((a, b) => {
                if (a[1] === b[1]) {
                    return a[0].localeCompare(b[0]);
                }
                return a[1] === vscode.FileType.Directory ? -1 : 1;
            });
            return children.map(([name, type]) => ({ uri: vscode.Uri.file(path.join(workspaceFolder.uri.fsPath, name)), type }));
        }
        return [];
    }
    getTreeItem(element) {
        const treeItem = new vscode.TreeItem(element.uri, element.type === vscode.FileType.Directory ? vscode.TreeItemCollapsibleState.Collapsed : vscode.TreeItemCollapsibleState.None);
        if (element.type === vscode.FileType.File) {
            treeItem.command = { command: 'fileExplorer.openFile', title: "Open File", arguments: [element.uri], };
            treeItem.contextValue = 'file';
        }
        return treeItem;
    }
}
exports.FileSystemProvider = FileSystemProvider;
class FileExplorer {
    constructor(context) {
        const treeDataProvider = new FileSystemProvider();
        context.subscriptions.push(vscode.window.createTreeView('fileExplorer', { treeDataProvider }));
        vscode.commands.registerCommand('fileExplorer.openFile', (resource) => this.openResource(resource));
    }
    openResource(resource) {
        vscode.window.showTextDocument(resource);
    }
}
exports.FileExplorer = FileExplorer;


/***/ }),
/* 5 */
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),
/* 6 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var path = __webpack_require__(5);
var fs = __webpack_require__(3);
var _0777 = parseInt('0777', 8);

module.exports = mkdirP.mkdirp = mkdirP.mkdirP = mkdirP;

function mkdirP (p, opts, f, made) {
    if (typeof opts === 'function') {
        f = opts;
        opts = {};
    }
    else if (!opts || typeof opts !== 'object') {
        opts = { mode: opts };
    }
    
    var mode = opts.mode;
    var xfs = opts.fs || fs;
    
    if (mode === undefined) {
        mode = _0777
    }
    if (!made) made = null;
    
    var cb = f || /* istanbul ignore next */ function () {};
    p = path.resolve(p);
    
    xfs.mkdir(p, mode, function (er) {
        if (!er) {
            made = made || p;
            return cb(null, made);
        }
        switch (er.code) {
            case 'ENOENT':
                /* istanbul ignore if */
                if (path.dirname(p) === p) return cb(er);
                mkdirP(path.dirname(p), opts, function (er, made) {
                    /* istanbul ignore if */
                    if (er) cb(er, made);
                    else mkdirP(p, opts, cb, made);
                });
                break;

            // In the case of any other error, just see if there's a dir
            // there already.  If so, then hooray!  If not, then something
            // is borked.
            default:
                xfs.stat(p, function (er2, stat) {
                    // if the stat fails, then that's super weird.
                    // let the original error be the failure reason.
                    if (er2 || !stat.isDirectory()) cb(er, made)
                    else cb(null, made);
                });
                break;
        }
    });
}

mkdirP.sync = function sync (p, opts, made) {
    if (!opts || typeof opts !== 'object') {
        opts = { mode: opts };
    }
    
    var mode = opts.mode;
    var xfs = opts.fs || fs;
    
    if (mode === undefined) {
        mode = _0777
    }
    if (!made) made = null;

    p = path.resolve(p);

    try {
        xfs.mkdirSync(p, mode);
        made = made || p;
    }
    catch (err0) {
        switch (err0.code) {
            case 'ENOENT' :
                made = sync(path.dirname(p), opts, made);
                sync(p, opts, made);
                break;

            // In the case of any other error, just see if there's a dir
            // there already.  If so, then hooray!  If not, then something
            // is borked.
            default:
                var stat;
                try {
                    stat = xfs.statSync(p);
                }
                catch (err1) /* istanbul ignore next */ {
                    throw err0;
                }
                /* istanbul ignore if */
                if (!stat.isDirectory()) throw err0;
                break;
        }
    }

    return made;
};


/***/ }),
/* 7 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = rimraf
rimraf.sync = rimrafSync

var assert = __webpack_require__(8)
var path = __webpack_require__(5)
var fs = __webpack_require__(3)
var glob = undefined
try {
  glob = __webpack_require__(9)
} catch (_err) {
  // treat glob as optional.
}
var _0666 = parseInt('666', 8)

var defaultGlobOpts = {
  nosort: true,
  silent: true
}

// for EMFILE handling
var timeout = 0

var isWindows = (process.platform === "win32")

function defaults (options) {
  var methods = [
    'unlink',
    'chmod',
    'stat',
    'lstat',
    'rmdir',
    'readdir'
  ]
  methods.forEach(function(m) {
    options[m] = options[m] || fs[m]
    m = m + 'Sync'
    options[m] = options[m] || fs[m]
  })

  options.maxBusyTries = options.maxBusyTries || 3
  options.emfileWait = options.emfileWait || 1000
  if (options.glob === false) {
    options.disableGlob = true
  }
  if (options.disableGlob !== true && glob === undefined) {
    throw Error('glob dependency not found, set `options.disableGlob = true` if intentional')
  }
  options.disableGlob = options.disableGlob || false
  options.glob = options.glob || defaultGlobOpts
}

function rimraf (p, options, cb) {
  if (typeof options === 'function') {
    cb = options
    options = {}
  }

  assert(p, 'rimraf: missing path')
  assert.equal(typeof p, 'string', 'rimraf: path should be a string')
  assert.equal(typeof cb, 'function', 'rimraf: callback function required')
  assert(options, 'rimraf: invalid options argument provided')
  assert.equal(typeof options, 'object', 'rimraf: options should be object')

  defaults(options)

  var busyTries = 0
  var errState = null
  var n = 0

  if (options.disableGlob || !glob.hasMagic(p))
    return afterGlob(null, [p])

  options.lstat(p, function (er, stat) {
    if (!er)
      return afterGlob(null, [p])

    glob(p, options.glob, afterGlob)
  })

  function next (er) {
    errState = errState || er
    if (--n === 0)
      cb(errState)
  }

  function afterGlob (er, results) {
    if (er)
      return cb(er)

    n = results.length
    if (n === 0)
      return cb()

    results.forEach(function (p) {
      rimraf_(p, options, function CB (er) {
        if (er) {
          if ((er.code === "EBUSY" || er.code === "ENOTEMPTY" || er.code === "EPERM") &&
              busyTries < options.maxBusyTries) {
            busyTries ++
            var time = busyTries * 100
            // try again, with the same exact callback as this one.
            return setTimeout(function () {
              rimraf_(p, options, CB)
            }, time)
          }

          // this one won't happen if graceful-fs is used.
          if (er.code === "EMFILE" && timeout < options.emfileWait) {
            return setTimeout(function () {
              rimraf_(p, options, CB)
            }, timeout ++)
          }

          // already gone
          if (er.code === "ENOENT") er = null
        }

        timeout = 0
        next(er)
      })
    })
  }
}

// Two possible strategies.
// 1. Assume it's a file.  unlink it, then do the dir stuff on EPERM or EISDIR
// 2. Assume it's a directory.  readdir, then do the file stuff on ENOTDIR
//
// Both result in an extra syscall when you guess wrong.  However, there
// are likely far more normal files in the world than directories.  This
// is based on the assumption that a the average number of files per
// directory is >= 1.
//
// If anyone ever complains about this, then I guess the strategy could
// be made configurable somehow.  But until then, YAGNI.
function rimraf_ (p, options, cb) {
  assert(p)
  assert(options)
  assert(typeof cb === 'function')

  // sunos lets the root user unlink directories, which is... weird.
  // so we have to lstat here and make sure it's not a dir.
  options.lstat(p, function (er, st) {
    if (er && er.code === "ENOENT")
      return cb(null)

    // Windows can EPERM on stat.  Life is suffering.
    if (er && er.code === "EPERM" && isWindows)
      fixWinEPERM(p, options, er, cb)

    if (st && st.isDirectory())
      return rmdir(p, options, er, cb)

    options.unlink(p, function (er) {
      if (er) {
        if (er.code === "ENOENT")
          return cb(null)
        if (er.code === "EPERM")
          return (isWindows)
            ? fixWinEPERM(p, options, er, cb)
            : rmdir(p, options, er, cb)
        if (er.code === "EISDIR")
          return rmdir(p, options, er, cb)
      }
      return cb(er)
    })
  })
}

function fixWinEPERM (p, options, er, cb) {
  assert(p)
  assert(options)
  assert(typeof cb === 'function')
  if (er)
    assert(er instanceof Error)

  options.chmod(p, _0666, function (er2) {
    if (er2)
      cb(er2.code === "ENOENT" ? null : er)
    else
      options.stat(p, function(er3, stats) {
        if (er3)
          cb(er3.code === "ENOENT" ? null : er)
        else if (stats.isDirectory())
          rmdir(p, options, er, cb)
        else
          options.unlink(p, cb)
      })
  })
}

function fixWinEPERMSync (p, options, er) {
  assert(p)
  assert(options)
  if (er)
    assert(er instanceof Error)

  try {
    options.chmodSync(p, _0666)
  } catch (er2) {
    if (er2.code === "ENOENT")
      return
    else
      throw er
  }

  try {
    var stats = options.statSync(p)
  } catch (er3) {
    if (er3.code === "ENOENT")
      return
    else
      throw er
  }

  if (stats.isDirectory())
    rmdirSync(p, options, er)
  else
    options.unlinkSync(p)
}

function rmdir (p, options, originalEr, cb) {
  assert(p)
  assert(options)
  if (originalEr)
    assert(originalEr instanceof Error)
  assert(typeof cb === 'function')

  // try to rmdir first, and only readdir on ENOTEMPTY or EEXIST (SunOS)
  // if we guessed wrong, and it's not a directory, then
  // raise the original error.
  options.rmdir(p, function (er) {
    if (er && (er.code === "ENOTEMPTY" || er.code === "EEXIST" || er.code === "EPERM"))
      rmkids(p, options, cb)
    else if (er && er.code === "ENOTDIR")
      cb(originalEr)
    else
      cb(er)
  })
}

function rmkids(p, options, cb) {
  assert(p)
  assert(options)
  assert(typeof cb === 'function')

  options.readdir(p, function (er, files) {
    if (er)
      return cb(er)
    var n = files.length
    if (n === 0)
      return options.rmdir(p, cb)
    var errState
    files.forEach(function (f) {
      rimraf(path.join(p, f), options, function (er) {
        if (errState)
          return
        if (er)
          return cb(errState = er)
        if (--n === 0)
          options.rmdir(p, cb)
      })
    })
  })
}

// this looks simpler, and is strictly *faster*, but will
// tie up the JavaScript thread and fail on excessively
// deep directory trees.
function rimrafSync (p, options) {
  options = options || {}
  defaults(options)

  assert(p, 'rimraf: missing path')
  assert.equal(typeof p, 'string', 'rimraf: path should be a string')
  assert(options, 'rimraf: missing options')
  assert.equal(typeof options, 'object', 'rimraf: options should be object')

  var results

  if (options.disableGlob || !glob.hasMagic(p)) {
    results = [p]
  } else {
    try {
      options.lstatSync(p)
      results = [p]
    } catch (er) {
      results = glob.sync(p, options.glob)
    }
  }

  if (!results.length)
    return

  for (var i = 0; i < results.length; i++) {
    var p = results[i]

    try {
      var st = options.lstatSync(p)
    } catch (er) {
      if (er.code === "ENOENT")
        return

      // Windows can EPERM on stat.  Life is suffering.
      if (er.code === "EPERM" && isWindows)
        fixWinEPERMSync(p, options, er)
    }

    try {
      // sunos lets the root user unlink directories, which is... weird.
      if (st && st.isDirectory())
        rmdirSync(p, options, null)
      else
        options.unlinkSync(p)
    } catch (er) {
      if (er.code === "ENOENT")
        return
      if (er.code === "EPERM")
        return isWindows ? fixWinEPERMSync(p, options, er) : rmdirSync(p, options, er)
      if (er.code !== "EISDIR")
        throw er

      rmdirSync(p, options, er)
    }
  }
}

function rmdirSync (p, options, originalEr) {
  assert(p)
  assert(options)
  if (originalEr)
    assert(originalEr instanceof Error)

  try {
    options.rmdirSync(p)
  } catch (er) {
    if (er.code === "ENOENT")
      return
    if (er.code === "ENOTDIR")
      throw originalEr
    if (er.code === "ENOTEMPTY" || er.code === "EEXIST" || er.code === "EPERM")
      rmkidsSync(p, options)
  }
}

function rmkidsSync (p, options) {
  assert(p)
  assert(options)
  options.readdirSync(p).forEach(function (f) {
    rimrafSync(path.join(p, f), options)
  })

  // We only end up here once we got ENOTEMPTY at least once, and
  // at this point, we are guaranteed to have removed all the kids.
  // So, we know that it won't be ENOENT or ENOTDIR or anything else.
  // try really hard to delete stuff on windows, because it has a
  // PROFOUNDLY annoying habit of not closing handles promptly when
  // files are deleted, resulting in spurious ENOTEMPTY errors.
  var retries = isWindows ? 100 : 1
  var i = 0
  do {
    var threw = true
    try {
      var ret = options.rmdirSync(p, options)
      threw = false
      return ret
    } finally {
      if (++i < retries && threw)
        continue
    }
  } while (true)
}


/***/ }),
/* 8 */
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),
/* 9 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Approach:
//
// 1. Get the minimatch set
// 2. For each pattern in the set, PROCESS(pattern, false)
// 3. Store matches per-set, then uniq them
//
// PROCESS(pattern, inGlobStar)
// Get the first [n] items from pattern that are all strings
// Join these together.  This is PREFIX.
//   If there is no more remaining, then stat(PREFIX) and
//   add to matches if it succeeds.  END.
//
// If inGlobStar and PREFIX is symlink and points to dir
//   set ENTRIES = []
// else readdir(PREFIX) as ENTRIES
//   If fail, END
//
// with ENTRIES
//   If pattern[n] is GLOBSTAR
//     // handle the case where the globstar match is empty
//     // by pruning it out, and testing the resulting pattern
//     PROCESS(pattern[0..n] + pattern[n+1 .. $], false)
//     // handle other cases.
//     for ENTRY in ENTRIES (not dotfiles)
//       // attach globstar + tail onto the entry
//       // Mark that this entry is a globstar match
//       PROCESS(pattern[0..n] + ENTRY + pattern[n .. $], true)
//
//   else // not globstar
//     for ENTRY in ENTRIES (not dotfiles, unless pattern[n] is dot)
//       Test ENTRY against pattern[n]
//       If fails, continue
//       If passes, PROCESS(pattern[0..n] + item + pattern[n+1 .. $])
//
// Caveat:
//   Cache all stats and readdirs results to minimize syscall.  Since all
//   we ever care about is existence and directory-ness, we can just keep
//   `true` for files, and [children,...] for directories, or `false` for
//   things that don't exist.

module.exports = glob

var rp = __webpack_require__(10)
var minimatch = __webpack_require__(12)
var Minimatch = minimatch.Minimatch
var inherits = __webpack_require__(16)
var EE = (__webpack_require__(19).EventEmitter)
var path = __webpack_require__(5)
var assert = __webpack_require__(8)
var isAbsolute = __webpack_require__(20)
var globSync = __webpack_require__(21)
var common = __webpack_require__(22)
var setopts = common.setopts
var ownProp = common.ownProp
var inflight = __webpack_require__(23)
var util = __webpack_require__(17)
var childrenIgnored = common.childrenIgnored
var isIgnored = common.isIgnored

var once = __webpack_require__(25)

function glob (pattern, options, cb) {
  if (typeof options === 'function') cb = options, options = {}
  if (!options) options = {}

  if (options.sync) {
    if (cb)
      throw new TypeError('callback provided to sync glob')
    return globSync(pattern, options)
  }

  return new Glob(pattern, options, cb)
}

glob.sync = globSync
var GlobSync = glob.GlobSync = globSync.GlobSync

// old api surface
glob.glob = glob

function extend (origin, add) {
  if (add === null || typeof add !== 'object') {
    return origin
  }

  var keys = Object.keys(add)
  var i = keys.length
  while (i--) {
    origin[keys[i]] = add[keys[i]]
  }
  return origin
}

glob.hasMagic = function (pattern, options_) {
  var options = extend({}, options_)
  options.noprocess = true

  var g = new Glob(pattern, options)
  var set = g.minimatch.set

  if (!pattern)
    return false

  if (set.length > 1)
    return true

  for (var j = 0; j < set[0].length; j++) {
    if (typeof set[0][j] !== 'string')
      return true
  }

  return false
}

glob.Glob = Glob
inherits(Glob, EE)
function Glob (pattern, options, cb) {
  if (typeof options === 'function') {
    cb = options
    options = null
  }

  if (options && options.sync) {
    if (cb)
      throw new TypeError('callback provided to sync glob')
    return new GlobSync(pattern, options)
  }

  if (!(this instanceof Glob))
    return new Glob(pattern, options, cb)

  setopts(this, pattern, options)
  this._didRealPath = false

  // process each pattern in the minimatch set
  var n = this.minimatch.set.length

  // The matches are stored as {<filename>: true,...} so that
  // duplicates are automagically pruned.
  // Later, we do an Object.keys() on these.
  // Keep them as a list so we can fill in when nonull is set.
  this.matches = new Array(n)

  if (typeof cb === 'function') {
    cb = once(cb)
    this.on('error', cb)
    this.on('end', function (matches) {
      cb(null, matches)
    })
  }

  var self = this
  this._processing = 0

  this._emitQueue = []
  this._processQueue = []
  this.paused = false

  if (this.noprocess)
    return this

  if (n === 0)
    return done()

  var sync = true
  for (var i = 0; i < n; i ++) {
    this._process(this.minimatch.set[i], i, false, done)
  }
  sync = false

  function done () {
    --self._processing
    if (self._processing <= 0) {
      if (sync) {
        process.nextTick(function () {
          self._finish()
        })
      } else {
        self._finish()
      }
    }
  }
}

Glob.prototype._finish = function () {
  assert(this instanceof Glob)
  if (this.aborted)
    return

  if (this.realpath && !this._didRealpath)
    return this._realpath()

  common.finish(this)
  this.emit('end', this.found)
}

Glob.prototype._realpath = function () {
  if (this._didRealpath)
    return

  this._didRealpath = true

  var n = this.matches.length
  if (n === 0)
    return this._finish()

  var self = this
  for (var i = 0; i < this.matches.length; i++)
    this._realpathSet(i, next)

  function next () {
    if (--n === 0)
      self._finish()
  }
}

Glob.prototype._realpathSet = function (index, cb) {
  var matchset = this.matches[index]
  if (!matchset)
    return cb()

  var found = Object.keys(matchset)
  var self = this
  var n = found.length

  if (n === 0)
    return cb()

  var set = this.matches[index] = Object.create(null)
  found.forEach(function (p, i) {
    // If there's a problem with the stat, then it means that
    // one or more of the links in the realpath couldn't be
    // resolved.  just return the abs value in that case.
    p = self._makeAbs(p)
    rp.realpath(p, self.realpathCache, function (er, real) {
      if (!er)
        set[real] = true
      else if (er.syscall === 'stat')
        set[p] = true
      else
        self.emit('error', er) // srsly wtf right here

      if (--n === 0) {
        self.matches[index] = set
        cb()
      }
    })
  })
}

Glob.prototype._mark = function (p) {
  return common.mark(this, p)
}

Glob.prototype._makeAbs = function (f) {
  return common.makeAbs(this, f)
}

Glob.prototype.abort = function () {
  this.aborted = true
  this.emit('abort')
}

Glob.prototype.pause = function () {
  if (!this.paused) {
    this.paused = true
    this.emit('pause')
  }
}

Glob.prototype.resume = function () {
  if (this.paused) {
    this.emit('resume')
    this.paused = false
    if (this._emitQueue.length) {
      var eq = this._emitQueue.slice(0)
      this._emitQueue.length = 0
      for (var i = 0; i < eq.length; i ++) {
        var e = eq[i]
        this._emitMatch(e[0], e[1])
      }
    }
    if (this._processQueue.length) {
      var pq = this._processQueue.slice(0)
      this._processQueue.length = 0
      for (var i = 0; i < pq.length; i ++) {
        var p = pq[i]
        this._processing--
        this._process(p[0], p[1], p[2], p[3])
      }
    }
  }
}

Glob.prototype._process = function (pattern, index, inGlobStar, cb) {
  assert(this instanceof Glob)
  assert(typeof cb === 'function')

  if (this.aborted)
    return

  this._processing++
  if (this.paused) {
    this._processQueue.push([pattern, index, inGlobStar, cb])
    return
  }

  //console.error('PROCESS %d', this._processing, pattern)

  // Get the first [n] parts of pattern that are all strings.
  var n = 0
  while (typeof pattern[n] === 'string') {
    n ++
  }
  // now n is the index of the first one that is *not* a string.

  // see if there's anything else
  var prefix
  switch (n) {
    // if not, then this is rather simple
    case pattern.length:
      this._processSimple(pattern.join('/'), index, cb)
      return

    case 0:
      // pattern *starts* with some non-trivial item.
      // going to readdir(cwd), but not include the prefix in matches.
      prefix = null
      break

    default:
      // pattern has some string bits in the front.
      // whatever it starts with, whether that's 'absolute' like /foo/bar,
      // or 'relative' like '../baz'
      prefix = pattern.slice(0, n).join('/')
      break
  }

  var remain = pattern.slice(n)

  // get the list of entries.
  var read
  if (prefix === null)
    read = '.'
  else if (isAbsolute(prefix) ||
      isAbsolute(pattern.map(function (p) {
        return typeof p === 'string' ? p : '[*]'
      }).join('/'))) {
    if (!prefix || !isAbsolute(prefix))
      prefix = '/' + prefix
    read = prefix
  } else
    read = prefix

  var abs = this._makeAbs(read)

  //if ignored, skip _processing
  if (childrenIgnored(this, read))
    return cb()

  var isGlobStar = remain[0] === minimatch.GLOBSTAR
  if (isGlobStar)
    this._processGlobStar(prefix, read, abs, remain, index, inGlobStar, cb)
  else
    this._processReaddir(prefix, read, abs, remain, index, inGlobStar, cb)
}

Glob.prototype._processReaddir = function (prefix, read, abs, remain, index, inGlobStar, cb) {
  var self = this
  this._readdir(abs, inGlobStar, function (er, entries) {
    return self._processReaddir2(prefix, read, abs, remain, index, inGlobStar, entries, cb)
  })
}

Glob.prototype._processReaddir2 = function (prefix, read, abs, remain, index, inGlobStar, entries, cb) {

  // if the abs isn't a dir, then nothing can match!
  if (!entries)
    return cb()

  // It will only match dot entries if it starts with a dot, or if
  // dot is set.  Stuff like @(.foo|.bar) isn't allowed.
  var pn = remain[0]
  var negate = !!this.minimatch.negate
  var rawGlob = pn._glob
  var dotOk = this.dot || rawGlob.charAt(0) === '.'

  var matchedEntries = []
  for (var i = 0; i < entries.length; i++) {
    var e = entries[i]
    if (e.charAt(0) !== '.' || dotOk) {
      var m
      if (negate && !prefix) {
        m = !e.match(pn)
      } else {
        m = e.match(pn)
      }
      if (m)
        matchedEntries.push(e)
    }
  }

  //console.error('prd2', prefix, entries, remain[0]._glob, matchedEntries)

  var len = matchedEntries.length
  // If there are no matched entries, then nothing matches.
  if (len === 0)
    return cb()

  // if this is the last remaining pattern bit, then no need for
  // an additional stat *unless* the user has specified mark or
  // stat explicitly.  We know they exist, since readdir returned
  // them.

  if (remain.length === 1 && !this.mark && !this.stat) {
    if (!this.matches[index])
      this.matches[index] = Object.create(null)

    for (var i = 0; i < len; i ++) {
      var e = matchedEntries[i]
      if (prefix) {
        if (prefix !== '/')
          e = prefix + '/' + e
        else
          e = prefix + e
      }

      if (e.charAt(0) === '/' && !this.nomount) {
        e = path.join(this.root, e)
      }
      this._emitMatch(index, e)
    }
    // This was the last one, and no stats were needed
    return cb()
  }

  // now test all matched entries as stand-ins for that part
  // of the pattern.
  remain.shift()
  for (var i = 0; i < len; i ++) {
    var e = matchedEntries[i]
    var newPattern
    if (prefix) {
      if (prefix !== '/')
        e = prefix + '/' + e
      else
        e = prefix + e
    }
    this._process([e].concat(remain), index, inGlobStar, cb)
  }
  cb()
}

Glob.prototype._emitMatch = function (index, e) {
  if (this.aborted)
    return

  if (isIgnored(this, e))
    return

  if (this.paused) {
    this._emitQueue.push([index, e])
    return
  }

  var abs = isAbsolute(e) ? e : this._makeAbs(e)

  if (this.mark)
    e = this._mark(e)

  if (this.absolute)
    e = abs

  if (this.matches[index][e])
    return

  if (this.nodir) {
    var c = this.cache[abs]
    if (c === 'DIR' || Array.isArray(c))
      return
  }

  this.matches[index][e] = true

  var st = this.statCache[abs]
  if (st)
    this.emit('stat', e, st)

  this.emit('match', e)
}

Glob.prototype._readdirInGlobStar = function (abs, cb) {
  if (this.aborted)
    return

  // follow all symlinked directories forever
  // just proceed as if this is a non-globstar situation
  if (this.follow)
    return this._readdir(abs, false, cb)

  var lstatkey = 'lstat\0' + abs
  var self = this
  var lstatcb = inflight(lstatkey, lstatcb_)

  if (lstatcb)
    self.fs.lstat(abs, lstatcb)

  function lstatcb_ (er, lstat) {
    if (er && er.code === 'ENOENT')
      return cb()

    var isSym = lstat && lstat.isSymbolicLink()
    self.symlinks[abs] = isSym

    // If it's not a symlink or a dir, then it's definitely a regular file.
    // don't bother doing a readdir in that case.
    if (!isSym && lstat && !lstat.isDirectory()) {
      self.cache[abs] = 'FILE'
      cb()
    } else
      self._readdir(abs, false, cb)
  }
}

Glob.prototype._readdir = function (abs, inGlobStar, cb) {
  if (this.aborted)
    return

  cb = inflight('readdir\0'+abs+'\0'+inGlobStar, cb)
  if (!cb)
    return

  //console.error('RD %j %j', +inGlobStar, abs)
  if (inGlobStar && !ownProp(this.symlinks, abs))
    return this._readdirInGlobStar(abs, cb)

  if (ownProp(this.cache, abs)) {
    var c = this.cache[abs]
    if (!c || c === 'FILE')
      return cb()

    if (Array.isArray(c))
      return cb(null, c)
  }

  var self = this
  self.fs.readdir(abs, readdirCb(this, abs, cb))
}

function readdirCb (self, abs, cb) {
  return function (er, entries) {
    if (er)
      self._readdirError(abs, er, cb)
    else
      self._readdirEntries(abs, entries, cb)
  }
}

Glob.prototype._readdirEntries = function (abs, entries, cb) {
  if (this.aborted)
    return

  // if we haven't asked to stat everything, then just
  // assume that everything in there exists, so we can avoid
  // having to stat it a second time.
  if (!this.mark && !this.stat) {
    for (var i = 0; i < entries.length; i ++) {
      var e = entries[i]
      if (abs === '/')
        e = abs + e
      else
        e = abs + '/' + e
      this.cache[e] = true
    }
  }

  this.cache[abs] = entries
  return cb(null, entries)
}

Glob.prototype._readdirError = function (f, er, cb) {
  if (this.aborted)
    return

  // handle errors, and cache the information
  switch (er.code) {
    case 'ENOTSUP': // https://github.com/isaacs/node-glob/issues/205
    case 'ENOTDIR': // totally normal. means it *does* exist.
      var abs = this._makeAbs(f)
      this.cache[abs] = 'FILE'
      if (abs === this.cwdAbs) {
        var error = new Error(er.code + ' invalid cwd ' + this.cwd)
        error.path = this.cwd
        error.code = er.code
        this.emit('error', error)
        this.abort()
      }
      break

    case 'ENOENT': // not terribly unusual
    case 'ELOOP':
    case 'ENAMETOOLONG':
    case 'UNKNOWN':
      this.cache[this._makeAbs(f)] = false
      break

    default: // some unusual error.  Treat as failure.
      this.cache[this._makeAbs(f)] = false
      if (this.strict) {
        this.emit('error', er)
        // If the error is handled, then we abort
        // if not, we threw out of here
        this.abort()
      }
      if (!this.silent)
        console.error('glob error', er)
      break
  }

  return cb()
}

Glob.prototype._processGlobStar = function (prefix, read, abs, remain, index, inGlobStar, cb) {
  var self = this
  this._readdir(abs, inGlobStar, function (er, entries) {
    self._processGlobStar2(prefix, read, abs, remain, index, inGlobStar, entries, cb)
  })
}


Glob.prototype._processGlobStar2 = function (prefix, read, abs, remain, index, inGlobStar, entries, cb) {
  //console.error('pgs2', prefix, remain[0], entries)

  // no entries means not a dir, so it can never have matches
  // foo.txt/** doesn't match foo.txt
  if (!entries)
    return cb()

  // test without the globstar, and with every child both below
  // and replacing the globstar.
  var remainWithoutGlobStar = remain.slice(1)
  var gspref = prefix ? [ prefix ] : []
  var noGlobStar = gspref.concat(remainWithoutGlobStar)

  // the noGlobStar pattern exits the inGlobStar state
  this._process(noGlobStar, index, false, cb)

  var isSym = this.symlinks[abs]
  var len = entries.length

  // If it's a symlink, and we're in a globstar, then stop
  if (isSym && inGlobStar)
    return cb()

  for (var i = 0; i < len; i++) {
    var e = entries[i]
    if (e.charAt(0) === '.' && !this.dot)
      continue

    // these two cases enter the inGlobStar state
    var instead = gspref.concat(entries[i], remainWithoutGlobStar)
    this._process(instead, index, true, cb)

    var below = gspref.concat(entries[i], remain)
    this._process(below, index, true, cb)
  }

  cb()
}

Glob.prototype._processSimple = function (prefix, index, cb) {
  // XXX review this.  Shouldn't it be doing the mounting etc
  // before doing stat?  kinda weird?
  var self = this
  this._stat(prefix, function (er, exists) {
    self._processSimple2(prefix, index, er, exists, cb)
  })
}
Glob.prototype._processSimple2 = function (prefix, index, er, exists, cb) {

  //console.error('ps2', prefix, exists)

  if (!this.matches[index])
    this.matches[index] = Object.create(null)

  // If it doesn't exist, then just mark the lack of results
  if (!exists)
    return cb()

  if (prefix && isAbsolute(prefix) && !this.nomount) {
    var trail = /[\/\\]$/.test(prefix)
    if (prefix.charAt(0) === '/') {
      prefix = path.join(this.root, prefix)
    } else {
      prefix = path.resolve(this.root, prefix)
      if (trail)
        prefix += '/'
    }
  }

  if (process.platform === 'win32')
    prefix = prefix.replace(/\\/g, '/')

  // Mark this as a match
  this._emitMatch(index, prefix)
  cb()
}

// Returns either 'DIR', 'FILE', or false
Glob.prototype._stat = function (f, cb) {
  var abs = this._makeAbs(f)
  var needDir = f.slice(-1) === '/'

  if (f.length > this.maxLength)
    return cb()

  if (!this.stat && ownProp(this.cache, abs)) {
    var c = this.cache[abs]

    if (Array.isArray(c))
      c = 'DIR'

    // It exists, but maybe not how we need it
    if (!needDir || c === 'DIR')
      return cb(null, c)

    if (needDir && c === 'FILE')
      return cb()

    // otherwise we have to stat, because maybe c=true
    // if we know it exists, but not what it is.
  }

  var exists
  var stat = this.statCache[abs]
  if (stat !== undefined) {
    if (stat === false)
      return cb(null, stat)
    else {
      var type = stat.isDirectory() ? 'DIR' : 'FILE'
      if (needDir && type === 'FILE')
        return cb()
      else
        return cb(null, type, stat)
    }
  }

  var self = this
  var statcb = inflight('stat\0' + abs, lstatcb_)
  if (statcb)
    self.fs.lstat(abs, statcb)

  function lstatcb_ (er, lstat) {
    if (lstat && lstat.isSymbolicLink()) {
      // If it's a symlink, then treat it as the target, unless
      // the target does not exist, then treat it as a file.
      return self.fs.stat(abs, function (er, stat) {
        if (er)
          self._stat2(f, abs, null, lstat, cb)
        else
          self._stat2(f, abs, er, stat, cb)
      })
    } else {
      self._stat2(f, abs, er, lstat, cb)
    }
  }
}

Glob.prototype._stat2 = function (f, abs, er, stat, cb) {
  if (er && (er.code === 'ENOENT' || er.code === 'ENOTDIR')) {
    this.statCache[abs] = false
    return cb()
  }

  var needDir = f.slice(-1) === '/'
  this.statCache[abs] = stat

  if (abs.slice(-1) === '/' && stat && !stat.isDirectory())
    return cb(null, false, stat)

  var c = true
  if (stat)
    c = stat.isDirectory() ? 'DIR' : 'FILE'
  this.cache[abs] = this.cache[abs] || c

  if (needDir && c === 'FILE')
    return cb()

  return cb(null, c, stat)
}


/***/ }),
/* 10 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = realpath
realpath.realpath = realpath
realpath.sync = realpathSync
realpath.realpathSync = realpathSync
realpath.monkeypatch = monkeypatch
realpath.unmonkeypatch = unmonkeypatch

var fs = __webpack_require__(3)
var origRealpath = fs.realpath
var origRealpathSync = fs.realpathSync

var version = process.version
var ok = /^v[0-5]\./.test(version)
var old = __webpack_require__(11)

function newError (er) {
  return er && er.syscall === 'realpath' && (
    er.code === 'ELOOP' ||
    er.code === 'ENOMEM' ||
    er.code === 'ENAMETOOLONG'
  )
}

function realpath (p, cache, cb) {
  if (ok) {
    return origRealpath(p, cache, cb)
  }

  if (typeof cache === 'function') {
    cb = cache
    cache = null
  }
  origRealpath(p, cache, function (er, result) {
    if (newError(er)) {
      old.realpath(p, cache, cb)
    } else {
      cb(er, result)
    }
  })
}

function realpathSync (p, cache) {
  if (ok) {
    return origRealpathSync(p, cache)
  }

  try {
    return origRealpathSync(p, cache)
  } catch (er) {
    if (newError(er)) {
      return old.realpathSync(p, cache)
    } else {
      throw er
    }
  }
}

function monkeypatch () {
  fs.realpath = realpath
  fs.realpathSync = realpathSync
}

function unmonkeypatch () {
  fs.realpath = origRealpath
  fs.realpathSync = origRealpathSync
}


/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var pathModule = __webpack_require__(5);
var isWindows = process.platform === 'win32';
var fs = __webpack_require__(3);

// JavaScript implementation of realpath, ported from node pre-v6

var DEBUG = process.env.NODE_DEBUG && /fs/.test(process.env.NODE_DEBUG);

function rethrow() {
  // Only enable in debug mode. A backtrace uses ~1000 bytes of heap space and
  // is fairly slow to generate.
  var callback;
  if (DEBUG) {
    var backtrace = new Error;
    callback = debugCallback;
  } else
    callback = missingCallback;

  return callback;

  function debugCallback(err) {
    if (err) {
      backtrace.message = err.message;
      err = backtrace;
      missingCallback(err);
    }
  }

  function missingCallback(err) {
    if (err) {
      if (process.throwDeprecation)
        throw err;  // Forgot a callback but don't know where? Use NODE_DEBUG=fs
      else if (!process.noDeprecation) {
        var msg = 'fs: missing callback ' + (err.stack || err.message);
        if (process.traceDeprecation)
          console.trace(msg);
        else
          console.error(msg);
      }
    }
  }
}

function maybeCallback(cb) {
  return typeof cb === 'function' ? cb : rethrow();
}

var normalize = pathModule.normalize;

// Regexp that finds the next partion of a (partial) path
// result is [base_with_slash, base], e.g. ['somedir/', 'somedir']
if (isWindows) {
  var nextPartRe = /(.*?)(?:[\/\\]+|$)/g;
} else {
  var nextPartRe = /(.*?)(?:[\/]+|$)/g;
}

// Regex to find the device root, including trailing slash. E.g. 'c:\\'.
if (isWindows) {
  var splitRootRe = /^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/][^\\\/]+)?[\\\/]*/;
} else {
  var splitRootRe = /^[\/]*/;
}

exports.realpathSync = function realpathSync(p, cache) {
  // make p is absolute
  p = pathModule.resolve(p);

  if (cache && Object.prototype.hasOwnProperty.call(cache, p)) {
    return cache[p];
  }

  var original = p,
      seenLinks = {},
      knownHard = {};

  // current character position in p
  var pos;
  // the partial path so far, including a trailing slash if any
  var current;
  // the partial path without a trailing slash (except when pointing at a root)
  var base;
  // the partial path scanned in the previous round, with slash
  var previous;

  start();

  function start() {
    // Skip over roots
    var m = splitRootRe.exec(p);
    pos = m[0].length;
    current = m[0];
    base = m[0];
    previous = '';

    // On windows, check that the root exists. On unix there is no need.
    if (isWindows && !knownHard[base]) {
      fs.lstatSync(base);
      knownHard[base] = true;
    }
  }

  // walk down the path, swapping out linked pathparts for their real
  // values
  // NB: p.length changes.
  while (pos < p.length) {
    // find the next part
    nextPartRe.lastIndex = pos;
    var result = nextPartRe.exec(p);
    previous = current;
    current += result[0];
    base = previous + result[1];
    pos = nextPartRe.lastIndex;

    // continue if not a symlink
    if (knownHard[base] || (cache && cache[base] === base)) {
      continue;
    }

    var resolvedLink;
    if (cache && Object.prototype.hasOwnProperty.call(cache, base)) {
      // some known symbolic link.  no need to stat again.
      resolvedLink = cache[base];
    } else {
      var stat = fs.lstatSync(base);
      if (!stat.isSymbolicLink()) {
        knownHard[base] = true;
        if (cache) cache[base] = base;
        continue;
      }

      // read the link if it wasn't read before
      // dev/ino always return 0 on windows, so skip the check.
      var linkTarget = null;
      if (!isWindows) {
        var id = stat.dev.toString(32) + ':' + stat.ino.toString(32);
        if (seenLinks.hasOwnProperty(id)) {
          linkTarget = seenLinks[id];
        }
      }
      if (linkTarget === null) {
        fs.statSync(base);
        linkTarget = fs.readlinkSync(base);
      }
      resolvedLink = pathModule.resolve(previous, linkTarget);
      // track this, if given a cache.
      if (cache) cache[base] = resolvedLink;
      if (!isWindows) seenLinks[id] = linkTarget;
    }

    // resolve the link, then start over
    p = pathModule.resolve(resolvedLink, p.slice(pos));
    start();
  }

  if (cache) cache[original] = p;

  return p;
};


exports.realpath = function realpath(p, cache, cb) {
  if (typeof cb !== 'function') {
    cb = maybeCallback(cache);
    cache = null;
  }

  // make p is absolute
  p = pathModule.resolve(p);

  if (cache && Object.prototype.hasOwnProperty.call(cache, p)) {
    return process.nextTick(cb.bind(null, null, cache[p]));
  }

  var original = p,
      seenLinks = {},
      knownHard = {};

  // current character position in p
  var pos;
  // the partial path so far, including a trailing slash if any
  var current;
  // the partial path without a trailing slash (except when pointing at a root)
  var base;
  // the partial path scanned in the previous round, with slash
  var previous;

  start();

  function start() {
    // Skip over roots
    var m = splitRootRe.exec(p);
    pos = m[0].length;
    current = m[0];
    base = m[0];
    previous = '';

    // On windows, check that the root exists. On unix there is no need.
    if (isWindows && !knownHard[base]) {
      fs.lstat(base, function(err) {
        if (err) return cb(err);
        knownHard[base] = true;
        LOOP();
      });
    } else {
      process.nextTick(LOOP);
    }
  }

  // walk down the path, swapping out linked pathparts for their real
  // values
  function LOOP() {
    // stop if scanned past end of path
    if (pos >= p.length) {
      if (cache) cache[original] = p;
      return cb(null, p);
    }

    // find the next part
    nextPartRe.lastIndex = pos;
    var result = nextPartRe.exec(p);
    previous = current;
    current += result[0];
    base = previous + result[1];
    pos = nextPartRe.lastIndex;

    // continue if not a symlink
    if (knownHard[base] || (cache && cache[base] === base)) {
      return process.nextTick(LOOP);
    }

    if (cache && Object.prototype.hasOwnProperty.call(cache, base)) {
      // known symbolic link.  no need to stat again.
      return gotResolvedLink(cache[base]);
    }

    return fs.lstat(base, gotStat);
  }

  function gotStat(err, stat) {
    if (err) return cb(err);

    // if not a symlink, skip to the next path part
    if (!stat.isSymbolicLink()) {
      knownHard[base] = true;
      if (cache) cache[base] = base;
      return process.nextTick(LOOP);
    }

    // stat & read the link if not read before
    // call gotTarget as soon as the link target is known
    // dev/ino always return 0 on windows, so skip the check.
    if (!isWindows) {
      var id = stat.dev.toString(32) + ':' + stat.ino.toString(32);
      if (seenLinks.hasOwnProperty(id)) {
        return gotTarget(null, seenLinks[id], base);
      }
    }
    fs.stat(base, function(err) {
      if (err) return cb(err);

      fs.readlink(base, function(err, target) {
        if (!isWindows) seenLinks[id] = target;
        gotTarget(err, target);
      });
    });
  }

  function gotTarget(err, target, base) {
    if (err) return cb(err);

    var resolvedLink = pathModule.resolve(previous, target);
    if (cache) cache[base] = resolvedLink;
    gotResolvedLink(resolvedLink);
  }

  function gotResolvedLink(resolvedLink) {
    // resolve the link, then start over
    p = pathModule.resolve(resolvedLink, p.slice(pos));
    start();
  }
};


/***/ }),
/* 12 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = minimatch
minimatch.Minimatch = Minimatch

var path = (function () { try { return __webpack_require__(5) } catch (e) {}}()) || {
  sep: '/'
}
minimatch.sep = path.sep

var GLOBSTAR = minimatch.GLOBSTAR = Minimatch.GLOBSTAR = {}
var expand = __webpack_require__(13)

var plTypes = {
  '!': { open: '(?:(?!(?:', close: '))[^/]*?)'},
  '?': { open: '(?:', close: ')?' },
  '+': { open: '(?:', close: ')+' },
  '*': { open: '(?:', close: ')*' },
  '@': { open: '(?:', close: ')' }
}

// any single thing other than /
// don't need to escape / when using new RegExp()
var qmark = '[^/]'

// * => any number of characters
var star = qmark + '*?'

// ** when dots are allowed.  Anything goes, except .. and .
// not (^ or / followed by one or two dots followed by $ or /),
// followed by anything, any number of times.
var twoStarDot = '(?:(?!(?:\\\/|^)(?:\\.{1,2})($|\\\/)).)*?'

// not a ^ or / followed by a dot,
// followed by anything, any number of times.
var twoStarNoDot = '(?:(?!(?:\\\/|^)\\.).)*?'

// characters that need to be escaped in RegExp.
var reSpecials = charSet('().*{}+?[]^$\\!')

// "abc" -> { a:true, b:true, c:true }
function charSet (s) {
  return s.split('').reduce(function (set, c) {
    set[c] = true
    return set
  }, {})
}

// normalizes slashes.
var slashSplit = /\/+/

minimatch.filter = filter
function filter (pattern, options) {
  options = options || {}
  return function (p, i, list) {
    return minimatch(p, pattern, options)
  }
}

function ext (a, b) {
  b = b || {}
  var t = {}
  Object.keys(a).forEach(function (k) {
    t[k] = a[k]
  })
  Object.keys(b).forEach(function (k) {
    t[k] = b[k]
  })
  return t
}

minimatch.defaults = function (def) {
  if (!def || typeof def !== 'object' || !Object.keys(def).length) {
    return minimatch
  }

  var orig = minimatch

  var m = function minimatch (p, pattern, options) {
    return orig(p, pattern, ext(def, options))
  }

  m.Minimatch = function Minimatch (pattern, options) {
    return new orig.Minimatch(pattern, ext(def, options))
  }
  m.Minimatch.defaults = function defaults (options) {
    return orig.defaults(ext(def, options)).Minimatch
  }

  m.filter = function filter (pattern, options) {
    return orig.filter(pattern, ext(def, options))
  }

  m.defaults = function defaults (options) {
    return orig.defaults(ext(def, options))
  }

  m.makeRe = function makeRe (pattern, options) {
    return orig.makeRe(pattern, ext(def, options))
  }

  m.braceExpand = function braceExpand (pattern, options) {
    return orig.braceExpand(pattern, ext(def, options))
  }

  m.match = function (list, pattern, options) {
    return orig.match(list, pattern, ext(def, options))
  }

  return m
}

Minimatch.defaults = function (def) {
  return minimatch.defaults(def).Minimatch
}

function minimatch (p, pattern, options) {
  assertValidPattern(pattern)

  if (!options) options = {}

  // shortcut: comments match nothing.
  if (!options.nocomment && pattern.charAt(0) === '#') {
    return false
  }

  return new Minimatch(pattern, options).match(p)
}

function Minimatch (pattern, options) {
  if (!(this instanceof Minimatch)) {
    return new Minimatch(pattern, options)
  }

  assertValidPattern(pattern)

  if (!options) options = {}

  pattern = pattern.trim()

  // windows support: need to use /, not \
  if (!options.allowWindowsEscape && path.sep !== '/') {
    pattern = pattern.split(path.sep).join('/')
  }

  this.options = options
  this.set = []
  this.pattern = pattern
  this.regexp = null
  this.negate = false
  this.comment = false
  this.empty = false
  this.partial = !!options.partial

  // make the set of regexps etc.
  this.make()
}

Minimatch.prototype.debug = function () {}

Minimatch.prototype.make = make
function make () {
  var pattern = this.pattern
  var options = this.options

  // empty patterns and comments match nothing.
  if (!options.nocomment && pattern.charAt(0) === '#') {
    this.comment = true
    return
  }
  if (!pattern) {
    this.empty = true
    return
  }

  // step 1: figure out negation, etc.
  this.parseNegate()

  // step 2: expand braces
  var set = this.globSet = this.braceExpand()

  if (options.debug) this.debug = function debug() { console.error.apply(console, arguments) }

  this.debug(this.pattern, set)

  // step 3: now we have a set, so turn each one into a series of path-portion
  // matching patterns.
  // These will be regexps, except in the case of "**", which is
  // set to the GLOBSTAR object for globstar behavior,
  // and will not contain any / characters
  set = this.globParts = set.map(function (s) {
    return s.split(slashSplit)
  })

  this.debug(this.pattern, set)

  // glob --> regexps
  set = set.map(function (s, si, set) {
    return s.map(this.parse, this)
  }, this)

  this.debug(this.pattern, set)

  // filter out everything that didn't compile properly.
  set = set.filter(function (s) {
    return s.indexOf(false) === -1
  })

  this.debug(this.pattern, set)

  this.set = set
}

Minimatch.prototype.parseNegate = parseNegate
function parseNegate () {
  var pattern = this.pattern
  var negate = false
  var options = this.options
  var negateOffset = 0

  if (options.nonegate) return

  for (var i = 0, l = pattern.length
    ; i < l && pattern.charAt(i) === '!'
    ; i++) {
    negate = !negate
    negateOffset++
  }

  if (negateOffset) this.pattern = pattern.substr(negateOffset)
  this.negate = negate
}

// Brace expansion:
// a{b,c}d -> abd acd
// a{b,}c -> abc ac
// a{0..3}d -> a0d a1d a2d a3d
// a{b,c{d,e}f}g -> abg acdfg acefg
// a{b,c}d{e,f}g -> abdeg acdeg abdeg abdfg
//
// Invalid sets are not expanded.
// a{2..}b -> a{2..}b
// a{b}c -> a{b}c
minimatch.braceExpand = function (pattern, options) {
  return braceExpand(pattern, options)
}

Minimatch.prototype.braceExpand = braceExpand

function braceExpand (pattern, options) {
  if (!options) {
    if (this instanceof Minimatch) {
      options = this.options
    } else {
      options = {}
    }
  }

  pattern = typeof pattern === 'undefined'
    ? this.pattern : pattern

  assertValidPattern(pattern)

  // Thanks to Yeting Li <https://github.com/yetingli> for
  // improving this regexp to avoid a ReDOS vulnerability.
  if (options.nobrace || !/\{(?:(?!\{).)*\}/.test(pattern)) {
    // shortcut. no need to expand.
    return [pattern]
  }

  return expand(pattern)
}

var MAX_PATTERN_LENGTH = 1024 * 64
var assertValidPattern = function (pattern) {
  if (typeof pattern !== 'string') {
    throw new TypeError('invalid pattern')
  }

  if (pattern.length > MAX_PATTERN_LENGTH) {
    throw new TypeError('pattern is too long')
  }
}

// parse a component of the expanded set.
// At this point, no pattern may contain "/" in it
// so we're going to return a 2d array, where each entry is the full
// pattern, split on '/', and then turned into a regular expression.
// A regexp is made at the end which joins each array with an
// escaped /, and another full one which joins each regexp with |.
//
// Following the lead of Bash 4.1, note that "**" only has special meaning
// when it is the *only* thing in a path portion.  Otherwise, any series
// of * is equivalent to a single *.  Globstar behavior is enabled by
// default, and can be disabled by setting options.noglobstar.
Minimatch.prototype.parse = parse
var SUBPARSE = {}
function parse (pattern, isSub) {
  assertValidPattern(pattern)

  var options = this.options

  // shortcuts
  if (pattern === '**') {
    if (!options.noglobstar)
      return GLOBSTAR
    else
      pattern = '*'
  }
  if (pattern === '') return ''

  var re = ''
  var hasMagic = !!options.nocase
  var escaping = false
  // ? => one single character
  var patternListStack = []
  var negativeLists = []
  var stateChar
  var inClass = false
  var reClassStart = -1
  var classStart = -1
  // . and .. never match anything that doesn't start with .,
  // even when options.dot is set.
  var patternStart = pattern.charAt(0) === '.' ? '' // anything
  // not (start or / followed by . or .. followed by / or end)
  : options.dot ? '(?!(?:^|\\\/)\\.{1,2}(?:$|\\\/))'
  : '(?!\\.)'
  var self = this

  function clearStateChar () {
    if (stateChar) {
      // we had some state-tracking character
      // that wasn't consumed by this pass.
      switch (stateChar) {
        case '*':
          re += star
          hasMagic = true
        break
        case '?':
          re += qmark
          hasMagic = true
        break
        default:
          re += '\\' + stateChar
        break
      }
      self.debug('clearStateChar %j %j', stateChar, re)
      stateChar = false
    }
  }

  for (var i = 0, len = pattern.length, c
    ; (i < len) && (c = pattern.charAt(i))
    ; i++) {
    this.debug('%s\t%s %s %j', pattern, i, re, c)

    // skip over any that are escaped.
    if (escaping && reSpecials[c]) {
      re += '\\' + c
      escaping = false
      continue
    }

    switch (c) {
      /* istanbul ignore next */
      case '/': {
        // completely not allowed, even escaped.
        // Should already be path-split by now.
        return false
      }

      case '\\':
        clearStateChar()
        escaping = true
      continue

      // the various stateChar values
      // for the "extglob" stuff.
      case '?':
      case '*':
      case '+':
      case '@':
      case '!':
        this.debug('%s\t%s %s %j <-- stateChar', pattern, i, re, c)

        // all of those are literals inside a class, except that
        // the glob [!a] means [^a] in regexp
        if (inClass) {
          this.debug('  in class')
          if (c === '!' && i === classStart + 1) c = '^'
          re += c
          continue
        }

        // if we already have a stateChar, then it means
        // that there was something like ** or +? in there.
        // Handle the stateChar, then proceed with this one.
        self.debug('call clearStateChar %j', stateChar)
        clearStateChar()
        stateChar = c
        // if extglob is disabled, then +(asdf|foo) isn't a thing.
        // just clear the statechar *now*, rather than even diving into
        // the patternList stuff.
        if (options.noext) clearStateChar()
      continue

      case '(':
        if (inClass) {
          re += '('
          continue
        }

        if (!stateChar) {
          re += '\\('
          continue
        }

        patternListStack.push({
          type: stateChar,
          start: i - 1,
          reStart: re.length,
          open: plTypes[stateChar].open,
          close: plTypes[stateChar].close
        })
        // negation is (?:(?!js)[^/]*)
        re += stateChar === '!' ? '(?:(?!(?:' : '(?:'
        this.debug('plType %j %j', stateChar, re)
        stateChar = false
      continue

      case ')':
        if (inClass || !patternListStack.length) {
          re += '\\)'
          continue
        }

        clearStateChar()
        hasMagic = true
        var pl = patternListStack.pop()
        // negation is (?:(?!js)[^/]*)
        // The others are (?:<pattern>)<type>
        re += pl.close
        if (pl.type === '!') {
          negativeLists.push(pl)
        }
        pl.reEnd = re.length
      continue

      case '|':
        if (inClass || !patternListStack.length || escaping) {
          re += '\\|'
          escaping = false
          continue
        }

        clearStateChar()
        re += '|'
      continue

      // these are mostly the same in regexp and glob
      case '[':
        // swallow any state-tracking char before the [
        clearStateChar()

        if (inClass) {
          re += '\\' + c
          continue
        }

        inClass = true
        classStart = i
        reClassStart = re.length
        re += c
      continue

      case ']':
        //  a right bracket shall lose its special
        //  meaning and represent itself in
        //  a bracket expression if it occurs
        //  first in the list.  -- POSIX.2 2.8.3.2
        if (i === classStart + 1 || !inClass) {
          re += '\\' + c
          escaping = false
          continue
        }

        // handle the case where we left a class open.
        // "[z-a]" is valid, equivalent to "\[z-a\]"
        // split where the last [ was, make sure we don't have
        // an invalid re. if so, re-walk the contents of the
        // would-be class to re-translate any characters that
        // were passed through as-is
        // TODO: It would probably be faster to determine this
        // without a try/catch and a new RegExp, but it's tricky
        // to do safely.  For now, this is safe and works.
        var cs = pattern.substring(classStart + 1, i)
        try {
          RegExp('[' + cs + ']')
        } catch (er) {
          // not a valid class!
          var sp = this.parse(cs, SUBPARSE)
          re = re.substr(0, reClassStart) + '\\[' + sp[0] + '\\]'
          hasMagic = hasMagic || sp[1]
          inClass = false
          continue
        }

        // finish up the class.
        hasMagic = true
        inClass = false
        re += c
      continue

      default:
        // swallow any state char that wasn't consumed
        clearStateChar()

        if (escaping) {
          // no need
          escaping = false
        } else if (reSpecials[c]
          && !(c === '^' && inClass)) {
          re += '\\'
        }

        re += c

    } // switch
  } // for

  // handle the case where we left a class open.
  // "[abc" is valid, equivalent to "\[abc"
  if (inClass) {
    // split where the last [ was, and escape it
    // this is a huge pita.  We now have to re-walk
    // the contents of the would-be class to re-translate
    // any characters that were passed through as-is
    cs = pattern.substr(classStart + 1)
    sp = this.parse(cs, SUBPARSE)
    re = re.substr(0, reClassStart) + '\\[' + sp[0]
    hasMagic = hasMagic || sp[1]
  }

  // handle the case where we had a +( thing at the *end*
  // of the pattern.
  // each pattern list stack adds 3 chars, and we need to go through
  // and escape any | chars that were passed through as-is for the regexp.
  // Go through and escape them, taking care not to double-escape any
  // | chars that were already escaped.
  for (pl = patternListStack.pop(); pl; pl = patternListStack.pop()) {
    var tail = re.slice(pl.reStart + pl.open.length)
    this.debug('setting tail', re, pl)
    // maybe some even number of \, then maybe 1 \, followed by a |
    tail = tail.replace(/((?:\\{2}){0,64})(\\?)\|/g, function (_, $1, $2) {
      if (!$2) {
        // the | isn't already escaped, so escape it.
        $2 = '\\'
      }

      // need to escape all those slashes *again*, without escaping the
      // one that we need for escaping the | character.  As it works out,
      // escaping an even number of slashes can be done by simply repeating
      // it exactly after itself.  That's why this trick works.
      //
      // I am sorry that you have to see this.
      return $1 + $1 + $2 + '|'
    })

    this.debug('tail=%j\n   %s', tail, tail, pl, re)
    var t = pl.type === '*' ? star
      : pl.type === '?' ? qmark
      : '\\' + pl.type

    hasMagic = true
    re = re.slice(0, pl.reStart) + t + '\\(' + tail
  }

  // handle trailing things that only matter at the very end.
  clearStateChar()
  if (escaping) {
    // trailing \\
    re += '\\\\'
  }

  // only need to apply the nodot start if the re starts with
  // something that could conceivably capture a dot
  var addPatternStart = false
  switch (re.charAt(0)) {
    case '[': case '.': case '(': addPatternStart = true
  }

  // Hack to work around lack of negative lookbehind in JS
  // A pattern like: *.!(x).!(y|z) needs to ensure that a name
  // like 'a.xyz.yz' doesn't match.  So, the first negative
  // lookahead, has to look ALL the way ahead, to the end of
  // the pattern.
  for (var n = negativeLists.length - 1; n > -1; n--) {
    var nl = negativeLists[n]

    var nlBefore = re.slice(0, nl.reStart)
    var nlFirst = re.slice(nl.reStart, nl.reEnd - 8)
    var nlLast = re.slice(nl.reEnd - 8, nl.reEnd)
    var nlAfter = re.slice(nl.reEnd)

    nlLast += nlAfter

    // Handle nested stuff like *(*.js|!(*.json)), where open parens
    // mean that we should *not* include the ) in the bit that is considered
    // "after" the negated section.
    var openParensBefore = nlBefore.split('(').length - 1
    var cleanAfter = nlAfter
    for (i = 0; i < openParensBefore; i++) {
      cleanAfter = cleanAfter.replace(/\)[+*?]?/, '')
    }
    nlAfter = cleanAfter

    var dollar = ''
    if (nlAfter === '' && isSub !== SUBPARSE) {
      dollar = '$'
    }
    var newRe = nlBefore + nlFirst + nlAfter + dollar + nlLast
    re = newRe
  }

  // if the re is not "" at this point, then we need to make sure
  // it doesn't match against an empty path part.
  // Otherwise a/* will match a/, which it should not.
  if (re !== '' && hasMagic) {
    re = '(?=.)' + re
  }

  if (addPatternStart) {
    re = patternStart + re
  }

  // parsing just a piece of a larger pattern.
  if (isSub === SUBPARSE) {
    return [re, hasMagic]
  }

  // skip the regexp for non-magical patterns
  // unescape anything in it, though, so that it'll be
  // an exact match against a file etc.
  if (!hasMagic) {
    return globUnescape(pattern)
  }

  var flags = options.nocase ? 'i' : ''
  try {
    var regExp = new RegExp('^' + re + '$', flags)
  } catch (er) /* istanbul ignore next - should be impossible */ {
    // If it was an invalid regular expression, then it can't match
    // anything.  This trick looks for a character after the end of
    // the string, which is of course impossible, except in multi-line
    // mode, but it's not a /m regex.
    return new RegExp('$.')
  }

  regExp._glob = pattern
  regExp._src = re

  return regExp
}

minimatch.makeRe = function (pattern, options) {
  return new Minimatch(pattern, options || {}).makeRe()
}

Minimatch.prototype.makeRe = makeRe
function makeRe () {
  if (this.regexp || this.regexp === false) return this.regexp

  // at this point, this.set is a 2d array of partial
  // pattern strings, or "**".
  //
  // It's better to use .match().  This function shouldn't
  // be used, really, but it's pretty convenient sometimes,
  // when you just want to work with a regex.
  var set = this.set

  if (!set.length) {
    this.regexp = false
    return this.regexp
  }
  var options = this.options

  var twoStar = options.noglobstar ? star
    : options.dot ? twoStarDot
    : twoStarNoDot
  var flags = options.nocase ? 'i' : ''

  var re = set.map(function (pattern) {
    return pattern.map(function (p) {
      return (p === GLOBSTAR) ? twoStar
      : (typeof p === 'string') ? regExpEscape(p)
      : p._src
    }).join('\\\/')
  }).join('|')

  // must match entire pattern
  // ending in a * or ** will make it less strict.
  re = '^(?:' + re + ')$'

  // can match anything, as long as it's not this.
  if (this.negate) re = '^(?!' + re + ').*$'

  try {
    this.regexp = new RegExp(re, flags)
  } catch (ex) /* istanbul ignore next - should be impossible */ {
    this.regexp = false
  }
  return this.regexp
}

minimatch.match = function (list, pattern, options) {
  options = options || {}
  var mm = new Minimatch(pattern, options)
  list = list.filter(function (f) {
    return mm.match(f)
  })
  if (mm.options.nonull && !list.length) {
    list.push(pattern)
  }
  return list
}

Minimatch.prototype.match = function match (f, partial) {
  if (typeof partial === 'undefined') partial = this.partial
  this.debug('match', f, this.pattern)
  // short-circuit in the case of busted things.
  // comments, etc.
  if (this.comment) return false
  if (this.empty) return f === ''

  if (f === '/' && partial) return true

  var options = this.options

  // windows: need to use /, not \
  if (path.sep !== '/') {
    f = f.split(path.sep).join('/')
  }

  // treat the test path as a set of pathparts.
  f = f.split(slashSplit)
  this.debug(this.pattern, 'split', f)

  // just ONE of the pattern sets in this.set needs to match
  // in order for it to be valid.  If negating, then just one
  // match means that we have failed.
  // Either way, return on the first hit.

  var set = this.set
  this.debug(this.pattern, 'set', set)

  // Find the basename of the path by looking for the last non-empty segment
  var filename
  var i
  for (i = f.length - 1; i >= 0; i--) {
    filename = f[i]
    if (filename) break
  }

  for (i = 0; i < set.length; i++) {
    var pattern = set[i]
    var file = f
    if (options.matchBase && pattern.length === 1) {
      file = [filename]
    }
    var hit = this.matchOne(file, pattern, partial)
    if (hit) {
      if (options.flipNegate) return true
      return !this.negate
    }
  }

  // didn't get any hits.  this is success if it's a negative
  // pattern, failure otherwise.
  if (options.flipNegate) return false
  return this.negate
}

// set partial to true to test if, for example,
// "/a/b" matches the start of "/*/b/*/d"
// Partial means, if you run out of file before you run
// out of pattern, then that's fine, as long as all
// the parts match.
Minimatch.prototype.matchOne = function (file, pattern, partial) {
  var options = this.options

  this.debug('matchOne',
    { 'this': this, file: file, pattern: pattern })

  this.debug('matchOne', file.length, pattern.length)

  for (var fi = 0,
      pi = 0,
      fl = file.length,
      pl = pattern.length
      ; (fi < fl) && (pi < pl)
      ; fi++, pi++) {
    this.debug('matchOne loop')
    var p = pattern[pi]
    var f = file[fi]

    this.debug(pattern, p, f)

    // should be impossible.
    // some invalid regexp stuff in the set.
    /* istanbul ignore if */
    if (p === false) return false

    if (p === GLOBSTAR) {
      this.debug('GLOBSTAR', [pattern, p, f])

      // "**"
      // a/**/b/**/c would match the following:
      // a/b/x/y/z/c
      // a/x/y/z/b/c
      // a/b/x/b/x/c
      // a/b/c
      // To do this, take the rest of the pattern after
      // the **, and see if it would match the file remainder.
      // If so, return success.
      // If not, the ** "swallows" a segment, and try again.
      // This is recursively awful.
      //
      // a/**/b/**/c matching a/b/x/y/z/c
      // - a matches a
      // - doublestar
      //   - matchOne(b/x/y/z/c, b/**/c)
      //     - b matches b
      //     - doublestar
      //       - matchOne(x/y/z/c, c) -> no
      //       - matchOne(y/z/c, c) -> no
      //       - matchOne(z/c, c) -> no
      //       - matchOne(c, c) yes, hit
      var fr = fi
      var pr = pi + 1
      if (pr === pl) {
        this.debug('** at the end')
        // a ** at the end will just swallow the rest.
        // We have found a match.
        // however, it will not swallow /.x, unless
        // options.dot is set.
        // . and .. are *never* matched by **, for explosively
        // exponential reasons.
        for (; fi < fl; fi++) {
          if (file[fi] === '.' || file[fi] === '..' ||
            (!options.dot && file[fi].charAt(0) === '.')) return false
        }
        return true
      }

      // ok, let's see if we can swallow whatever we can.
      while (fr < fl) {
        var swallowee = file[fr]

        this.debug('\nglobstar while', file, fr, pattern, pr, swallowee)

        // XXX remove this slice.  Just pass the start index.
        if (this.matchOne(file.slice(fr), pattern.slice(pr), partial)) {
          this.debug('globstar found match!', fr, fl, swallowee)
          // found a match.
          return true
        } else {
          // can't swallow "." or ".." ever.
          // can only swallow ".foo" when explicitly asked.
          if (swallowee === '.' || swallowee === '..' ||
            (!options.dot && swallowee.charAt(0) === '.')) {
            this.debug('dot detected!', file, fr, pattern, pr)
            break
          }

          // ** swallows a segment, and continue.
          this.debug('globstar swallow a segment, and continue')
          fr++
        }
      }

      // no match was found.
      // However, in partial mode, we can't say this is necessarily over.
      // If there's more *pattern* left, then
      /* istanbul ignore if */
      if (partial) {
        // ran out of file
        this.debug('\n>>> no match, partial?', file, fr, pattern, pr)
        if (fr === fl) return true
      }
      return false
    }

    // something other than **
    // non-magic patterns just have to match exactly
    // patterns with magic have been turned into regexps.
    var hit
    if (typeof p === 'string') {
      hit = f === p
      this.debug('string match', p, f, hit)
    } else {
      hit = f.match(p)
      this.debug('pattern match', p, f, hit)
    }

    if (!hit) return false
  }

  // Note: ending in / means that we'll get a final ""
  // at the end of the pattern.  This can only match a
  // corresponding "" at the end of the file.
  // If the file ends in /, then it can only match a
  // a pattern that ends in /, unless the pattern just
  // doesn't have any more for it. But, a/b/ should *not*
  // match "a/b/*", even though "" matches against the
  // [^/]*? pattern, except in partial mode, where it might
  // simply not be reached yet.
  // However, a/b/ should still satisfy a/*

  // now either we fell off the end of the pattern, or we're done.
  if (fi === fl && pi === pl) {
    // ran out of pattern and filename at the same time.
    // an exact hit!
    return true
  } else if (fi === fl) {
    // ran out of file, but still had pattern left.
    // this is ok if we're doing the match as part of
    // a glob fs traversal.
    return partial
  } else /* istanbul ignore else */ if (pi === pl) {
    // ran out of pattern, still have file left.
    // this is only acceptable if we're on the very last
    // empty segment of a file with a trailing slash.
    // a/* should match a/b/
    return (fi === fl - 1) && (file[fi] === '')
  }

  // should be unreachable.
  /* istanbul ignore next */
  throw new Error('wtf?')
}

// replace stuff like \* with *
function globUnescape (s) {
  return s.replace(/\\(.)/g, '$1')
}

function regExpEscape (s) {
  return s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')
}


/***/ }),
/* 13 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var concatMap = __webpack_require__(14);
var balanced = __webpack_require__(15);

module.exports = expandTop;

var escSlash = '\0SLASH'+Math.random()+'\0';
var escOpen = '\0OPEN'+Math.random()+'\0';
var escClose = '\0CLOSE'+Math.random()+'\0';
var escComma = '\0COMMA'+Math.random()+'\0';
var escPeriod = '\0PERIOD'+Math.random()+'\0';

function numeric(str) {
  return parseInt(str, 10) == str
    ? parseInt(str, 10)
    : str.charCodeAt(0);
}

function escapeBraces(str) {
  return str.split('\\\\').join(escSlash)
            .split('\\{').join(escOpen)
            .split('\\}').join(escClose)
            .split('\\,').join(escComma)
            .split('\\.').join(escPeriod);
}

function unescapeBraces(str) {
  return str.split(escSlash).join('\\')
            .split(escOpen).join('{')
            .split(escClose).join('}')
            .split(escComma).join(',')
            .split(escPeriod).join('.');
}


// Basically just str.split(","), but handling cases
// where we have nested braced sections, which should be
// treated as individual members, like {a,{b,c},d}
function parseCommaParts(str) {
  if (!str)
    return [''];

  var parts = [];
  var m = balanced('{', '}', str);

  if (!m)
    return str.split(',');

  var pre = m.pre;
  var body = m.body;
  var post = m.post;
  var p = pre.split(',');

  p[p.length-1] += '{' + body + '}';
  var postParts = parseCommaParts(post);
  if (post.length) {
    p[p.length-1] += postParts.shift();
    p.push.apply(p, postParts);
  }

  parts.push.apply(parts, p);

  return parts;
}

function expandTop(str) {
  if (!str)
    return [];

  // I don't know why Bash 4.3 does this, but it does.
  // Anything starting with {} will have the first two bytes preserved
  // but *only* at the top level, so {},a}b will not expand to anything,
  // but a{},b}c will be expanded to [a}c,abc].
  // One could argue that this is a bug in Bash, but since the goal of
  // this module is to match Bash's rules, we escape a leading {}
  if (str.substr(0, 2) === '{}') {
    str = '\\{\\}' + str.substr(2);
  }

  return expand(escapeBraces(str), true).map(unescapeBraces);
}

function identity(e) {
  return e;
}

function embrace(str) {
  return '{' + str + '}';
}
function isPadded(el) {
  return /^-?0\d/.test(el);
}

function lte(i, y) {
  return i <= y;
}
function gte(i, y) {
  return i >= y;
}

function expand(str, isTop) {
  var expansions = [];

  var m = balanced('{', '}', str);
  if (!m || /\$$/.test(m.pre)) return [str];

  var isNumericSequence = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(m.body);
  var isAlphaSequence = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(m.body);
  var isSequence = isNumericSequence || isAlphaSequence;
  var isOptions = m.body.indexOf(',') >= 0;
  if (!isSequence && !isOptions) {
    // {a},b}
    if (m.post.match(/,.*\}/)) {
      str = m.pre + '{' + m.body + escClose + m.post;
      return expand(str);
    }
    return [str];
  }

  var n;
  if (isSequence) {
    n = m.body.split(/\.\./);
  } else {
    n = parseCommaParts(m.body);
    if (n.length === 1) {
      // x{{a,b}}y ==> x{a}y x{b}y
      n = expand(n[0], false).map(embrace);
      if (n.length === 1) {
        var post = m.post.length
          ? expand(m.post, false)
          : [''];
        return post.map(function(p) {
          return m.pre + n[0] + p;
        });
      }
    }
  }

  // at this point, n is the parts, and we know it's not a comma set
  // with a single entry.

  // no need to expand pre, since it is guaranteed to be free of brace-sets
  var pre = m.pre;
  var post = m.post.length
    ? expand(m.post, false)
    : [''];

  var N;

  if (isSequence) {
    var x = numeric(n[0]);
    var y = numeric(n[1]);
    var width = Math.max(n[0].length, n[1].length)
    var incr = n.length == 3
      ? Math.abs(numeric(n[2]))
      : 1;
    var test = lte;
    var reverse = y < x;
    if (reverse) {
      incr *= -1;
      test = gte;
    }
    var pad = n.some(isPadded);

    N = [];

    for (var i = x; test(i, y); i += incr) {
      var c;
      if (isAlphaSequence) {
        c = String.fromCharCode(i);
        if (c === '\\')
          c = '';
      } else {
        c = String(i);
        if (pad) {
          var need = width - c.length;
          if (need > 0) {
            var z = new Array(need + 1).join('0');
            if (i < 0)
              c = '-' + z + c.slice(1);
            else
              c = z + c;
          }
        }
      }
      N.push(c);
    }
  } else {
    N = concatMap(n, function(el) { return expand(el, false) });
  }

  for (var j = 0; j < N.length; j++) {
    for (var k = 0; k < post.length; k++) {
      var expansion = pre + N[j] + post[k];
      if (!isTop || isSequence || expansion)
        expansions.push(expansion);
    }
  }

  return expansions;
}



/***/ }),
/* 14 */
/***/ ((module) => {

module.exports = function (xs, fn) {
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        var x = fn(xs[i], i);
        if (isArray(x)) res.push.apply(res, x);
        else res.push(x);
    }
    return res;
};

var isArray = Array.isArray || function (xs) {
    return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),
/* 15 */
/***/ ((module) => {

"use strict";

module.exports = balanced;
function balanced(a, b, str) {
  if (a instanceof RegExp) a = maybeMatch(a, str);
  if (b instanceof RegExp) b = maybeMatch(b, str);

  var r = range(a, b, str);

  return r && {
    start: r[0],
    end: r[1],
    pre: str.slice(0, r[0]),
    body: str.slice(r[0] + a.length, r[1]),
    post: str.slice(r[1] + b.length)
  };
}

function maybeMatch(reg, str) {
  var m = str.match(reg);
  return m ? m[0] : null;
}

balanced.range = range;
function range(a, b, str) {
  var begs, beg, left, right, result;
  var ai = str.indexOf(a);
  var bi = str.indexOf(b, ai + 1);
  var i = ai;

  if (ai >= 0 && bi > 0) {
    if(a===b) {
      return [ai, bi];
    }
    begs = [];
    left = str.length;

    while (i >= 0 && !result) {
      if (i == ai) {
        begs.push(i);
        ai = str.indexOf(a, i + 1);
      } else if (begs.length == 1) {
        result = [ begs.pop(), bi ];
      } else {
        beg = begs.pop();
        if (beg < left) {
          left = beg;
          right = bi;
        }

        bi = str.indexOf(b, i + 1);
      }

      i = ai < bi && ai >= 0 ? ai : bi;
    }

    if (begs.length) {
      result = [ left, right ];
    }
  }

  return result;
}


/***/ }),
/* 16 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

try {
  var util = __webpack_require__(17);
  /* istanbul ignore next */
  if (typeof util.inherits !== 'function') throw '';
  module.exports = util.inherits;
} catch (e) {
  /* istanbul ignore next */
  module.exports = __webpack_require__(18);
}


/***/ }),
/* 17 */
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),
/* 18 */
/***/ ((module) => {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor
      ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }
      })
    }
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor
      var TempCtor = function () {}
      TempCtor.prototype = superCtor.prototype
      ctor.prototype = new TempCtor()
      ctor.prototype.constructor = ctor
    }
  }
}


/***/ }),
/* 19 */
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),
/* 20 */
/***/ ((module) => {

"use strict";


function posix(path) {
	return path.charAt(0) === '/';
}

function win32(path) {
	// https://github.com/nodejs/node/blob/b3fcc245fb25539909ef1d5eaa01dbf92e168633/lib/path.js#L56
	var splitDeviceRe = /^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/;
	var result = splitDeviceRe.exec(path);
	var device = result[1] || '';
	var isUnc = Boolean(device && device.charAt(1) !== ':');

	// UNC paths are always absolute
	return Boolean(result[2] || isUnc);
}

module.exports = process.platform === 'win32' ? win32 : posix;
module.exports.posix = posix;
module.exports.win32 = win32;


/***/ }),
/* 21 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = globSync
globSync.GlobSync = GlobSync

var rp = __webpack_require__(10)
var minimatch = __webpack_require__(12)
var Minimatch = minimatch.Minimatch
var Glob = (__webpack_require__(9).Glob)
var util = __webpack_require__(17)
var path = __webpack_require__(5)
var assert = __webpack_require__(8)
var isAbsolute = __webpack_require__(20)
var common = __webpack_require__(22)
var setopts = common.setopts
var ownProp = common.ownProp
var childrenIgnored = common.childrenIgnored
var isIgnored = common.isIgnored

function globSync (pattern, options) {
  if (typeof options === 'function' || arguments.length === 3)
    throw new TypeError('callback provided to sync glob\n'+
                        'See: https://github.com/isaacs/node-glob/issues/167')

  return new GlobSync(pattern, options).found
}

function GlobSync (pattern, options) {
  if (!pattern)
    throw new Error('must provide pattern')

  if (typeof options === 'function' || arguments.length === 3)
    throw new TypeError('callback provided to sync glob\n'+
                        'See: https://github.com/isaacs/node-glob/issues/167')

  if (!(this instanceof GlobSync))
    return new GlobSync(pattern, options)

  setopts(this, pattern, options)

  if (this.noprocess)
    return this

  var n = this.minimatch.set.length
  this.matches = new Array(n)
  for (var i = 0; i < n; i ++) {
    this._process(this.minimatch.set[i], i, false)
  }
  this._finish()
}

GlobSync.prototype._finish = function () {
  assert.ok(this instanceof GlobSync)
  if (this.realpath) {
    var self = this
    this.matches.forEach(function (matchset, index) {
      var set = self.matches[index] = Object.create(null)
      for (var p in matchset) {
        try {
          p = self._makeAbs(p)
          var real = rp.realpathSync(p, self.realpathCache)
          set[real] = true
        } catch (er) {
          if (er.syscall === 'stat')
            set[self._makeAbs(p)] = true
          else
            throw er
        }
      }
    })
  }
  common.finish(this)
}


GlobSync.prototype._process = function (pattern, index, inGlobStar) {
  assert.ok(this instanceof GlobSync)

  // Get the first [n] parts of pattern that are all strings.
  var n = 0
  while (typeof pattern[n] === 'string') {
    n ++
  }
  // now n is the index of the first one that is *not* a string.

  // See if there's anything else
  var prefix
  switch (n) {
    // if not, then this is rather simple
    case pattern.length:
      this._processSimple(pattern.join('/'), index)
      return

    case 0:
      // pattern *starts* with some non-trivial item.
      // going to readdir(cwd), but not include the prefix in matches.
      prefix = null
      break

    default:
      // pattern has some string bits in the front.
      // whatever it starts with, whether that's 'absolute' like /foo/bar,
      // or 'relative' like '../baz'
      prefix = pattern.slice(0, n).join('/')
      break
  }

  var remain = pattern.slice(n)

  // get the list of entries.
  var read
  if (prefix === null)
    read = '.'
  else if (isAbsolute(prefix) ||
      isAbsolute(pattern.map(function (p) {
        return typeof p === 'string' ? p : '[*]'
      }).join('/'))) {
    if (!prefix || !isAbsolute(prefix))
      prefix = '/' + prefix
    read = prefix
  } else
    read = prefix

  var abs = this._makeAbs(read)

  //if ignored, skip processing
  if (childrenIgnored(this, read))
    return

  var isGlobStar = remain[0] === minimatch.GLOBSTAR
  if (isGlobStar)
    this._processGlobStar(prefix, read, abs, remain, index, inGlobStar)
  else
    this._processReaddir(prefix, read, abs, remain, index, inGlobStar)
}


GlobSync.prototype._processReaddir = function (prefix, read, abs, remain, index, inGlobStar) {
  var entries = this._readdir(abs, inGlobStar)

  // if the abs isn't a dir, then nothing can match!
  if (!entries)
    return

  // It will only match dot entries if it starts with a dot, or if
  // dot is set.  Stuff like @(.foo|.bar) isn't allowed.
  var pn = remain[0]
  var negate = !!this.minimatch.negate
  var rawGlob = pn._glob
  var dotOk = this.dot || rawGlob.charAt(0) === '.'

  var matchedEntries = []
  for (var i = 0; i < entries.length; i++) {
    var e = entries[i]
    if (e.charAt(0) !== '.' || dotOk) {
      var m
      if (negate && !prefix) {
        m = !e.match(pn)
      } else {
        m = e.match(pn)
      }
      if (m)
        matchedEntries.push(e)
    }
  }

  var len = matchedEntries.length
  // If there are no matched entries, then nothing matches.
  if (len === 0)
    return

  // if this is the last remaining pattern bit, then no need for
  // an additional stat *unless* the user has specified mark or
  // stat explicitly.  We know they exist, since readdir returned
  // them.

  if (remain.length === 1 && !this.mark && !this.stat) {
    if (!this.matches[index])
      this.matches[index] = Object.create(null)

    for (var i = 0; i < len; i ++) {
      var e = matchedEntries[i]
      if (prefix) {
        if (prefix.slice(-1) !== '/')
          e = prefix + '/' + e
        else
          e = prefix + e
      }

      if (e.charAt(0) === '/' && !this.nomount) {
        e = path.join(this.root, e)
      }
      this._emitMatch(index, e)
    }
    // This was the last one, and no stats were needed
    return
  }

  // now test all matched entries as stand-ins for that part
  // of the pattern.
  remain.shift()
  for (var i = 0; i < len; i ++) {
    var e = matchedEntries[i]
    var newPattern
    if (prefix)
      newPattern = [prefix, e]
    else
      newPattern = [e]
    this._process(newPattern.concat(remain), index, inGlobStar)
  }
}


GlobSync.prototype._emitMatch = function (index, e) {
  if (isIgnored(this, e))
    return

  var abs = this._makeAbs(e)

  if (this.mark)
    e = this._mark(e)

  if (this.absolute) {
    e = abs
  }

  if (this.matches[index][e])
    return

  if (this.nodir) {
    var c = this.cache[abs]
    if (c === 'DIR' || Array.isArray(c))
      return
  }

  this.matches[index][e] = true

  if (this.stat)
    this._stat(e)
}


GlobSync.prototype._readdirInGlobStar = function (abs) {
  // follow all symlinked directories forever
  // just proceed as if this is a non-globstar situation
  if (this.follow)
    return this._readdir(abs, false)

  var entries
  var lstat
  var stat
  try {
    lstat = this.fs.lstatSync(abs)
  } catch (er) {
    if (er.code === 'ENOENT') {
      // lstat failed, doesn't exist
      return null
    }
  }

  var isSym = lstat && lstat.isSymbolicLink()
  this.symlinks[abs] = isSym

  // If it's not a symlink or a dir, then it's definitely a regular file.
  // don't bother doing a readdir in that case.
  if (!isSym && lstat && !lstat.isDirectory())
    this.cache[abs] = 'FILE'
  else
    entries = this._readdir(abs, false)

  return entries
}

GlobSync.prototype._readdir = function (abs, inGlobStar) {
  var entries

  if (inGlobStar && !ownProp(this.symlinks, abs))
    return this._readdirInGlobStar(abs)

  if (ownProp(this.cache, abs)) {
    var c = this.cache[abs]
    if (!c || c === 'FILE')
      return null

    if (Array.isArray(c))
      return c
  }

  try {
    return this._readdirEntries(abs, this.fs.readdirSync(abs))
  } catch (er) {
    this._readdirError(abs, er)
    return null
  }
}

GlobSync.prototype._readdirEntries = function (abs, entries) {
  // if we haven't asked to stat everything, then just
  // assume that everything in there exists, so we can avoid
  // having to stat it a second time.
  if (!this.mark && !this.stat) {
    for (var i = 0; i < entries.length; i ++) {
      var e = entries[i]
      if (abs === '/')
        e = abs + e
      else
        e = abs + '/' + e
      this.cache[e] = true
    }
  }

  this.cache[abs] = entries

  // mark and cache dir-ness
  return entries
}

GlobSync.prototype._readdirError = function (f, er) {
  // handle errors, and cache the information
  switch (er.code) {
    case 'ENOTSUP': // https://github.com/isaacs/node-glob/issues/205
    case 'ENOTDIR': // totally normal. means it *does* exist.
      var abs = this._makeAbs(f)
      this.cache[abs] = 'FILE'
      if (abs === this.cwdAbs) {
        var error = new Error(er.code + ' invalid cwd ' + this.cwd)
        error.path = this.cwd
        error.code = er.code
        throw error
      }
      break

    case 'ENOENT': // not terribly unusual
    case 'ELOOP':
    case 'ENAMETOOLONG':
    case 'UNKNOWN':
      this.cache[this._makeAbs(f)] = false
      break

    default: // some unusual error.  Treat as failure.
      this.cache[this._makeAbs(f)] = false
      if (this.strict)
        throw er
      if (!this.silent)
        console.error('glob error', er)
      break
  }
}

GlobSync.prototype._processGlobStar = function (prefix, read, abs, remain, index, inGlobStar) {

  var entries = this._readdir(abs, inGlobStar)

  // no entries means not a dir, so it can never have matches
  // foo.txt/** doesn't match foo.txt
  if (!entries)
    return

  // test without the globstar, and with every child both below
  // and replacing the globstar.
  var remainWithoutGlobStar = remain.slice(1)
  var gspref = prefix ? [ prefix ] : []
  var noGlobStar = gspref.concat(remainWithoutGlobStar)

  // the noGlobStar pattern exits the inGlobStar state
  this._process(noGlobStar, index, false)

  var len = entries.length
  var isSym = this.symlinks[abs]

  // If it's a symlink, and we're in a globstar, then stop
  if (isSym && inGlobStar)
    return

  for (var i = 0; i < len; i++) {
    var e = entries[i]
    if (e.charAt(0) === '.' && !this.dot)
      continue

    // these two cases enter the inGlobStar state
    var instead = gspref.concat(entries[i], remainWithoutGlobStar)
    this._process(instead, index, true)

    var below = gspref.concat(entries[i], remain)
    this._process(below, index, true)
  }
}

GlobSync.prototype._processSimple = function (prefix, index) {
  // XXX review this.  Shouldn't it be doing the mounting etc
  // before doing stat?  kinda weird?
  var exists = this._stat(prefix)

  if (!this.matches[index])
    this.matches[index] = Object.create(null)

  // If it doesn't exist, then just mark the lack of results
  if (!exists)
    return

  if (prefix && isAbsolute(prefix) && !this.nomount) {
    var trail = /[\/\\]$/.test(prefix)
    if (prefix.charAt(0) === '/') {
      prefix = path.join(this.root, prefix)
    } else {
      prefix = path.resolve(this.root, prefix)
      if (trail)
        prefix += '/'
    }
  }

  if (process.platform === 'win32')
    prefix = prefix.replace(/\\/g, '/')

  // Mark this as a match
  this._emitMatch(index, prefix)
}

// Returns either 'DIR', 'FILE', or false
GlobSync.prototype._stat = function (f) {
  var abs = this._makeAbs(f)
  var needDir = f.slice(-1) === '/'

  if (f.length > this.maxLength)
    return false

  if (!this.stat && ownProp(this.cache, abs)) {
    var c = this.cache[abs]

    if (Array.isArray(c))
      c = 'DIR'

    // It exists, but maybe not how we need it
    if (!needDir || c === 'DIR')
      return c

    if (needDir && c === 'FILE')
      return false

    // otherwise we have to stat, because maybe c=true
    // if we know it exists, but not what it is.
  }

  var exists
  var stat = this.statCache[abs]
  if (!stat) {
    var lstat
    try {
      lstat = this.fs.lstatSync(abs)
    } catch (er) {
      if (er && (er.code === 'ENOENT' || er.code === 'ENOTDIR')) {
        this.statCache[abs] = false
        return false
      }
    }

    if (lstat && lstat.isSymbolicLink()) {
      try {
        stat = this.fs.statSync(abs)
      } catch (er) {
        stat = lstat
      }
    } else {
      stat = lstat
    }
  }

  this.statCache[abs] = stat

  var c = true
  if (stat)
    c = stat.isDirectory() ? 'DIR' : 'FILE'

  this.cache[abs] = this.cache[abs] || c

  if (needDir && c === 'FILE')
    return false

  return c
}

GlobSync.prototype._mark = function (p) {
  return common.mark(this, p)
}

GlobSync.prototype._makeAbs = function (f) {
  return common.makeAbs(this, f)
}


/***/ }),
/* 22 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

exports.setopts = setopts
exports.ownProp = ownProp
exports.makeAbs = makeAbs
exports.finish = finish
exports.mark = mark
exports.isIgnored = isIgnored
exports.childrenIgnored = childrenIgnored

function ownProp (obj, field) {
  return Object.prototype.hasOwnProperty.call(obj, field)
}

var fs = __webpack_require__(3)
var path = __webpack_require__(5)
var minimatch = __webpack_require__(12)
var isAbsolute = __webpack_require__(20)
var Minimatch = minimatch.Minimatch

function alphasort (a, b) {
  return a.localeCompare(b, 'en')
}

function setupIgnores (self, options) {
  self.ignore = options.ignore || []

  if (!Array.isArray(self.ignore))
    self.ignore = [self.ignore]

  if (self.ignore.length) {
    self.ignore = self.ignore.map(ignoreMap)
  }
}

// ignore patterns are always in dot:true mode.
function ignoreMap (pattern) {
  var gmatcher = null
  if (pattern.slice(-3) === '/**') {
    var gpattern = pattern.replace(/(\/\*\*)+$/, '')
    gmatcher = new Minimatch(gpattern, { dot: true })
  }

  return {
    matcher: new Minimatch(pattern, { dot: true }),
    gmatcher: gmatcher
  }
}

function setopts (self, pattern, options) {
  if (!options)
    options = {}

  // base-matching: just use globstar for that.
  if (options.matchBase && -1 === pattern.indexOf("/")) {
    if (options.noglobstar) {
      throw new Error("base matching requires globstar")
    }
    pattern = "**/" + pattern
  }

  self.silent = !!options.silent
  self.pattern = pattern
  self.strict = options.strict !== false
  self.realpath = !!options.realpath
  self.realpathCache = options.realpathCache || Object.create(null)
  self.follow = !!options.follow
  self.dot = !!options.dot
  self.mark = !!options.mark
  self.nodir = !!options.nodir
  if (self.nodir)
    self.mark = true
  self.sync = !!options.sync
  self.nounique = !!options.nounique
  self.nonull = !!options.nonull
  self.nosort = !!options.nosort
  self.nocase = !!options.nocase
  self.stat = !!options.stat
  self.noprocess = !!options.noprocess
  self.absolute = !!options.absolute
  self.fs = options.fs || fs

  self.maxLength = options.maxLength || Infinity
  self.cache = options.cache || Object.create(null)
  self.statCache = options.statCache || Object.create(null)
  self.symlinks = options.symlinks || Object.create(null)

  setupIgnores(self, options)

  self.changedCwd = false
  var cwd = process.cwd()
  if (!ownProp(options, "cwd"))
    self.cwd = cwd
  else {
    self.cwd = path.resolve(options.cwd)
    self.changedCwd = self.cwd !== cwd
  }

  self.root = options.root || path.resolve(self.cwd, "/")
  self.root = path.resolve(self.root)
  if (process.platform === "win32")
    self.root = self.root.replace(/\\/g, "/")

  // TODO: is an absolute `cwd` supposed to be resolved against `root`?
  // e.g. { cwd: '/test', root: __dirname } === path.join(__dirname, '/test')
  self.cwdAbs = isAbsolute(self.cwd) ? self.cwd : makeAbs(self, self.cwd)
  if (process.platform === "win32")
    self.cwdAbs = self.cwdAbs.replace(/\\/g, "/")
  self.nomount = !!options.nomount

  // disable comments and negation in Minimatch.
  // Note that they are not supported in Glob itself anyway.
  options.nonegate = true
  options.nocomment = true
  // always treat \ in patterns as escapes, not path separators
  options.allowWindowsEscape = false

  self.minimatch = new Minimatch(pattern, options)
  self.options = self.minimatch.options
}

function finish (self) {
  var nou = self.nounique
  var all = nou ? [] : Object.create(null)

  for (var i = 0, l = self.matches.length; i < l; i ++) {
    var matches = self.matches[i]
    if (!matches || Object.keys(matches).length === 0) {
      if (self.nonull) {
        // do like the shell, and spit out the literal glob
        var literal = self.minimatch.globSet[i]
        if (nou)
          all.push(literal)
        else
          all[literal] = true
      }
    } else {
      // had matches
      var m = Object.keys(matches)
      if (nou)
        all.push.apply(all, m)
      else
        m.forEach(function (m) {
          all[m] = true
        })
    }
  }

  if (!nou)
    all = Object.keys(all)

  if (!self.nosort)
    all = all.sort(alphasort)

  // at *some* point we statted all of these
  if (self.mark) {
    for (var i = 0; i < all.length; i++) {
      all[i] = self._mark(all[i])
    }
    if (self.nodir) {
      all = all.filter(function (e) {
        var notDir = !(/\/$/.test(e))
        var c = self.cache[e] || self.cache[makeAbs(self, e)]
        if (notDir && c)
          notDir = c !== 'DIR' && !Array.isArray(c)
        return notDir
      })
    }
  }

  if (self.ignore.length)
    all = all.filter(function(m) {
      return !isIgnored(self, m)
    })

  self.found = all
}

function mark (self, p) {
  var abs = makeAbs(self, p)
  var c = self.cache[abs]
  var m = p
  if (c) {
    var isDir = c === 'DIR' || Array.isArray(c)
    var slash = p.slice(-1) === '/'

    if (isDir && !slash)
      m += '/'
    else if (!isDir && slash)
      m = m.slice(0, -1)

    if (m !== p) {
      var mabs = makeAbs(self, m)
      self.statCache[mabs] = self.statCache[abs]
      self.cache[mabs] = self.cache[abs]
    }
  }

  return m
}

// lotta situps...
function makeAbs (self, f) {
  var abs = f
  if (f.charAt(0) === '/') {
    abs = path.join(self.root, f)
  } else if (isAbsolute(f) || f === '') {
    abs = f
  } else if (self.changedCwd) {
    abs = path.resolve(self.cwd, f)
  } else {
    abs = path.resolve(f)
  }

  if (process.platform === 'win32')
    abs = abs.replace(/\\/g, '/')

  return abs
}


// Return true, if pattern ends with globstar '**', for the accompanying parent directory.
// Ex:- If node_modules/** is the pattern, add 'node_modules' to ignore list along with it's contents
function isIgnored (self, path) {
  if (!self.ignore.length)
    return false

  return self.ignore.some(function(item) {
    return item.matcher.match(path) || !!(item.gmatcher && item.gmatcher.match(path))
  })
}

function childrenIgnored (self, path) {
  if (!self.ignore.length)
    return false

  return self.ignore.some(function(item) {
    return !!(item.gmatcher && item.gmatcher.match(path))
  })
}


/***/ }),
/* 23 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wrappy = __webpack_require__(24)
var reqs = Object.create(null)
var once = __webpack_require__(25)

module.exports = wrappy(inflight)

function inflight (key, cb) {
  if (reqs[key]) {
    reqs[key].push(cb)
    return null
  } else {
    reqs[key] = [cb]
    return makeres(key)
  }
}

function makeres (key) {
  return once(function RES () {
    var cbs = reqs[key]
    var len = cbs.length
    var args = slice(arguments)

    // XXX It's somewhat ambiguous whether a new callback added in this
    // pass should be queued for later execution if something in the
    // list of callbacks throws, or if it should just be discarded.
    // However, it's such an edge case that it hardly matters, and either
    // choice is likely as surprising as the other.
    // As it happens, we do go ahead and schedule it for later execution.
    try {
      for (var i = 0; i < len; i++) {
        cbs[i].apply(null, args)
      }
    } finally {
      if (cbs.length > len) {
        // added more in the interim.
        // de-zalgo, just in case, but don't call again.
        cbs.splice(0, len)
        process.nextTick(function () {
          RES.apply(null, args)
        })
      } else {
        delete reqs[key]
      }
    }
  })
}

function slice (args) {
  var length = args.length
  var array = []

  for (var i = 0; i < length; i++) array[i] = args[i]
  return array
}


/***/ }),
/* 24 */
/***/ ((module) => {

// Returns a wrapper function that returns a wrapped callback
// The wrapper function should do some stuff, and return a
// presumably different callback function.
// This makes sure that own properties are retained, so that
// decorations and such are not lost along the way.
module.exports = wrappy
function wrappy (fn, cb) {
  if (fn && cb) return wrappy(fn)(cb)

  if (typeof fn !== 'function')
    throw new TypeError('need wrapper function')

  Object.keys(fn).forEach(function (k) {
    wrapper[k] = fn[k]
  })

  return wrapper

  function wrapper() {
    var args = new Array(arguments.length)
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i]
    }
    var ret = fn.apply(this, args)
    var cb = args[args.length-1]
    if (typeof ret === 'function' && ret !== cb) {
      Object.keys(cb).forEach(function (k) {
        ret[k] = cb[k]
      })
    }
    return ret
  }
}


/***/ }),
/* 25 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wrappy = __webpack_require__(24)
module.exports = wrappy(once)
module.exports.strict = wrappy(onceStrict)

once.proto = once(function () {
  Object.defineProperty(Function.prototype, 'once', {
    value: function () {
      return once(this)
    },
    configurable: true
  })

  Object.defineProperty(Function.prototype, 'onceStrict', {
    value: function () {
      return onceStrict(this)
    },
    configurable: true
  })
})

function once (fn) {
  var f = function () {
    if (f.called) return f.value
    f.called = true
    return f.value = fn.apply(this, arguments)
  }
  f.called = false
  return f
}

function onceStrict (fn) {
  var f = function () {
    if (f.called)
      throw new Error(f.onceError)
    f.called = true
    return f.value = fn.apply(this, arguments)
  }
  var name = fn.name || 'Function wrapped with `once`'
  f.onceError = name + " shouldn't be called more than once"
  f.called = false
  return f
}


/***/ }),
/* 26 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClassTransformer: () => (/* reexport safe */ _ClassTransformer__WEBPACK_IMPORTED_MODULE_0__.ClassTransformer),
/* harmony export */   Exclude: () => (/* reexport safe */ _decorators__WEBPACK_IMPORTED_MODULE_1__.Exclude),
/* harmony export */   Expose: () => (/* reexport safe */ _decorators__WEBPACK_IMPORTED_MODULE_1__.Expose),
/* harmony export */   Transform: () => (/* reexport safe */ _decorators__WEBPACK_IMPORTED_MODULE_1__.Transform),
/* harmony export */   TransformInstanceToInstance: () => (/* reexport safe */ _decorators__WEBPACK_IMPORTED_MODULE_1__.TransformInstanceToInstance),
/* harmony export */   TransformInstanceToPlain: () => (/* reexport safe */ _decorators__WEBPACK_IMPORTED_MODULE_1__.TransformInstanceToPlain),
/* harmony export */   TransformPlainToInstance: () => (/* reexport safe */ _decorators__WEBPACK_IMPORTED_MODULE_1__.TransformPlainToInstance),
/* harmony export */   TransformationType: () => (/* reexport safe */ _enums__WEBPACK_IMPORTED_MODULE_2__.TransformationType),
/* harmony export */   Type: () => (/* reexport safe */ _decorators__WEBPACK_IMPORTED_MODULE_1__.Type),
/* harmony export */   classToClassFromExist: () => (/* binding */ classToClassFromExist),
/* harmony export */   classToPlain: () => (/* binding */ classToPlain),
/* harmony export */   classToPlainFromExist: () => (/* binding */ classToPlainFromExist),
/* harmony export */   deserialize: () => (/* binding */ deserialize),
/* harmony export */   deserializeArray: () => (/* binding */ deserializeArray),
/* harmony export */   instanceToInstance: () => (/* binding */ instanceToInstance),
/* harmony export */   instanceToPlain: () => (/* binding */ instanceToPlain),
/* harmony export */   plainToClass: () => (/* binding */ plainToClass),
/* harmony export */   plainToClassFromExist: () => (/* binding */ plainToClassFromExist),
/* harmony export */   plainToInstance: () => (/* binding */ plainToInstance),
/* harmony export */   serialize: () => (/* binding */ serialize)
/* harmony export */ });
/* harmony import */ var _ClassTransformer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43);





var classTransformer = new _ClassTransformer__WEBPACK_IMPORTED_MODULE_0__.ClassTransformer();
function classToPlain(object, options) {
    return classTransformer.instanceToPlain(object, options);
}
function instanceToPlain(object, options) {
    return classTransformer.instanceToPlain(object, options);
}
function classToPlainFromExist(object, plainObject, options) {
    return classTransformer.classToPlainFromExist(object, plainObject, options);
}
function plainToClass(cls, plain, options) {
    return classTransformer.plainToInstance(cls, plain, options);
}
function plainToInstance(cls, plain, options) {
    return classTransformer.plainToInstance(cls, plain, options);
}
function plainToClassFromExist(clsObject, plain, options) {
    return classTransformer.plainToClassFromExist(clsObject, plain, options);
}
function instanceToInstance(object, options) {
    return classTransformer.instanceToInstance(object, options);
}
function classToClassFromExist(object, fromObject, options) {
    return classTransformer.classToClassFromExist(object, fromObject, options);
}
function serialize(object, options) {
    return classTransformer.serialize(object, options);
}
/**
 * Deserializes given JSON string to a object of the given class.
 *
 * @deprecated This function is being removed. Please use the following instead:
 * ```
 * instanceToClass(cls, JSON.parse(json), options)
 * ```
 */
function deserialize(cls, json, options) {
    return classTransformer.deserialize(cls, json, options);
}
/**
 * Deserializes given JSON string to an array of objects of the given class.
 *
 * @deprecated This function is being removed. Please use the following instead:
 * ```
 * JSON.parse(json).map(value => instanceToClass(cls, value, options))
 * ```
 *
 */
function deserializeArray(cls, json, options) {
    return classTransformer.deserializeArray(cls, json, options);
}
//# sourceMappingURL=index.js.map

/***/ }),
/* 27 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClassTransformer: () => (/* binding */ ClassTransformer)
/* harmony export */ });
/* harmony import */ var _TransformOperationExecutor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29);
/* harmony import */ var _constants_default_options_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};



var ClassTransformer = /** @class */ (function () {
    function ClassTransformer() {
    }
    ClassTransformer.prototype.instanceToPlain = function (object, options) {
        var executor = new _TransformOperationExecutor__WEBPACK_IMPORTED_MODULE_0__.TransformOperationExecutor(_enums__WEBPACK_IMPORTED_MODULE_1__.TransformationType.CLASS_TO_PLAIN, __assign(__assign({}, _constants_default_options_constant__WEBPACK_IMPORTED_MODULE_2__.defaultOptions), options));
        return executor.transform(undefined, object, undefined, undefined, undefined, undefined);
    };
    ClassTransformer.prototype.classToPlainFromExist = function (object, plainObject, options) {
        var executor = new _TransformOperationExecutor__WEBPACK_IMPORTED_MODULE_0__.TransformOperationExecutor(_enums__WEBPACK_IMPORTED_MODULE_1__.TransformationType.CLASS_TO_PLAIN, __assign(__assign({}, _constants_default_options_constant__WEBPACK_IMPORTED_MODULE_2__.defaultOptions), options));
        return executor.transform(plainObject, object, undefined, undefined, undefined, undefined);
    };
    ClassTransformer.prototype.plainToInstance = function (cls, plain, options) {
        var executor = new _TransformOperationExecutor__WEBPACK_IMPORTED_MODULE_0__.TransformOperationExecutor(_enums__WEBPACK_IMPORTED_MODULE_1__.TransformationType.PLAIN_TO_CLASS, __assign(__assign({}, _constants_default_options_constant__WEBPACK_IMPORTED_MODULE_2__.defaultOptions), options));
        return executor.transform(undefined, plain, cls, undefined, undefined, undefined);
    };
    ClassTransformer.prototype.plainToClassFromExist = function (clsObject, plain, options) {
        var executor = new _TransformOperationExecutor__WEBPACK_IMPORTED_MODULE_0__.TransformOperationExecutor(_enums__WEBPACK_IMPORTED_MODULE_1__.TransformationType.PLAIN_TO_CLASS, __assign(__assign({}, _constants_default_options_constant__WEBPACK_IMPORTED_MODULE_2__.defaultOptions), options));
        return executor.transform(clsObject, plain, undefined, undefined, undefined, undefined);
    };
    ClassTransformer.prototype.instanceToInstance = function (object, options) {
        var executor = new _TransformOperationExecutor__WEBPACK_IMPORTED_MODULE_0__.TransformOperationExecutor(_enums__WEBPACK_IMPORTED_MODULE_1__.TransformationType.CLASS_TO_CLASS, __assign(__assign({}, _constants_default_options_constant__WEBPACK_IMPORTED_MODULE_2__.defaultOptions), options));
        return executor.transform(undefined, object, undefined, undefined, undefined, undefined);
    };
    ClassTransformer.prototype.classToClassFromExist = function (object, fromObject, options) {
        var executor = new _TransformOperationExecutor__WEBPACK_IMPORTED_MODULE_0__.TransformOperationExecutor(_enums__WEBPACK_IMPORTED_MODULE_1__.TransformationType.CLASS_TO_CLASS, __assign(__assign({}, _constants_default_options_constant__WEBPACK_IMPORTED_MODULE_2__.defaultOptions), options));
        return executor.transform(fromObject, object, undefined, undefined, undefined, undefined);
    };
    ClassTransformer.prototype.serialize = function (object, options) {
        return JSON.stringify(this.instanceToPlain(object, options));
    };
    /**
     * Deserializes given JSON string to a object of the given class.
     */
    ClassTransformer.prototype.deserialize = function (cls, json, options) {
        var jsonObject = JSON.parse(json);
        return this.plainToInstance(cls, jsonObject, options);
    };
    /**
     * Deserializes given JSON string to an array of objects of the given class.
     */
    ClassTransformer.prototype.deserializeArray = function (cls, json, options) {
        var jsonObject = JSON.parse(json);
        return this.plainToInstance(cls, jsonObject, options);
    };
    return ClassTransformer;
}());

//# sourceMappingURL=ClassTransformer.js.map

/***/ }),
/* 28 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TransformOperationExecutor: () => (/* binding */ TransformOperationExecutor)
/* harmony export */ });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32);
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31);
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};



function instantiateArrayType(arrayType) {
    var array = new arrayType();
    if (!(array instanceof Set) && !('push' in array)) {
        return [];
    }
    return array;
}
var TransformOperationExecutor = /** @class */ (function () {
    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------
    function TransformOperationExecutor(transformationType, options) {
        this.transformationType = transformationType;
        this.options = options;
        // -------------------------------------------------------------------------
        // Private Properties
        // -------------------------------------------------------------------------
        this.recursionStack = new Set();
    }
    // -------------------------------------------------------------------------
    // Public Methods
    // -------------------------------------------------------------------------
    TransformOperationExecutor.prototype.transform = function (source, value, targetType, arrayType, isMap, level) {
        var _this = this;
        if (level === void 0) { level = 0; }
        if (Array.isArray(value) || value instanceof Set) {
            var newValue_1 = arrayType && this.transformationType === _enums__WEBPACK_IMPORTED_MODULE_0__.TransformationType.PLAIN_TO_CLASS
                ? instantiateArrayType(arrayType)
                : [];
            value.forEach(function (subValue, index) {
                var subSource = source ? source[index] : undefined;
                if (!_this.options.enableCircularCheck || !_this.isCircular(subValue)) {
                    var realTargetType = void 0;
                    if (typeof targetType !== 'function' &&
                        targetType &&
                        targetType.options &&
                        targetType.options.discriminator &&
                        targetType.options.discriminator.property &&
                        targetType.options.discriminator.subTypes) {
                        if (_this.transformationType === _enums__WEBPACK_IMPORTED_MODULE_0__.TransformationType.PLAIN_TO_CLASS) {
                            realTargetType = targetType.options.discriminator.subTypes.find(function (subType) {
                                return subType.name === subValue[targetType.options.discriminator.property];
                            });
                            var options = { newObject: newValue_1, object: subValue, property: undefined };
                            var newType = targetType.typeFunction(options);
                            realTargetType === undefined ? (realTargetType = newType) : (realTargetType = realTargetType.value);
                            if (!targetType.options.keepDiscriminatorProperty)
                                delete subValue[targetType.options.discriminator.property];
                        }
                        if (_this.transformationType === _enums__WEBPACK_IMPORTED_MODULE_0__.TransformationType.CLASS_TO_CLASS) {
                            realTargetType = subValue.constructor;
                        }
                        if (_this.transformationType === _enums__WEBPACK_IMPORTED_MODULE_0__.TransformationType.CLASS_TO_PLAIN) {
                            subValue[targetType.options.discriminator.property] = targetType.options.discriminator.subTypes.find(function (subType) { return subType.value === subValue.constructor; }).name;
                        }
                    }
                    else {
                        realTargetType = targetType;
                    }
                    var value_1 = _this.transform(subSource, subValue, realTargetType, undefined, subValue instanceof Map, level + 1);
                    if (newValue_1 instanceof Set) {
                        newValue_1.add(value_1);
                    }
                    else {
                        newValue_1.push(value_1);
                    }
                }
                else if (_this.transformationType === _enums__WEBPACK_IMPORTED_MODULE_0__.TransformationType.CLASS_TO_CLASS) {
                    if (newValue_1 instanceof Set) {
                        newValue_1.add(subValue);
                    }
                    else {
                        newValue_1.push(subValue);
                    }
                }
            });
            return newValue_1;
        }
        else if (targetType === String && !isMap) {
            if (value === null || value === undefined)
                return value;
            return String(value);
        }
        else if (targetType === Number && !isMap) {
            if (value === null || value === undefined)
                return value;
            return Number(value);
        }
        else if (targetType === Boolean && !isMap) {
            if (value === null || value === undefined)
                return value;
            return Boolean(value);
        }
        else if ((targetType === Date || value instanceof Date) && !isMap) {
            if (value instanceof Date) {
                return new Date(value.valueOf());
            }
            if (value === null || value === undefined)
                return value;
            return new Date(value);
        }
        else if (!!(0,_utils__WEBPACK_IMPORTED_MODULE_1__.getGlobal)().Buffer && (targetType === Buffer || value instanceof Buffer) && !isMap) {
            if (value === null || value === undefined)
                return value;
            return Buffer.from(value);
        }
        else if ((0,_utils__WEBPACK_IMPORTED_MODULE_2__.isPromise)(value) && !isMap) {
            return new Promise(function (resolve, reject) {
                value.then(function (data) { return resolve(_this.transform(undefined, data, targetType, undefined, undefined, level + 1)); }, reject);
            });
        }
        else if (!isMap && value !== null && typeof value === 'object' && typeof value.then === 'function') {
            // Note: We should not enter this, as promise has been handled above
            // This option simply returns the Promise preventing a JS error from happening and should be an inaccessible path.
            return value; // skip promise transformation
        }
        else if (typeof value === 'object' && value !== null) {
            // try to guess the type
            if (!targetType && value.constructor !== Object /* && TransformationType === TransformationType.CLASS_TO_PLAIN*/)
                if (!Array.isArray(value) && value.constructor === Array) {
                    // Somebody attempts to convert special Array like object to Array, eg:
                    // const evilObject = { '100000000': '100000000', __proto__: [] };
                    // This could be used to cause Denial-of-service attack so we don't allow it.
                    // See prevent-array-bomb.spec.ts for more details.
                }
                else {
                    // We are good we can use the built-in constructor
                    targetType = value.constructor;
                }
            if (!targetType && source)
                targetType = source.constructor;
            if (this.options.enableCircularCheck) {
                // add transformed type to prevent circular references
                this.recursionStack.add(value);
            }
            var keys = this.getKeys(targetType, value, isMap);
            var newValue = source ? source : {};
            if (!source &&
                (this.transformationType === _enums__WEBPACK_IMPORTED_MODULE_0__.TransformationType.PLAIN_TO_CLASS ||
                    this.transformationType === _enums__WEBPACK_IMPORTED_MODULE_0__.TransformationType.CLASS_TO_CLASS)) {
                if (isMap) {
                    newValue = new Map();
                }
                else if (targetType) {
                    newValue = new targetType();
                }
                else {
                    newValue = {};
                }
            }
            var _loop_1 = function (key) {
                if (key === '__proto__' || key === 'constructor') {
                    return "continue";
                }
                var valueKey = key;
                var newValueKey = key, propertyName = key;
                if (!this_1.options.ignoreDecorators && targetType) {
                    if (this_1.transformationType === _enums__WEBPACK_IMPORTED_MODULE_0__.TransformationType.PLAIN_TO_CLASS) {
                        var exposeMetadata = _storage__WEBPACK_IMPORTED_MODULE_3__.defaultMetadataStorage.findExposeMetadataByCustomName(targetType, key);
                        if (exposeMetadata) {
                            propertyName = exposeMetadata.propertyName;
                            newValueKey = exposeMetadata.propertyName;
                        }
                    }
                    else if (this_1.transformationType === _enums__WEBPACK_IMPORTED_MODULE_0__.TransformationType.CLASS_TO_PLAIN ||
                        this_1.transformationType === _enums__WEBPACK_IMPORTED_MODULE_0__.TransformationType.CLASS_TO_CLASS) {
                        var exposeMetadata = _storage__WEBPACK_IMPORTED_MODULE_3__.defaultMetadataStorage.findExposeMetadata(targetType, key);
                        if (exposeMetadata && exposeMetadata.options && exposeMetadata.options.name) {
                            newValueKey = exposeMetadata.options.name;
                        }
                    }
                }
                // get a subvalue
                var subValue = undefined;
                if (this_1.transformationType === _enums__WEBPACK_IMPORTED_MODULE_0__.TransformationType.PLAIN_TO_CLASS) {
                    /**
                     * This section is added for the following report:
                     * https://github.com/typestack/class-transformer/issues/596
                     *
                     * We should not call functions or constructors when transforming to class.
                     */
                    subValue = value[valueKey];
                }
                else {
                    if (value instanceof Map) {
                        subValue = value.get(valueKey);
                    }
                    else if (value[valueKey] instanceof Function) {
                        subValue = value[valueKey]();
                    }
                    else {
                        subValue = value[valueKey];
                    }
                }
                // determine a type
                var type = undefined, isSubValueMap = subValue instanceof Map;
                if (targetType && isMap) {
                    type = targetType;
                }
                else if (targetType) {
                    var metadata_1 = _storage__WEBPACK_IMPORTED_MODULE_3__.defaultMetadataStorage.findTypeMetadata(targetType, propertyName);
                    if (metadata_1) {
                        var options = { newObject: newValue, object: value, property: propertyName };
                        var newType = metadata_1.typeFunction ? metadata_1.typeFunction(options) : metadata_1.reflectedType;
                        if (metadata_1.options &&
                            metadata_1.options.discriminator &&
                            metadata_1.options.discriminator.property &&
                            metadata_1.options.discriminator.subTypes) {
                            if (!(value[valueKey] instanceof Array)) {
                                if (this_1.transformationType === _enums__WEBPACK_IMPORTED_MODULE_0__.TransformationType.PLAIN_TO_CLASS) {
                                    type = metadata_1.options.discriminator.subTypes.find(function (subType) {
                                        if (subValue && subValue instanceof Object && metadata_1.options.discriminator.property in subValue) {
                                            return subType.name === subValue[metadata_1.options.discriminator.property];
                                        }
                                    });
                                    type === undefined ? (type = newType) : (type = type.value);
                                    if (!metadata_1.options.keepDiscriminatorProperty) {
                                        if (subValue && subValue instanceof Object && metadata_1.options.discriminator.property in subValue) {
                                            delete subValue[metadata_1.options.discriminator.property];
                                        }
                                    }
                                }
                                if (this_1.transformationType === _enums__WEBPACK_IMPORTED_MODULE_0__.TransformationType.CLASS_TO_CLASS) {
                                    type = subValue.constructor;
                                }
                                if (this_1.transformationType === _enums__WEBPACK_IMPORTED_MODULE_0__.TransformationType.CLASS_TO_PLAIN) {
                                    if (subValue) {
                                        subValue[metadata_1.options.discriminator.property] = metadata_1.options.discriminator.subTypes.find(function (subType) { return subType.value === subValue.constructor; }).name;
                                    }
                                }
                            }
                            else {
                                type = metadata_1;
                            }
                        }
                        else {
                            type = newType;
                        }
                        isSubValueMap = isSubValueMap || metadata_1.reflectedType === Map;
                    }
                    else if (this_1.options.targetMaps) {
                        // try to find a type in target maps
                        this_1.options.targetMaps
                            .filter(function (map) { return map.target === targetType && !!map.properties[propertyName]; })
                            .forEach(function (map) { return (type = map.properties[propertyName]); });
                    }
                    else if (this_1.options.enableImplicitConversion &&
                        this_1.transformationType === _enums__WEBPACK_IMPORTED_MODULE_0__.TransformationType.PLAIN_TO_CLASS) {
                        // if we have no registererd type via the @Type() decorator then we check if we have any
                        // type declarations in reflect-metadata (type declaration is emited only if some decorator is added to the property.)
                        var reflectedType = Reflect.getMetadata('design:type', targetType.prototype, propertyName);
                        if (reflectedType) {
                            type = reflectedType;
                        }
                    }
                }
                // if value is an array try to get its custom array type
                var arrayType_1 = Array.isArray(value[valueKey])
                    ? this_1.getReflectedType(targetType, propertyName)
                    : undefined;
                // const subValueKey = TransformationType === TransformationType.PLAIN_TO_CLASS && newKeyName ? newKeyName : key;
                var subSource = source ? source[valueKey] : undefined;
                // if its deserialization then type if required
                // if we uncomment this types like string[] will not work
                // if (this.transformationType === TransformationType.PLAIN_TO_CLASS && !type && subValue instanceof Object && !(subValue instanceof Date))
                //     throw new Error(`Cannot determine type for ${(targetType as any).name }.${propertyName}, did you forget to specify a @Type?`);
                // if newValue is a source object that has method that match newKeyName then skip it
                if (newValue.constructor.prototype) {
                    var descriptor = Object.getOwnPropertyDescriptor(newValue.constructor.prototype, newValueKey);
                    if ((this_1.transformationType === _enums__WEBPACK_IMPORTED_MODULE_0__.TransformationType.PLAIN_TO_CLASS ||
                        this_1.transformationType === _enums__WEBPACK_IMPORTED_MODULE_0__.TransformationType.CLASS_TO_CLASS) &&
                        // eslint-disable-next-line @typescript-eslint/unbound-method
                        ((descriptor && !descriptor.set) || newValue[newValueKey] instanceof Function))
                        return "continue";
                }
                if (!this_1.options.enableCircularCheck || !this_1.isCircular(subValue)) {
                    var transformKey = this_1.transformationType === _enums__WEBPACK_IMPORTED_MODULE_0__.TransformationType.PLAIN_TO_CLASS ? newValueKey : key;
                    var finalValue = void 0;
                    if (this_1.transformationType === _enums__WEBPACK_IMPORTED_MODULE_0__.TransformationType.CLASS_TO_PLAIN) {
                        // Get original value
                        finalValue = value[transformKey];
                        // Apply custom transformation
                        finalValue = this_1.applyCustomTransformations(finalValue, targetType, transformKey, value, this_1.transformationType);
                        // If nothing change, it means no custom transformation was applied, so use the subValue.
                        finalValue = value[transformKey] === finalValue ? subValue : finalValue;
                        // Apply the default transformation
                        finalValue = this_1.transform(subSource, finalValue, type, arrayType_1, isSubValueMap, level + 1);
                    }
                    else {
                        if (subValue === undefined && this_1.options.exposeDefaultValues) {
                            // Set default value if nothing provided
                            finalValue = newValue[newValueKey];
                        }
                        else {
                            finalValue = this_1.transform(subSource, subValue, type, arrayType_1, isSubValueMap, level + 1);
                            finalValue = this_1.applyCustomTransformations(finalValue, targetType, transformKey, value, this_1.transformationType);
                        }
                    }
                    if (finalValue !== undefined || this_1.options.exposeUnsetFields) {
                        if (newValue instanceof Map) {
                            newValue.set(newValueKey, finalValue);
                        }
                        else {
                            newValue[newValueKey] = finalValue;
                        }
                    }
                }
                else if (this_1.transformationType === _enums__WEBPACK_IMPORTED_MODULE_0__.TransformationType.CLASS_TO_CLASS) {
                    var finalValue = subValue;
                    finalValue = this_1.applyCustomTransformations(finalValue, targetType, key, value, this_1.transformationType);
                    if (finalValue !== undefined || this_1.options.exposeUnsetFields) {
                        if (newValue instanceof Map) {
                            newValue.set(newValueKey, finalValue);
                        }
                        else {
                            newValue[newValueKey] = finalValue;
                        }
                    }
                }
            };
            var this_1 = this;
            // traverse over keys
            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                var key = keys_1[_i];
                _loop_1(key);
            }
            if (this.options.enableCircularCheck) {
                this.recursionStack.delete(value);
            }
            return newValue;
        }
        else {
            return value;
        }
    };
    TransformOperationExecutor.prototype.applyCustomTransformations = function (value, target, key, obj, transformationType) {
        var _this = this;
        var metadatas = _storage__WEBPACK_IMPORTED_MODULE_3__.defaultMetadataStorage.findTransformMetadatas(target, key, this.transformationType);
        // apply versioning options
        if (this.options.version !== undefined) {
            metadatas = metadatas.filter(function (metadata) {
                if (!metadata.options)
                    return true;
                return _this.checkVersion(metadata.options.since, metadata.options.until);
            });
        }
        // apply grouping options
        if (this.options.groups && this.options.groups.length) {
            metadatas = metadatas.filter(function (metadata) {
                if (!metadata.options)
                    return true;
                return _this.checkGroups(metadata.options.groups);
            });
        }
        else {
            metadatas = metadatas.filter(function (metadata) {
                return !metadata.options || !metadata.options.groups || !metadata.options.groups.length;
            });
        }
        metadatas.forEach(function (metadata) {
            value = metadata.transformFn({ value: value, key: key, obj: obj, type: transformationType, options: _this.options });
        });
        return value;
    };
    // preventing circular references
    TransformOperationExecutor.prototype.isCircular = function (object) {
        return this.recursionStack.has(object);
    };
    TransformOperationExecutor.prototype.getReflectedType = function (target, propertyName) {
        if (!target)
            return undefined;
        var meta = _storage__WEBPACK_IMPORTED_MODULE_3__.defaultMetadataStorage.findTypeMetadata(target, propertyName);
        return meta ? meta.reflectedType : undefined;
    };
    TransformOperationExecutor.prototype.getKeys = function (target, object, isMap) {
        var _this = this;
        // determine exclusion strategy
        var strategy = _storage__WEBPACK_IMPORTED_MODULE_3__.defaultMetadataStorage.getStrategy(target);
        if (strategy === 'none')
            strategy = this.options.strategy || 'exposeAll'; // exposeAll is default strategy
        // get all keys that need to expose
        var keys = [];
        if (strategy === 'exposeAll' || isMap) {
            if (object instanceof Map) {
                keys = Array.from(object.keys());
            }
            else {
                keys = Object.keys(object);
            }
        }
        if (isMap) {
            // expose & exclude do not apply for map keys only to fields
            return keys;
        }
        /**
         * If decorators are ignored but we don't want the extraneous values, then we use the
         * metadata to decide which property is needed, but doesn't apply the decorator effect.
         */
        if (this.options.ignoreDecorators && this.options.excludeExtraneousValues && target) {
            var exposedProperties = _storage__WEBPACK_IMPORTED_MODULE_3__.defaultMetadataStorage.getExposedProperties(target, this.transformationType);
            var excludedProperties = _storage__WEBPACK_IMPORTED_MODULE_3__.defaultMetadataStorage.getExcludedProperties(target, this.transformationType);
            keys = __spreadArray(__spreadArray([], exposedProperties, true), excludedProperties, true);
        }
        if (!this.options.ignoreDecorators && target) {
            // add all exposed to list of keys
            var exposedProperties = _storage__WEBPACK_IMPORTED_MODULE_3__.defaultMetadataStorage.getExposedProperties(target, this.transformationType);
            if (this.transformationType === _enums__WEBPACK_IMPORTED_MODULE_0__.TransformationType.PLAIN_TO_CLASS) {
                exposedProperties = exposedProperties.map(function (key) {
                    var exposeMetadata = _storage__WEBPACK_IMPORTED_MODULE_3__.defaultMetadataStorage.findExposeMetadata(target, key);
                    if (exposeMetadata && exposeMetadata.options && exposeMetadata.options.name) {
                        return exposeMetadata.options.name;
                    }
                    return key;
                });
            }
            if (this.options.excludeExtraneousValues) {
                keys = exposedProperties;
            }
            else {
                keys = keys.concat(exposedProperties);
            }
            // exclude excluded properties
            var excludedProperties_1 = _storage__WEBPACK_IMPORTED_MODULE_3__.defaultMetadataStorage.getExcludedProperties(target, this.transformationType);
            if (excludedProperties_1.length > 0) {
                keys = keys.filter(function (key) {
                    return !excludedProperties_1.includes(key);
                });
            }
            // apply versioning options
            if (this.options.version !== undefined) {
                keys = keys.filter(function (key) {
                    var exposeMetadata = _storage__WEBPACK_IMPORTED_MODULE_3__.defaultMetadataStorage.findExposeMetadata(target, key);
                    if (!exposeMetadata || !exposeMetadata.options)
                        return true;
                    return _this.checkVersion(exposeMetadata.options.since, exposeMetadata.options.until);
                });
            }
            // apply grouping options
            if (this.options.groups && this.options.groups.length) {
                keys = keys.filter(function (key) {
                    var exposeMetadata = _storage__WEBPACK_IMPORTED_MODULE_3__.defaultMetadataStorage.findExposeMetadata(target, key);
                    if (!exposeMetadata || !exposeMetadata.options)
                        return true;
                    return _this.checkGroups(exposeMetadata.options.groups);
                });
            }
            else {
                keys = keys.filter(function (key) {
                    var exposeMetadata = _storage__WEBPACK_IMPORTED_MODULE_3__.defaultMetadataStorage.findExposeMetadata(target, key);
                    return (!exposeMetadata ||
                        !exposeMetadata.options ||
                        !exposeMetadata.options.groups ||
                        !exposeMetadata.options.groups.length);
                });
            }
        }
        // exclude prefixed properties
        if (this.options.excludePrefixes && this.options.excludePrefixes.length) {
            keys = keys.filter(function (key) {
                return _this.options.excludePrefixes.every(function (prefix) {
                    return key.substr(0, prefix.length) !== prefix;
                });
            });
        }
        // make sure we have unique keys
        keys = keys.filter(function (key, index, self) {
            return self.indexOf(key) === index;
        });
        return keys;
    };
    TransformOperationExecutor.prototype.checkVersion = function (since, until) {
        var decision = true;
        if (decision && since)
            decision = this.options.version >= since;
        if (decision && until)
            decision = this.options.version < until;
        return decision;
    };
    TransformOperationExecutor.prototype.checkGroups = function (groups) {
        if (!groups)
            return true;
        return this.options.groups.some(function (optionGroup) { return groups.includes(optionGroup); });
    };
    return TransformOperationExecutor;
}());

//# sourceMappingURL=TransformOperationExecutor.js.map

/***/ }),
/* 29 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TransformationType: () => (/* binding */ TransformationType)
/* harmony export */ });
var TransformationType;
(function (TransformationType) {
    TransformationType[TransformationType["PLAIN_TO_CLASS"] = 0] = "PLAIN_TO_CLASS";
    TransformationType[TransformationType["CLASS_TO_PLAIN"] = 1] = "CLASS_TO_PLAIN";
    TransformationType[TransformationType["CLASS_TO_CLASS"] = 2] = "CLASS_TO_CLASS";
})(TransformationType || (TransformationType = {}));
//# sourceMappingURL=transformation-type.enum.js.map

/***/ }),
/* 30 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getGlobal: () => (/* binding */ getGlobal)
/* harmony export */ });
/**
 * This function returns the global object across Node and browsers.
 *
 * Note: `globalThis` is the standardized approach however it has been added to
 * Node.js in version 12. We need to include this snippet until Node 12 EOL.
 */
function getGlobal() {
    if (typeof globalThis !== 'undefined') {
        return globalThis;
    }
    if (typeof global !== 'undefined') {
        return global;
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore: Cannot find name 'window'.
    if (typeof window !== 'undefined') {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore: Cannot find name 'window'.
        return window;
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore: Cannot find name 'self'.
    if (typeof self !== 'undefined') {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore: Cannot find name 'self'.
        return self;
    }
}
//# sourceMappingURL=get-global.util.js.map

/***/ }),
/* 31 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isPromise: () => (/* binding */ isPromise)
/* harmony export */ });
function isPromise(p) {
    return p !== null && typeof p === 'object' && typeof p.then === 'function';
}
//# sourceMappingURL=is-promise.util.js.map

/***/ }),
/* 32 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultMetadataStorage: () => (/* binding */ defaultMetadataStorage)
/* harmony export */ });
/* harmony import */ var _MetadataStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);

/**
 * Default metadata storage is used as singleton and can be used to storage all metadatas.
 */
var defaultMetadataStorage = new _MetadataStorage__WEBPACK_IMPORTED_MODULE_0__.MetadataStorage();
//# sourceMappingURL=storage.js.map

/***/ }),
/* 33 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MetadataStorage: () => (/* binding */ MetadataStorage)
/* harmony export */ });
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);

/**
 * Storage all library metadata.
 */
var MetadataStorage = /** @class */ (function () {
    function MetadataStorage() {
        // -------------------------------------------------------------------------
        // Properties
        // -------------------------------------------------------------------------
        this._typeMetadatas = new Map();
        this._transformMetadatas = new Map();
        this._exposeMetadatas = new Map();
        this._excludeMetadatas = new Map();
        this._ancestorsMap = new Map();
    }
    // -------------------------------------------------------------------------
    // Adder Methods
    // -------------------------------------------------------------------------
    MetadataStorage.prototype.addTypeMetadata = function (metadata) {
        if (!this._typeMetadatas.has(metadata.target)) {
            this._typeMetadatas.set(metadata.target, new Map());
        }
        this._typeMetadatas.get(metadata.target).set(metadata.propertyName, metadata);
    };
    MetadataStorage.prototype.addTransformMetadata = function (metadata) {
        if (!this._transformMetadatas.has(metadata.target)) {
            this._transformMetadatas.set(metadata.target, new Map());
        }
        if (!this._transformMetadatas.get(metadata.target).has(metadata.propertyName)) {
            this._transformMetadatas.get(metadata.target).set(metadata.propertyName, []);
        }
        this._transformMetadatas.get(metadata.target).get(metadata.propertyName).push(metadata);
    };
    MetadataStorage.prototype.addExposeMetadata = function (metadata) {
        if (!this._exposeMetadatas.has(metadata.target)) {
            this._exposeMetadatas.set(metadata.target, new Map());
        }
        this._exposeMetadatas.get(metadata.target).set(metadata.propertyName, metadata);
    };
    MetadataStorage.prototype.addExcludeMetadata = function (metadata) {
        if (!this._excludeMetadatas.has(metadata.target)) {
            this._excludeMetadatas.set(metadata.target, new Map());
        }
        this._excludeMetadatas.get(metadata.target).set(metadata.propertyName, metadata);
    };
    // -------------------------------------------------------------------------
    // Public Methods
    // -------------------------------------------------------------------------
    MetadataStorage.prototype.findTransformMetadatas = function (target, propertyName, transformationType) {
        return this.findMetadatas(this._transformMetadatas, target, propertyName).filter(function (metadata) {
            if (!metadata.options)
                return true;
            if (metadata.options.toClassOnly === true && metadata.options.toPlainOnly === true)
                return true;
            if (metadata.options.toClassOnly === true) {
                return (transformationType === _enums__WEBPACK_IMPORTED_MODULE_0__.TransformationType.CLASS_TO_CLASS ||
                    transformationType === _enums__WEBPACK_IMPORTED_MODULE_0__.TransformationType.PLAIN_TO_CLASS);
            }
            if (metadata.options.toPlainOnly === true) {
                return transformationType === _enums__WEBPACK_IMPORTED_MODULE_0__.TransformationType.CLASS_TO_PLAIN;
            }
            return true;
        });
    };
    MetadataStorage.prototype.findExcludeMetadata = function (target, propertyName) {
        return this.findMetadata(this._excludeMetadatas, target, propertyName);
    };
    MetadataStorage.prototype.findExposeMetadata = function (target, propertyName) {
        return this.findMetadata(this._exposeMetadatas, target, propertyName);
    };
    MetadataStorage.prototype.findExposeMetadataByCustomName = function (target, name) {
        return this.getExposedMetadatas(target).find(function (metadata) {
            return metadata.options && metadata.options.name === name;
        });
    };
    MetadataStorage.prototype.findTypeMetadata = function (target, propertyName) {
        return this.findMetadata(this._typeMetadatas, target, propertyName);
    };
    MetadataStorage.prototype.getStrategy = function (target) {
        var excludeMap = this._excludeMetadatas.get(target);
        var exclude = excludeMap && excludeMap.get(undefined);
        var exposeMap = this._exposeMetadatas.get(target);
        var expose = exposeMap && exposeMap.get(undefined);
        if ((exclude && expose) || (!exclude && !expose))
            return 'none';
        return exclude ? 'excludeAll' : 'exposeAll';
    };
    MetadataStorage.prototype.getExposedMetadatas = function (target) {
        return this.getMetadata(this._exposeMetadatas, target);
    };
    MetadataStorage.prototype.getExcludedMetadatas = function (target) {
        return this.getMetadata(this._excludeMetadatas, target);
    };
    MetadataStorage.prototype.getExposedProperties = function (target, transformationType) {
        return this.getExposedMetadatas(target)
            .filter(function (metadata) {
            if (!metadata.options)
                return true;
            if (metadata.options.toClassOnly === true && metadata.options.toPlainOnly === true)
                return true;
            if (metadata.options.toClassOnly === true) {
                return (transformationType === _enums__WEBPACK_IMPORTED_MODULE_0__.TransformationType.CLASS_TO_CLASS ||
                    transformationType === _enums__WEBPACK_IMPORTED_MODULE_0__.TransformationType.PLAIN_TO_CLASS);
            }
            if (metadata.options.toPlainOnly === true) {
                return transformationType === _enums__WEBPACK_IMPORTED_MODULE_0__.TransformationType.CLASS_TO_PLAIN;
            }
            return true;
        })
            .map(function (metadata) { return metadata.propertyName; });
    };
    MetadataStorage.prototype.getExcludedProperties = function (target, transformationType) {
        return this.getExcludedMetadatas(target)
            .filter(function (metadata) {
            if (!metadata.options)
                return true;
            if (metadata.options.toClassOnly === true && metadata.options.toPlainOnly === true)
                return true;
            if (metadata.options.toClassOnly === true) {
                return (transformationType === _enums__WEBPACK_IMPORTED_MODULE_0__.TransformationType.CLASS_TO_CLASS ||
                    transformationType === _enums__WEBPACK_IMPORTED_MODULE_0__.TransformationType.PLAIN_TO_CLASS);
            }
            if (metadata.options.toPlainOnly === true) {
                return transformationType === _enums__WEBPACK_IMPORTED_MODULE_0__.TransformationType.CLASS_TO_PLAIN;
            }
            return true;
        })
            .map(function (metadata) { return metadata.propertyName; });
    };
    MetadataStorage.prototype.clear = function () {
        this._typeMetadatas.clear();
        this._exposeMetadatas.clear();
        this._excludeMetadatas.clear();
        this._ancestorsMap.clear();
    };
    // -------------------------------------------------------------------------
    // Private Methods
    // -------------------------------------------------------------------------
    MetadataStorage.prototype.getMetadata = function (metadatas, target) {
        var metadataFromTargetMap = metadatas.get(target);
        var metadataFromTarget;
        if (metadataFromTargetMap) {
            metadataFromTarget = Array.from(metadataFromTargetMap.values()).filter(function (meta) { return meta.propertyName !== undefined; });
        }
        var metadataFromAncestors = [];
        for (var _i = 0, _a = this.getAncestors(target); _i < _a.length; _i++) {
            var ancestor = _a[_i];
            var ancestorMetadataMap = metadatas.get(ancestor);
            if (ancestorMetadataMap) {
                var metadataFromAncestor = Array.from(ancestorMetadataMap.values()).filter(function (meta) { return meta.propertyName !== undefined; });
                metadataFromAncestors.push.apply(metadataFromAncestors, metadataFromAncestor);
            }
        }
        return metadataFromAncestors.concat(metadataFromTarget || []);
    };
    MetadataStorage.prototype.findMetadata = function (metadatas, target, propertyName) {
        var metadataFromTargetMap = metadatas.get(target);
        if (metadataFromTargetMap) {
            var metadataFromTarget = metadataFromTargetMap.get(propertyName);
            if (metadataFromTarget) {
                return metadataFromTarget;
            }
        }
        for (var _i = 0, _a = this.getAncestors(target); _i < _a.length; _i++) {
            var ancestor = _a[_i];
            var ancestorMetadataMap = metadatas.get(ancestor);
            if (ancestorMetadataMap) {
                var ancestorResult = ancestorMetadataMap.get(propertyName);
                if (ancestorResult) {
                    return ancestorResult;
                }
            }
        }
        return undefined;
    };
    MetadataStorage.prototype.findMetadatas = function (metadatas, target, propertyName) {
        var metadataFromTargetMap = metadatas.get(target);
        var metadataFromTarget;
        if (metadataFromTargetMap) {
            metadataFromTarget = metadataFromTargetMap.get(propertyName);
        }
        var metadataFromAncestorsTarget = [];
        for (var _i = 0, _a = this.getAncestors(target); _i < _a.length; _i++) {
            var ancestor = _a[_i];
            var ancestorMetadataMap = metadatas.get(ancestor);
            if (ancestorMetadataMap) {
                if (ancestorMetadataMap.has(propertyName)) {
                    metadataFromAncestorsTarget.push.apply(metadataFromAncestorsTarget, ancestorMetadataMap.get(propertyName));
                }
            }
        }
        return metadataFromAncestorsTarget
            .slice()
            .reverse()
            .concat((metadataFromTarget || []).slice().reverse());
    };
    MetadataStorage.prototype.getAncestors = function (target) {
        if (!target)
            return [];
        if (!this._ancestorsMap.has(target)) {
            var ancestors = [];
            for (var baseClass = Object.getPrototypeOf(target.prototype.constructor); typeof baseClass.prototype !== 'undefined'; baseClass = Object.getPrototypeOf(baseClass.prototype.constructor)) {
                ancestors.push(baseClass);
            }
            this._ancestorsMap.set(target, ancestors);
        }
        return this._ancestorsMap.get(target);
    };
    return MetadataStorage;
}());

//# sourceMappingURL=MetadataStorage.js.map

/***/ }),
/* 34 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultOptions: () => (/* binding */ defaultOptions)
/* harmony export */ });
/**
 * These are the default options used by any transformation operation.
 */
var defaultOptions = {
    enableCircularCheck: false,
    enableImplicitConversion: false,
    excludeExtraneousValues: false,
    excludePrefixes: undefined,
    exposeDefaultValues: false,
    exposeUnsetFields: true,
    groups: undefined,
    ignoreDecorators: false,
    strategy: undefined,
    targetMaps: undefined,
    version: undefined,
};
//# sourceMappingURL=default-options.constant.js.map

/***/ }),
/* 35 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Exclude: () => (/* reexport safe */ _exclude_decorator__WEBPACK_IMPORTED_MODULE_0__.Exclude),
/* harmony export */   Expose: () => (/* reexport safe */ _expose_decorator__WEBPACK_IMPORTED_MODULE_1__.Expose),
/* harmony export */   Transform: () => (/* reexport safe */ _transform_decorator__WEBPACK_IMPORTED_MODULE_5__.Transform),
/* harmony export */   TransformInstanceToInstance: () => (/* reexport safe */ _transform_instance_to_instance_decorator__WEBPACK_IMPORTED_MODULE_2__.TransformInstanceToInstance),
/* harmony export */   TransformInstanceToPlain: () => (/* reexport safe */ _transform_instance_to_plain_decorator__WEBPACK_IMPORTED_MODULE_3__.TransformInstanceToPlain),
/* harmony export */   TransformPlainToInstance: () => (/* reexport safe */ _transform_plain_to_instance_decorator__WEBPACK_IMPORTED_MODULE_4__.TransformPlainToInstance),
/* harmony export */   Type: () => (/* reexport safe */ _type_decorator__WEBPACK_IMPORTED_MODULE_6__.Type)
/* harmony export */ });
/* harmony import */ var _exclude_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36);
/* harmony import */ var _expose_decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37);
/* harmony import */ var _transform_instance_to_instance_decorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38);
/* harmony import */ var _transform_instance_to_plain_decorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39);
/* harmony import */ var _transform_plain_to_instance_decorator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(40);
/* harmony import */ var _transform_decorator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41);
/* harmony import */ var _type_decorator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(42);







//# sourceMappingURL=index.js.map

/***/ }),
/* 36 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Exclude: () => (/* binding */ Exclude)
/* harmony export */ });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);

/**
 * Marks the given class or property as excluded. By default the property is excluded in both
 * constructorToPlain and plainToConstructor transformations. It can be limited to only one direction
 * via using the `toPlainOnly` or `toClassOnly` option.
 *
 * Can be applied to class definitions and properties.
 */
function Exclude(options) {
    if (options === void 0) { options = {}; }
    /**
     * NOTE: The `propertyName` property must be marked as optional because
     * this decorator used both as a class and a property decorator and the
     * Typescript compiler will freak out if we make it mandatory as a class
     * decorator only receives one parameter.
     */
    return function (object, propertyName) {
        _storage__WEBPACK_IMPORTED_MODULE_0__.defaultMetadataStorage.addExcludeMetadata({
            target: object instanceof Function ? object : object.constructor,
            propertyName: propertyName,
            options: options,
        });
    };
}
//# sourceMappingURL=exclude.decorator.js.map

/***/ }),
/* 37 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Expose: () => (/* binding */ Expose)
/* harmony export */ });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);

/**
 * Marks the given class or property as included. By default the property is included in both
 * constructorToPlain and plainToConstructor transformations. It can be limited to only one direction
 * via using the `toPlainOnly` or `toClassOnly` option.
 *
 * Can be applied to class definitions and properties.
 */
function Expose(options) {
    if (options === void 0) { options = {}; }
    /**
     * NOTE: The `propertyName` property must be marked as optional because
     * this decorator used both as a class and a property decorator and the
     * Typescript compiler will freak out if we make it mandatory as a class
     * decorator only receives one parameter.
     */
    return function (object, propertyName) {
        _storage__WEBPACK_IMPORTED_MODULE_0__.defaultMetadataStorage.addExposeMetadata({
            target: object instanceof Function ? object : object.constructor,
            propertyName: propertyName,
            options: options,
        });
    };
}
//# sourceMappingURL=expose.decorator.js.map

/***/ }),
/* 38 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TransformInstanceToInstance: () => (/* binding */ TransformInstanceToInstance)
/* harmony export */ });
/* harmony import */ var _ClassTransformer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);

/**
 * Return the class instance only with the exposed properties.
 *
 * Can be applied to functions and getters/setters only.
 */
function TransformInstanceToInstance(params) {
    return function (target, propertyKey, descriptor) {
        var classTransformer = new _ClassTransformer__WEBPACK_IMPORTED_MODULE_0__.ClassTransformer();
        var originalMethod = descriptor.value;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var result = originalMethod.apply(this, args);
            var isPromise = !!result && (typeof result === 'object' || typeof result === 'function') && typeof result.then === 'function';
            return isPromise
                ? result.then(function (data) { return classTransformer.instanceToInstance(data, params); })
                : classTransformer.instanceToInstance(result, params);
        };
    };
}
//# sourceMappingURL=transform-instance-to-instance.decorator.js.map

/***/ }),
/* 39 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TransformInstanceToPlain: () => (/* binding */ TransformInstanceToPlain)
/* harmony export */ });
/* harmony import */ var _ClassTransformer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);

/**
 * Transform the object from class to plain object and return only with the exposed properties.
 *
 * Can be applied to functions and getters/setters only.
 */
function TransformInstanceToPlain(params) {
    return function (target, propertyKey, descriptor) {
        var classTransformer = new _ClassTransformer__WEBPACK_IMPORTED_MODULE_0__.ClassTransformer();
        var originalMethod = descriptor.value;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var result = originalMethod.apply(this, args);
            var isPromise = !!result && (typeof result === 'object' || typeof result === 'function') && typeof result.then === 'function';
            return isPromise
                ? result.then(function (data) { return classTransformer.instanceToPlain(data, params); })
                : classTransformer.instanceToPlain(result, params);
        };
    };
}
//# sourceMappingURL=transform-instance-to-plain.decorator.js.map

/***/ }),
/* 40 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TransformPlainToInstance: () => (/* binding */ TransformPlainToInstance)
/* harmony export */ });
/* harmony import */ var _ClassTransformer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);

/**
 * Return the class instance only with the exposed properties.
 *
 * Can be applied to functions and getters/setters only.
 */
function TransformPlainToInstance(classType, params) {
    return function (target, propertyKey, descriptor) {
        var classTransformer = new _ClassTransformer__WEBPACK_IMPORTED_MODULE_0__.ClassTransformer();
        var originalMethod = descriptor.value;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var result = originalMethod.apply(this, args);
            var isPromise = !!result && (typeof result === 'object' || typeof result === 'function') && typeof result.then === 'function';
            return isPromise
                ? result.then(function (data) { return classTransformer.plainToInstance(classType, data, params); })
                : classTransformer.plainToInstance(classType, result, params);
        };
    };
}
//# sourceMappingURL=transform-plain-to-instance.decorator.js.map

/***/ }),
/* 41 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Transform: () => (/* binding */ Transform)
/* harmony export */ });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);

/**
 * Defines a custom logic for value transformation.
 *
 * Can be applied to properties only.
 */
function Transform(transformFn, options) {
    if (options === void 0) { options = {}; }
    return function (target, propertyName) {
        _storage__WEBPACK_IMPORTED_MODULE_0__.defaultMetadataStorage.addTransformMetadata({
            target: target.constructor,
            propertyName: propertyName,
            transformFn: transformFn,
            options: options,
        });
    };
}
//# sourceMappingURL=transform.decorator.js.map

/***/ }),
/* 42 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Type: () => (/* binding */ Type)
/* harmony export */ });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);

/**
 * Specifies a type of the property.
 * The given TypeFunction can return a constructor. A discriminator can be given in the options.
 *
 * Can be applied to properties only.
 */
function Type(typeFunction, options) {
    if (options === void 0) { options = {}; }
    return function (target, propertyName) {
        var reflectedType = Reflect.getMetadata('design:type', target, propertyName);
        _storage__WEBPACK_IMPORTED_MODULE_0__.defaultMetadataStorage.addTypeMetadata({
            target: target.constructor,
            propertyName: propertyName,
            reflectedType: reflectedType,
            typeFunction: typeFunction,
            options: options,
        });
    };
}
//# sourceMappingURL=type.decorator.js.map

/***/ }),
/* 43 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TransformationType: () => (/* reexport safe */ _transformation_type_enum__WEBPACK_IMPORTED_MODULE_0__.TransformationType)
/* harmony export */ });
/* harmony import */ var _transformation_type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);

//# sourceMappingURL=index.js.map

/***/ }),
/* 44 */
/***/ (() => {

/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var Reflect;
(function (Reflect) {
    // Metadata Proposal
    // https://rbuckton.github.io/reflect-metadata/
    (function (factory) {
        var root = typeof global === "object" ? global :
            typeof self === "object" ? self :
                typeof this === "object" ? this :
                    Function("return this;")();
        var exporter = makeExporter(Reflect);
        if (typeof root.Reflect === "undefined") {
            root.Reflect = Reflect;
        }
        else {
            exporter = makeExporter(root.Reflect, exporter);
        }
        factory(exporter);
        function makeExporter(target, previous) {
            return function (key, value) {
                if (typeof target[key] !== "function") {
                    Object.defineProperty(target, key, { configurable: true, writable: true, value: value });
                }
                if (previous)
                    previous(key, value);
            };
        }
    })(function (exporter) {
        var hasOwn = Object.prototype.hasOwnProperty;
        // feature test for Symbol support
        var supportsSymbol = typeof Symbol === "function";
        var toPrimitiveSymbol = supportsSymbol && typeof Symbol.toPrimitive !== "undefined" ? Symbol.toPrimitive : "@@toPrimitive";
        var iteratorSymbol = supportsSymbol && typeof Symbol.iterator !== "undefined" ? Symbol.iterator : "@@iterator";
        var supportsCreate = typeof Object.create === "function"; // feature test for Object.create support
        var supportsProto = { __proto__: [] } instanceof Array; // feature test for __proto__ support
        var downLevel = !supportsCreate && !supportsProto;
        var HashMap = {
            // create an object in dictionary mode (a.k.a. "slow" mode in v8)
            create: supportsCreate
                ? function () { return MakeDictionary(Object.create(null)); }
                : supportsProto
                    ? function () { return MakeDictionary({ __proto__: null }); }
                    : function () { return MakeDictionary({}); },
            has: downLevel
                ? function (map, key) { return hasOwn.call(map, key); }
                : function (map, key) { return key in map; },
            get: downLevel
                ? function (map, key) { return hasOwn.call(map, key) ? map[key] : undefined; }
                : function (map, key) { return map[key]; },
        };
        // Load global or shim versions of Map, Set, and WeakMap
        var functionPrototype = Object.getPrototypeOf(Function);
        var usePolyfill = typeof process === "object" && process.env && process.env["REFLECT_METADATA_USE_MAP_POLYFILL"] === "true";
        var _Map = !usePolyfill && typeof Map === "function" && typeof Map.prototype.entries === "function" ? Map : CreateMapPolyfill();
        var _Set = !usePolyfill && typeof Set === "function" && typeof Set.prototype.entries === "function" ? Set : CreateSetPolyfill();
        var _WeakMap = !usePolyfill && typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill();
        // [[Metadata]] internal slot
        // https://rbuckton.github.io/reflect-metadata/#ordinary-object-internal-methods-and-internal-slots
        var Metadata = new _WeakMap();
        /**
         * Applies a set of decorators to a property of a target object.
         * @param decorators An array of decorators.
         * @param target The target object.
         * @param propertyKey (Optional) The property key to decorate.
         * @param attributes (Optional) The property descriptor for the target key.
         * @remarks Decorators are applied in reverse order.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     Example = Reflect.decorate(decoratorsArray, Example);
         *
         *     // property (on constructor)
         *     Reflect.decorate(decoratorsArray, Example, "staticProperty");
         *
         *     // property (on prototype)
         *     Reflect.decorate(decoratorsArray, Example.prototype, "property");
         *
         *     // method (on constructor)
         *     Object.defineProperty(Example, "staticMethod",
         *         Reflect.decorate(decoratorsArray, Example, "staticMethod",
         *             Object.getOwnPropertyDescriptor(Example, "staticMethod")));
         *
         *     // method (on prototype)
         *     Object.defineProperty(Example.prototype, "method",
         *         Reflect.decorate(decoratorsArray, Example.prototype, "method",
         *             Object.getOwnPropertyDescriptor(Example.prototype, "method")));
         *
         */
        function decorate(decorators, target, propertyKey, attributes) {
            if (!IsUndefined(propertyKey)) {
                if (!IsArray(decorators))
                    throw new TypeError();
                if (!IsObject(target))
                    throw new TypeError();
                if (!IsObject(attributes) && !IsUndefined(attributes) && !IsNull(attributes))
                    throw new TypeError();
                if (IsNull(attributes))
                    attributes = undefined;
                propertyKey = ToPropertyKey(propertyKey);
                return DecorateProperty(decorators, target, propertyKey, attributes);
            }
            else {
                if (!IsArray(decorators))
                    throw new TypeError();
                if (!IsConstructor(target))
                    throw new TypeError();
                return DecorateConstructor(decorators, target);
            }
        }
        exporter("decorate", decorate);
        // 4.1.2 Reflect.metadata(metadataKey, metadataValue)
        // https://rbuckton.github.io/reflect-metadata/#reflect.metadata
        /**
         * A default metadata decorator factory that can be used on a class, class member, or parameter.
         * @param metadataKey The key for the metadata entry.
         * @param metadataValue The value for the metadata entry.
         * @returns A decorator function.
         * @remarks
         * If `metadataKey` is already defined for the target and target key, the
         * metadataValue for that key will be overwritten.
         * @example
         *
         *     // constructor
         *     @Reflect.metadata(key, value)
         *     class Example {
         *     }
         *
         *     // property (on constructor, TypeScript only)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         static staticProperty;
         *     }
         *
         *     // property (on prototype, TypeScript only)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         property;
         *     }
         *
         *     // method (on constructor)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         static staticMethod() { }
         *     }
         *
         *     // method (on prototype)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         method() { }
         *     }
         *
         */
        function metadata(metadataKey, metadataValue) {
            function decorator(target, propertyKey) {
                if (!IsObject(target))
                    throw new TypeError();
                if (!IsUndefined(propertyKey) && !IsPropertyKey(propertyKey))
                    throw new TypeError();
                OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
            }
            return decorator;
        }
        exporter("metadata", metadata);
        /**
         * Define a unique metadata entry on the target.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param metadataValue A value that contains attached metadata.
         * @param target The target object on which to define metadata.
         * @param propertyKey (Optional) The property key for the target.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     Reflect.defineMetadata("custom:annotation", options, Example);
         *
         *     // property (on constructor)
         *     Reflect.defineMetadata("custom:annotation", options, Example, "staticProperty");
         *
         *     // property (on prototype)
         *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "property");
         *
         *     // method (on constructor)
         *     Reflect.defineMetadata("custom:annotation", options, Example, "staticMethod");
         *
         *     // method (on prototype)
         *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "method");
         *
         *     // decorator factory as metadata-producing annotation.
         *     function MyAnnotation(options): Decorator {
         *         return (target, key?) => Reflect.defineMetadata("custom:annotation", options, target, key);
         *     }
         *
         */
        function defineMetadata(metadataKey, metadataValue, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
        }
        exporter("defineMetadata", defineMetadata);
        /**
         * Gets a value indicating whether the target object or its prototype chain has the provided metadata key defined.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata key was defined on the target object or its prototype chain; otherwise, `false`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.hasMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.hasMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.hasMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function hasMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryHasMetadata(metadataKey, target, propertyKey);
        }
        exporter("hasMetadata", hasMetadata);
        /**
         * Gets a value indicating whether the target object has the provided metadata key defined.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata key was defined on the target object; otherwise, `false`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function hasOwnMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryHasOwnMetadata(metadataKey, target, propertyKey);
        }
        exporter("hasOwnMetadata", hasOwnMetadata);
        /**
         * Gets the metadata value for the provided metadata key on the target object or its prototype chain.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function getMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryGetMetadata(metadataKey, target, propertyKey);
        }
        exporter("getMetadata", getMetadata);
        /**
         * Gets the metadata value for the provided metadata key on the target object.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getOwnMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function getOwnMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryGetOwnMetadata(metadataKey, target, propertyKey);
        }
        exporter("getOwnMetadata", getOwnMetadata);
        /**
         * Gets the metadata keys defined on the target object or its prototype chain.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns An array of unique metadata keys.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getMetadataKeys(Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getMetadataKeys(Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getMetadataKeys(Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getMetadataKeys(Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getMetadataKeys(Example.prototype, "method");
         *
         */
        function getMetadataKeys(target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryMetadataKeys(target, propertyKey);
        }
        exporter("getMetadataKeys", getMetadataKeys);
        /**
         * Gets the unique metadata keys defined on the target object.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns An array of unique metadata keys.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getOwnMetadataKeys(Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getOwnMetadataKeys(Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getOwnMetadataKeys(Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getOwnMetadataKeys(Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getOwnMetadataKeys(Example.prototype, "method");
         *
         */
        function getOwnMetadataKeys(target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryOwnMetadataKeys(target, propertyKey);
        }
        exporter("getOwnMetadataKeys", getOwnMetadataKeys);
        /**
         * Deletes the metadata entry from the target object with the provided key.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata entry was found and deleted; otherwise, false.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.deleteMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function deleteMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            var metadataMap = GetOrCreateMetadataMap(target, propertyKey, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return false;
            if (!metadataMap.delete(metadataKey))
                return false;
            if (metadataMap.size > 0)
                return true;
            var targetMetadata = Metadata.get(target);
            targetMetadata.delete(propertyKey);
            if (targetMetadata.size > 0)
                return true;
            Metadata.delete(target);
            return true;
        }
        exporter("deleteMetadata", deleteMetadata);
        function DecorateConstructor(decorators, target) {
            for (var i = decorators.length - 1; i >= 0; --i) {
                var decorator = decorators[i];
                var decorated = decorator(target);
                if (!IsUndefined(decorated) && !IsNull(decorated)) {
                    if (!IsConstructor(decorated))
                        throw new TypeError();
                    target = decorated;
                }
            }
            return target;
        }
        function DecorateProperty(decorators, target, propertyKey, descriptor) {
            for (var i = decorators.length - 1; i >= 0; --i) {
                var decorator = decorators[i];
                var decorated = decorator(target, propertyKey, descriptor);
                if (!IsUndefined(decorated) && !IsNull(decorated)) {
                    if (!IsObject(decorated))
                        throw new TypeError();
                    descriptor = decorated;
                }
            }
            return descriptor;
        }
        function GetOrCreateMetadataMap(O, P, Create) {
            var targetMetadata = Metadata.get(O);
            if (IsUndefined(targetMetadata)) {
                if (!Create)
                    return undefined;
                targetMetadata = new _Map();
                Metadata.set(O, targetMetadata);
            }
            var metadataMap = targetMetadata.get(P);
            if (IsUndefined(metadataMap)) {
                if (!Create)
                    return undefined;
                metadataMap = new _Map();
                targetMetadata.set(P, metadataMap);
            }
            return metadataMap;
        }
        // 3.1.1.1 OrdinaryHasMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryhasmetadata
        function OrdinaryHasMetadata(MetadataKey, O, P) {
            var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
            if (hasOwn)
                return true;
            var parent = OrdinaryGetPrototypeOf(O);
            if (!IsNull(parent))
                return OrdinaryHasMetadata(MetadataKey, parent, P);
            return false;
        }
        // 3.1.2.1 OrdinaryHasOwnMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryhasownmetadata
        function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return false;
            return ToBoolean(metadataMap.has(MetadataKey));
        }
        // 3.1.3.1 OrdinaryGetMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarygetmetadata
        function OrdinaryGetMetadata(MetadataKey, O, P) {
            var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
            if (hasOwn)
                return OrdinaryGetOwnMetadata(MetadataKey, O, P);
            var parent = OrdinaryGetPrototypeOf(O);
            if (!IsNull(parent))
                return OrdinaryGetMetadata(MetadataKey, parent, P);
            return undefined;
        }
        // 3.1.4.1 OrdinaryGetOwnMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarygetownmetadata
        function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return undefined;
            return metadataMap.get(MetadataKey);
        }
        // 3.1.5.1 OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarydefineownmetadata
        function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ true);
            metadataMap.set(MetadataKey, MetadataValue);
        }
        // 3.1.6.1 OrdinaryMetadataKeys(O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarymetadatakeys
        function OrdinaryMetadataKeys(O, P) {
            var ownKeys = OrdinaryOwnMetadataKeys(O, P);
            var parent = OrdinaryGetPrototypeOf(O);
            if (parent === null)
                return ownKeys;
            var parentKeys = OrdinaryMetadataKeys(parent, P);
            if (parentKeys.length <= 0)
                return ownKeys;
            if (ownKeys.length <= 0)
                return parentKeys;
            var set = new _Set();
            var keys = [];
            for (var _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++) {
                var key = ownKeys_1[_i];
                var hasKey = set.has(key);
                if (!hasKey) {
                    set.add(key);
                    keys.push(key);
                }
            }
            for (var _a = 0, parentKeys_1 = parentKeys; _a < parentKeys_1.length; _a++) {
                var key = parentKeys_1[_a];
                var hasKey = set.has(key);
                if (!hasKey) {
                    set.add(key);
                    keys.push(key);
                }
            }
            return keys;
        }
        // 3.1.7.1 OrdinaryOwnMetadataKeys(O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryownmetadatakeys
        function OrdinaryOwnMetadataKeys(O, P) {
            var keys = [];
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return keys;
            var keysObj = metadataMap.keys();
            var iterator = GetIterator(keysObj);
            var k = 0;
            while (true) {
                var next = IteratorStep(iterator);
                if (!next) {
                    keys.length = k;
                    return keys;
                }
                var nextValue = IteratorValue(next);
                try {
                    keys[k] = nextValue;
                }
                catch (e) {
                    try {
                        IteratorClose(iterator);
                    }
                    finally {
                        throw e;
                    }
                }
                k++;
            }
        }
        // 6 ECMAScript Data Typ0es and Values
        // https://tc39.github.io/ecma262/#sec-ecmascript-data-types-and-values
        function Type(x) {
            if (x === null)
                return 1 /* Null */;
            switch (typeof x) {
                case "undefined": return 0 /* Undefined */;
                case "boolean": return 2 /* Boolean */;
                case "string": return 3 /* String */;
                case "symbol": return 4 /* Symbol */;
                case "number": return 5 /* Number */;
                case "object": return x === null ? 1 /* Null */ : 6 /* Object */;
                default: return 6 /* Object */;
            }
        }
        // 6.1.1 The Undefined Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-undefined-type
        function IsUndefined(x) {
            return x === undefined;
        }
        // 6.1.2 The Null Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-null-type
        function IsNull(x) {
            return x === null;
        }
        // 6.1.5 The Symbol Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-symbol-type
        function IsSymbol(x) {
            return typeof x === "symbol";
        }
        // 6.1.7 The Object Type
        // https://tc39.github.io/ecma262/#sec-object-type
        function IsObject(x) {
            return typeof x === "object" ? x !== null : typeof x === "function";
        }
        // 7.1 Type Conversion
        // https://tc39.github.io/ecma262/#sec-type-conversion
        // 7.1.1 ToPrimitive(input [, PreferredType])
        // https://tc39.github.io/ecma262/#sec-toprimitive
        function ToPrimitive(input, PreferredType) {
            switch (Type(input)) {
                case 0 /* Undefined */: return input;
                case 1 /* Null */: return input;
                case 2 /* Boolean */: return input;
                case 3 /* String */: return input;
                case 4 /* Symbol */: return input;
                case 5 /* Number */: return input;
            }
            var hint = PreferredType === 3 /* String */ ? "string" : PreferredType === 5 /* Number */ ? "number" : "default";
            var exoticToPrim = GetMethod(input, toPrimitiveSymbol);
            if (exoticToPrim !== undefined) {
                var result = exoticToPrim.call(input, hint);
                if (IsObject(result))
                    throw new TypeError();
                return result;
            }
            return OrdinaryToPrimitive(input, hint === "default" ? "number" : hint);
        }
        // 7.1.1.1 OrdinaryToPrimitive(O, hint)
        // https://tc39.github.io/ecma262/#sec-ordinarytoprimitive
        function OrdinaryToPrimitive(O, hint) {
            if (hint === "string") {
                var toString_1 = O.toString;
                if (IsCallable(toString_1)) {
                    var result = toString_1.call(O);
                    if (!IsObject(result))
                        return result;
                }
                var valueOf = O.valueOf;
                if (IsCallable(valueOf)) {
                    var result = valueOf.call(O);
                    if (!IsObject(result))
                        return result;
                }
            }
            else {
                var valueOf = O.valueOf;
                if (IsCallable(valueOf)) {
                    var result = valueOf.call(O);
                    if (!IsObject(result))
                        return result;
                }
                var toString_2 = O.toString;
                if (IsCallable(toString_2)) {
                    var result = toString_2.call(O);
                    if (!IsObject(result))
                        return result;
                }
            }
            throw new TypeError();
        }
        // 7.1.2 ToBoolean(argument)
        // https://tc39.github.io/ecma262/2016/#sec-toboolean
        function ToBoolean(argument) {
            return !!argument;
        }
        // 7.1.12 ToString(argument)
        // https://tc39.github.io/ecma262/#sec-tostring
        function ToString(argument) {
            return "" + argument;
        }
        // 7.1.14 ToPropertyKey(argument)
        // https://tc39.github.io/ecma262/#sec-topropertykey
        function ToPropertyKey(argument) {
            var key = ToPrimitive(argument, 3 /* String */);
            if (IsSymbol(key))
                return key;
            return ToString(key);
        }
        // 7.2 Testing and Comparison Operations
        // https://tc39.github.io/ecma262/#sec-testing-and-comparison-operations
        // 7.2.2 IsArray(argument)
        // https://tc39.github.io/ecma262/#sec-isarray
        function IsArray(argument) {
            return Array.isArray
                ? Array.isArray(argument)
                : argument instanceof Object
                    ? argument instanceof Array
                    : Object.prototype.toString.call(argument) === "[object Array]";
        }
        // 7.2.3 IsCallable(argument)
        // https://tc39.github.io/ecma262/#sec-iscallable
        function IsCallable(argument) {
            // NOTE: This is an approximation as we cannot check for [[Call]] internal method.
            return typeof argument === "function";
        }
        // 7.2.4 IsConstructor(argument)
        // https://tc39.github.io/ecma262/#sec-isconstructor
        function IsConstructor(argument) {
            // NOTE: This is an approximation as we cannot check for [[Construct]] internal method.
            return typeof argument === "function";
        }
        // 7.2.7 IsPropertyKey(argument)
        // https://tc39.github.io/ecma262/#sec-ispropertykey
        function IsPropertyKey(argument) {
            switch (Type(argument)) {
                case 3 /* String */: return true;
                case 4 /* Symbol */: return true;
                default: return false;
            }
        }
        // 7.3 Operations on Objects
        // https://tc39.github.io/ecma262/#sec-operations-on-objects
        // 7.3.9 GetMethod(V, P)
        // https://tc39.github.io/ecma262/#sec-getmethod
        function GetMethod(V, P) {
            var func = V[P];
            if (func === undefined || func === null)
                return undefined;
            if (!IsCallable(func))
                throw new TypeError();
            return func;
        }
        // 7.4 Operations on Iterator Objects
        // https://tc39.github.io/ecma262/#sec-operations-on-iterator-objects
        function GetIterator(obj) {
            var method = GetMethod(obj, iteratorSymbol);
            if (!IsCallable(method))
                throw new TypeError(); // from Call
            var iterator = method.call(obj);
            if (!IsObject(iterator))
                throw new TypeError();
            return iterator;
        }
        // 7.4.4 IteratorValue(iterResult)
        // https://tc39.github.io/ecma262/2016/#sec-iteratorvalue
        function IteratorValue(iterResult) {
            return iterResult.value;
        }
        // 7.4.5 IteratorStep(iterator)
        // https://tc39.github.io/ecma262/#sec-iteratorstep
        function IteratorStep(iterator) {
            var result = iterator.next();
            return result.done ? false : result;
        }
        // 7.4.6 IteratorClose(iterator, completion)
        // https://tc39.github.io/ecma262/#sec-iteratorclose
        function IteratorClose(iterator) {
            var f = iterator["return"];
            if (f)
                f.call(iterator);
        }
        // 9.1 Ordinary Object Internal Methods and Internal Slots
        // https://tc39.github.io/ecma262/#sec-ordinary-object-internal-methods-and-internal-slots
        // 9.1.1.1 OrdinaryGetPrototypeOf(O)
        // https://tc39.github.io/ecma262/#sec-ordinarygetprototypeof
        function OrdinaryGetPrototypeOf(O) {
            var proto = Object.getPrototypeOf(O);
            if (typeof O !== "function" || O === functionPrototype)
                return proto;
            // TypeScript doesn't set __proto__ in ES5, as it's non-standard.
            // Try to determine the superclass constructor. Compatible implementations
            // must either set __proto__ on a subclass constructor to the superclass constructor,
            // or ensure each class has a valid `constructor` property on its prototype that
            // points back to the constructor.
            // If this is not the same as Function.[[Prototype]], then this is definately inherited.
            // This is the case when in ES6 or when using __proto__ in a compatible browser.
            if (proto !== functionPrototype)
                return proto;
            // If the super prototype is Object.prototype, null, or undefined, then we cannot determine the heritage.
            var prototype = O.prototype;
            var prototypeProto = prototype && Object.getPrototypeOf(prototype);
            if (prototypeProto == null || prototypeProto === Object.prototype)
                return proto;
            // If the constructor was not a function, then we cannot determine the heritage.
            var constructor = prototypeProto.constructor;
            if (typeof constructor !== "function")
                return proto;
            // If we have some kind of self-reference, then we cannot determine the heritage.
            if (constructor === O)
                return proto;
            // we have a pretty good guess at the heritage.
            return constructor;
        }
        // naive Map shim
        function CreateMapPolyfill() {
            var cacheSentinel = {};
            var arraySentinel = [];
            var MapIterator = /** @class */ (function () {
                function MapIterator(keys, values, selector) {
                    this._index = 0;
                    this._keys = keys;
                    this._values = values;
                    this._selector = selector;
                }
                MapIterator.prototype["@@iterator"] = function () { return this; };
                MapIterator.prototype[iteratorSymbol] = function () { return this; };
                MapIterator.prototype.next = function () {
                    var index = this._index;
                    if (index >= 0 && index < this._keys.length) {
                        var result = this._selector(this._keys[index], this._values[index]);
                        if (index + 1 >= this._keys.length) {
                            this._index = -1;
                            this._keys = arraySentinel;
                            this._values = arraySentinel;
                        }
                        else {
                            this._index++;
                        }
                        return { value: result, done: false };
                    }
                    return { value: undefined, done: true };
                };
                MapIterator.prototype.throw = function (error) {
                    if (this._index >= 0) {
                        this._index = -1;
                        this._keys = arraySentinel;
                        this._values = arraySentinel;
                    }
                    throw error;
                };
                MapIterator.prototype.return = function (value) {
                    if (this._index >= 0) {
                        this._index = -1;
                        this._keys = arraySentinel;
                        this._values = arraySentinel;
                    }
                    return { value: value, done: true };
                };
                return MapIterator;
            }());
            return /** @class */ (function () {
                function Map() {
                    this._keys = [];
                    this._values = [];
                    this._cacheKey = cacheSentinel;
                    this._cacheIndex = -2;
                }
                Object.defineProperty(Map.prototype, "size", {
                    get: function () { return this._keys.length; },
                    enumerable: true,
                    configurable: true
                });
                Map.prototype.has = function (key) { return this._find(key, /*insert*/ false) >= 0; };
                Map.prototype.get = function (key) {
                    var index = this._find(key, /*insert*/ false);
                    return index >= 0 ? this._values[index] : undefined;
                };
                Map.prototype.set = function (key, value) {
                    var index = this._find(key, /*insert*/ true);
                    this._values[index] = value;
                    return this;
                };
                Map.prototype.delete = function (key) {
                    var index = this._find(key, /*insert*/ false);
                    if (index >= 0) {
                        var size = this._keys.length;
                        for (var i = index + 1; i < size; i++) {
                            this._keys[i - 1] = this._keys[i];
                            this._values[i - 1] = this._values[i];
                        }
                        this._keys.length--;
                        this._values.length--;
                        if (key === this._cacheKey) {
                            this._cacheKey = cacheSentinel;
                            this._cacheIndex = -2;
                        }
                        return true;
                    }
                    return false;
                };
                Map.prototype.clear = function () {
                    this._keys.length = 0;
                    this._values.length = 0;
                    this._cacheKey = cacheSentinel;
                    this._cacheIndex = -2;
                };
                Map.prototype.keys = function () { return new MapIterator(this._keys, this._values, getKey); };
                Map.prototype.values = function () { return new MapIterator(this._keys, this._values, getValue); };
                Map.prototype.entries = function () { return new MapIterator(this._keys, this._values, getEntry); };
                Map.prototype["@@iterator"] = function () { return this.entries(); };
                Map.prototype[iteratorSymbol] = function () { return this.entries(); };
                Map.prototype._find = function (key, insert) {
                    if (this._cacheKey !== key) {
                        this._cacheIndex = this._keys.indexOf(this._cacheKey = key);
                    }
                    if (this._cacheIndex < 0 && insert) {
                        this._cacheIndex = this._keys.length;
                        this._keys.push(key);
                        this._values.push(undefined);
                    }
                    return this._cacheIndex;
                };
                return Map;
            }());
            function getKey(key, _) {
                return key;
            }
            function getValue(_, value) {
                return value;
            }
            function getEntry(key, value) {
                return [key, value];
            }
        }
        // naive Set shim
        function CreateSetPolyfill() {
            return /** @class */ (function () {
                function Set() {
                    this._map = new _Map();
                }
                Object.defineProperty(Set.prototype, "size", {
                    get: function () { return this._map.size; },
                    enumerable: true,
                    configurable: true
                });
                Set.prototype.has = function (value) { return this._map.has(value); };
                Set.prototype.add = function (value) { return this._map.set(value, value), this; };
                Set.prototype.delete = function (value) { return this._map.delete(value); };
                Set.prototype.clear = function () { this._map.clear(); };
                Set.prototype.keys = function () { return this._map.keys(); };
                Set.prototype.values = function () { return this._map.values(); };
                Set.prototype.entries = function () { return this._map.entries(); };
                Set.prototype["@@iterator"] = function () { return this.keys(); };
                Set.prototype[iteratorSymbol] = function () { return this.keys(); };
                return Set;
            }());
        }
        // naive WeakMap shim
        function CreateWeakMapPolyfill() {
            var UUID_SIZE = 16;
            var keys = HashMap.create();
            var rootKey = CreateUniqueKey();
            return /** @class */ (function () {
                function WeakMap() {
                    this._key = CreateUniqueKey();
                }
                WeakMap.prototype.has = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? HashMap.has(table, this._key) : false;
                };
                WeakMap.prototype.get = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? HashMap.get(table, this._key) : undefined;
                };
                WeakMap.prototype.set = function (target, value) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ true);
                    table[this._key] = value;
                    return this;
                };
                WeakMap.prototype.delete = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? delete table[this._key] : false;
                };
                WeakMap.prototype.clear = function () {
                    // NOTE: not a real clear, just makes the previous data unreachable
                    this._key = CreateUniqueKey();
                };
                return WeakMap;
            }());
            function CreateUniqueKey() {
                var key;
                do
                    key = "@@WeakMap@@" + CreateUUID();
                while (HashMap.has(keys, key));
                keys[key] = true;
                return key;
            }
            function GetOrCreateWeakMapTable(target, create) {
                if (!hasOwn.call(target, rootKey)) {
                    if (!create)
                        return undefined;
                    Object.defineProperty(target, rootKey, { value: HashMap.create() });
                }
                return target[rootKey];
            }
            function FillRandomBytes(buffer, size) {
                for (var i = 0; i < size; ++i)
                    buffer[i] = Math.random() * 0xff | 0;
                return buffer;
            }
            function GenRandomBytes(size) {
                if (typeof Uint8Array === "function") {
                    if (typeof crypto !== "undefined")
                        return crypto.getRandomValues(new Uint8Array(size));
                    if (typeof msCrypto !== "undefined")
                        return msCrypto.getRandomValues(new Uint8Array(size));
                    return FillRandomBytes(new Uint8Array(size), size);
                }
                return FillRandomBytes(new Array(size), size);
            }
            function CreateUUID() {
                var data = GenRandomBytes(UUID_SIZE);
                // mark as random - RFC 4122 § 4.4
                data[6] = data[6] & 0x4f | 0x40;
                data[8] = data[8] & 0xbf | 0x80;
                var result = "";
                for (var offset = 0; offset < UUID_SIZE; ++offset) {
                    var byte = data[offset];
                    if (offset === 4 || offset === 6 || offset === 8)
                        result += "-";
                    if (byte < 16)
                        result += "0";
                    result += byte.toString(16).toLowerCase();
                }
                return result;
            }
        }
        // uses a heuristic used by v8 and chakra to force an object into dictionary mode.
        function MakeDictionary(obj) {
            obj.__ = undefined;
            delete obj.__;
            return obj;
        }
    });
})(Reflect || (Reflect = {}));


/***/ }),
/* 45 */
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.deactivate = exports.activate = void 0;
const vscode = __webpack_require__(1);
const VirtualFolderTreeView_1 = __webpack_require__(2);
const classTransformer = __webpack_require__(26);
// let context_global_forPersistence: vscode.ExtensionContext;
// let virtualFolderTreeView_global_forPersistence: VirtualFolderTreeView;
// @messy
// let funcGenerate_SaveNodeStructure: ((det_SaveNodeStructure: boolean) => () => void) | null = null;
// let saveNodeStructure_onExtensionClose: (() => Promise<Record<string, any>>) | null = null;
/**
 * must reset when Extension reload (better make null then ... )
 * @messy @pb can be bad idea, cuz all the instance ref changed ...
 * @messy @pb for undo, use the 2nd last (the last item is the curr state) -- the way how push undo state works (need init push too...)
 */
let arr_nodeRootJsobj_Saves = null;
// let arr_nodeRootJsobj_Saves: string[] | null = null;
const globalStateItemName_VirtualFolderTreeView_RootNode = 'VirtualFolderTreeView_RootNode';
function activate(context) {
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
    arr_nodeRootJsobj_Saves = [];
    // @messy due to Circular dependency is omitted in classTransform & Flatted couldnt help further & hack failed.. 
    function load_and_reconstruct_virtualFolderTreeView_fixParentCircularDep(nodeRootJsobj_Saved) {
        const nodeRoot_Saved = classTransformer.plainToInstance(VirtualFolderTreeView_1.VirtualFolderNodeTypeHolder, nodeRootJsobj_Saved, {
            enableCircularCheck: true,
        });
        function recursiveAssignBackParent(node_parent) {
            for (const node_child of node_parent.getChildren()) {
                node_child.get_virtualFolderNode_debug().node_parent = node_parent;
                recursiveAssignBackParent(node_child);
            }
        }
        recursiveAssignBackParent(nodeRoot_Saved);
        return nodeRoot_Saved;
    }
    function load_virtualFolderTreeView() {
        // let virtualFolderTreeView_i;
        const nodeRootJsobj_Saved = context.globalState.get(globalStateItemName_VirtualFolderTreeView_RootNode);
        if (nodeRootJsobj_Saved === undefined) {
            // const nodeRootJsonStr_Saved_T1 = /* json */ `@¦  {@¦    "collapsibleState": 2,@¦    "label": "root VirtualFolderNode",@¦    "realFileExplorerEntry": null,@¦    "contextValue": "ctxvalueVal_virtualFolder",@¦    "virtualFolderNode": {@¦      "arr_node_child": [@¦        {@¦          "collapsibleState": 2,@¦          "label": "h:\\\\Using\\\\JsParserSub\\\\src - Lv2 RealFileNode Test",@¦          "realFileExplorerEntry": {@¦            "uri": {@¦              "scheme": "file",@¦              "authority": "",@¦              "path": "/h:/Using/JsParserSub/src",@¦              "query": "",@¦              "fragment": "",@¦              "_formatted": null,@¦              "_fsPath": "h:\\\\Using\\\\JsParserSub\\\\src"@¦            },@¦            "type": 2@¦          },@¦          "contextValue": "ctxvalueVal_virtualFolder",@¦          "virtualFolderNode": {@¦            "arr_node_child": [],@¦            "name": "h:\\\\Using\\\\JsParserSub\\\\src - Lv2 RealFileNode Test"@¦          }@¦        },@¦        {@¦          "collapsibleState": 0,@¦          "label": "h:\\\\Using\\\\JsParserSub\\\\tsconfig.json - Lv2 RealFileNode Test",@¦          "realFileExplorerEntry": {@¦            "uri": {@¦              "scheme": "file",@¦              "authority": "",@¦              "path": "/h:/Using/JsParserSub/tsconfig.json",@¦              "query": "",@¦              "fragment": "",@¦              "_formatted": null,@¦              "_fsPath": "h:\\\\Using\\\\JsParserSub\\\\tsconfig.json"@¦            },@¦            "type": 1@¦          },@¦          "contextValue": "ctxvalueVal_virtualFolder",@¦          "virtualFolderNode": {@¦            "arr_node_child": [],@¦            "name": "h:\\\\Using\\\\JsParserSub\\\\tsconfig.json - Lv2 RealFileNode Test"@¦          }@¦        },@¦        {@¦          "collapsibleState": 0,@¦          "label": "Lv2 VirtualFileNode Test",@¦          "realFileExplorerEntry": null,@¦          "contextValue": "ctxvalueVal_virtualFolder",@¦          "virtualFolderNode": {@¦            "arr_node_child": [],@¦            "name": "Lv2 VirtualFileNode Test"@¦          }@¦        },@¦        {@¦          "collapsibleState": 1,@¦          "label": "Lv2 VirtualFileNode Collapsed Test",@¦          "realFileExplorerEntry": null,@¦          "contextValue": "ctxvalueVal_virtualFolder",@¦          "virtualFolderNode": {@¦            "arr_node_child": [],@¦            "name": "Lv2 VirtualFileNode Collapsed Test"@¦          }@¦        }@¦      ],@¦      "node_parent": null,@¦      "name": "root VirtualFolderNode"@¦    }@¦  }`;
            // const nodeRoot_Saved = classTransformer.plainToInstance(VirtualFolderNodeTypeHolder, JSON.parse(nodeRootJsonStr_Saved_T1) as { length?: never }, {
            return new VirtualFolderTreeView_1.VirtualFolderTreeView();
        }
        else {
            const nodeRoot_Saved = load_and_reconstruct_virtualFolderTreeView_fixParentCircularDep(nodeRootJsobj_Saved);
            return new VirtualFolderTreeView_1.VirtualFolderTreeView(nodeRoot_Saved);
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
    refreshView_and_addToUndoStateList_and_saveNodeStructure(); // init push
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
        context.subscriptions.push(vscode.commands.registerCommand('idVal_virtualFolderTreeView.addEntry', async (node) => {
            // cannot be Entry -- cmd should not activated for that -- det by contextValue
            // node.addChildNode(new VirtualFolderNodeTypeHolder('New_Folder', vscode.TreeItemCollapsibleState.Collapsed));
            const inputText = await vscode.window.showInputBox({
                placeHolder: 'place your folder name here',
                prompt: 'Edit virtual folder name',
                value: 'Folder 1',
            });
            if (inputText !== undefined) {
                node.addChildNode(new VirtualFolderTreeView_1.VirtualFolderNodeTypeHolder(inputText, vscode.TreeItemCollapsibleState.Collapsed));
                refreshView_and_addToUndoStateList_and_saveNodeStructure();
                vscode.window.showInformationMessage(`Executed add :: ${node.label}.`);
            }
        }));
        context.subscriptions.push(vscode.commands.registerCommand('idVal_virtualFolderTreeView.editEntry', async (node) => {
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
                refreshView_and_addToUndoStateList_and_saveNodeStructure(); // well this gen hum
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
        }));
        context.subscriptions.push(vscode.commands.registerCommand('idVal_virtualFolderTreeView.deleteEntry', (node) => {
            node.removeSelf();
            refreshView_and_addToUndoStateList_and_saveNodeStructure();
            // vscode.window.showInformationMessage(`Executed delete :: ${node instanceof VirtualFolderNodeTypeHolder ? node.label : virtualFolderTreeView.getTreeItem(node).label}.`);
            vscode.window.showInformationMessage(`Executed delete :: ${node.label}.`);
        }));
    }
    {
        //
        context.subscriptions.push(vscode.commands.registerCommand('idVal_virtualFolderTreeView.refreshEntry', () => {
            refreshView_and_addToUndoStateList_and_saveNodeStructure();
            // let msg;
            // if (node) {
            //   msg = node instanceof VirtualFolderNodeTypeHolder ? node.label : virtualFolderTreeView.getTreeItem(node).label;
            // } else {
            //   msg = node;
            // }
            // this just nothing passing in guess / wel pb
            vscode.window.showInformationMessage(`Executed refresh.`);
        }));
    }
    // ## fileExplorer.openFile
    {
        // #--<
        context.subscriptions.push(
        // idVal_virtualFolderTreeView.fileExplorer.openFile // dk confliction // but its hardcoded `treeItem.command = { command: 'fileExplorer.openFile', `
        vscode.commands.registerCommand('fileExplorer.openFile', (resource) => {
            // ~~~//copied-modified-from fileExplorer // @messy
            vscode.window.showTextDocument(resource);
        }));
    }
    // ## Cut & Paste
    {
        let node_Clipped = null;
        //
        context.subscriptions.push(vscode.commands.registerCommand('idVal_virtualFolderTreeView.cmd_cut_FileorfolderNode', (node) => {
            if (node instanceof VirtualFolderTreeView_1.VirtualFolderNodeTypeHolder) {
                node_Clipped = node;
                vscode.window.showInformationMessage(`Executed cut :: ${node.label}.`);
            }
            else if (node.uri !== undefined) {
                node_Clipped = node;
                vscode.window.showInformationMessage(`Executed copy instead of cut -- cuz you cannot modify real FileSystem Structure :: ${node.uri}.`);
            }
            else {
                throw new TypeError();
            }
        }));
        context.subscriptions.push(vscode.commands.registerCommand('idVal_virtualFolderTreeView.cmd_paste_FileorfolderNode', (node) => {
            if (node_Clipped === null) {
                vscode.window.showInformationMessage(`[Mistake]: cannot paste, cuz node_Clipped === null.`);
            }
            else {
                if (node instanceof VirtualFolderTreeView_1.VirtualFolderNodeTypeHolder) {
                    // @codepath[normal] paste virtual folder / virtual real mix folder to virtual folder
                    if (node_Clipped instanceof VirtualFolderTreeView_1.VirtualFolderNodeTypeHolder) {
                        node.addChildNode(node_Clipped);
                        const label = node_Clipped.label;
                        node_Clipped = null;
                        refreshView_and_addToUndoStateList_and_saveNodeStructure();
                        vscode.window.showInformationMessage(`Executed paste :: pasted ${label} on ${node.label}.`);
                    }
                    // @pb //? why cut paste fileExplorer.Entry is able to be removed from old parent? ...
                    // @codepath[normal] paste real folder / real real mix file to virtual folder
                    else if (node_Clipped.uri !== undefined) {
                        // here need to check folder or file too .. @check ...
                        let state_CollapsedOr = vscode.TreeItemCollapsibleState.Collapsed;
                        if (node_Clipped.type === vscode.FileType.Directory) {
                            state_CollapsedOr = vscode.TreeItemCollapsibleState.Collapsed;
                        }
                        else if (node_Clipped.type === vscode.FileType.File) {
                            state_CollapsedOr = vscode.TreeItemCollapsibleState.None;
                            // const fsPath = node_Clipped.uri.fsPath;
                            // if (fs.lstatSync(fsPath).isDirectory()) {
                            //   state_CollapsedOr = vscode.TreeItemCollapsibleState.Collapsed;
                            // } else if (fs.lstatSync(fsPath).isFile()) {
                            //   // console.error('>>>>>> file ');
                            //   state_CollapsedOr = vscode.TreeItemCollapsibleState.None;
                        }
                        else {
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
                        node.addChildNode(new VirtualFolderTreeView_1.VirtualFolderNodeTypeHolder(null, state_CollapsedOr, node_Clipped));
                        const uri = node_Clipped.uri;
                        node_Clipped = null;
                        refreshView_and_addToUndoStateList_and_saveNodeStructure();
                        vscode.window.showInformationMessage(`Executed paste :: pasted ${uri} on ${node.label}.`);
                    }
                    else {
                        throw new TypeError();
                    }
                }
                else if (node.uri !== undefined) {
                    vscode.window.showInformationMessage(`[Mistake]: cannot paste -- cuz you cannot modify real FileSystem Structure :: ${node.uri}.`);
                }
                else {
                    throw new TypeError();
                }
            }
        }));
    }
    // ## (Print &) Save & Load
    async function saveNodeStructure(nodeRoot_classTransformer_instanceToPlain_preExist) {
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
        const nodeRoot_classTransformer_instanceToPlain = nodeRoot_classTransformer_instanceToPlain_preExist === undefined
            ? classTransformer.instanceToPlain(virtualFolderTreeView.nodeRoot, {
                enableCircularCheck: true,
            })
            : nodeRoot_classTransformer_instanceToPlain_preExist; // aga seems ?? is not the meaning of; || seems more of ; but syntax just bad ..
        await context.globalState.update(globalStateItemName_VirtualFolderTreeView_RootNode, nodeRoot_classTransformer_instanceToPlain);
        // console.log(`>> saveNodeStructure() ${new Date()}`) // cant exec to this point ...
        return nodeRoot_classTransformer_instanceToPlain;
    }
    // @performance I dont want to, but seem have to bind this to refresh ...
    // @performance dont want to specify Redo Compensation for each -- just restore state much easier ..
    // @pb // undo doesnt work, cuz the state is already changed // if have to sequential programing then not much better than the compensation steps ...
    // ok that just make the steps circular order one back -- take the second last state ..
    function refreshView_and_addToUndoStateList_and_saveNodeStructure() {
        // virtualFolderTreeView.refresh();
        // const nodeRoot_classTransformer_instanceToPlain = classTransformer.instanceToPlain(virtualFolderTreeView.nodeRoot, {
        //   enableCircularCheck: true,
        // });
        // saveNodeStructure(nodeRoot_classTransformer_instanceToPlain); // << yes this is async ...
        // arr_nodeRootJsobj_Saves!.push(nodeRoot_classTransformer_instanceToPlain);
        // // // ~~~~// wish could change the code oreder inside, add list first , dk seems cant (decide)..
        // // (async function saveNodeStructure_and_addToRedoStateList() {
        // //   const nodeRoot_classTransformer_instanceToPlain = await saveNodeStructure(); // << yes this is async ...
        // //   arr_SavedNodeStructureState!.push(nodeRoot_classTransformer_instanceToPlain);
        // // })();
        virtualFolderTreeView.refresh();
        //     const nodeRootJsstrFlatted = flatted.stringify(virtualFolderTreeView.nodeRoot);
        //     const nodeRootJsobjFlatted_Saved = flatted.parse(nodeRootJsstrFlatted);
        //     console.log('>> Flatted.parse(nodeRootJsstrFlatted);');
        //     console.log(nodeRootJsobjFlatted_Saved);
        //     console.log(nodeRootJsobjFlatted_Saved.virtualFolderNode.arr_node_child[0]?.virtualFolderNode.node_parent);
        //     console.log(nodeRootJsobjFlatted_Saved.virtualFolderNode.arr_node_child[0]?.virtualFolderNode.node_parent === nodeRootJsobjFlatted_Saved); // true
        //     // does print true em
        //
        //     const nodeRootJsobjClassTransformer = classTransformer.instanceToPlain(virtualFolderTreeView.nodeRoot, {
        //       enableCircularCheck: true,
        //     });
        //     console.log('>> classTransformer.instanceToPlain(virtualFolderTreeView.nodeRoot, {');
        //     console.log(nodeRootJsobjClassTransformer);
        //     console.log(nodeRootJsobjClassTransformer.virtualFolderNode.arr_node_child[0]?.virtualFolderNode.node_parent); // undefined
        //     console.log(nodeRootJsobjClassTransformer.virtualFolderNode.arr_node_child[0]?.virtualFolderNode.node_parent === nodeRootJsobjClassTransformer); // false
        const nodeRootJsobjClassTransformer = classTransformer.instanceToPlain(virtualFolderTreeView.nodeRoot, {
            enableCircularCheck: true,
        });
        saveNodeStructure(nodeRootJsobjClassTransformer); // << yes this is async ...
        arr_nodeRootJsobj_Saves.push(nodeRootJsobjClassTransformer);
    }
    // @messy
    virtualFolderTreeView.refreshView_and_saveNodeStructure__import_messy = refreshView_and_addToUndoStateList_and_saveNodeStructure;
    function undo_restorePrevSavedNodeStructureState() {
        // arr_nodeRootJsobj_Saves!.pop()
        // // []
        // // As others said, In Javascript `array[-1]` is just a reference to a *member* of `array` indexed by `"-1"` (like `"length"`) that is usually `undefined` (because `array['-1']` is not evaluated to any value).
        // // <>
        // // https://stackoverflow.com/questions/54066261/why-cant-i-do-array-1-in-javascript
        // // ~~~~// ok indeed undefined , good
        // const nodeRootJsobj_Saved = arr_nodeRootJsobj_Saves![arr_nodeRootJsobj_Saves!.length - 1];
        // // @messy: well seems better just allow change of root node better ... (plus all the ref is changed anyways...)
        // // well cstu can be left with .. just leave that ..
        // if (nodeRootJsobj_Saved === undefined) {
        //   vscode.window.showInformationMessage(`[Mistake]: cannot undo, cuz nodeRootJsobj_Saved === undefined.`);
        //   return null;
        // }
        if (arr_nodeRootJsobj_Saves === null) {
            throw new Error('Must initalized when Extension is activated');
        }
        if (arr_nodeRootJsobj_Saves.length === 1) {
            vscode.window.showInformationMessage(`[Mistake]: cannot undo, cuz current state is the Most Beginning state.`);
            return null;
        }
        //     arr_nodeRootJsobj_Saves.pop();
        //     const nodeRootJsobj_Saved = arr_nodeRootJsobj_Saves[arr_nodeRootJsobj_Saves.length - 1];
        //     if (nodeRootJsobj_Saved === undefined) {
        //       throw new TypeError('Not_Reachable cuz length check before');
        //     }
        //
        //     const nodeRoot_Saved = classTransformer.plainToInstance(VirtualFolderNodeTypeHolder, nodeRootJsobj_Saved as { length?: never }, {
        //       enableCircularCheck: true,
        //     });
        //     // just the messy & vs reload extension & ref messed
        //     virtualFolderTreeView.nodeRoot = nodeRoot_Saved;
        //     {
        //       virtualFolderTreeView.refresh(); // Only refresh & save, no undo
        //       saveNodeStructure(nodeRootJsobj_Saved); // << yes this is async ...
        //     }
        //     return nodeRoot_Saved;
        arr_nodeRootJsobj_Saves.pop();
        const nodeRootJsobjClassTransformer_Saved = arr_nodeRootJsobj_Saves[arr_nodeRootJsobj_Saves.length - 1];
        if (nodeRootJsobjClassTransformer_Saved === undefined) {
            throw new TypeError('Not_Reachable cuz length check before');
        }
        // []
        // I know this is documented as the behavior when detecting a circular reference.
        // <>
        // https://github.com/typestack/class-transformer/issues/224
        // em ... // still no solve
        //     const nodeRootJsobjFlatted_Saved = Flatted.parse(nodeRootJsstrFlatted_Saved);
        //     const nodeRoot_Saved = classTransformer.plainToInstance(VirtualFolderNodeTypeHolder, nodeRootJsobjFlatted_Saved as { length?: never }, {
        //       enableCircularCheck: true,
        //     }) as any;
        //
        //     console.log('>> Flatted.parse(nodeRootJsstrFlatted_Saved);');
        //     console.log(nodeRootJsobjFlatted_Saved);
        //     console.log(nodeRootJsobjFlatted_Saved.virtualFolderNode.arr_node_child[0]?.virtualFolderNode.node_parent);
        //     console.log(nodeRootJsobjFlatted_Saved.virtualFolderNode.arr_node_child[0]?.virtualFolderNode.node_parent === nodeRootJsobjFlatted_Saved); // true
        //
        //     console.log('>> classTransformer.plainToInstance(VirtualFolderNodeTypeHolder, nodeRootJsobjFlatted_Saved as { length?: never }, {');
        //     console.log(nodeRoot_Saved);
        //     console.log(nodeRoot_Saved.virtualFolderNode.arr_node_child[0]?.virtualFolderNode.node_parent); // null
        //     console.log(nodeRoot_Saved.virtualFolderNode.arr_node_child[0]?.virtualFolderNode.node_parent === nodeRoot_Saved); // false
        const nodeRoot_Saved = load_and_reconstruct_virtualFolderTreeView_fixParentCircularDep(nodeRootJsobjClassTransformer_Saved);
        // just the messy & vs reload extension & ref messed
        virtualFolderTreeView.nodeRoot = nodeRoot_Saved;
        {
            virtualFolderTreeView.refresh(); // Only refresh & save, no undo
            saveNodeStructure(nodeRootJsobjClassTransformer_Saved); // << yes this is async ...
        }
        return nodeRoot_Saved;
    }
    {
        context.subscriptions.push(vscode.commands.registerCommand('idVal_virtualFolderTreeView.cmd_print_RootVirtualFolderNode_inJson', () => {
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
        }));
        //
        // saveNodeStructure_onExtensionClose = saveNodeStructure; // @messy aga
        // why typescript dont call an error here?  // seem void can take that ...
        context.subscriptions.push(vscode.commands.registerCommand('idVal_virtualFolderTreeView.cmd_save_VirtualFolderStructure', async () => {
            const result = await saveNodeStructure();
            vscode.window.showInformationMessage(`Executed save :: here is the data saved \n\n${JSON.stringify(result, null, 2)}`);
        }));
        context.subscriptions.push(vscode.commands.registerCommand('idVal_virtualFolderTreeView.cmd_restoreToFactory_VirtualFolderStructure', async () => {
            const response = await vscode.window.showInformationMessage('Confirm: Restore to factory?', 'Yes', 'No');
            if (response === 'No' || response === undefined) {
                return;
            }
            else if (response === 'Yes') {
                // []
                // What I wish to do is to find a way to remove the key, not only clear the value.
                // <>
                // https://stackoverflow.com/questions/57845512/remove-useless-keys-from-vscode-extensioncontext-globalstate
                await context.globalState.update(globalStateItemName_VirtualFolderTreeView_RootNode, undefined);
                // saveNodeStructure_onExtensionClose = null; // @messy
                await vscode.commands.executeCommand('idVal_virtualFolderTreeView.reloadExtension');
                vscode.window.showInformationMessage(`Executed restore & reload extension.`);
            }
        }));
        context.subscriptions.push(vscode.commands.registerCommand('idVal_virtualFolderTreeView.cmd_undo_VirtualFolderStructure', () => {
            undo_restorePrevSavedNodeStructureState(); // async ...
        }));
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
        context.subscriptions.push(vscode.commands.registerCommand('idVal_virtualFolderTreeView.reloadExtension', () => {
            deactivate();
            for (const sub of context.subscriptions) {
                sub.dispose();
            }
            activate(context);
        }));
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
exports.activate = activate;
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
function deactivate() {
    // ;not_working; if (saveNodeStructure_onExtensionClose !== null) {
    // ;not_working;   await saveNodeStructure_onExtensionClose();
    // ;not_working; }
}
exports.deactivate = deactivate;
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
// []
// *   The badges provided in the `package.json` may not be SVGs unless they are from [trusted badge providers](https://code.visualstudio.com/api/references/extension-manifest#approved-badges).
// <>
// https://code.visualstudio.com/api/working-with-extensions/publishing-extension
//no_knowlres waste my time 
// seem like that create project is not needed ... just org & token & publisher
// https://stackoverflow.com/questions/9853325/how-to-convert-a-svg-to-a-png-with-imagemagick
// E:\ImageMagick-7.0.10-Q16-HDRI\convert.exe -background none -size 1024x1024 input.svg output.png
// []
// I just ended up using yarn for my vscode extension, while using pnpm for everything else. Hopefully this will be solved soon.
// <>
// https://github.com/microsoft/vscode-vsce/issues/421
// []
// The field in which you set the path to an icon is called `"icon"`. The icon file itself has to be 128x128 pixels.
// <>
// https://stackoverflow.com/questions/42877083/set-icon-or-logo-for-extension-in-vscode
// []
// A `README.md` file at the root of your extension will be used to populate the extension's Marketplace page's contents. `vsce` will modify README links for you in two different ways:
// 
// *   If you add a `repository` field to your `package.json` and it is a public GitHub repository, `vsce` will automatically detect it and adjust relative links accordingly,
// <>
// https://code.visualstudio.com/api/working-with-extensions/publishing-extension

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=extension.js.map