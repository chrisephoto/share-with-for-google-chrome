document.addEventListener("DOMContentLoaded", populate);

function populate() {
	var url
	var title
	var img
	
	chrome.tabs.query({
		active: true,
		currentWindow: true
	}, function (tabs) {
		url = tabs[0].url;
		title = encodeURIComponent(tabs[0].title);
		//img = tabs[0].img;

		for (let i = 0; i < servicesList.length; i++) {
			const main = document.getElementById("services-list");
			const li = document.createElement("li");
			const a = document.createElement("a");
			a.target = "_blank";
			const icon = document.createElement("img");
			const p = document.createElement("p");

			shareURL = servicesList[i].url;
			shareURL = shareURL.replace("REPLACETITLE", title);
			shareURL = shareURL.replace("REPLACEURL", url);
			//shareURL = shareURL.replace("REPLACEIMG", img);

			li.id = servicesList[i].id;
			a.href = shareURL;
			icon.src = servicesList[i].icon;
			p.innerHTML = servicesList[i].title;

			main.appendChild(li);
			li.appendChild(a);
			a.appendChild(icon);
			a.appendChild(p);

			if (localStorage[servicesList[i].id] == "false") {
				document.getElementById(servicesList[i].id).classList = "hidden";
			}
		}

	});
}
