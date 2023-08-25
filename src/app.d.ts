// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		interface Locals {
			user: any,
			otpAuthenticated: string | undefined
		}
		// interface Error {}
		// interface PageData {}
		// interface Platform {}
	}
}

export { };
