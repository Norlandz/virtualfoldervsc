import path = require('path');
import * as vscode from 'vscode';

// const __dirname = path.resolve();
// // dk why gives workspace now ... before this works ,, now SE talks the same https://stackoverflow.com/questions/8817423/why-is-dirname-not-defined-in-node-repl

export class SimpleTestTreeView implements vscode.TreeDataProvider<SimpleTestTreeItem> {
  getTreeItem(node: SimpleTestTreeItem): vscode.TreeItem {
    // console.log(`>> getTreeItem() ${node}`);
    return node;
  }

  public readonly nodeRoot: SimpleTestTreeItem = new SimpleTestTreeItem('root VirtualFolderNode', vscode.TreeItemCollapsibleState.Expanded);

  async getChildren(node: SimpleTestTreeItem): Promise<SimpleTestTreeItem[]> {
    if (node === undefined) {
      const aaB = new SimpleTestTreeItem('aaB', vscode.TreeItemCollapsibleState.Expanded);
      aaB.iconPath = path.join(__filename, '..', '..', 'resources', 'dark', 'folder.svg');
      this.nodeRoot.addChildNode(aaB);
      const aaaB = new SimpleTestTreeItem('aaaB', vscode.TreeItemCollapsibleState.Collapsed);
      aaaB.iconPath = path.join(__filename, '..', '..', 'resources', 'dark', 'folder.svg');
      aaB.addChildNode(aaaB);
      const aaaaF = new SimpleTestTreeItem('aaaaF', vscode.TreeItemCollapsibleState.None);
      aaaaF.iconPath = path.join(__filename, '..', '..', 'resources', 'dark', 'document.svg');
      aaaB.addChildNode(aaaaF);
      const aaabF = new SimpleTestTreeItem('aaabF', vscode.TreeItemCollapsibleState.Collapsed);
      aaabF.iconPath = path.join(__filename, '..', '..', 'resources', 'dark', 'document.svg');
      aaaB.addChildNode(aaabF);
      const abF = new SimpleTestTreeItem('abF', vscode.TreeItemCollapsibleState.None);
      abF.iconPath = path.join(__filename, '..', '..', 'resources', 'dark', 'document.svg');
      this.nodeRoot.addChildNode(abF);
      const acB = new SimpleTestTreeItem('acB', vscode.TreeItemCollapsibleState.Expanded);
      acB.iconPath = path.join(__filename, '..', '..', 'resources', 'dark', 'folder.svg');
      this.nodeRoot.addChildNode(acB);
      const acaB = new SimpleTestTreeItem('acaB', vscode.TreeItemCollapsibleState.Expanded);
      acB.addChildNode(acaB);
      const acbF = new SimpleTestTreeItem('acbF', vscode.TreeItemCollapsibleState.Expanded);
      acB.addChildNode(acbF);
      const adB = new SimpleTestTreeItem('adB', vscode.TreeItemCollapsibleState.Expanded);
      adB.iconPath = path.join(__filename, '..', '..', 'resources', 'dark', 'folder.svg');
      this.nodeRoot.addChildNode(adB);

      return [this.nodeRoot];
    } else {
      return node.arr_node_child;
    }
  }
}

export class SimpleTestTreeItem extends vscode.TreeItem {
  public readonly arr_node_child: SimpleTestTreeItem[] = [];
  public node_parent: SimpleTestTreeItem | null = null;

  constructor(name: string, collapsibleState: vscode.TreeItemCollapsibleState) {
    super(name, collapsibleState);
  }

  addChildNode(child: SimpleTestTreeItem) {
    child.node_parent?.removeChildNode(child);
    child.node_parent = this;
    this.arr_node_child.push(child);
  }

  private removeChildNode(child: SimpleTestTreeItem) {
    const index = this.arr_node_child.indexOf(child);
    if (index > -1) {
      this.arr_node_child.splice(index, 1);
      return true;
    } else {
      return false;
    }
  }

  removeSelf() {
    if (this.node_parent !== null) {
      this.node_parent.removeChildNode(this);
    }

    this.node_parent = null;
    this.arr_node_child.length = 0;
  }
}
