import { string } from 'rollup-plugin-string';

export default {
  input: 'node_modules/bpmn-js-token-simulation/src/icons/index.js',
  output: {
    file: 'node_modules/bpmn-js-token-simulation/lib/icons/index.js',
    format: 'esm'
  },
  plugins: [
    string({
      include: '**/*.svg'
    })
  ]
};
