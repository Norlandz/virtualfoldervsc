import * as vscode from 'vscode';
import { SimpleTestTreeView } from './main/treeView/SimpleTestTreeView';
import { FileSystemProvider } from './lib/treeView/fileExplorer';

export function activate(context: vscode.ExtensionContext) {
  const simpleTestTreeView = new SimpleTestTreeView();
  vscode.window.registerTreeDataProvider('idVal_simpleTestTreeView', simpleTestTreeView);
  // const treeView = new FileSystemProvider();
  // vscode.window.registerTreeDataProvider('idVal_simpleTestTreeView', treeView);
}

export function deactivate() {}
