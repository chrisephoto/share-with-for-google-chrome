chrome.tabs.query({
		active: true,
		windowId: chrome.windows.WINDOW_ID_CURRENT
	},

	function (array_of_Tabs) {
		var tab = array_of_Tabs[0];
		var url = tab.url;
		var title = tab.title;
		var img = "15";

		for (let i = 0; i < servicesList.length; i++) {
			const main = document.getElementById("services-list");
			const li = document.createElement("li");
			const a = document.createElement("a");
			a.target = "_blank";
			const img = document.createElement("img");
			const p = document.createElement("p");

			shareURL = servicesList[i].url;
			shareURL = shareURL.replace("REPLACETITLE", title);
			shareURL = shareURL.replace("REPLACEURL", url);
			shareURL = shareURL.replace("REPLACEIMG", img);
			
			li.id = servicesList[i].id;
			a.href = shareURL;
			img.src = servicesList[i].icon;
			p.innerHTML = servicesList[i].title;

			main.appendChild(li);
			li.appendChild(a);
			a.appendChild(img);
			a.appendChild(p);

			if (localStorage[servicesList[i].id] == "false") {
				document.getElementById(servicesList[i].id).classList = "hidden";
			}
		}
	});