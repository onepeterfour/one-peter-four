/** @type {import("prettier").Config} */
const config = {
  ...require('prettier-config-standard'),
  plugins: ['prettier-plugin-tailwindcss']
}

module.exports = config
