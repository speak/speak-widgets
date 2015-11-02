module.exports = {
  all: {
    files: [{
      expand: true,
      cwd: 'src',
      src: ['**/*.js', '**/*.jsx', '!__tests__/**', '!__mocks__/**'],
      dest: 'lib',
      ext: '.js'
    }]
  }
}