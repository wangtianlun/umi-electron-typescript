
const cwd = process.cwd();

export default {
  history: 'hash',
  outputPath: `../../app/dist/renderer`,
  plugins: [
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: true,
      title: 'srp-umi',
      dll: true,
      routes: {
        exclude: [],
      },
      hardSource: false,
      routes: {
        exclude: [
          /components/,
        ],
      },
    }],
  ]
}