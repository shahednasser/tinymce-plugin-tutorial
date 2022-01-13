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
      if ('markdown_dest' in editor.settings) {
        const element = document.querySelector(editor.settings.markdown_dest);
        if (element) {
          element.innerText = markdown;
        } else {
          //default to alert
          alert(markdown);
        }
      } else {
        //print it in alert
        alert(markdown);
      }
    }
  });
};

export default (): void => {
  tinymce.PluginManager.add('to-markdown', setup);
};
