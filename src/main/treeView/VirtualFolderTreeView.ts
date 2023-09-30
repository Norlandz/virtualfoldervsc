import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import * as fileExplorer from '../../lib/treeView/fileExplorer';

export class VirtualFolderTreeView implements vscode.TreeDataProvider<VirtualFolderNodeTypeHolder | fileExplorer.Entry> {
  // ;not_helping the indent css bug; , vscode.FileSystemProvider {@¦  // ;not_helping the indent css bug;  private _onDidChangeFile: vscode.EventEmitter<vscode.FileChangeEvent[]>;@¦  // ;not_helping the indent css bug;@¦  // ;not_helping the indent css bug;  constructor() {@¦  // ;not_helping the indent css bug;    this._onDidChangeFile = new vscode.EventEmitter<vscode.FileChangeEvent[]>();@¦  // ;not_helping the indent css bug;  }@¦  // ;not_helping the indent css bug;@¦  // ;not_helping the indent css bug;  get onDidChangeFile(): vscode.Event<vscode.FileChangeEvent[]> {@¦  // ;not_helping the indent css bug;    return this._onDidChangeFile.event;@¦  // ;not_helping the indent css bug;  }@¦  // ;not_helping the indent css bug;@¦  // ;not_helping the indent css bug;  watch(uri: vscode.Uri, options: { recursive: boolean; excludes: string[] }): vscode.Disposable {@¦  // ;not_helping the indent css bug;    const watcher = fs.watch(uri.fsPath, { recursive: options.recursive }, async (event, filename) => {@¦  // ;not_helping the indent css bug;      if (filename) {@¦  // ;not_helping the indent css bug;        const filepath = path.join(uri.fsPath, _.normalizeNFC(filename.toString()));@¦  // ;not_helping the indent css bug;@¦  // ;not_helping the indent css bug;        // TODO support excludes (using minimatch library?)@¦  // ;not_helping the indent css bug;@¦  // ;not_helping the indent css bug;        this._onDidChangeFile.fire([@¦  // ;not_helping the indent css bug;          {@¦  // ;not_helping the indent css bug;            type: event === 'change' ? vscode.FileChangeType.Changed : (await _.exists(filepath)) ? vscode.FileChangeType.Created : vscode.FileChangeType.Deleted,@¦  // ;not_helping the indent css bug;            uri: uri.with({ path: filepath }),@¦  // ;not_helping the indent css bug;          } as vscode.FileChangeEvent,@¦  // ;not_helping the indent css bug;        ]);@¦  // ;not_helping the indent css bug;      }@¦  // ;not_helping the indent css bug;    });@¦  // ;not_helping the indent css bug;@¦  // ;not_helping the indent css bug;    return { dispose: () => watcher.close() };@¦  // ;not_helping the indent css bug;  }@¦  // ;not_helping the indent css bug;@¦  // ;not_helping the indent css bug;  stat(uri: vscode.Uri): vscode.FileStat | Thenable<vscode.FileStat> {@¦  // ;not_helping the indent css bug;    return this._stat(uri.fsPath);@¦  // ;not_helping the indent css bug;  }@¦  // ;not_helping the indent css bug;@¦  // ;not_helping the indent css bug;  async _stat(path: string): Promise<vscode.FileStat> {@¦  // ;not_helping the indent css bug;    return new FileStat(await _.stat(path));@¦  // ;not_helping the indent css bug;  }@¦  // ;not_helping the indent css bug;@¦  // ;not_helping the indent css bug;  readDirectory(uri: vscode.Uri): [string, vscode.FileType][] | Thenable<[string, vscode.FileType][]> {@¦  // ;not_helping the indent css bug;    return this._readDirectory(uri);@¦  // ;not_helping the indent css bug;  }@¦  // ;not_helping the indent css bug;@¦  // ;not_helping the indent css bug;  async _readDirectory(uri: vscode.Uri): Promise<[string, vscode.FileType][]> {@¦  // ;not_helping the indent css bug;    const children = await _.readdir(uri.fsPath);@¦  // ;not_helping the indent css bug;@¦  // ;not_helping the indent css bug;    const result: [string, vscode.FileType][] = [];@¦  // ;not_helping the indent css bug;    for (let i = 0; i < children.length; i++) {@¦  // ;not_helping the indent css bug;      const child = children[i];@¦  // ;not_helping the indent css bug;      const stat = await this._stat(path.join(uri.fsPath, child));@¦  // ;not_helping the indent css bug;      result.push([child, stat.type]);@¦  // ;not_helping the indent css bug;    }@¦  // ;not_helping the indent css bug;@¦  // ;not_helping the indent css bug;    return Promise.resolve(result);@¦  // ;not_helping the indent css bug;  }@¦  // ;not_helping the indent css bug;@¦  // ;not_helping the indent css bug;  createDirectory(uri: vscode.Uri): void | Thenable<void> {@¦  // ;not_helping the indent css bug;    return _.mkdir(uri.fsPath);@¦  // ;not_helping the indent css bug;  }@¦  // ;not_helping the indent css bug;@¦  // ;not_helping the indent css bug;  readFile(uri: vscode.Uri): Uint8Array | Thenable<Uint8Array> {@¦  // ;not_helping the indent css bug;    return _.readfile(uri.fsPath);@¦  // ;not_helping the indent css bug;  }@¦  // ;not_helping the indent css bug;@¦  // ;not_helping the indent css bug;  writeFile(uri: vscode.Uri, content: Uint8Array, options: { create: boolean; overwrite: boolean }): void | Thenable<void> {@¦  // ;not_helping the indent css bug;    return this._writeFile(uri, content, options);@¦  // ;not_helping the indent css bug;  }@¦  // ;not_helping the indent css bug;@¦  // ;not_helping the indent css bug;  async _writeFile(uri: vscode.Uri, content: Uint8Array, options: { create: boolean; overwrite: boolean }): Promise<void> {@¦  // ;not_helping the indent css bug;    const exists = await _.exists(uri.fsPath);@¦  // ;not_helping the indent css bug;    if (!exists) {@¦  // ;not_helping the indent css bug;      if (!options.create) {@¦  // ;not_helping the indent css bug;        throw vscode.FileSystemError.FileNotFound();@¦  // ;not_helping the indent css bug;      }@¦  // ;not_helping the indent css bug;@¦  // ;not_helping the indent css bug;      await _.mkdir(path.dirname(uri.fsPath));@¦  // ;not_helping the indent css bug;    } else {@¦  // ;not_helping the indent css bug;      if (!options.overwrite) {@¦  // ;not_helping the indent css bug;        throw vscode.FileSystemError.FileExists();@¦  // ;not_helping the indent css bug;      }@¦  // ;not_helping the indent css bug;    }@¦  // ;not_helping the indent css bug;@¦  // ;not_helping the indent css bug;    return _.writefile(uri.fsPath, content as Buffer);@¦  // ;not_helping the indent css bug;  }@¦  // ;not_helping the indent css bug;@¦  // ;not_helping the indent css bug;  delete(uri: vscode.Uri, options: { recursive: boolean }): void | Thenable<void> {@¦  // ;not_helping the indent css bug;    if (options.recursive) {@¦  // ;not_helping the indent css bug;      return _.rmrf(uri.fsPath);@¦  // ;not_helping the indent css bug;    }@¦  // ;not_helping the indent css bug;@¦  // ;not_helping the indent css bug;    return _.unlink(uri.fsPath);@¦  // ;not_helping the indent css bug;  }@¦  // ;not_helping the indent css bug;@¦  // ;not_helping the indent css bug;  rename(oldUri: vscode.Uri, newUri: vscode.Uri, options: { overwrite: boolean }): void | Thenable<void> {@¦  // ;not_helping the indent css bug;    return this._rename(oldUri, newUri, options);@¦  // ;not_helping the indent css bug;  }@¦  // ;not_helping the indent css bug;@¦  // ;not_helping the indent css bug;  async _rename(oldUri: vscode.Uri, newUri: vscode.Uri, options: { overwrite: boolean }): Promise<void> {@¦  // ;not_helping the indent css bug;    const exists = await _.exists(newUri.fsPath);@¦  // ;not_helping the indent css bug;    if (exists) {@¦  // ;not_helping the indent css bug;      if (!options.overwrite) {@¦  // ;not_helping the indent css bug;        throw vscode.FileSystemError.FileExists();@¦  // ;not_helping the indent css bug;      } else {@¦  // ;not_helping the indent css bug;        await _.rmrf(newUri.fsPath);@¦  // ;not_helping the indent css bug;      }@¦  // ;not_helping the indent css bug;    }@¦  // ;not_helping the indent css bug;@¦  // ;not_helping the indent css bug;    const parentExists = await _.exists(path.dirname(newUri.fsPath));@¦  // ;not_helping the indent css bug;    if (!parentExists) {@¦  // ;not_helping the indent css bug;      await _.mkdir(path.dirname(newUri.fsPath));@¦  // ;not_helping the indent css bug;    }@¦  // ;not_helping the indent css bug;@¦  // ;not_helping the indent css bug;    return _.rename(oldUri.fsPath, newUri.fsPath);@¦  // ;not_helping the indent css bug;  }

