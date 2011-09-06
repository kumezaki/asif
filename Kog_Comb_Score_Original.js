autowatch = 1;

/* these should be shared globally */
var gNum_Bufs = 4;
var gNum_Octaves = 3;

var gDur_Pulse = 1000;

var gArray_NextCue = new Array(1,2,3,4,5,0);
var gArray_MaxSubCue = new Array(0,0,3,3,1,0);	/* these need to match the number of sub cues in the switch statements */

var gPos_CurCue = -1;
var	gPos_ArmedCue = new Array(-1,0);

var gDur_AutoBang = -1;

var gDB_PartThresh = -22.;

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
	outlet(0,"cue",v0,v1,"ARMED");

	gPos_ArmedCue[0] = v0;
	gPos_ArmedCue[1] = v1;
}

function notify_cue_change(v0,v1)
{
	outlet(0,"cue",v0,v1);
	
	messnamed("TOSC_cur_cue",v0);
	messnamed("TOSC_cur_sub_cue",v1);
}

function cue(v0,v1)
{
	notify_cue_change(v0,v1);

	switch (v0)
	{
		case 0:
		{
			switch (v1)
			{
				case 0:
				{
					messnamed("Kog_Comb_Buffers_js_msg","reset");

					gBool_Arm = 0;
					gDur_AutoBang = -1;
					var s = gDur_Pulse * 1.000;
					messnamed("Kog_Particles_Master_Vol_msg",0.000,0.000);
					messnamed("Kog_Particles_Thresh_msg","thresh",0.000,0.000);
					messnamed("Kog_Particles_SpectralGate_Thresh_msg",0.000);
					messnamed("Kog_Comb_Master_Vol_msg",0.500);
					messnamed("Kog_Comb_Vol_Line_msg",0.000,0,0.000);
					messnamed("Kog_Comb_SpectralGate_Thresh_msg",12.000);
					messnamed("Kog_Comb_Buffers_js_msg","clear_bufs",1,1,1,1);
					messnamed("Kog_Comb_Buffers_js_msg","set_play_loop",0,s,s,s,s);
					messnamed("Kog_Comb_Buffers_js_msg","set_play_seq",-1,-1,-1,-1);
					messnamed("Kog_Comb_Buffers_js_msg","set_rec_seq",-1,-1,-1,-1);
					messnamed("Kog_Comb_Notes_msg",0,0,0);
					set_buf_speed_all(1.000,1.000,1.000);
					set_buf_vol_all(0.000,0.000,0.000,0.000,0.000,0.000);
					break;
				}
				default: break;
			}
			break;
		}
		case 1:
		{
			switch (v1)
			{
				case 0:
				{
					gBool_Arm = 0;
					gDur_AutoBang = -1;
					var s = gDur_Pulse * 1.000;
					messnamed("Kog_Particles_Master_Vol_msg",0.400,0.000);
					messnamed("Kog_Particles_Thresh_msg","thresh",-22.000,-22.000);
					messnamed("Kog_Particles_SpectralGate_Thresh_msg",3.000);
					messnamed("Kog_Comb_Master_Vol_msg",0.500);
					messnamed("Kog_Comb_Vol_Line_msg",0.000,0,0.000);
					messnamed("Kog_Comb_SpectralGate_Thresh_msg",3.000);
					messnamed("Kog_Comb_Buffers_js_msg","clear_bufs",1,1,1,1);
					messnamed("Kog_Comb_Buffers_js_msg","set_play_loop",0,s,s,s,s);
					messnamed("Kog_Comb_Buffers_js_msg","set_play_seq",-1,-1,-1,-1);
					messnamed("Kog_Comb_Buffers_js_msg","set_rec_seq",-1,-1,-1,-1);
					messnamed("Kog_Comb_Notes_msg",0,0,0);
					set_buf_speed_all(1.000,1.000,1.000);
					set_buf_vol_all(0.000,0.000,0.000,0.000,0.000,0.000);
					break;
				}
				default: break;
			}
			break;
		}
		case 2:
		{
			switch (v1)
			{
				case 0:
				{
					gBool_Arm = 1;
					gDur_AutoBang = 30000;
					var s = gDur_Pulse * 2.000;
					messnamed("Kog_Particles_Master_Vol_msg",0.400,0.000);
					messnamed("Kog_Particles_Thresh_msg","thresh",-22.000,-22.000);
					messnamed("Kog_Particles_SpectralGate_Thresh_msg",3.000);
					messnamed("Kog_Comb_Master_Vol_msg",0.500);
					messnamed("Kog_Comb_Vol_Line_msg",1.000,0,0.000);
					messnamed("Kog_Comb_SpectralGate_Thresh_msg",12.000);
					messnamed("Kog_Comb_Buffers_js_msg","clear_bufs",0,1,0,1);
					messnamed("Kog_Comb_Buffers_js_msg","set_play_loop",0,s,s,s,s);
					messnamed("Kog_Comb_Buffers_js_msg","set_play_seq",1,2,3,0);
					messnamed("Kog_Comb_Buffers_js_msg","set_rec_seq",2,-1,0,-1);
					messnamed("Kog_Comb_Notes_msg",0,1,0);
					set_buf_speed_all(0.500,0.250,0.125);
					set_buf_vol_all(0.000,1.000,1.000,0.000,180.000,150.000);
					break;
				}
				case 1:
				{
					gBool_Arm = 1;
					gDur_AutoBang = 15000;
					var s = gDur_Pulse * 1.900;
					messnamed("Kog_Particles_Master_Vol_msg",0.400,0.000);
					messnamed("Kog_Particles_Thresh_msg","thresh",-22.000,-22.000);
					messnamed("Kog_Particles_SpectralGate_Thresh_msg",3.000);
					messnamed("Kog_Comb_Master_Vol_msg",0.500);
					messnamed("Kog_Comb_Vol_Line_msg",1.000,0,0.000);
					messnamed("Kog_Comb_SpectralGate_Thresh_msg",12.000);
					messnamed("Kog_Comb_Buffers_js_msg","clear_bufs",0,0,0,0);
					messnamed("Kog_Comb_Buffers_js_msg","set_play_loop",gDur_AutoBang,s,s,s,s);
					messnamed("Kog_Comb_Buffers_js_msg","set_play_seq",1,2,3,0);
					messnamed("Kog_Comb_Buffers_js_msg","set_rec_seq",2,-1,0,-1);
					messnamed("Kog_Comb_Notes_msg",0,1,0);
					set_buf_speed_all(0.500,0.250,0.125);
					set_buf_vol_all(0.000,1.000,1.000,0.000,20.000,20.000);
					break;
				}
				case 2:
				{
					gBool_Arm = 1;
					gDur_AutoBang = 15000;
					var s = gDur_Pulse * 1.800;
					messnamed("Kog_Particles_Master_Vol_msg",0.400,0.000);
					messnamed("Kog_Particles_Thresh_msg","thresh",-22.000,-22.000);
					messnamed("Kog_Particles_SpectralGate_Thresh_msg",3.000);
					messnamed("Kog_Comb_Master_Vol_msg",0.500);
					messnamed("Kog_Comb_Vol_Line_msg",1.000,0,0.000);
					messnamed("Kog_Comb_SpectralGate_Thresh_msg",12.000);
					messnamed("Kog_Comb_Buffers_js_msg","clear_bufs",0,0,0,0);
					messnamed("Kog_Comb_Buffers_js_msg","set_play_loop",gDur_AutoBang,s,s,s,s);
					messnamed("Kog_Comb_Buffers_js_msg","set_play_seq",1,2,3,0);
					messnamed("Kog_Comb_Buffers_js_msg","set_rec_seq",2,-1,0,-1);
					messnamed("Kog_Comb_Notes_msg",0,1,0);
					set_buf_speed_all(0.500,0.250,0.125);
					set_buf_vol_all(0.500,1.000,1.000,60.000,0.000,0.000);
					break;
				}
				case 3:
				{
					gBool_Arm = 1;
					gDur_AutoBang = -1;
					var s = gDur_Pulse * 1.700;
					messnamed("Kog_Particles_Master_Vol_msg",0.000,20000.000);
					messnamed("Kog_Particles_Thresh_msg","thresh",0.000,0.000);
					messnamed("Kog_Particles_SpectralGate_Thresh_msg",3.000);
					messnamed("Kog_Comb_Master_Vol_msg",0.500);
					messnamed("Kog_Comb_Vol_Line_msg",1.000,0,0.000);
					messnamed("Kog_Comb_SpectralGate_Thresh_msg",12.000);
					messnamed("Kog_Comb_Buffers_js_msg","clear_bufs",0,0,0,0);
					messnamed("Kog_Comb_Buffers_js_msg","set_play_loop",60000,s,s,s,s);
					messnamed("Kog_Comb_Buffers_js_msg","set_play_seq",1,2,3,0);
					messnamed("Kog_Comb_Buffers_js_msg","set_rec_seq",2,-1,0,-1);
					messnamed("Kog_Comb_Notes_msg",0,1,0);
					set_buf_speed_all(0.500,0.250,0.125);
					set_buf_vol_all(0.500,1.000,1.000,0.000,0.000,0.000);
					break;
				}
				default: break;
			}
			break;
		}
		case 3:
		{
			switch (v1)
			{
				case 0:
				{
					gBool_Arm = 1;
					gDur_AutoBang = -1;
					var s = gDur_Pulse * 1.000;
					messnamed("Kog_Particles_Master_Vol_msg",0.000,20000.000);
					messnamed("Kog_Particles_Thresh_msg","thresh",0.000,0.000);
					messnamed("Kog_Particles_SpectralGate_Thresh_msg",3.000);
					messnamed("Kog_Comb_Master_Vol_msg",0.500);
					messnamed("Kog_Comb_Vol_Line_msg",1.000,0,0.000);
					messnamed("Kog_Comb_SpectralGate_Thresh_msg",6.000);
					messnamed("Kog_Comb_Buffers_js_msg","clear_bufs",0,0,1,1);
					messnamed("Kog_Comb_Buffers_js_msg","set_play_loop",0,s*1.5,s,s,s);
					messnamed("Kog_Comb_Buffers_js_msg","set_play_seq",1,0,-1,-1);
					messnamed("Kog_Comb_Buffers_js_msg","set_rec_seq",0,-1,-1,-1);
					messnamed("Kog_Comb_Notes_msg",0,0,1);
					set_buf_speed_all(1.000,0.250,0.125);
					set_buf_vol_one(0,0.300,0.700,0.700,10.000,0.000,0.000);
					set_buf_vol_one(1,0.000,0.000,0.000,0.000,0.000,0.000);
					set_buf_vol_one(2,0.000,0.000,0.000,0.000,0.000,0.000);
					set_buf_vol_one(3,0.000,0.000,0.000,0.000,0.000,0.000);
					break;
				}
				case 1:
				{
					gBool_Arm = 1;
					gDur_AutoBang = -1;
					var s = gDur_Pulse * 0.950;
					messnamed("Kog_Particles_Master_Vol_msg",0.000,20000.000);
					messnamed("Kog_Particles_Thresh_msg","thresh",0.000,0.000);
					messnamed("Kog_Particles_SpectralGate_Thresh_msg",3.000);
					messnamed("Kog_Comb_Master_Vol_msg",0.500);
					messnamed("Kog_Comb_Vol_Line_msg",1.000,0,0.000);
					messnamed("Kog_Comb_SpectralGate_Thresh_msg",6.000);
					messnamed("Kog_Comb_Buffers_js_msg","clear_bufs",0,0,0,0);
					messnamed("Kog_Comb_Buffers_js_msg","set_play_loop",0,s*1.5,s,s,s);
					messnamed("Kog_Comb_Buffers_js_msg","set_play_seq",1,0,-1,-1);
					messnamed("Kog_Comb_Buffers_js_msg","set_rec_seq",0,-1,-1,-1);
					messnamed("Kog_Comb_Notes_msg",1,0,0);
					set_buf_speed_all(1.000,0.250,0.125);
					set_buf_vol_one(0,0.300,0.700,0.700,0.000,0.000,0.000);
					set_buf_vol_one(1,0.000,0.000,0.000,0.000,0.000,0.000);
					set_buf_vol_one(2,0.000,0.000,0.000,0.000,0.000,0.000);
					set_buf_vol_one(3,0.000,0.000,0.000,0.000,0.000,0.000);
					break;
				}
				case 2:
				{
					gBool_Arm = 1;
					gDur_AutoBang = -1;
					var s = gDur_Pulse * 0.950;
					messnamed("Kog_Particles_Master_Vol_msg",0.200,20000.000);
					messnamed("Kog_Particles_Thresh_msg","thresh",-22.000,-22.000);
					messnamed("Kog_Particles_SpectralGate_Thresh_msg",3.000);
					messnamed("Kog_Comb_Master_Vol_msg",0.500);
					messnamed("Kog_Comb_Vol_Line_msg",1.000,0,0.000);
					messnamed("Kog_Comb_SpectralGate_Thresh_msg",6.000);
					messnamed("Kog_Comb_Buffers_js_msg","clear_bufs",0,0,0,0);
					messnamed("Kog_Comb_Buffers_js_msg","set_play_loop",0,s*1.5,s,s,s);
					messnamed("Kog_Comb_Buffers_js_msg","set_play_seq",1,0,-1,-1);
					messnamed("Kog_Comb_Buffers_js_msg","set_rec_seq",0,-1,-1,-1);
					messnamed("Kog_Comb_Notes_msg",1,0,0);
					set_buf_speed_all(1.000,0.250,0.125);
					set_buf_vol_one(0,0.300,0.700,0.700,0.000,0.000,0.000);
					set_buf_vol_one(1,0.000,0.000,0.000,0.000,0.000,0.000);
					set_buf_vol_one(2,0.000,0.000,0.000,0.000,0.000,0.000);
					set_buf_vol_one(3,0.000,0.000,0.000,0.000,0.000,0.000);
					break;
				}
				case 3:
				{
					gBool_Arm = 1;
					gDur_AutoBang = -1;
					var s = gDur_Pulse * 0.750;
					messnamed("Kog_Particles_Master_Vol_msg",0.400,20000.000);
					messnamed("Kog_Particles_Thresh_msg","thresh",-22.000,-22.000);
					messnamed("Kog_Particles_SpectralGate_Thresh_msg",3.000);
					messnamed("Kog_Comb_Master_Vol_msg",0.500);
					messnamed("Kog_Comb_Vol_Line_msg",1.000,0,0.000);
					messnamed("Kog_Comb_SpectralGate_Thresh_msg",6.000);
					messnamed("Kog_Comb_Buffers_js_msg","clear_bufs",0,0,0,0);
					messnamed("Kog_Comb_Buffers_js_msg","set_play_loop",60000,s*1.5,s,s,s);
					messnamed("Kog_Comb_Buffers_js_msg","set_play_seq",1,0,-1,-1);
					messnamed("Kog_Comb_Buffers_js_msg","set_rec_seq",1,0,-1,-1);
					messnamed("Kog_Comb_Notes_msg",1,1,1);
					set_buf_speed_all(1.000,0.250,0.125);
					set_buf_vol_one(0,0.300,0.700,0.700,0.000,0.000,0.000);
					set_buf_vol_one(1,0.300,0.700,0.700,15.000,10.000,5.000);
					set_buf_vol_one(2,0.000,0.000,0.000,0.000,0.000,0.000);
					set_buf_vol_one(3,0.000,0.000,0.000,0.000,0.000,0.000);
					break;
				}
				default: break;
			}
			break;
		}
		case 4:
		{
			switch (v1)
			{
				case 0:
				{
					gBool_Arm = 1;
					gDur_AutoBang = -1;
					var s = gDur_Pulse * 0.500;
					messnamed("Kog_Particles_Master_Vol_msg",0.000,20000.000);
					messnamed("Kog_Particles_Thresh_msg","thresh",0.000,0.000);
					messnamed("Kog_Particles_SpectralGate_Thresh_msg",3.000);
					messnamed("Kog_Comb_Master_Vol_msg",0.500);
					messnamed("Kog_Comb_Vol_Line_msg",1.000,0,0.000);
					messnamed("Kog_Comb_SpectralGate_Thresh_msg",3.000);
					messnamed("Kog_Comb_Buffers_js_msg","clear_bufs",0,0,0,0);
					messnamed("Kog_Comb_Buffers_js_msg","set_play_loop",0,s,s,s,s);
					messnamed("Kog_Comb_Buffers_js_msg","set_play_seq",1,0,-1,-1);
					messnamed("Kog_Comb_Buffers_js_msg","set_rec_seq",1,0,-1,-1);
					messnamed("Kog_Comb_Notes_msg",1,0,0);
					set_buf_speed_all(1.000,0.500,0.250);
					set_buf_vol_all(1.000,1.000,1.000,0.000,0.000,0.000);
					break;
				}
				case 1:
				{
					gBool_Arm = 1;
					gDur_AutoBang = -1;
					var s = gDur_Pulse * 0.500;
					messnamed("Kog_Particles_Master_Vol_msg",0.000,20000.000);
					messnamed("Kog_Particles_Thresh_msg","thresh",0.000,0.000);
					messnamed("Kog_Particles_SpectralGate_Thresh_msg",3.000);
					messnamed("Kog_Comb_Master_Vol_msg",0.500);
					messnamed("Kog_Comb_Vol_Line_msg",1.000,0,0.000);
					messnamed("Kog_Comb_SpectralGate_Thresh_msg",3.000);
					messnamed("Kog_Comb_Buffers_js_msg","clear_bufs",0,0,0,0);
					messnamed("Kog_Comb_Buffers_js_msg","set_play_loop",0,s,s,s,s);
					messnamed("Kog_Comb_Buffers_js_msg","set_play_seq",1,0,-1,-1);
					messnamed("Kog_Comb_Buffers_js_msg","set_rec_seq",1,0,-1,-1);
					messnamed("Kog_Comb_Notes_msg",1,1,0);
					set_buf_speed_all(1.000,0.500,0.250);
					set_buf_vol_all(1.000,1.000,1.000,0.000,0.000,0.000);
					break;
				}
				default: break;
			}
			break;
		}
		case 5:
		{
			switch (v1)
			{
				case 0:
				{
					gBool_Arm = 1;
					gDur_AutoBang = -1;
					var s = gDur_Pulse * 0.500;
					messnamed("Kog_Particles_Master_Vol_msg",0.000,20000.000);
					messnamed("Kog_Particles_Thresh_msg","thresh",0.000,0.000);
					messnamed("Kog_Particles_SpectralGate_Thresh_msg",3.000);
					messnamed("Kog_Comb_Master_Vol_msg",0.500);
					messnamed("Kog_Comb_Vol_Line_msg",0.000,20000,-0.500);
					messnamed("Kog_Comb_SpectralGate_Thresh_msg",3.000);
					messnamed("Kog_Comb_Buffers_js_msg","clear_bufs",0,0,0,0);
					messnamed("Kog_Comb_Buffers_js_msg","set_play_loop",0,s,s,s,s);
					messnamed("Kog_Comb_Buffers_js_msg","set_play_seq",1,0,-1,-1);
					messnamed("Kog_Comb_Buffers_js_msg","set_rec_seq",0,-1,-1,-1);
					messnamed("Kog_Comb_Notes_msg",0,0,0);
					set_buf_speed_all(1.000,0.500,0.250);
					set_buf_vol_one(0,1.000,1.000,1.000,0.000,0.000,0.000);
					set_buf_vol_one(1,0.000,0.000,0.000,10.000,10.000,10.000);
					set_buf_vol_one(2,0.000,0.000,0.000,0.000,0.000,0.000);
					set_buf_vol_one(3,0.000,0.000,0.000,0.000,0.000,0.000);
					break;
				}
				default: break;
			}
			break;
		}
		default: break;
	}

/*	
	gBool_Arm = 1;
	gDur_AutoBang = -1;

	messnamed("Kog_Particles_Master_Vol_msg",0.4);
	messnamed("Kog_Comb_Master_Vol_msg",0.5);
	
	switch (v0)
	{
		case 0:
			messnamed("Kog_Comb_Buffers_js_msg","reset");

			gBool_Arm = 0;
			var s = gDur_Pulse;
			messnamed("Kog_Particles_Thresh_msg","thresh",-0.,-0.);
			messnamed("Kog_Particles_SpectralGate_Thresh_msg",0.);
			messnamed("Kog_Comb_Vol_Line_msg",0.,0);
			messnamed("Kog_Comb_SpectralGate_Thresh_msg",12.);
			messnamed("Kog_Comb_Buffers_js_msg","clear_bufs",1,1,1,1);
			messnamed("Kog_Comb_Buffers_js_msg","set_play_loop",0,s,s,s,s);
			messnamed("Kog_Comb_Buffers_js_msg","set_play_seq",-1,-1,-1,-1);
			messnamed("Kog_Comb_Buffers_js_msg","set_rec_seq",-1,-1,-1,-1);
			messnamed("Kog_Comb_Notes_msg",0,0,0);
			set_buf_speed_all(1.,1.,1.);
			set_buf_vol_all(0.,0.,0.,0.,0.,0.);
			switch (v1)
			{
				default: break;
			}
			break;

		case 1:
			gBool_Arm = 0;
			var s = gDur_Pulse;
			messnamed("Kog_Particles_Thresh_msg","thresh",gDB_PartThresh,gDB_PartThresh);
			messnamed("Kog_Particles_SpectralGate_Thresh_msg",3.);
			messnamed("Kog_Comb_Vol_Line_msg",0.,0);
			messnamed("Kog_Comb_SpectralGate_Thresh_msg",3.);
			messnamed("Kog_Comb_Buffers_js_msg","clear_bufs",1,1,1,1);
			messnamed("Kog_Comb_Buffers_js_msg","set_play_loop",0,s,s,s,s);
			messnamed("Kog_Comb_Buffers_js_msg","set_play_seq",-1,-1,-1,-1);
			messnamed("Kog_Comb_Buffers_js_msg","set_rec_seq",-1,-1,-1,-1);
			messnamed("Kog_Comb_Notes_msg",0,0,0);
			set_buf_speed_all(1.,1.,1.);
			set_buf_vol_all(0.,0.,0.,0.,0.,0.);
			switch (v1)
			{
				default: break;
			}
			break;
		
		case 2:
			switch (v1)
			{
				case 0:
				{
					gDur_AutoBang = 30000;
					var s = gDur_Pulse * 2.0;
					messnamed("Kog_Particles_Thresh_msg","thresh",gDB_PartThresh,gDB_PartThresh);
					messnamed("Kog_Particles_SpectralGate_Thresh_msg",3.);
					messnamed("Kog_Comb_Vol_Line_msg",1.,0);
					messnamed("Kog_Comb_SpectralGate_Thresh_msg",12.);
					messnamed("Kog_Comb_Buffers_js_msg","clear_bufs",0,1,0,1);
					messnamed("Kog_Comb_Buffers_js_msg","set_play_loop",0,s,s,s,s);
					messnamed("Kog_Comb_Buffers_js_msg","set_play_seq",1,2,3,0);
					messnamed("Kog_Comb_Buffers_js_msg","set_rec_seq",2,0,0,0);
					messnamed("Kog_Comb_Notes_msg",0,1,0);
					set_buf_speed_all(0.5,0.25,0.125);
					set_buf_vol_all(0.,1.,1.,0.,180.,150.);
					break;
				}
				case 1:
				{
					gDur_AutoBang = 15000;
					var s = gDur_Pulse * 1.9;
					messnamed("Kog_Particles_Thresh_msg","thresh",gDB_PartThresh,gDB_PartThresh);
					messnamed("Kog_Particles_SpectralGate_Thresh_msg",3.);
					messnamed("Kog_Comb_Vol_Line_msg",1.,0);
					messnamed("Kog_Comb_SpectralGate_Thresh_msg",12.);
					messnamed("Kog_Comb_Buffers_js_msg","clear_bufs",0,0,0,0);
					messnamed("Kog_Comb_Buffers_js_msg","set_play_loop",gDur_AutoBang,s,s,s,s);
					messnamed("Kog_Comb_Buffers_js_msg","set_play_seq",1,2,3,0);
					messnamed("Kog_Comb_Buffers_js_msg","set_rec_seq",2,0,0,0);
					messnamed("Kog_Comb_Notes_msg",0,1,0);
					set_buf_speed_all(0.5,0.25,0.125);
					set_buf_vol_all(0.,1.,1.,0.,20.,20.);
					break;
				}
				case 2:
				{
					gDur_AutoBang = 15000;
					var s = gDur_Pulse * 1.8;
					messnamed("Kog_Particles_Thresh_msg","thresh",gDB_PartThresh,gDB_PartThresh);
					messnamed("Kog_Particles_SpectralGate_Thresh_msg",3.);
					messnamed("Kog_Comb_SpectralGate_Thresh_msg",12.);
					messnamed("Kog_Comb_Vol_Line_msg",1.,0);
					messnamed("Kog_Comb_Buffers_js_msg","clear_bufs",0,0,0,0);
					messnamed("Kog_Comb_Buffers_js_msg","set_play_loop",gDur_AutoBang,s,s,s,s);
					messnamed("Kog_Comb_Buffers_js_msg","set_play_seq",1,2,3,0);
					messnamed("Kog_Comb_Buffers_js_msg","set_rec_seq",2,0,0,0);
					messnamed("Kog_Comb_Notes_msg",0,1,0);
					set_buf_speed_all(0.5,0.25,0.125);
					set_buf_vol_all(0.5,1.,1.,60.,0.,0.);
					break;
				}
				case 3:
				{
					var s = gDur_Pulse * 1.5;
					messnamed("Kog_Particles_Thresh_msg","thresh",-0.,-0.);
					messnamed("Kog_Particles_SpectralGate_Thresh_msg",3.);
					messnamed("Kog_Comb_Vol_Line_msg",1.,0);
					messnamed("Kog_Comb_SpectralGate_Thresh_msg",12.);
					messnamed("Kog_Comb_Buffers_js_msg","clear_bufs",0,0,0,0);
					messnamed("Kog_Comb_Buffers_js_msg","set_play_loop",60000,s,s,s,s);
					messnamed("Kog_Comb_Buffers_js_msg","set_play_seq",1,2,3,0);
					messnamed("Kog_Comb_Buffers_js_msg","set_rec_seq",2,0,0,0);
					messnamed("Kog_Comb_Notes_msg",0,1,0);
					set_buf_speed_all(0.5,0.25,0.125);
					set_buf_vol_all(0.5,1.,1.,0.,0.,0.);
					break;
				}
				default: break;
			}
			break;

		case 3:
			messnamed("Kog_Particles_SpectralGate_Thresh_msg",3.);
			messnamed("Kog_Comb_Vol_Line_msg",1.,0);
			messnamed("Kog_Comb_SpectralGate_Thresh_msg",6.);
			messnamed("Kog_Comb_Buffers_js_msg","clear_bufs",0,0,1,1);
			messnamed("Kog_Comb_Buffers_js_msg","set_play_seq",1,0,0,0);
			switch (v1)
			{
				case 0:
				{
					var s = gDur_Pulse * 1.00;
					messnamed("Kog_Particles_Thresh_msg","thresh",-0.,-0.);
					messnamed("Kog_Comb_Notes_msg",0,0,1);
					messnamed("Kog_Comb_Buffers_js_msg","set_play_loop",0,s*1.5,s,s*1.5,s);
					messnamed("Kog_Comb_Buffers_js_msg","set_rec_seq",0,-1,-1,-1);
					set_buf_speed_all(1.,0.25,0.125);
					set_buf_vol_one(0,0.3,0.7,0.7,10.,0.,0.);
					set_buf_vol_one(1,0.0,0.0,0.0,0.,0.,0.);
					set_buf_vol_one(2,0.3,0.7,0.7,10.,0.,0.);
					set_buf_vol_one(3,0.3,0.7,0.7,10.,0.,0.);
					break;
				}
				case 1:
				{
					var s = gDur_Pulse * 0.95;
					messnamed("Kog_Particles_Thresh_msg","thresh",-0.,-0.);
					messnamed("Kog_Comb_Notes_msg",1,0,0);
					messnamed("Kog_Comb_Buffers_js_msg","set_play_loop",0,s*1.5,s,s*1.5,s);
					messnamed("Kog_Comb_Buffers_js_msg","set_rec_seq",0,-1,-1,-1);
					set_buf_speed_all(1.,0.25,0.125);
					set_buf_vol_one(0,0.3,0.7,0.7,0.,0.,0.);
					set_buf_vol_one(1,0.0,0.0,0.0,0.,0.,0.);
					set_buf_vol_one(2,0.3,0.7,0.7,0.,0.,0.);
					set_buf_vol_one(3,0.3,0.7,0.7,0.,0.,0.);
					break;
				}
				case 2:
				{
					var s = gDur_Pulse * 0.95;
					messnamed("Kog_Particles_Thresh_msg","thresh",gDB_PartThresh,gDB_PartThresh);
					messnamed("Kog_Comb_Notes_msg",1,0,0);
					messnamed("Kog_Comb_Buffers_js_msg","set_play_loop",0,s*1.5,s,s*1.5,s);
					messnamed("Kog_Comb_Buffers_js_msg","set_rec_seq",0,-1,-1,-1);
					set_buf_speed_all(1.,0.25,0.125);
					set_buf_vol_one(0,0.3,0.7,0.7,0.,0.,0.);
					set_buf_vol_one(1,0.0,0.0,0.0,0.,0.,0.);
					set_buf_vol_one(2,0.3,0.7,0.7,0.,0.,0.);
					set_buf_vol_one(3,0.3,0.7,0.7,0.,0.,0.);
					break;
				}
				case 3:
				{
					var s = gDur_Pulse * 0.75;
					messnamed("Kog_Particles_Thresh_msg","thresh",gDB_PartThresh,gDB_PartThresh);
					messnamed("Kog_Comb_Notes_msg",1,1,1);
					messnamed("Kog_Comb_Buffers_js_msg","set_play_loop",60000,s*1.5,s,s*1.5,s);
					messnamed("Kog_Comb_Buffers_js_msg","set_rec_seq",1,0,-1,-1);
					set_buf_speed_all(1.,0.25,0.125);
					set_buf_vol_one(0,0.3,0.7,0.7,0.,0.,0.);
					set_buf_vol_one(1,0.3,0.7,0.7,15.,10.,5.);
					set_buf_vol_one(2,0.3,0.7,0.7,0.,0.,0.);
					set_buf_vol_one(3,0.3,0.7,0.7,0.,0.,0.);
					break;
				}
				case 4:
				{
					var s = gDur_Pulse * 0.75;
					messnamed("Kog_Particles_Thresh_msg","thresh",-0.,-0.);
					messnamed("Kog_Comb_Notes_msg",1,1,1);
					messnamed("Kog_Comb_Buffers_js_msg","set_play_loop",0,s*1.5,s,s*1.5,s);
					messnamed("Kog_Comb_Buffers_js_msg","set_rec_seq",1,0,-1,-1);
					set_buf_speed_all(1.,0.25,0.125);
					set_buf_vol_one(0,0.3,0.7,0.7,0.,0.,0.);
					set_buf_vol_one(1,0.3,0.7,0.7,0.,0.,0.);
					set_buf_vol_one(2,0.3,0.7,0.7,0.,0.,0.);
					set_buf_vol_one(3,0.3,0.7,0.7,0.,0.,0.);
					break;
				}
				default: break;
			}
			break;

		case 4:
			var s = gDur_Pulse * 0.5;
			messnamed("Kog_Particles_Thresh_msg","thresh",-0.,-0.);
			messnamed("Kog_Particles_SpectralGate_Thresh_msg",3.);
			messnamed("Kog_Comb_Vol_Line_msg",1.,0);
			messnamed("Kog_Comb_SpectralGate_Thresh_msg",3.);
			messnamed("Kog_Comb_Buffers_js_msg","clear_bufs",0,0,1,1);
			messnamed("Kog_Comb_Buffers_js_msg","set_play_loop",0,s,s,s,s);
			messnamed("Kog_Comb_Buffers_js_msg","set_play_seq",1,0,0,0);
			messnamed("Kog_Comb_Buffers_js_msg","set_rec_seq",1,0,-1,-1);
			switch (v1)
			{
				case 0:
				{
					messnamed("Kog_Comb_Notes_msg",1,0,0);
					set_buf_speed_all(1.,0.5,0.25);
					set_buf_vol_all(1.,1.,1.,0.,0.,0.);
					break;
				}
				case 1:
				{
					messnamed("Kog_Comb_Notes_msg",1,1,0);
					set_buf_speed_all(1.,0.5,0.25);
					set_buf_vol_all(1.,1.,1.,0.,0.,0.);
					break;
				}
				default: break;
			}
			break;

		case 5:
			var s = gDur_Pulse * 0.5;
			messnamed("Kog_Particles_Thresh_msg","thresh",-0.,-0.);
			messnamed("Kog_Particles_SpectralGate_Thresh_msg",3.);
			messnamed("Kog_Comb_Vol_Line_msg",0.,20000, -0.5);
			messnamed("Kog_Comb_SpectralGate_Thresh_msg",3.);
			messnamed("Kog_Comb_Buffers_js_msg","clear_bufs",0,0,1,1);
			messnamed("Kog_Comb_Buffers_js_msg","set_play_loop",0,s,s,s,s);
			messnamed("Kog_Comb_Buffers_js_msg","set_play_seq",1,0,0,0);
			messnamed("Kog_Comb_Buffers_js_msg","set_rec_seq",0,-1,-1,-1);
			messnamed("Kog_Comb_Notes_msg",0,0,0);
			set_buf_speed_all(1.,0.5,0.25);
			set_buf_vol_one(0,1.,1.,1.,0.,0.,0.);
			set_buf_vol_one(1,0.,0.,0.,10.,10.,10.);
			set_buf_vol_one(2,1.,1.,1.,0.,0.,0.);
			set_buf_vol_one(3,1.,1.,1.,0.,0.,0.);
			switch (v1)
			{
				default: break;
			}
			break;

		default:
			break;
	}
*/

	auto_bang_check();
}

