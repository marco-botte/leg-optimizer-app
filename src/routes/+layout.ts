// This disables Server Side Rendering (SSR)
// It ensures your app runs only in the browser/mobile webview
export const ssr = false;

// We set prerender to 'auto' or false in SPA mode.
// If you have a simple static home page, 'auto' is fine.
export const prerender = false;

// Optional: Ensure trailing slashes match what Capacitor expects
export const trailingSlash = 'always';