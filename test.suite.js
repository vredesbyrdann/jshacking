(function() {

	var queue = [], paused = false, results;

	this.test = function test(name, fn) {
		queue.push(function() {
			results = document.getElementById("results");
			results = assert(true, name).appendChild(document.createElement("ul"));
			fn();
		});
		runTest();
	};

	this.pause = function pause() {
		paused = true;
	};

	this.resume = function resume() {
		paused = false;
		setTimeout(runTest, 1);
	};

	function runTest() {
		if (!paused && queue.length) {
			queue.shift()();
			if (!paused) {
				resume();
			}
		}
	}

	this.assert = function assert(bool, desc) {
		var li = document.createElement("li");
		li.className = bool ? "passed" : "failed";
		li.appendChild(document.createTextNode(desc));
		results.appendChild(li);
		if (!bool) {
			li.parentNode.parentNode.className = "failed";
		}
		return li;
	};
	
})();