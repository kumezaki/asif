autowatch = 1;

var poly_in_1 = "Kog_Comb_Buffers_Poly_1_msg";
var poly_in_2 = "Kog_Comb_Buffers_Poly_2_msg";

/* these should be shared globally */
var gNum_Bufs = 4;
var gNum_Octaves = 4;

/* playing from buffers */
var gArray_NextPlayTargetPos = new Array(-1,-1,-1,-1);

/* recording into buffers */
var gPos_TargetRec = 0;
var gArray_NextRecTargetPos = new Array(-1,-1,-1,-1);

function loadbang()
{
	reset();
}

function reset()
{
	post("resetting to "+gNum_Bufs+" buffers, "+gNum_Bufs*gNum_Octaves+" voices\n");
	messnamed(poly_in_1,"voices",gNum_Bufs*gNum_Octaves);

	for (i = 0; i < gNum_Bufs; i++)
		for (j = 0; j < gNum_Octaves; j++)
		{
			messnamed(poly_in_1,"target",i+(j*gNum_Bufs)+1);
			if (i == 0)
				messnamed(poly_in_2,"play",1);
		}

	gPos_TargetRec = 0;
	
	/* update display */
	update_display("buf_play_state",0);
	update_display("buf_rec_state",0);
}

function buf_start(pos)	/* pos is target position (not number) */
{
	/* reject any buf_end's from non-1x voices */
	if (pos >= gNum_Bufs) return;
	
	pos_next = gArray_NextPlayTargetPos[pos];
	pos_next = pos_next == -1 ? 0 : pos_next;

	/* turn play ON for next voices */
	for (i = 0; i < gNum_Octaves; i++)
	{
		messnamed(poly_in_1,"target",pos_next+(i*gNum_Bufs)+1);
		messnamed(poly_in_2,"play",1);
	}
	
	/* update display */
	update_display("buf_play_state",pos_next);
}

function buf_end(pos)	/* pos is target position (not number) */
{
//	post("buf_end "+pos+"\n");
	
	/* reject calls to this function from voices are not "first" octave voices  */
	if (pos >= gNum_Bufs) return;
	
	/* turn play OFF for current voices */
	for (i = 0; i < gNum_Octaves; i++)
	{
		messnamed(poly_in_1,"target",pos+(i*gNum_Bufs)+1);
		messnamed(poly_in_2,"play",0);
	}
	
	/* broadcast the ended play buffer position */
	messnamed("Kog_Comb_Buffers_Buf_End_msg",pos);
}

function thresh(v)	/* v is crossed above (1) or crossed below (0) */
{
	if (gPos_TargetRec == -1) gPos_TargetRec = 0;

	messnamed("Kog_Comb_Del_Line_msg",v,100);

	messnamed(poly_in_1,"target",gPos_TargetRec+1);
	messnamed(poly_in_2,"rec",v * (gArray_NextRecTargetPos[gPos_TargetRec] != -1));
	
	/* update display */
	messnamed("buf_rec_state","bgcolor",v == 0 ? new Array(1.,1.,1.,1.) : new Array(1.,0.,0.,1.));
	update_display("buf_rec_state",gPos_TargetRec);

	/* advance rec target pos if thresh OFF */
	if (v == 0)
		gPos_TargetRec = gArray_NextRecTargetPos[gPos_TargetRec];
}

function clear_bufs()	/* arguments should be 0 or 1 for each buffer */
{
	for (i = 0; i < gNum_Bufs; i++)
	{
		if (arguments[i])
		{
			post("clearing buf_"+i+"\n");
			messnamed(poly_in_1,"target",i+1);
			messnamed(poly_in_2,"buf","clear");
		}
	}
}

function set_play_seq(b0,b1,b2,b3)
{
	post("set_play_seq",b0,b1,b2,b3,"\n");

	gArray_NextPlayTargetPos = new Array(b0,b1,b2,b3);
}

function set_rec_seq(b0,b1,b2,b3)
{
	post("set_rec_seq",b0,b1,b2,b3,"\n");

	gArray_NextRecTargetPos = new Array(b0,b1,b2,b3);
	
	if (gArray_NextRecTargetPos[gPos_TargetRec] == -1) gPos_TargetRec = 0;
}

function set_play_loop()	/* arguments should be line duration (msecs) then loop dur (msecs) for each buffer */
{
	var line_dur = arguments[0];
	
	for (b = 0; b < gNum_Bufs; b++)
	{
		for (i = 0; i < gNum_Octaves; i++)
		{
			var dur = arguments[b+1];

			var target_num = b+(i*gNum_Bufs)+1;

			post("buf_"+b,"target",target_num,"dur",dur,"\n");

			messnamed(poly_in_1,"target",target_num);
			messnamed(poly_in_2,"dur",dur,line_dur);
		}
	}
}

function set_play_speed()	/* first argument should be buf pos, then speeds for each octave */
{
	var b = arguments[0];

	for (i = 0; i < gNum_Octaves; i++)
	{
		messnamed(poly_in_1,"target",b+(i*gNum_Bufs)+1);
		messnamed(poly_in_2,"speed",arguments[i+1]);
	}
}

function set_play_vol()	/* first argument should be buf pos, then vols, then durs (sec) for each octave */
{
	var b = arguments[0];

	for (i = 0; i < gNum_Octaves; i++)
	{
		messnamed(poly_in_1,"target",b+(i*gNum_Bufs)+1);
		messnamed(poly_in_2,"vol",arguments[i+1],1000.*arguments[i+1+gNum_Octaves]);
	}
}

function update_display(msg,v)
{
	var a = new Array(0,0,0,0);
	a[v] = 1;
	messnamed(msg,a);
}
