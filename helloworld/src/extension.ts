import * as vscode from 'vscode';
import markdownItContainer from 'markdown-it-container';
import markdownItEmoji from 'markdown-it-emoji';

export function activate(context: vscode.ExtensionContext) {
  console.log('активировано');

  context.subscriptions.push(vscode.workspace.onDidChangeConfiguration(() => {
  }));

  return {
    extendMarkdownIt(md: any) {

      console.log('Markdown-It активно');
      // Поддержка кастомного синтаксиса для алёрта
      md.use(markdownItContainer, 'alert', {
        validate: () => true,
        render: (tokens: any, idx: number) => {
          return tokens[idx].nesting === 1 ? '<div class="alert">' : '</div>';
        }
      });

      // Поддержка кастомного синтаксиса для спойлера
      md.use(markdownItContainer, 'spoiler', {
        marker: '?',
        validate: () => true,
        render: (tokens: any, idx: number) => {
          return tokens[idx].nesting === 1 ? 
            '<div class="spoiler"><details><summary>' : 
            '</summary></details></div>';
        }
      });

      // Поддержка кастомных эмоджи
      md.use(markdownItEmoji.full || markdownItEmoji);

      return md;
    }
  };
}

export function deactivate() {
  console.log('Выкл');
}
