autowatch = 1;

var gNum_Voices = 5;
var gArray_Voices = new Array();

var gDur_Buf = 8000;
var gDur_Rec;

var gDur_RecEndTask;
var gDur_RecLine_On;
var gDur_RecLine_Off;

var gDur_Delay_VolCurveStart;
var gDur_Delay_DelCurveStart;
var gDur_Delay_DurCurveStart;

var gDur_VolCurve = 10000;
var gDur_DelCurve = 10000;
var gDur_DurCurve = 10000;

var gPoly_1_msg = "Kog_Particles_Poly_1_msg";
var gPoly_2_msg = "Kog_Particles_Poly_2_msg";
var gBuf_msg = "Kog_Particles_Buffer_msg";
var gRec_msg = "Kog_Particles_Record_msg";
var gRecLine_msg = "Kog_Particles_RecLine_msg";

var gID = 0;

function Voice()
{
	this.pos_play = 0;
	this.dur = 0.;
	this.del = 0.;
	this.vol = 0.;
	this.task;
}

function loadbang()
{
	reset();
}

function set_buf_dur(v)
{
	gDur_Buf = v;	
}

function set_curve_dur(v)
{
	post("set_curve_dur("+v+")\n");

	gDur_VolCurve = v;
	gDur_DelCurve = v;
	gDur_DurCurve = v;
}

function set_curve_delay(v0,v1,v2)
{
	post("set_curve_delay("+v0+","+v1+","+v2+")\n");
	post(gDur_VolCurve*v0,gDur_DelCurve*v1,gDur_DurCurve*v2,"\n");

	gDur_Delay_VolCurveStart = gDur_VolCurve * v0;
	gDur_Delay_DelCurveStart = gDur_DelCurve * v1;
	gDur_Delay_DurCurveStart = gDur_DurCurve * v2;
}

function set_buf_id(v)
{
	gID = v;
	
	gPoly_1_msg = v+"_Kog_Particles_Poly_1_msg";
	gPoly_2_msg = v+"_Kog_Particles_Poly_2_msg";
	
	gBuf_msg = v+"_Kog_Particles_Buffer_msg";
	
	gRec_msg = v+"_Kog_Particles_Record_msg";
	gRecLine_msg = v+"_Kog_Particles_RecLine_msg";

	messnamed(gPoly_1_msg,"target",0);
	messnamed(gPoly_2_msg,"buf","set",v+"_buf_part");
}

function get_pan(i)
{
	if (gNum_Voices <= 1) return 0.5;
	
	return parseFloat(i) / (gNum_Voices - 1);
}

function dur_set_part(i,v)
{
	if (gArray_Voices[i] != undefined)
		gArray_Voices[i].dur = v;
}

function del_set_part(i,v)
{
	if (gArray_Voices[i] != undefined)
		gArray_Voices[i].del = v;
}

function vol_set_part(i,v)
{
	if (gArray_Voices[i] != undefined)
	{
		gArray_Voices[i].vol = v;
		messnamed(gPoly_1_msg,"target",i+1);
		messnamed(gPoly_2_msg,"vol",v);
	}
}

function reset()
{
	delete gArray_Voices; gArray_Voices = new Array();
	
	gDur_RecEndTask = gDur_Buf * 0.75; /* inclusive of gDur_RecLine_On */
	gDur_RecLine_On = gDur_Buf * 0.01;
	gDur_RecLine_Off = gDur_Buf * 0.25;

	gDur_Delay_VolCurveStart = gDur_VolCurve * 0.00;
	gDur_Delay_DelCurveStart = gDur_DelCurve * 0.00;
	gDur_Delay_DurCurveStart = gDur_DurCurve * 1.00; /* adjust multiplier depending on duration of curve */

	messnamed(gBuf_msg,"size",gDur_Buf);
	messnamed(gBuf_msg,"clear");
	messnamed(gRec_msg,"reset");

	messnamed(gPoly_1_msg,"voices",gNum_Voices);

	for (i = 0; i < gNum_Voices; i++)
	{
		gArray_Voices[i] = new Voice();
		gArray_Voices[i].task = new Task(task_func,this,i,0);
		
		messnamed(gPoly_1_msg,"target",i+1);

		messnamed(gPoly_2_msg,"buf","set",gID+"_buf_part");
		messnamed(gPoly_2_msg,"send","set",gID+"_Kog_Particles_js_msg");
	
		messnamed(gPoly_2_msg,"pan",get_pan(i));
	
		messnamed(gPoly_2_msg,"del_curve",0.,0.,0.,0.);
		messnamed(gPoly_2_msg,"dur_curve",0.,0.,0.,0.);
		messnamed(gPoly_2_msg,"vol_curve",0.,0.,0.,0.);
	}
}

function play()
{
	outlet(0,1);

	for (i = 0; i < gNum_Voices; i++)
	{
		gArray_Voices[i].task.arguments[1] = 1;
		gArray_Voices[i].task.schedule(Math.random()*100.);
	}
}

