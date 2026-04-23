import { defineConfig } from 'vite'
import obfuscator from 'vite-plugin-javascript-obfuscator'

export default defineConfig({
    plugins: [
        obfuscator({
            compact: true,
            controlFlowFlattening: true
        })
    ]
})