  // ########################
  // ########################
  // ########################

  getTreeItem(node: VirtualFolderNodeTypeHolder | fileExplorer.Entry): vscode.TreeItem {
    console.log(`>> getTreeItem() ${node}`);

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

  public readonly nodeRoot: VirtualFolderNodeTypeHolder = new VirtualFolderNodeTypeHolder('root VirtualFolderNode', vscode.TreeItemCollapsibleState.Expanded);
  // /**
  //  * @deprecated better private not public...
  //  */
  private readonly fileSystemProvider = new fileExplorer.FileSystemProvider();

  // // seems only have Static initialization blocks, not instance initialization block typescript ...
  // constructor() {
  // } // maybe better regi in extention ...

  // /**
  //  * for persistance & restore only
  //  * @param nodeRoot
  //  */
  // constructor(nodeRoot?: VirtualFolderNodeTypeHolder) {
  //   if (nodeRoot !== undefined) {
  //     this.nodeRoot = nodeRoot;
  //   }
  // }

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
      // ;debug,test;
      // ;debug,test;      this.nodeRoot.addChildNode(
      // ;debug,test;        new VirtualFolderNodeTypeHolder(
      // ;debug,test;          'Lv2 RealFileNode Test', //
      // ;debug,test;          vscode.TreeItemCollapsibleState.Expanded,
      // ;debug,test;          {
      // ;debug,test;            uri: vscode.Uri.file('h:\\Using\\JsParserSub\\src'),
      // ;debug,test;            type: vscode.FileType.Directory,
      // ;debug,test;          }
      // ;debug,test;        )
      // ;debug,test;      );
      // ;debug,test;
      // ;debug,test;      this.nodeRoot.addChildNode(
      // ;debug,test;        new VirtualFolderNodeTypeHolder(
      // ;debug,test;          'Lv2 RealFileNode Test', //
      // ;debug,test;          vscode.TreeItemCollapsibleState.None, // that proves is not related to this pb then ..
      // ;debug,test;          {
      // ;debug,test;            uri: vscode.Uri.file('h:\\Using\\JsParserSub\\tsconfig.json'),
      // ;debug,test;            type: vscode.FileType.File,
      // ;debug,test;          }
      // ;debug,test;        )
      // ;debug,test;      );
      // ;debug,test;
      // ;debug,test;      this.nodeRoot.addChildNode(
      // ;debug,test;        new VirtualFolderNodeTypeHolder(
      // ;debug,test;          'Lv2 VirtualFileNode Test', //
      // ;debug,test;          vscode.TreeItemCollapsibleState.None
      // ;debug,test;        )
      // ;debug,test;      );
      // ;debug,test;
      // ;debug,test;      this.nodeRoot.addChildNode(
      // ;debug,test;        new VirtualFolderNodeTypeHolder(
      // ;debug,test;          'Lv2 VirtualFileNode Collapsed Test', //
      // ;debug,test;          vscode.TreeItemCollapsibleState.Collapsed
      // ;debug,test;        )
      // ;debug,test;      );

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

  // ####

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
  private readonly virtualFolderNode: VirtualFolderNode;
  /**
   * reference to realFileExplorerEntry
   * @rule:
   * - can coexist virtual folder & real folder (bit messy & complex)
   *   (but only at this level, but no further down -- cuz internal of FileExplorer doesnt allow -- unless I rewrite it)
   * - cannot coexit virtual folder & real file
   *   -- real file wil take over
   */
  public readonly realFileExplorerEntry: fileExplorer.Entry | null = null;

  constructor(name: string | null, collapsibleState: vscode.TreeItemCollapsibleState, realFileExplorerEntry?: fileExplorer.Entry) {
    // fix name when null
    if (name === null) {
      if (realFileExplorerEntry !== undefined) {
        name = realFileExplorerEntry.uri.fsPath;
      } else {
        throw new Error('name cannot be null');
      }
    }
    if (realFileExplorerEntry !== undefined) {
      name = realFileExplorerEntry.uri.fsPath + ' - ' + name;
    }

    //
    super(name, collapsibleState);
    this.virtualFolderNode = new VirtualFolderNode(name);
    if (realFileExplorerEntry !== undefined) {
      this.realFileExplorerEntry = realFileExplorerEntry;
      // seems no right side Nullish coalescing assignment? ... . can add, but those syntax sugar just mess things
    }
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
    child.virtualFolderNode.node_parent?.removeChildNode(child);
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

  iconPath = {
    light: path.join(__filename, '..', '..', 'resources', 'light', 'dependency.svg'),
    dark: path.join(__filename, '..', '..', 'resources', 'dark', 'dependency.svg'),
  };
}

class VirtualFolderNode {
  /**
   * @deprecated not much of use... but for common sense leave it here ....
   */
  public readonly name: string;
  public readonly arr_node_child: VirtualFolderNodeTypeHolder[] = [];
  public node_parent: VirtualFolderNodeTypeHolder | null = null;

  constructor(name: string) {
    this.name = name;
  }
}
