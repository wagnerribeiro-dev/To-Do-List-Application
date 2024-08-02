module.exports = {
  transpileDependencies: ['some-dependency']
}

const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
 
})

