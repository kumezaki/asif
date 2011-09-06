autowatch = 1;

/* these should be shared globally */
var gNum_Bufs = 4;
var gNum_Octaves = 4;

function cue(v0,v1)
{
	switch (v0)
	{
		case 0:
		{
			switch (v1)
			{
				case 0:
				{
					outlet(0,"set_last_cue",5);
					messnamed("Kog_Comb_Buffers_js_msg","reset");

					outlet(0,"set_last_subcue",0);
					outlet(0,"set_arm",0);
					var autobang = -1;
					outlet(0,"set_autobang",autobang);
					var s = 1000. * 1.000;
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
					for (b = 0; b < gNum_Bufs; b++)
						messnamed("Kog_Comb_Buffers_js_msg","set_play_speed",b,1.000,1.000,1.000,1.000);
					for (b = 0; b < gNum_Bufs; b++)
						messnamed("Kog_Comb_Buffers_js_msg","set_play_vol",b,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000);
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
					outlet(0,"set_last_subcue",0);
					outlet(0,"set_arm",0);
					var autobang = -1;
					outlet(0,"set_autobang",autobang);
					var s = 1000. * 1.000;
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
					for (b = 0; b < gNum_Bufs; b++)
						messnamed("Kog_Comb_Buffers_js_msg","set_play_speed",b,1.000,1.000,1.000,1.000);
					for (b = 0; b < gNum_Bufs; b++)
						messnamed("Kog_Comb_Buffers_js_msg","set_play_vol",b,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000);
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
					outlet(0,"set_last_subcue",3);
					outlet(0,"set_arm",1);
					var autobang = 30000;
					outlet(0,"set_autobang",autobang);
					var s = 1000. * 2.000;
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
					for (b = 0; b < gNum_Bufs; b++)
						messnamed("Kog_Comb_Buffers_js_msg","set_play_speed",b,0.500,0.250,0.125,0.000);
					for (b = 0; b < gNum_Bufs; b++)
						messnamed("Kog_Comb_Buffers_js_msg","set_play_vol",b,0.000,1.000,1.000,0.000,0.000,180.000,150.000,0.000);
					break;
				}
				case 1:
				{
					outlet(0,"set_last_subcue",3);
					outlet(0,"set_arm",1);
					var autobang = 15000;
					outlet(0,"set_autobang",autobang);
					var s = 1000. * 1.900;
					messnamed("Kog_Particles_Master_Vol_msg",0.400,0.000);
					messnamed("Kog_Particles_Thresh_msg","thresh",-22.000,-22.000);
					messnamed("Kog_Particles_SpectralGate_Thresh_msg",3.000);
					messnamed("Kog_Comb_Master_Vol_msg",0.500);
					messnamed("Kog_Comb_Vol_Line_msg",1.000,0,0.000);
					messnamed("Kog_Comb_SpectralGate_Thresh_msg",12.000);
					messnamed("Kog_Comb_Buffers_js_msg","clear_bufs",0,0,0,0);
					messnamed("Kog_Comb_Buffers_js_msg","set_play_loop",autobang,s,s,s,s);
					messnamed("Kog_Comb_Buffers_js_msg","set_play_seq",1,2,3,0);
					messnamed("Kog_Comb_Buffers_js_msg","set_rec_seq",2,-1,0,-1);
					messnamed("Kog_Comb_Notes_msg",0,1,0);
					for (b = 0; b < gNum_Bufs; b++)
						messnamed("Kog_Comb_Buffers_js_msg","set_play_speed",b,0.500,0.250,0.125,0.000);
					for (b = 0; b < gNum_Bufs; b++)
						messnamed("Kog_Comb_Buffers_js_msg","set_play_vol",b,0.000,1.000,1.000,0.000,0.000,20.000,20.000,0.000);
					break;
				}
				case 2:
				{
					outlet(0,"set_last_subcue",3);
					outlet(0,"set_arm",1);
					var autobang = 15000;
					outlet(0,"set_autobang",autobang);
					var s = 1000. * 1.800;
					messnamed("Kog_Particles_Master_Vol_msg",0.400,0.000);
					messnamed("Kog_Particles_Thresh_msg","thresh",-22.000,-22.000);
					messnamed("Kog_Particles_SpectralGate_Thresh_msg",3.000);
					messnamed("Kog_Comb_Master_Vol_msg",0.500);
					messnamed("Kog_Comb_Vol_Line_msg",1.000,0,0.000);
					messnamed("Kog_Comb_SpectralGate_Thresh_msg",12.000);
					messnamed("Kog_Comb_Buffers_js_msg","clear_bufs",0,0,0,0);
					messnamed("Kog_Comb_Buffers_js_msg","set_play_loop",autobang,s,s,s,s);
					messnamed("Kog_Comb_Buffers_js_msg","set_play_seq",1,2,3,0);
					messnamed("Kog_Comb_Buffers_js_msg","set_rec_seq",2,-1,0,-1);
					messnamed("Kog_Comb_Notes_msg",0,1,0);
					for (b = 0; b < gNum_Bufs; b++)
						messnamed("Kog_Comb_Buffers_js_msg","set_play_speed",b,0.500,0.250,0.125,0.000);
					for (b = 0; b < gNum_Bufs; b++)
						messnamed("Kog_Comb_Buffers_js_msg","set_play_vol",b,0.500,1.000,1.000,0.000,60.000,0.000,0.000,0.000);
					break;
				}
				case 3:
				{
					outlet(0,"set_last_subcue",3);
					outlet(0,"set_arm",1);
					var autobang = -1;
					outlet(0,"set_autobang",autobang);
					var s = 1000. * 1.700;
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
					for (b = 0; b < gNum_Bufs; b++)
						messnamed("Kog_Comb_Buffers_js_msg","set_play_speed",b,0.500,0.250,0.125,0.000);
					for (b = 0; b < gNum_Bufs; b++)
						messnamed("Kog_Comb_Buffers_js_msg","set_play_vol",b,0.500,1.000,1.000,0.000,0.000,0.000,0.000,0.000);
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
					outlet(0,"set_last_subcue",2);
					outlet(0,"set_arm",1);
					var autobang = -1;
					outlet(0,"set_autobang",autobang);
					var s = 1000. * 1.000;
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
					for (b = 0; b < gNum_Bufs; b++)
						messnamed("Kog_Comb_Buffers_js_msg","set_play_speed",b,1.000,0.250,0.125,0.000);
					messnamed("Kog_Comb_Buffers_js_msg","set_play_vol",0,0.300,0.700,0.700,0.000,10.000,0.000,0.000,0.000);
					messnamed("Kog_Comb_Buffers_js_msg","set_play_vol",1,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000);
					messnamed("Kog_Comb_Buffers_js_msg","set_play_vol",2,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000);
					messnamed("Kog_Comb_Buffers_js_msg","set_play_vol",3,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000);
					break;
				}
				case 1:
				{
					outlet(0,"set_last_subcue",2);
					outlet(0,"set_arm",1);
					var autobang = -1;
					outlet(0,"set_autobang",autobang);
					var s = 1000. * 0.950;
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
					for (b = 0; b < gNum_Bufs; b++)
						messnamed("Kog_Comb_Buffers_js_msg","set_play_speed",b,1.000,0.250,0.125,0.000);
					messnamed("Kog_Comb_Buffers_js_msg","set_play_vol",0,0.300,0.700,0.700,0.000,0.000,0.000,0.000,0.000);
					messnamed("Kog_Comb_Buffers_js_msg","set_play_vol",1,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000);
					messnamed("Kog_Comb_Buffers_js_msg","set_play_vol",2,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000);
					messnamed("Kog_Comb_Buffers_js_msg","set_play_vol",3,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000);
					break;
				}
				case 2:
				{
					outlet(0,"set_last_subcue",2);
					outlet(0,"set_arm",1);
					var autobang = -1;
					outlet(0,"set_autobang",autobang);
					var s = 1000. * 0.750;
					messnamed("Kog_Particles_Master_Vol_msg",0.300,20000.000);
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
					for (b = 0; b < gNum_Bufs; b++)
						messnamed("Kog_Comb_Buffers_js_msg","set_play_speed",b,1.000,0.250,0.125,0.000);
					messnamed("Kog_Comb_Buffers_js_msg","set_play_vol",0,0.300,0.700,0.700,0.000,0.000,0.000,0.000,0.000);
					messnamed("Kog_Comb_Buffers_js_msg","set_play_vol",1,0.300,0.700,0.700,0.000,15.000,10.000,5.000,0.000);
					messnamed("Kog_Comb_Buffers_js_msg","set_play_vol",2,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000);
					messnamed("Kog_Comb_Buffers_js_msg","set_play_vol",3,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000);
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
					outlet(0,"set_last_subcue",1);
					outlet(0,"set_arm",1);
					var autobang = -1;
					outlet(0,"set_autobang",autobang);
					var s = 1000. * 0.500;
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
					for (b = 0; b < gNum_Bufs; b++)
						messnamed("Kog_Comb_Buffers_js_msg","set_play_speed",b,1.000,0.500,0.250,0.125);
					for (b = 0; b < gNum_Bufs; b++)
						messnamed("Kog_Comb_Buffers_js_msg","set_play_vol",b,1.000,1.000,1.000,1.000,0.000,0.000,0.000,0.000);
					break;
				}
				case 1:
				{
					outlet(0,"set_last_subcue",1);
					outlet(0,"set_arm",1);
					var autobang = -1;
					outlet(0,"set_autobang",autobang);
					var s = 1000. * 0.500;
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
					for (b = 0; b < gNum_Bufs; b++)
						messnamed("Kog_Comb_Buffers_js_msg","set_play_speed",b,1.000,0.500,0.250,0.125);
					for (b = 0; b < gNum_Bufs; b++)
						messnamed("Kog_Comb_Buffers_js_msg","set_play_vol",b,1.000,1.000,1.000,1.000,0.000,0.000,0.000,0.000);
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
					outlet(0,"set_last_subcue",0);
					outlet(0,"set_arm",0);
					var autobang = -1;
					outlet(0,"set_autobang",autobang);
					var s = 1000. * 0.500;
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
					for (b = 0; b < gNum_Bufs; b++)
						messnamed("Kog_Comb_Buffers_js_msg","set_play_speed",b,1.000,0.500,0.250,0.125);
					messnamed("Kog_Comb_Buffers_js_msg","set_play_vol",0,1.000,1.000,1.000,1.000,0.000,0.000,0.000,0.000);
					messnamed("Kog_Comb_Buffers_js_msg","set_play_vol",1,0.000,0.000,0.000,0.000,10.000,10.000,10.000,10.000);
					messnamed("Kog_Comb_Buffers_js_msg","set_play_vol",2,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000);
					messnamed("Kog_Comb_Buffers_js_msg","set_play_vol",3,0.000,0.000,0.000,0.000,0.000,0.000,0.000,0.000);
					break;
				}
				default: break;
			}
			break;
		}
		default: break;
	}
}
