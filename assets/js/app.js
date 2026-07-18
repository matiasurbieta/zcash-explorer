import "../css/app.scss"
import "@fontsource/inter/variable.css"

import "phoenix_html"
import 'alpinejs'
import { Socket } from "phoenix"
import { LiveSocket } from "phoenix_live_view"

let Hooks = {}

Hooks.VkContainerLog = {
	updated() {
		var logsDiv = document.getElementById("clogsholder")
		logsDiv.scrollTop = logsDiv.scrollHeight
	}
}

let csrfToken = document.querySelector("meta[name='csrf-token']").getAttribute("content")
let liveSocket = new LiveSocket("/live", Socket, { hooks: Hooks, params: { _csrf_token: csrfToken } })
liveSocket.connect()
window.liveSocket = liveSocket

var themeToggleDarkIcon  = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
	themeToggleLightIcon.classList.remove('hidden');
} else {
	themeToggleDarkIcon.classList.remove('hidden');
}

document.getElementById('theme-toggle').addEventListener('click', function() {
	themeToggleDarkIcon.classList.toggle('hidden');
	themeToggleLightIcon.classList.toggle('hidden');

	if (localStorage.getItem('color-theme') === 'light') {
		document.documentElement.classList.add('dark');
		localStorage.setItem('color-theme', 'dark');
	} else {
		document.documentElement.classList.remove('dark');
		localStorage.setItem('color-theme', 'light');
	}
});
