var TargetTime = new Date('dec 24, 2021 15:37:25').getTime();
			var x = setInterval(function () {
				var PresentTime = new Date().getTime();
				var difference = TargetTime - PresentTime;
				var d = Math.floor(difference / (1000 * 60 * 60 * 24));
				var h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
				var m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
				var s = Math.floor((difference % (1000 * 60)) / 1000);
				document.getElementById('input').innerHTML =
					 + h + 'h ' + m + 'm ' + s + 's left';
				if (difference < 0) {
					clearInterval(x);
					document.getElementById('input').innerHTML = 'EXPIRED';
				}
			}, 1000);