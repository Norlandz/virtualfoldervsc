import * as vscode from 'vscode';
import { SimpleTestTreeView } from './main/treeView/SimpleTestTreeView';

export function activate(context: vscode.ExtensionContext) {
  const simpleTestTreeView = new SimpleTestTreeView();
  vscode.window.registerTreeDataProvider('idVal_simpleTestTreeView', simpleTestTreeView);
}

export function deactivate() {}
