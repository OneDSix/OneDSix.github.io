/**
 * Make TypeScript recognize json and svg files as generic value containers.
 * Not exactly the best way of doing this, but it will do for now.
 * https://github.com/dominique-mueller/create-react-app-typescript-json5-setup
 */
declare module '*.json5' {
    const value: any
    export default value
}
declare module '*.svg' {
    const value: any
    export default value
}
