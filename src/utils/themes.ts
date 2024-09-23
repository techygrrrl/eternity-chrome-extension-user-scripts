import * as monaco from 'monaco-editor'

export const cmykTheme: monaco.editor.IStandaloneThemeData = {
  base: 'vs-dark',
  inherit: true,
  rules: [
    {
      background: '2B223F',
      token: '',
    },
    {
      foreground: '807694',
      token: 'comment',
    },
    {
      foreground: 'B596F8',
      token: 'string',
    },
    {
      foreground: 'EF9815',
      token: 'constant.numeric',
    },
    {
      foreground: 'EF15BF',
      token: 'constant.language',
    },
    {
      foreground: 'EF15BF',
      token: 'constant.character',
    },
    {
      foreground: 'EF9815',
      token: 'constant.other',
    },
    {
      foreground: 'EBEF15',
      token: 'variable.other.readwrite.instance',
    },
    {
      foreground: 'EF15BF',
      token: 'constant.character.escaped',
    },
    {
      foreground: 'EF15BF',
      token: 'constant.character.escape',
    },
    {
      foreground: 'B596F8',
      token: 'string source',
    },
    {
      foreground: 'B596F8',
      token: 'string source.ruby',
    },
    {
      foreground: 'EF15BF',
      token: 'keyword',
    },
    {
      foreground: '15AEEF',
      token: 'storage',
    },
    {
      foreground: '15AEEF',
      fontStyle: 'italic',
      token: 'storage.type',
    },
    {
      foreground: '15EFAE',
      fontStyle: 'underline',
      token: 'entity.name.class',
    },
    {
      foreground: 'EF9815',
      fontStyle: 'italic underline',
      token: 'entity.other.inherited-class',
    },
    {
      foreground: '15EFAE',
      token: 'entity.name.function',
    },
    {
      foreground: 'E0DDE5',
      token: 'variable.parameter',
    },
    {
      foreground: '15EFAE',
      fontStyle: 'italic',
      token: 'entity.name.tag',
    },
    {
      foreground: '15EFAE',
      token: 'entity.other.attribute-name',
    },
    {
      foreground: '15EFAE',
      token: 'support.function',
    },
    {
      foreground: 'EF15BF',
      token: 'support.constant',
    },
    {
      foreground: '15AEEF',
      token: 'support.type',
    },
    {
      foreground: '15AEEF',
      token: 'support.class',
    },
    {
      foreground: 'EF15BF',
      background: '382C51',
      token: 'invalid',
    },
    {
      foreground: 'E0DDE5',
      background: '463767',
      token: 'invalid.deprecated',
    },
    {
      foreground: 'EBEF15',
      token: 'meta.structure.dictionary.json string.quoted.double.json',
    },
    {
      foreground: '463767',
      token: 'meta.diff',
    },
    {
      foreground: '463767',
      token: 'meta.diff.header',
    },
    {
      foreground: '15EFAE',
      token: 'markup.deleted',
    },
    {
      foreground: 'EF9815',
      token: 'markup.inserted',
    },
    {
      foreground: '15AEEF',
      token: 'markup.changed',
    },
    {
      foreground: 'EF9815',
      token: 'constant.numeric.line-number.find-in-files - match',
    },
    {
      foreground: 'B596F8',
      token: 'entity.name.filename',
    },
    {
      foreground: 'EF1563',
      token: 'message.error',
    },
    {
      foreground: 'EBEF15',
      token:
        'punctuation.definition.string.begin.json - meta.structure.dictionary.value.json',
    },
    {
      foreground: 'EBEF15',
      token:
        'punctuation.definition.string.end.json - meta.structure.dictionary.value.json',
    },
    {
      foreground: 'EBEF15',
      token: 'meta.structure.dictionary.json string.quoted.double.json',
    },
    {
      foreground: 'EBEF15',
      token: 'meta.structure.dictionary.value.json string.quoted.double.json',
    },
    {
      foreground: '00CC8F',
      token:
        'meta meta meta meta meta meta meta.structure.dictionary.value string',
    },
    {
      foreground: 'EF9815',
      token: 'meta meta meta meta meta meta.structure.dictionary.value string',
    },
    {
      foreground: 'EF15BF',
      token: 'meta meta meta meta meta.structure.dictionary.value string',
    },
    {
      foreground: 'B596F8',
      token: 'meta meta meta meta.structure.dictionary.value string',
    },
    {
      foreground: '00CC8F',
      token: 'meta meta meta.structure.dictionary.value string',
    },
    {
      foreground: 'EF9815',
      token: 'meta meta.structure.dictionary.value string',
    },
  ],
  colors: {
    'editor.foreground': '#E0DDE5',
    'editor.background': '#221B32',
    'editor.selectionBackground': '#382C51',
    'editor.lineHighlightBackground': '#2B223F',
    'editorCursor.foreground': '#FFF',
    'editorWhitespace.foreground': '#2B223F',
    'editorIndentGuide.activeBackground': '#15AEEF',
    'editor.selectionHighlightBorder': '#463767',
    'activityBar.activeBorder': '#EBEF15',
    'activityBar.activeFocusBorder': '#EBEF15',
    'activityBar.background': '#130E0F',
    'activityBar.border': '#302546', // I don't know if we need this
    'activityBar.foreground': '#FFFFFF',
    'activityBar.inactiveForeground': '#807694',
    'activityBarBadge.background': '#EF15BF',
    'breadcrumb.background': '#130E0F',
    'button.background': '#7515EF',
    'debugConsole.errorForeground': '#EF15BF',
    'debugConsole.warningForeground': '#EBEF15',
    'debugIcon.breakpointCurrentStackframeForeground': '#EBEF15',
    'debugIcon.breakpointDisabledForeground': '#ff00002f',
    'debugIcon.breakpointForeground': '#EF15BF',
    'debugIcon.continueForeground': '#15EFAE',
    'debugIcon.pauseForeground': '#15AEEF',
    'debugIcon.restartForeground': '#15EFAE',
    'debugIcon.startForeground': '#15EFAE',
    'debugIcon.stepBackForeground': '#15AEEF',
    'debugIcon.stepIntoForeground': '#15AEEF',
    'debugIcon.stepOutForeground': '#15AEEF',
    'debugIcon.stepOverForeground': '#15AEEF',
    'debugIcon.stopForeground': '#EF15BF',
    'debugTokenExpression.boolean': '#EF15BF',
    'debugTokenExpression.error': '#EF15BF',
    'debugTokenExpression.number': '#EF9815',
    'debugTokenExpression.string': '#B596F8',
    'debugTokenExpression.value': '#FFF',
    'debugToolBar.background': '#2B223F',
    'diffEditor.insertedTextBackground': '#15efae1a',
    'diffEditor.removedTextBackground': '#ef15611e',
    'diffEditorGutter.insertedLineBackground': '#15efae2f',
    'diffEditorGutter.removedLineBackground': '#ef15614f',
    'editor.findMatchBackground': '#7515EF22',
    'editor.findMatchBorder': '#7515EF',
    'editor.findMatchHighlightBackground': '#463767',
    'editor.lineHighlightBorder': '#463767',
    'editor.stackFrameHighlightBackground': '#7515EF',
    'editor.wordHighlightBackground': '#382C51',
    'editor.wordHighlightStrongBackground': '#382C51',
    'editorBracketHighlight.foreground1': '#EBEF15',
    'editorBracketHighlight.foreground2': '#EF9815',
    'editorBracketHighlight.foreground3': '#B596F8',
    'editorBracketHighlight.foreground4': '#7515EF',
    'editorBracketHighlight.foreground5': '#15EFAE',
    'editorBracketHighlight.foreground6': '#15AEEF',
    'editorBracketHighlight.unexpectedBracket.foreground': '#EF15BF',
    'editorError.foreground': '#EF15BF',
    'editorGroupHeader.tabsBackground': '#130E0F',
    'editorGutter.addedBackground': '#15EFAE',
    'editorGutter.background': '#130E0F',
    'editorGutter.deletedBackground': '#EF15BF',
    'editorGutter.foldingControlForeground': '#EF15BF',
    'editorGutter.modifiedBackground': '#EF9815',
    'editorIndentGuide.background': '#463767',
    'editorLineNumber.activeForeground': '#EF15BF',
    'editorLineNumber.foreground': '#BCB9C2',
    'editorLink.activeForeground': '#15EFAE',
    'editorWarning.foreground': '#EF9815',
    focusBorder: '#15EFAE',
    'gitDecoration.addedResourceForeground': '#15EFAE',
    'gitDecoration.deletedResourceForeground': '#EF15BF',
    'icon.foreground': '#EF15BF',
    'input.background': '#130E0F',
    'list.activeSelectionBackground': '#7315ef42',
    'list.activeSelectionForeground': '#FFF',
    'list.activeSelectionIconForeground': '#EF15BF',
    'list.focusOutline': '#7515EF',
    'list.hoverBackground': '#7515EF',
    'list.inactiveSelectionBackground': '#2B223F',
    'list.inactiveSelectionIconForeground': '#E0DDE5',
    'minimap.background': '#130E0F',
    'minimap.selectionHighlight': '#7515EF',
    'notificationLink.foreground': '#EF15BF',
    'pickerGroup.foreground': '#15EFAE',
    'quickInput.background': '#130E0F',
    'quickInput.foreground': '#D5D2DC',
    'quickInputList.focusBackground': '#EF15BF',
    'quickInputList.focusForeground': '#FFF',
    'quickInputList.focusIconForeground': '#FFF',
    'scrollbarSlider.activeBackground': '#7515EF',
    'scrollbarSlider.background': '#2B223F',
    'scrollbarSlider.hoverBackground': '#2B223F',
    'sideBar.background': '#130E0F',
    'sideBar.border': '#EF15BF',
    'sideBar.foreground': '#FFFFFF',
    'sideBarSectionHeader.background': '#130E0F',
    'sideBarSectionHeader.border': '#EF15BF',
    'statusBar.background': '#15AEEF',
    'statusBar.debuggingBackground': '#EF9815',
    'statusBar.debuggingForeground': '#FFF',
    'statusBar.foreground': '#FFFFFF',
    'statusBar.noFolderBackground': '#7515EF',
    'tab.activeBackground': '#130E0F',
    'tab.activeBorder': '#EF15BF',
    'tab.activeForeground': '#FFFFFF',
    'tab.inactiveBackground': '#130E0F',
    'tab.inactiveForeground': '#BCB9C2',
    'terminal.ansiBlack': '#130E0F',
    'terminal.ansiBlue': '#15AEEF',
    'terminal.ansiBrightBlack': '#807694',
    'terminal.ansiBrightBlue': '#15AEEF',
    'terminal.ansiBrightCyan': '#15EFAE',
    'terminal.ansiBrightGreen': '#15EFAE',
    'terminal.ansiBrightMagenta': '#EF15BF',
    'terminal.ansiBrightRed': '#EF15BF',
    'terminal.ansiBrightWhite': '#FFF',
    'terminal.ansiBrightYellow': '#EBEF15',
    'terminal.ansiCyan': '#15EFAE',
    'terminal.ansiGreen': '#15EFAE',
    'terminal.ansiMagenta': '#EF15BF',
    'terminal.ansiRed': '#EF15BF',
    'terminal.ansiWhite': '#E0DDE5',
    'terminal.ansiYellow': '#EBEF15',
    'terminal.background': '#130E0F',
    'terminal.foreground': '#E0DDE5',
    'textLink.activeForeground': '#EBEF15',
    'textLink.foreground': '#EF15BF',
    'titleBar.activeBackground': '#130E0F',
  },
}

