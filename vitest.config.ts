import tsconfigPaths from "vite-tsconfig-paths"
import {defineConfig} from "vitest/config"

const config = defineConfig({
    plugins: [tsconfigPaths()],
    test: {
        coverage: {
            provider: "istanbul",
            reporter: ["text"],
        },
        environment: "node",
        passWithNoTests: true,
        watch: false,
    },
})

export default config
