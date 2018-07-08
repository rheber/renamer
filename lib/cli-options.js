exports.optionDefinitions = [
  {
    name: 'files',
    type: String,
    multiple: true,
    defaultOption: true,
    defaultValue: [],
    description: 'The files to rename. This is the default option.'
  },
  {
    name: 'dry-run',
    type: Boolean,
    alias: 'd',
    description: 'Used for test runs. Set this to do everything but rename the file.'
  },
  {
    name: 'force',
    type: Boolean,
    description: 'If the target path already exists, overwrite it. Use with caution.'
  },
  {
    name: 'view',
    type: String,
    description: 'The default view outputs one line per rename. Set `--view detail` to see a longer, less condensed view and `--view diff` to include a diff.',
    typeLabel: 'detail|diff'
  },
  {
    name: 'plugin',
    type: String,
    alias: 'p',
    lazyMultiple: true,
    description: 'One or more replacer plugins to use, set the `--plugin` option multiple times to build a chain. For each value, supply either a) a path to a plugin file b) a path to a plugin package c) the name of a plugin package installed in the current working directory or above. The default plugin chain is `default` then `index`, be sure to set `-p default -p index` before your plugin if you wish to extend default behaviour.',
    plugin: true,
    defaultValue: [ 'default', 'index' ]
  },
  {
    name: 'verbose',
    type: Boolean,
    alias: 'v',
    description: 'In the output, also include names of files that were {italic not} renamed.'
  },
  {
    name: 'help',
    type: Boolean,
    alias: 'h',
    description: 'Print usage instructions.'
  }
]

exports.usageSections = function (optionDefinitions) {
  return [
    {
      header: 'renamer',
      content: 'Rename files in bulk.'
    },
    {
      header: 'Synopsis',
      content: '$ renamer [options] [{underline file} ...]'
    },
    {
      header: 'Options',
      optionList: optionDefinitions || exports.optionDefinitions,
      hide: 'files'
    },
    {
      content: 'for more detailed instructions, visit {underline https://github.com/75lb/renamer}'
    }
  ]
}