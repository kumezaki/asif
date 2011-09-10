autowatch = 1;

var gNum_Voices = 5;
var gArray_Voices = new Array();

var gDur_Buf = 8000;

var gDur_RecTask;
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
	
	gDur_RecTask = gDur_Buf * 0.74;
	gDur_RecLine_On = gDur_Buf * 0.01;
	gDur_RecLine_Off = gDur_Buf * 0.25;

	gDur_Delay_VolCurveStart = gDur_Buf * 0.00;
	gDur_Delay_DelCurveStart = gDur_Buf * 0.00;
	gDur_Delay_DurCurveStart = gDur_Buf * 1.00;

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

	if (gArray_Voices[i].pos_play < gDur_Buf)
	{
		gArray_Voices[i].task.schedule(gArray_Voices[i].dur + gArray_Voices[i].del);
	}
	else
	{
		var start = gArray_Voices[i].pos_play - gArray_Voices[i].dur;
		var dur = gDur_Buf - start;
		post("last play segment for",i,start,gArray_Voices[i].dur,gArray_Voices[i].pos_play,dur,"\n");
		gArray_Voices[i].task.arguments[1] = -1;
		gArray_Voices[i].task.schedule(dur);
	}
}


/*===========================================================================*/

var task_rec = new Task(rec_func);

var task_vol_curve_start = new Task(start_vol_curve);
var task_del_curve_start = new Task(start_del_curve);
var task_dur_curve_start = new Task(start_dur_curve);

function auto(rec)
{
	if (playing()) return;
	
	reset();

	play();

	task_vol_curve_start.schedule(gDur_Delay_VolCurveStart);
	task_del_curve_start.schedule(gDur_Delay_DelCurveStart);
	task_dur_curve_start.schedule(gDur_Delay_DurCurveStart);

	if (rec)
	{
		rec_func(1);
		task_rec.arguments[0] = 0;
		task_rec.schedule(gDur_RecTask);
	}
}

function rec_func()
{
	var on = arguments[0];
	if (on)
		messnamed(gRec_msg,1);
	messnamed(gRecLine_msg,on,on?gDur_RecLine_On:gDur_RecLine_Off,on?0.:-0.5);
}
