!(function (d, s, id) {
	var js,
		fjs = d.getElementsByTagName(s)[0];
	if (!d.getElementById(id)) {
		js = d.createElement(s);
		js.id = id;
		js.src = 'https://plugins.eventable.com/eventable.js';
		fjs.parentNode.insertBefore(js, fjs);
	}
})(document, 'script', 'eventable-script');
