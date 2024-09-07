window.addEventListener("load", () => {
	navigator.serviceWorker.register("../sw.js?v=1", {
		scope: "/a/",
	});
});

const form = document.getElementById("f");
const input = document.getElementById("i");

if (form && input) {
	form.addEventListener("submit", async (event) => {
		event.preventDefault();
		processUrl(input.value);
	});
}

function processUrl(value) {
	let url = value.trim();
	const engine = localStorage.getItem("engine");
	const searchUrl = engine ? engine : "https://www.google.com/search?q=";

	if (!isUrl(url)) {
		url = searchUrl + url;
	} else if (!(url.startsWith("https://") || url.startsWith("http://"))) {
		url = "https://" + url;
	}


	const dy = localStorage.getItem("dy");

	if (dy === "true") {
		window.location.href = "/a/q/" + __uv$config.encodeUrl(url);
	} else {
		if (localStorage.getItem("load") == "true") {
			sessionStorage.setItem("GoUrl", "/a/" + __uv$config.encodeUrl(url));
			window.location.href = "load.html";
		}
		else {
			window.location.href = "/a/" + __uv$config.encodeUrl(url);
		}
	}
}


function isUrl(val = "") {
	if (
		/^http(s?):\/\//.test(val) ||
		(val.includes(".") && val.substr(0, 1) !== " ")
	)
		return true;
	return false;
}