export const draculaTheme: monaco.editor.IStandaloneThemeData = {
  base: 'vs-dark',
  inherit: true,
  rules: [
    {
      background: '282a36',
      token: '',
    },
    {
      foreground: '6272a4',
      token: 'comment',
    },
    {
      foreground: 'f1fa8c',
      token: 'string',
    },
    {
      foreground: 'bd93f9',
      token: 'constant.numeric',
    },
    {
      foreground: 'bd93f9',
      token: 'constant.language',
    },
    {
      foreground: 'bd93f9',
      token: 'constant.character',
    },
    {
      foreground: 'bd93f9',
      token: 'constant.other',
    },
    {
      foreground: 'ffb86c',
      token: 'variable.other.readwrite.instance',
    },
    {
      foreground: 'ff79c6',
      token: 'constant.character.escaped',
    },
    {
      foreground: 'ff79c6',
      token: 'constant.character.escape',
    },
    {
      foreground: 'ff79c6',
      token: 'string source',
    },
    {
      foreground: 'ff79c6',
      token: 'string source.ruby',
    },
    {
      foreground: 'ff79c6',
      token: 'keyword',
    },
    {
      foreground: 'ff79c6',
      token: 'storage',
    },
    {
      foreground: '8be9fd',
      fontStyle: 'italic',
      token: 'storage.type',
    },
    {
      foreground: '50fa7b',
      fontStyle: 'underline',
      token: 'entity.name.class',
    },
    {
      foreground: '50fa7b',
      fontStyle: 'italic underline',
      token: 'entity.other.inherited-class',
    },
    {
      foreground: '50fa7b',
      token: 'entity.name.function',
    },
    {
      foreground: 'ffb86c',
      fontStyle: 'italic',
      token: 'variable.parameter',
    },
    {
      foreground: 'ff79c6',
      token: 'entity.name.tag',
    },
    {
      foreground: '50fa7b',
      token: 'entity.other.attribute-name',
    },
    {
      foreground: '8be9fd',
      token: 'support.function',
    },
    {
      foreground: '6be5fd',
      token: 'support.constant',
    },
    {
      foreground: '66d9ef',
      fontStyle: ' italic',
      token: 'support.type',
    },
    {
      foreground: '66d9ef',
      fontStyle: ' italic',
      token: 'support.class',
    },
    {
      foreground: 'f8f8f0',
      background: 'ff79c6',
      token: 'invalid',
    },
    {
      foreground: 'f8f8f0',
      background: 'bd93f9',
      token: 'invalid.deprecated',
    },
    {
      foreground: 'cfcfc2',
      token: 'meta.structure.dictionary.json string.quoted.double.json',
    },
    {
      foreground: '6272a4',
      token: 'meta.diff',
    },
    {
      foreground: '6272a4',
      token: 'meta.diff.header',
    },
    {
      foreground: 'ff79c6',
      token: 'markup.deleted',
    },
    {
      foreground: '50fa7b',
      token: 'markup.inserted',
    },
    {
      foreground: 'e6db74',
      token: 'markup.changed',
    },
    {
      foreground: 'bd93f9',
      token: 'constant.numeric.line-number.find-in-files - match',
    },
    {
      foreground: 'e6db74',
      token: 'entity.name.filename',
    },
    {
      foreground: 'f83333',
      token: 'message.error',
    },
    {
      foreground: 'eeeeee',
      token:
        'punctuation.definition.string.begin.json - meta.structure.dictionary.value.json',
    },
    {
      foreground: 'eeeeee',
      token:
        'punctuation.definition.string.end.json - meta.structure.dictionary.value.json',
    },
    {
      foreground: '8be9fd',
      token: 'meta.structure.dictionary.json string.quoted.double.json',
    },
    {
      foreground: 'f1fa8c',
      token: 'meta.structure.dictionary.value.json string.quoted.double.json',
    },
    {
      foreground: '50fa7b',
      token:
        'meta meta meta meta meta meta meta.structure.dictionary.value string',
    },
    {
      foreground: 'ffb86c',
      token: 'meta meta meta meta meta meta.structure.dictionary.value string',
    },
    {
      foreground: 'ff79c6',
      token: 'meta meta meta meta meta.structure.dictionary.value string',
    },
    {
      foreground: 'bd93f9',
      token: 'meta meta meta meta.structure.dictionary.value string',
    },
    {
      foreground: '50fa7b',
      token: 'meta meta meta.structure.dictionary.value string',
    },
    {
      foreground: 'ffb86c',
      token: 'meta meta.structure.dictionary.value string',
    },
  ],
  colors: {
    'editor.foreground': '#f8f8f2',
    'editor.background': '#282a36',
    'editor.selectionBackground': '#44475a',
    'editor.lineHighlightBackground': '#44475a',
    'editorCursor.foreground': '#f8f8f0',
    'editorWhitespace.foreground': '#3B3A32',
    'editorIndentGuide.activeBackground': '#9D550FB0',
    'editor.selectionHighlightBorder': '#222218',
  },
}
