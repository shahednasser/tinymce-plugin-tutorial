import { Editor, TinyMCE } from 'tinymce';
import TurndownService from 'turndown';

declare const tinymce: TinyMCE;

const setup = (editor: Editor, url: string): void => {
  editor.ui.registry.addButton('to-markdown', {
    tooltip: 'Convert to Markdown',
    icon: 'sourcecode',
    onAction: () => {
      const turndownService = new TurndownService({
        headingStyle: 'atx'
      })
      const markdown = turndownService.turndown(editor.getContent())
      
      alert(markdown);
    }
  });
};

export default (): void => {
  tinymce.PluginManager.add('to-markdown', setup);
};
