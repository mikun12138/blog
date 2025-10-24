const lolifont = `
<style>
@font-face {
  font-family: 'Loli';
  src: url('/assets/loli.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
  font-display: block;
}
</style>
`

hexo.extend.injector.register('head_begin', lolifont, 'default');