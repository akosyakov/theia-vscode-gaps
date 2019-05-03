import * as vscode from 'vscode';
let path = require('path');

export class BugsTree implements vscode.TreeDataProvider<vscode.TreeItem> {

    //private _onDidChangeTreeData: vscode.EventEmitter<Bug | undefined> = new vscode.EventEmitter<Bug | undefined>();
    //readonly onDidChangeTreeData: vscode.Event<Bug | undefined> = this._onDidChangeTreeData.event;
    private _bugItems: vscode.TreeItem[];

    constructor(context: vscode.ExtensionContext) {
        this._bugItems = [
            new Bug("Bug1"),
            new Bug("Bug2"),
            {
                label: 'Helm Deployed',
                iconPath: vscode.Uri.file(path.join(__dirname, "../resources/images/helmDeployed.svg"))
            },
            {
                label: 'Helm Failed',
                iconPath: vscode.Uri.file(path.join(__dirname, "../resources/images/helmFailed.svg"))
            },
            {
                label: 'Kubernetes Logo',
                iconPath: vscode.Uri.file(path.join(__dirname, "../resources/images/k8s-logo.png"))
            }
        ];

    }

    getTreeItem(element: Bug): vscode.TreeItem {
        return element;
    }

    getChildren(module?: Bug): Thenable<vscode.TreeItem[]> {
        return Promise.resolve(this._bugItems);
    }


}

export class Bug extends vscode.TreeItem {


    constructor(public readonly label: string) {
        super(label);
    }

    get tooltip(): string {
        return `${this.label}`;
    }

    get description(): string {
        return this.label;
    }

    iconPath = {
        light: path.join(__filename, '..', '..', 'resources', 'light', 'bugs.svg'),
        dark: path.join(__filename, '..', '..', 'resources', 'dark', 'bugs.svg')
    };

}