function set_buf_speed_all(s0,s1,s2)
{
	for (b = 0; b < gNum_Bufs; b++) /* can't be i for some reason */
		set_buf_speed_one(b,s0,s1,s2);
}

function set_buf_speed_one(b,s0,s1,s2)
{
	messnamed("Kog_Comb_Buffers_js_msg","set_play_speed",b,s0,s1,s2);
}

function set_buf_vol_all(v0,v1,v2,d0,d1,d2)
{
	for (b = 0; b < gNum_Bufs; b++) /* can't be i for some reason */
		set_buf_vol_one(b,v0,v1,v2,d0,d1,d2)
}

function set_buf_vol_one(b,v0,v1,v2,d0,d1,d2)
{
	messnamed("Kog_Comb_Buffers_js_msg","set_play_vol",b,v0,v1,v2,d0,d1,d2);
}


/*===========================================================================*/

var gPos_Cue = 0;
var gPos_SubCue = 0;

var gBool_Arm = 0;

var gTask_AutoBang = new Task(bang);
var gTask_BangBlock = new Task(bang_block_func);

function loadbang()
{
	reset();
}

function reset()
{
	gPos_Cue = 0;
	gPos_SubCue = 0;
	
	gBool_Arm = 0;
	
	assign();
}

function bang()
{
	if (gTask_BangBlock.running)
		{ post("blocking bang\n"); return; }
	else
		gTask_BangBlock.schedule(250);

	post(gPos_Cue,gPos_SubCue,"\n");
	
	if (gArray_MaxSubCue[gPos_Cue] == gPos_SubCue)
	{
		gPos_Cue = gArray_NextCue[gPos_Cue];
		gPos_SubCue = 0;
	}
	else
		gPos_SubCue++;
    
    assign();
}

function arm(v)
{
	gBool_Arm = v;
}

function jump(v)
{
	if ((v < 0) || (v >= gArray_NextCue.length)) return;

	gPos_Cue = v;
	gPos_SubCue = 0;

    assign();
}

function assign()
{
	if (gBool_Arm)
		arm_cue(gPos_Cue,gPos_SubCue);
	else
		cue(gPos_Cue,gPos_SubCue);
}

function auto_bang_check()
{
	if (gDur_AutoBang >= 0)
		gTask_AutoBang.schedule(gDur_AutoBang);
	else
		gTask_AutoBang.cancel();
}

function bang_block_func()
{
//	post("done blocking bang\n");
}

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
