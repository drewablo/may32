function liner(){
	var r_text = new Array ();
	r_text[0] = "Oh God, there's still no budget";
	r_text[1] = "What do you think Madigan's plan is?";
	r_text[2] = "Why are you here and not working?";
	r_text[3] = "I wish Ricky Hendon was in the chair";
	r_text[4] = "Is the end of session party still happening?";
	r_text[5] = "I can't remember the last time I got 8 hours of sleep";
	r_text[6] = "Who's got time to do laundry?";
	r_text[7] = "Did you see what was on CapFax this morning?";
    r_text[8] = "I need a drink";
    r_text[9] = "Not another resolution!";
    r_text[10]= "Sine Die ... Psych!";
    r_text[11] = "I've forgotten what my family's faces look like";

	var i = Math.floor(12*Math.random());

	document.getElementById('headline').innerHTML = r_text[i];
}
	
