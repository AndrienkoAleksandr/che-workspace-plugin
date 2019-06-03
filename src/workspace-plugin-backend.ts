
/**
 * Generated using theia-plugin-generator
 */

import * as theia from '@theia/plugin';
import * as che from '@eclipse-che/plugin';

export function start(context: theia.PluginContext) {
    const informationMessageTestCommand = {
        id: 'show-workspace-id',
        label: "Show workspace id."
    };
    context.subscriptions.push(theia.commands.registerCommand(informationMessageTestCommand, async (...args: any[]) => {
        const workspace = await che.workspace.getCurrentWorkspace();
        if (workspace && workspace.id) {
            theia.window.showInformationMessage('Workspace id:' + workspace.id);
            console.log('Workspace id: ' + workspace.id);
        }
    }));
}

export function stop() {

}
