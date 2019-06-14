// Το κυλιόμενο μήνυμα
var scrollMsg = "                                                                     Ahead Books/Black-Cat, Anatolia College - MSU Exams, Andrew Betsis ELT, Archer Editions, Binary Logic, Βooks24.gr, British Council, Burlington Books, Cambridge English Language Assessment";

//Η συνάρτηση κύλισης
var beginPos = 0;
function scrollingMsg() {
	document.msgForm.scrollingMsgBox.value = scrollMsg.substring(beginPos, scrollMsg.length)+scrollMsg.substring(0,beginPos);
	beginPos = beginPos +1 ;
	if (beginPos >scrollMsg.length) {
		beginPos = 0;
	}
	window.setTimeout("scrollingMsg()", 100);
}