function playing()
{
	var num_idle = 0;

	for (i = 0; i < gNum_Voices; i++)
		if (gArray_Voices[i].task.arguments[1] == 0) num_idle++;
		
	post("num_idle "+num_idle+"\n");
	
	return num_idle != gNum_Voices;
}

function start_vol_curve()
{
	for (i = 0; i < gNum_Voices; i++)
	{
		messnamed(gPoly_1_msg,"target",i+1);
		messnamed(gPoly_2_msg,"vol_curve",0.,1.,gDur_VolCurve,0.0+Math.random()*0.1);
	}
}

function start_del_curve()
{
	for (i = 0; i < gNum_Voices; i++)
	{
		messnamed(gPoly_1_msg,"target",i+1);
		messnamed(gPoly_2_msg,"del_curve",0.,1.,gDur_DelCurve,0.0+Math.random()*0.1);
	}
}

function start_dur_curve()
{
	for (i = 0; i < gNum_Voices; i++)
	{
		messnamed(gPoly_1_msg,"target",i+1);
		messnamed(gPoly_2_msg,"dur_curve",0.,1.,gDur_DurCurve,0.7+Math.random()*0.1);
	}
}

function task_func()
{
	var i = arguments[0];

	if (arguments[1] == -1)
	{
		gArray_Voices[i].task.arguments[1] = 0;
		post("segment for",i,"ended\n");
		if (!playing()) { post("all segments ended\n"); outlet(0,0); }
		return;
	}

	messnamed(gPoly_1_msg,"target",i+1);

	messnamed(gPoly_2_msg,"play",
				gArray_Voices[i].pos_play,
				gArray_Voices[i].pos_play+gArray_Voices[i].dur,
				gArray_Voices[i].dur
				);

//	post(i,gArray_Voices[i].pos_play,gArray_Voices[i].pos_play+gArray_Voices[i].dur,gArray_Voices[i].dur,gArray_Voices[i].del,"\n");

	gArray_Voices[i].pos_play += gArray_Voices[i].dur;

	if (gArray_Voices[i].pos_play < gDur_Rec)
	{
		gArray_Voices[i].task.schedule(gArray_Voices[i].dur + gArray_Voices[i].del);
	}
	else
	{
		var start = gArray_Voices[i].pos_play - gArray_Voices[i].dur;
		var dur = gDur_Rec - start;
		post("last play segment for",i,start,gArray_Voices[i].dur,gArray_Voices[i].pos_play,dur,"\n");
		gArray_Voices[i].task.arguments[1] = -1;
		gArray_Voices[i].task.schedule(dur);
	}
}


/*===========================================================================*/

var gBool_Thresh = false;

function thresh(v)
{
	if (v)	/* ABOVE THRESH */
	{
		if (gBool_RecStandby)
			auto(1); /* start recording/playback */

		/* zero to non-zero transition */
		if (!gBool_Thresh)
		{
			if (gTask_RecStop.running)
				gTask_RecStop.cancel();
		}
	}
	else	/* BELOW THRESH */
	{
		/* non-zero to zero transition */
		if (gBool_Thresh)
		{
			if (gTask_RecEnd.running)
			{
				gTask_RecStop.cancel();
				gTask_RecStop.schedule(gDur_RecStopTask);
			}
		}
	}
	
	gBool_Thresh = v;
}


/*===========================================================================*/

var gTask_RecEnd = new Task(rec_end);

var gBool_RecStandby = false;

var gDur_RecStopTask = 1000;
var gTask_RecStop = new Task(rec_stop);

/* for initial delay before curve starts */
var gTask_VolCurveStart = new Task(start_vol_curve);
var gTask_DelCurveStart = new Task(start_del_curve);
var gTask_DurCurveStart = new Task(start_dur_curve);

function auto(rec)
{
	if (playing()) return;
	
	reset();

	play();

	gTask_VolCurveStart.schedule(gDur_Delay_VolCurveStart);
	gTask_DelCurveStart.schedule(gDur_Delay_DelCurveStart);
	gTask_DurCurveStart.schedule(gDur_Delay_DurCurveStart);

	if (rec)
	{
		rec_start();
		gTask_RecEnd.schedule(gDur_RecEndTask);
	}
}

function rec_standby(v)
{
	if (!gBool_RecStandby && v)	/* zero to non-zero transition */
		if (gBool_Thresh)
			auto(1); /* start recording/playback */

	gBool_RecStandby = v;
}

function rec_start()
{
	messnamed(gRec_msg,"clear");

	gDur_Rec = gDur_Buf;

	gTime_Start = max.time;

	messnamed(gRecLine_msg,1,gDur_RecLine_On,0.0);
}

function rec_end()
{
	post("REC DUR (rec_end)\n");

	if (gTask_RecStop.running)
		gTask_RecStop.cancel();

	messnamed(gRecLine_msg,0,gDur_RecLine_Off,-0.5);
}

function rec_stop()	/* force stop recording */
{
	post("REC DUR (rec_stop)",max.time-gTime_Start,"\n");

	if (gTask_RecEnd.running)
		gTask_RecEnd.cancel();
	
	gDur_Rec = max.time-gTime_Start;

	messnamed(gRecLine_msg,0,0,0);
}
