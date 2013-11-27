window.onload = function() {
	/*test("Async Unit Test...", function() {
		pause();
		setTimeout(function() {
			assert(true, "I expect this to pass...");
			resume();
		}, 1000);
	});*/
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
};