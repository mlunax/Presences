const presence = new Presence({
	clientId: "722549030244057161",
});

presence.on("UpdateData", async () => {
	const presenceData: PresenceData = {
		largeImageKey: "https://i.imgur.com/L5J9p8y.png",
	};
	switch (location.pathname.split("/")[1]) {
		case "guide":
			presenceData.details = "Reading the guide";
			presenceData.state = [
				document.querySelector(".sidebar-links > li > a.active")
					? document.querySelector(".sidebar-links > li > a.active").textContent
					: null,
				document.querySelector(".sidebar-sub-header > a.active")
					? document.querySelector(".sidebar-sub-header > a.active").textContent
					: null,
			]
				.filter(a => !!a)
				.join(" ― ");
			break;
		default:
			presenceData.details = "Homepage";
			break;
	}
	presence.setActivity(presenceData);
});
