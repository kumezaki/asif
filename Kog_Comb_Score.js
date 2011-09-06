autowatch = 1;
outlets = 2;

/*===========================================================================*/

function loadbang()
{
	reset();
}

function reset()
{
	set_arm(0);
	
	jump(0);
}


/*===========================================================================*/

var gTask_BangBlock = new Task(bang_block_func);
var gTask_AutoBang = new Task(bang);

function bang_block_func()
{
//	post("done blocking bang\n");
}

function bang()
{
	if (gTask_BangBlock.running)
		{ post("blocking bang\n"); return; }
	else
		gTask_BangBlock.schedule(250);

	advance();
}

function set_autobang(v)
{
	gTask_AutoBang.cancel();
	if (v >= 0)
		gTask_AutoBang.schedule(v);
}


/*===========================================================================*/

var gPos_Cue = 0;
var gPos_SubCue = 0;

var gPos_LastCue = 0;
var gPos_LastSubCue = 0;

var gBool_Arm = 0;

function set_last_cue(v) { gPos_LastCue = v; }
function set_last_subcue(v) { gPos_LastSubCue = v; }
function set_arm(v) { gBool_Arm = v; }

function advance()
{
	if (gPos_SubCue == gPos_LastSubCue)
	{
		gPos_Cue = (gPos_Cue + 1) % (gPos_LastCue+1);
		gPos_SubCue = 0;
	}
	else
		gPos_SubCue++;
    
    update();
}

function jump(v)
{
	if ((v < 0) || (v > gPos_LastCue)) return;

	gPos_Cue = v;
	gPos_SubCue = 0;

    update();
}

function update()
{
	if (gBool_Arm)
		arm_cue(gPos_Cue,gPos_SubCue);
	else
		cue(gPos_Cue,gPos_SubCue);
}


/*===========================================================================*/

var	gPos_ArmedCue = new Array(-1,0);

function buf_end(v)
{
	if (gPos_ArmedCue[0] != -1)
	{
		cue(gPos_ArmedCue[0],gPos_ArmedCue[1]);
		gPos_ArmedCue[0] = -1;
		gPos_ArmedCue[1] = 0;
	}

	/* the following must be called after any armed cues above are executed */
	messnamed("Kog_Comb_Buffers_js_msg","buf_start",v);
}

function arm_cue(v0,v1)
{
	outlet(1,"cue",v0,v1,"ARMED");

	gPos_ArmedCue[0] = v0;
	gPos_ArmedCue[1] = v1;
}

function cue(v0,v1)
{
	outlet(1,"cue",v0,v1);
	outlet(0,"bang");

	messnamed("TOSC_cur_cue",v0);
	messnamed("TOSC_cur_sub_cue",v1);
}


/*===========================================================================*/

function key(v)
{
	post(v,"\n");
	switch (parseInt(v))
	{
		case 13: /* return */
			messnamed("Kog_Comb_Buffers_js_msg","reset");
			reset();
			break;
		case 96: /* tilde */
			messnamed("Kog_Comb_adc_msg","bang");
			break;
	}
}
