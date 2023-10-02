import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import * as fileExplorer from '../../lib/treeView/fileExplorer';
import * as classTransformer from 'class-transformer';
import 'reflect-metadata';
import * as flatted from 'flatted';
import * as url from 'url';

export class VirtualFolderTreeView
  implements
    vscode.TreeDataProvider<VirtualFolderNodeTypeHolder | fileExplorer.Entry>,
    // https://github.com/microsoft/vscode-extension-samples/blob/main/tree-view-sample/src/testViewDragAndDrop.ts
    // https://stackoverflow.com/questions/51716794/adding-drag-and-drop-support-in-a-custom-treeview
    vscode.TreeDragAndDropController<VirtualFolderNodeTypeHolder | fileExplorer.Entry>
{
  // ;not_helping the indent css bug; , vscode.FileSystemProvider {@¦  // ;not_helping the indent css bug;  private _onDidChangeFile: vscode.EventEmitter<vscode.FileChangeEvent[]>;@¦  // ;not_helping the indent css bug;@¦  // ;not_helping the indent css bug;  constructor() {@¦  // ;not_helping the indent css bug;    this._onDidChangeFile = new vscode.EventEmitter<vscode.FileChangeEvent[]>();@¦  // ;not_helping the indent css bug;  }@¦  // ;not_helping the indent css bug;@¦  // ;not_helping the indent css bug;  get onDidChangeFile(): vscode.Event<vscode.FileChangeEvent[]> {@¦  // ;not_helping the indent css bug;    return this._onDidChangeFile.event;@¦  // ;not_helping the indent css bug;  }@¦  // ;not_helping the indent css bug;@¦  // ;not_helping the indent css bug;  watch(uri: vscode.Uri, options: { recursive: boolean; excludes: string[] }): vscode.Disposable {@¦  // ;not_helping the indent css bug;    const watcher = fs.watch(uri.fsPath, { recursive: options.recursive }, async (event, filename) => {@¦  // ;not_helping the indent css bug;      if (filename) {@¦  // ;not_helping the indent css bug;        const filepath = path.join(uri.fsPath, _.normalizeNFC(filename.toString()));@¦  // ;not_helping the indent css bug;@¦  // ;not_helping the indent css bug;        // TODO support excludes (using minimatch library?)@¦  // ;not_helping the indent css bug;@¦  // ;not_helping the indent css bug;        this._onDidChangeFile.fire([@¦  // ;not_helping the indent css bug;          {@¦  // ;not_helping the indent css bug;            type: event === 'change' ? vscode.FileChangeType.Changed : (await _.exists(filepath)) ? vscode.FileChangeType.Created : vscode.FileChangeType.Deleted,@¦  // ;not_helping the indent css bug;            uri: uri.with({ path: filepath }),@¦  // ;not_helping the indent css bug;          } as vscode.FileChangeEvent,@¦  // ;not_helping the indent css bug;        ]);@¦  // ;not_helping the indent css bug;      }@¦  // ;not_helping the indent css bug;    });@¦  // ;not_helping the indent css bug;@¦  // ;not_helping the indent css bug;    return { dispose: () => watcher.close() };@¦  // ;not_helping the indent css bug;  }@¦  // ;not_helping the indent css bug;@¦  // ;not_helping the indent css bug;  stat(uri: vscode.Uri): vscode.FileStat | Thenable<vscode.FileStat> {@¦  // ;not_helping the indent css bug;    return this._stat(uri.fsPath);@¦  // ;not_helping the indent css bug;  }@¦  // ;not_helping the indent css bug;@¦  // ;not_helping the indent css bug;  async _stat(path: string): Promise<vscode.FileStat> {@¦  // ;not_helping the indent css bug;    return new FileStat(await _.stat(path));@¦  // ;not_helping the indent css bug;  }@¦  // ;not_helping the indent css bug;@¦  // ;not_helping the indent css bug;  readDirectory(uri: vscode.Uri): [string, vscode.FileType][] | Thenable<[string, vscode.FileType][]> {@¦  // ;not_helping the indent css bug;    return this._readDirectory(uri);@¦  // ;not_helping the indent css bug;  }@¦  // ;not_helping the indent css bug;@¦  // ;not_helping the indent css bug;  async _readDirectory(uri: vscode.Uri): Promise<[string, vscode.FileType][]> {@¦  // ;not_helping the indent css bug;    const children = await _.readdir(uri.fsPath);@¦  // ;not_helping the indent css bug;@¦  // ;not_helping the indent css bug;    const result: [string, vscode.FileType][] = [];@¦  // ;not_helping the indent css bug;    for (let i = 0; i < children.length; i++) {@¦  // ;not_helping the indent css bug;      const child = children[i];@¦  // ;not_helping the indent css bug;      const stat = await this._stat(path.join(uri.fsPath, child));@¦  // ;not_helping the indent css bug;      result.push([child, stat.type]);@¦  // ;not_helping the indent css bug;    }@¦  // ;not_helping the indent css bug;@¦  // ;not_helping the indent css bug;    return Promise.resolve(result);@¦  // ;not_helping the indent css bug;  }@¦  // ;not_helping the indent css bug;@¦  // ;not_helping the indent css bug;  createDirectory(uri: vscode.Uri): void | Thenable<void> {@¦  // ;not_helping the indent css bug;    return _.mkdir(uri.fsPath);@¦  // ;not_helping the indent css bug;  }@¦  // ;not_helping the indent css bug;@¦  // ;not_helping the indent css bug;  readFile(uri: vscode.Uri): Uint8Array | Thenable<Uint8Array> {@¦  // ;not_helping the indent css bug;    return _.readfile(uri.fsPath);@¦  // ;not_helping the indent css bug;  }@¦  // ;not_helping the indent css bug;@¦  // ;not_helping the indent css bug;  writeFile(uri: vscode.Uri, content: Uint8Array, options: { create: boolean; overwrite: boolean }): void | Thenable<void> {@¦  // ;not_helping the indent css bug;    return this._writeFile(uri, content, options);@¦  // ;not_helping the indent css bug;  }@¦  // ;not_helping the indent css bug;@¦  // ;not_helping the indent css bug;  async _writeFile(uri: vscode.Uri, content: Uint8Array, options: { create: boolean; overwrite: boolean }): Promise<void> {@¦  // ;not_helping the indent css bug;    const exists = await _.exists(uri.fsPath);@¦  // ;not_helping the indent css bug;    if (!exists) {@¦  // ;not_helping the indent css bug;      if (!options.create) {@¦  // ;not_helping the indent css bug;        throw vscode.FileSystemError.FileNotFound();@¦  // ;not_helping the indent css bug;      }@¦  // ;not_helping the indent css bug;@¦  // ;not_helping the indent css bug;      await _.mkdir(path.dirname(uri.fsPath));@¦  // ;not_helping the indent css bug;    } else {@¦  // ;not_helping the indent css bug;      if (!options.overwrite) {@¦  // ;not_helping the indent css bug;        throw vscode.FileSystemError.FileExists();@¦  // ;not_helping the indent css bug;      }@¦  // ;not_helping the indent css bug;    }@¦  // ;not_helping the indent css bug;@¦  // ;not_helping the indent css bug;    return _.writefile(uri.fsPath, content as Buffer);@¦  // ;not_helping the indent css bug;  }@¦  // ;not_helping the indent css bug;@¦  // ;not_helping the indent css bug;  delete(uri: vscode.Uri, options: { recursive: boolean }): void | Thenable<void> {@¦  // ;not_helping the indent css bug;    if (options.recursive) {@¦  // ;not_helping the indent css bug;      return _.rmrf(uri.fsPath);@¦  // ;not_helping the indent css bug;    }@¦  // ;not_helping the indent css bug;@¦  // ;not_helping the indent css bug;    return _.unlink(uri.fsPath);@¦  // ;not_helping the indent css bug;  }@¦  // ;not_helping the indent css bug;@¦  // ;not_helping the indent css bug;  rename(oldUri: vscode.Uri, newUri: vscode.Uri, options: { overwrite: boolean }): void | Thenable<void> {@¦  // ;not_helping the indent css bug;    return this._rename(oldUri, newUri, options);@¦  // ;not_helping the indent css bug;  }@¦  // ;not_helping the indent css bug;@¦  // ;not_helping the indent css bug;  async _rename(oldUri: vscode.Uri, newUri: vscode.Uri, options: { overwrite: boolean }): Promise<void> {@¦  // ;not_helping the indent css bug;    const exists = await _.exists(newUri.fsPath);@¦  // ;not_helping the indent css bug;    if (exists) {@¦  // ;not_helping the indent css bug;      if (!options.overwrite) {@¦  // ;not_helping the indent css bug;        throw vscode.FileSystemError.FileExists();@¦  // ;not_helping the indent css bug;      } else {@¦  // ;not_helping the indent css bug;        await _.rmrf(newUri.fsPath);@¦  // ;not_helping the indent css bug;      }@¦  // ;not_helping the indent css bug;    }@¦  // ;not_helping the indent css bug;@¦  // ;not_helping the indent css bug;    const parentExists = await _.exists(path.dirname(newUri.fsPath));@¦  // ;not_helping the indent css bug;    if (!parentExists) {@¦  // ;not_helping the indent css bug;      await _.mkdir(path.dirname(newUri.fsPath));@¦  // ;not_helping the indent css bug;    }@¦  // ;not_helping the indent css bug;@¦  // ;not_helping the indent css bug;    return _.rename(oldUri.fsPath, newUri.fsPath);@¦  // ;not_helping the indent css bug;  }

  // ########################
  // ########################
  // ########################

  getTreeItem(node: VirtualFolderNodeTypeHolder | fileExplorer.Entry): vscode.TreeItem {
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
      } else {
        // const fsPath = node.realFileExplorerEntry.uri.fsPath;
        // if (fs.lstatSync(fsPath).isDirectory()) {
        if (node.realFileExplorerEntry.type === vscode.FileType.Directory) {
          return node; // delegate to virtual real mix folder to deal with
        } else if (node.realFileExplorerEntry.type === vscode.FileType.File) {
          // // if (node.realFileExplorerEntry.type !== vscode.FileType.File) {
          // //   throw new TypeError('???');
          // // }
          // return getTreeItem_fileExplorer_static(node.realFileExplorerEntry);
          // // return new VirtualFolderNodeTypeHolder('Test css Aligh', vscode.TreeItemCollapsibleState.None);
          return this.fileSystemProvider.getTreeItem(node.realFileExplorerEntry);
        } else {
          throw new TypeError();
        }
      }
    } else if ((node as fileExplorer.Entry).uri !== undefined) {
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
    } else if (node === undefined || node === null) {
      // console.error('>> getTreeItem() ' + `why is this undefined? ${node}`);
      // const treeItem = new vscode.TreeItem('undefined node testing', vscode.TreeItemCollapsibleState.Expanded);
      // treeItem.contextValue = 'undefined_node';
      // return treeItem;
      // return this.nodeRoot;
      // // Type 'VirtualFolderNodeTypeHolder | undefined' is not assignable to type 'TreeItem'.
      // // ~~~// that may explain it ... ~~~// aga those think of special null hum      // doc missing_details..
      throw new TypeError('why is this undefined || null? I think this is the root node & you should initalize it first?');
    } else {
      throw new TypeError();
    }
  }

  public nodeRoot: VirtualFolderNodeTypeHolder = new VirtualFolderNodeTypeHolder('root VirtualFolderNode', vscode.TreeItemCollapsibleState.Expanded);
  // /**
  //  * @deprecated better private not public...
  //  */
  private readonly fileSystemProvider = new fileExplorer.FileSystemProvider();

  // // seems only have Static initialization blocks, not instance initialization block typescript ...
  // constructor() {
  // } // maybe better regi in extention ...

  /**
   * for persistance & restore only
   * @param nodeRoot
   */
  constructor(nodeRoot?: VirtualFolderNodeTypeHolder) {
    if (nodeRoot !== undefined) {
      this.nodeRoot = nodeRoot;
    }
  }

  async getChildren(node: VirtualFolderNodeTypeHolder | fileExplorer.Entry): Promise<(VirtualFolderNodeTypeHolder | fileExplorer.Entry)[]> {
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
      async function getWorkspaceFolders(): Promise<fileExplorer.Entry[]> {
        if (vscode.workspace.workspaceFolders !== undefined) {
          return (
            vscode.workspace.workspaceFolders
              // .filter((folder) => folder.uri !== undefined) // dk why need this
              .filter((folder) => folder.uri.scheme === 'file')
              .map((folder) => ({ uri: vscode.Uri.file(folder.uri.fsPath), type: vscode.FileType.Directory }))
          );
        } else {
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
    } else if (node instanceof VirtualFolderNodeTypeHolder) {
      // ~~~~// (no need mix type?)
      if (node.realFileExplorerEntry === null) {
        // if (node.isVirtualFolderNode()) {
        return node.getChildren();
      } else {
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
    } else if ((node as fileExplorer.Entry).uri !== undefined) {
      // ~~~//copied-modified-from fileExplorer // @messy
      // @pb: should I use new onoe / search in the root tree for reference?
      // actually .. should have only one outside ...
      // that design of `  private static initRealFileandfolder(name: string, c` is problematic
      return await this.fileSystemProvider.getChildren(node);
      // FileExplorerEntry does get passed in here , not as the VirtualFolderNodeTypeHolder .. hum -- well once that getTreeItem thing then, but the not need ref to get inside so?
    } else {
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
  private _onDidChangeTreeData = new vscode.EventEmitter<VirtualFolderNodeTypeHolder | fileExplorer.Entry | undefined | void>();
  readonly onDidChangeTreeData: vscode.Event<VirtualFolderNodeTypeHolder | fileExplorer.Entry | undefined | void> = this._onDidChangeTreeData.event;
  refresh(): void {
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
  dragMimeTypes: readonly string[] = ['application/vnd.code.tree.idval_virtualfoldertreeview']; // , 'text/uri-list'];
  dropMimeTypes: readonly string[] = ['application/vnd.code.tree.idval_virtualfoldertreeview', 'text/uri-list'];
  // TODO allow drop from Window FileSystem ... -- so any file

  private readonly arr_node_Clipped: (VirtualFolderNodeTypeHolder | fileExplorer.Entry)[] = [];
  /**
   * must pass in before drag & drop
   */
  public refreshView_and_saveNodeStructure__import_messy: (() => void) | null = null; // @messy

  // do I need async?
  handleDrag(source: readonly (VirtualFolderNodeTypeHolder | fileExplorer.Entry)[], dataTransfer: vscode.DataTransfer, token: vscode.CancellationToken): void | Thenable<void> {
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
  handleDrop(target: VirtualFolderNodeTypeHolder | fileExplorer.Entry | undefined, dataTransfer: vscode.DataTransfer, token: vscode.CancellationToken): void | Thenable<void> {
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
    } else if (target instanceof VirtualFolderNodeTypeHolder) {
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
      let transferItem: vscode.DataTransferItem | undefined;
      // ## drag and drop for Virtual Folder Tree View only
      if ((transferItem = dataTransfer.get('application/vnd.code.tree.idval_virtualfoldertreeview'))) {
        transferItem; // by design, this has no use here... @messy
        // console.log(`if ((transferItem = dataTransfer.get('application/vnd.code.tree.idval_virtualfoldertreeview'))) {`);
        // console.log(transferItem);
        for (const node_Clipped of this.arr_node_Clipped) {
          if (node_Clipped instanceof VirtualFolderNodeTypeHolder) {
            if (target.realFileExplorerEntry === null) {
              target.addChildNode(node_Clipped);
            } else {
              // TODO if drop at a real file, its gone ....
              console.error('Target is fileExplorer.Entry, cannot drop.');
            }
          } else if ((node_Clipped as fileExplorer.Entry).uri !== undefined) {
            let state_CollapsedOr: vscode.TreeItemCollapsibleState;
            if (node_Clipped.type === vscode.FileType.Directory) {
              state_CollapsedOr = vscode.TreeItemCollapsibleState.Collapsed;
            } else if (node_Clipped.type === vscode.FileType.File) {
              state_CollapsedOr = vscode.TreeItemCollapsibleState.None;
            } else {
              throw new TypeError();
            }
            target.addChildNode(new VirtualFolderNodeTypeHolder(null, state_CollapsedOr, node_Clipped));
          } else {
            throw new TypeError();
          }
        }
        this.arr_node_Clipped.length = 0;
        // this.refresh(); // must call save too ...
        this.refreshView_and_saveNodeStructure__import_messy!();
      } 
      // ## add support to drag and drop from other file explorers
      else if ((transferItem = dataTransfer.get('text/uri-list'))) {
        // console.log(`} else if ((transferItem = dataTransfer.get('text/uri-list'))) {`)
        // console.log(transferItem);

        if (this.arr_node_Clipped.length !== 0) {
          throw new Error('Should be 0, nothing should be in the clipboard -- cuz this is not from the Virtual Folder Tree View');
        }

        // const arr_pathUri = transferItem.value as string[];
        const arrStr_pathUri = transferItem.value as string;
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

          let state_CollapsedOr: vscode.TreeItemCollapsibleState;
          let fileType: vscode.FileType;
          if (fs.lstatSync(pathFile).isDirectory()) {
            state_CollapsedOr = vscode.TreeItemCollapsibleState.Collapsed;
            fileType = vscode.FileType.Directory;
          } else if (fs.lstatSync(pathFile).isFile()) {
            state_CollapsedOr = vscode.TreeItemCollapsibleState.None;
            fileType = vscode.FileType.File;
          } else {
            throw new TypeError();
          }
          target.addChildNode(
            new VirtualFolderNodeTypeHolder(null, state_CollapsedOr, {
              // uri: vscode.Uri.parse(path), // seems use parse not file
              uri: vscode.Uri.file(pathFile),
              type: fileType,
            })
          );
        }
        this.refreshView_and_saveNodeStructure__import_messy!();
      } else {
        throw new TypeError();
      }
    } else if ((target as fileExplorer.Entry).uri !== undefined) {
      this.arr_node_Clipped.length = 0;
      console.error('Targe is fileExplorer.Entry, cannot drop.');
    } else {
      this.arr_node_Clipped.length = 0;
      throw new TypeError();
    }
  }
}

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
export class VirtualFolderNodeTypeHolder extends vscode.TreeItem {
  // https://stackoverflow.com/questions/28513780/final-keyword-in-typescript

  /**
   * @underlying node for folder structure
   */
  //     // https://github.com/typestack/class-transformer/issues/1584
  //     // ~~~// dk & that offline
  //     "experimentalDecorators": true
  // https://stackoverflow.com/questions/36446480/typescript-decorator-reports-unable-to-resolve-signature-of-class-decorator-whe
  @classTransformer.Type(() => VirtualFolderNode)
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
  private readonly virtualFolderNode: VirtualFolderNode;

  /**
   * @deprecated Only for debug (well @messy ...)
   */
  public get_virtualFolderNode_debug(): VirtualFolderNode {
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
  @classTransformer.Transform((tinfo) => {
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
    const value = tinfo.value as fileExplorer.Entry;
    if (value === undefined) {
      throw new TypeError('realFileExplorerEntry cannot be undefined');
    }
    if (value !== null) {
      return {
        uri: vscode.Uri.file(value.uri.path),
        type: value.type,
      };
    } else {
      return null;
    }
    // `} else {       return null;     }` this welll ..

    // `@Transform((tinfo): fileExplorer.Entry | null => {` seems cannot, cuz other way transformation
  })
  public readonly realFileExplorerEntry: fileExplorer.Entry | null = null;

  constructor(name: string | null, collapsibleState: vscode.TreeItemCollapsibleState, realFileExplorerEntry?: fileExplorer.Entry) {
    // fix name when null
    {
      if (name === null) {
        if (realFileExplorerEntry !== undefined) {
          name = realFileExplorerEntry.uri.fsPath;
        } else {
          throw new Error('name cannot be null');
        }
      } else {
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
  addChildNode(child: VirtualFolderNodeTypeHolder) {
    // when move, need ori parent to remove the link too ...
    // child.virtualFolderNode.node_parent?.removeChildNode(child);
    if (child.virtualFolderNode.node_parent === null) {
      // @do_nothing
    } else if (child.virtualFolderNode.node_parent === undefined) {
      throw new TypeError('maybe: classtransformer ignores circular dependency, so the parent is undefined (in jsobj) / default to null (in class)?'); // remains default value -- null'); // not become undefined .. // actuall idk seems null.. not string Circular either so ..
      // actually if js obj its undefined, if class is default value ...
    } else {
      child.virtualFolderNode.node_parent.removeChildNode(child);
    }
    child.virtualFolderNode.node_parent = this;
    this.virtualFolderNode.arr_node_child.push(child);
  }

  private removeChildNode(child: VirtualFolderNodeTypeHolder) {
    // []
    // Find the `index` of the array element you want to remove using [`indexOf`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf), and then remove that index with [`splice`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/splice).
    // <>
    // https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array-in-javascript
    // ~~~// why I never knew this ...
    const index = this.virtualFolderNode.arr_node_child.indexOf(child);
    if (index > -1) {
      this.virtualFolderNode.arr_node_child.splice(index, 1);
      return true;
    } else {
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

class VirtualFolderNode {
  /**
   * @deprecated not much of use... but for common sense leave it here ....
   */
  public readonly name: string;
  @classTransformer.Type(() => VirtualFolderNodeTypeHolder)
  public readonly arr_node_child: VirtualFolderNodeTypeHolder[] = [];

  // // []
  //   // ## [How does it handle circular references?](https://github.com/typestack/class-transformer#how-does-it-handle-circular-references)[⬆](https://github.com/typestack/class-transformer#table-of-contents)
  //   //
  //   // Circular references are ignored. For example, if you are transforming class `User` that contains property `photos` with type of `Photo`, and `Photo` contains link `user` to its parent `User`, then `user` will be ignored during transformation. Circular references are not ignored only during `classToClass` operation.
  //   // <>
  //   // https://github.com/typestack/class-transformer
  //   // TODO Restored items seems not able to constructe the parent?... thus not removing itself
  @classTransformer.Type(() => VirtualFolderNodeTypeHolder)
  public node_parent: VirtualFolderNodeTypeHolder | null = null;

  constructor(name: string) {
    this.name = name;
  }
}
