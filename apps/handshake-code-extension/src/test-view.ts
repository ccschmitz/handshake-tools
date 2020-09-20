import * as vscode from 'vscode';

export class DevProccess {
    public status = 'running';

    constructor(public label: string = 'no label') {}
}

export class VirtualMachine extends vscode.TreeItem {
    public commands: DevProccess[] = [
        new DevProccess('database'),
        new DevProccess('web')
    ];

    constructor() {
        super('Virtual Machine', vscode.TreeItemCollapsibleState.Expanded);
    }
}

export class TestViewProvider implements vscode.TreeDataProvider<DevProccess> {

    constructor(private virtualMachine: VirtualMachine) { }

    onDidChangeTreeData?: vscode.Event<DevProccess> | undefined;
    getTreeItem(element: DevProccess): vscode.TreeItem | Thenable<vscode.TreeItem> {
        return element;
    }
    getChildren(element?: DevProccess | undefined): vscode.ProviderResult<DevProccess[]> {
        return this.virtualMachine.commands;
    }

}
