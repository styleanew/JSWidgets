/* Event handler */
if (matchMedia) {
	const mq = window.matchMedia("(min-width: 500px)");
	mq.addListener(WidthChange);
	WidthChange(mq);
}

// event listener
function WidthChange(mq) {

	const msg = (mq.matches ? "more" : "less") + " than 500 pixels";
	document.getElementById("#current").firstChild.nodeValue = msg;

}