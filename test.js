window.onload = function() {
	test("Sync unit tests...", function() {
		var hacker;
		function printHacker() {
			for(i=0;i<6;i++) {
				console.log("Vredesbyrdann here to ruin your fun...");
				hacker = i;
			}
			return 0; // Necessary in JavaScript?
		}
		printHacker();
		assert(hacker === 5, "Hacker was logged 6 times...");
		var teamMembersArray = ["Vredes", "Byrdann"],
			teamMembers = teamMembersArray,
			teamMembersCount = teamMembers.length,
			i;
		if (teamMembersCount > 0) {
			var members;
			for(i = 0; i < teamMembersCount; i = i + 1) {
				// members is being reset on each iteration...
				members = teamMembers[i];
				console.log(members);
			}
		}
	});
	test("An async test...", function() {
		pause();
		setTimeout(function() {
			assert(false, "I'll expect this to fail...");
			resume();
		}, 2000);
	});
};