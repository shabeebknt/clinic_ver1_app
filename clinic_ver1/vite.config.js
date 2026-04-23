import { defineConfig } from 'vite'
import obfuscator from 'vite-plugin-javascript-obfuscator'

export default defineConfig({
    plugins: [
        obfuscator({
            apply: 'build', // IMPORTANT
            options: {
                compact: true,
                controlFlowFlattening: true
            }
        })
    ]
})