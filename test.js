window.onload = function() {
	test("A Sync Unit Test", function() {
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
	});
	test("An async test...", function() {
		pause();
		setTimeout(function() {
			assert(false, "I'll expect this to fail...");
			resume();
		}, 2000);
	});
};