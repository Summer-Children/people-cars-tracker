import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:4001/graphql",
  documents: ["./src/**/*.{ts,tsx}"],
  generates: {
    "./src/_gqlgen/": {
      preset: "client",
    },
  },
  config: {
    useTypeImports: true,
  },
};

export default config;
