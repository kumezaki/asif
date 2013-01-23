function do_begin_code()
{
	print "autowatch = 1;"
	print ""
	print "/* these should be shared globally */"
	print "var gNum_Bufs = 4;"
	print "var gNum_Octaves = 4;"
	print ""
	print "function cue(v0,v1)"
	print "{"	
}

function do_end_code()
{
	print "}"
}

function do_reset(v,p)
{
	if (p == "TRUE")
	{
		indent(v)
		print "outlet(0,\"set_last_cue\",5);"
		indent(v)
		printf "messnamed(\"Kog_Comb_Buffers_js_msg\",\"reset\");\n\n"
	}
}

function do_last_subcue(v,p)
{
	indent(v)
	printf "outlet(0,\"set_last_subcue\",%d);\n",p
}

function do_arm(v,p)
{
	indent(v)
	printf "outlet(0,\"set_arm\",%d);\n",(p=="TRUE"?1:0)
}

function do_autobang(v,p)
{
	indent(v)
	printf "var autobang = %d;\n",(p==-1?-1:p*1000.)
	indent(v)
	print "outlet(0,\"set_autobang\",autobang);"
}

function do_pulse(v,p)
{
	indent(v)
	printf "var s = 1000. * %0.3f;\n",p*0.01
}

function do_part_max_act(v,p)
{
	indent(v)
	printf "messnamed(\"Kog_Particles_Main_js_msg\",\"max_active\",%d);\n",p
}

function do_part_mastervol(v,p)
{
	split(p,a,"/")
	indent(v)
	printf "messnamed(\"Kog_Particles_Master_Vol_msg\",%0.3f,%0.3f);\n",a[1],a[2]*1000.
}

function do_part_thresh(v,p)
{
	split(p,a,"/")
	indent(v)
	printf "messnamed(\"Kog_Particles_Thresh_msg\",\"thresh\",%0.3f,%0.3f);\n",a[1],a[2]
}

function do_part_spectgate_thresh(v,p)
{
	indent(v)
	printf "messnamed(\"Kog_Particles_SpectralGate_Thresh_msg\",%0.3f);\n",p
}

function do_part_blockdur(v,p)
{
	indent(v)
	printf "messnamed(\"Kog_Particles_Main_js_msg\",\"set_blocking_dur\",%d);\n",p
}

function do_part_curvedur(v,p)
{
	indent(v)
	printf "messnamed(\"Kog_Particles_js_msg\",\"set_curve_dur\",%d);\n",p
}

function do_part_curvedelay(v,p)
{
	split(p,a,"/")
	indent(v)
	printf "messnamed(\"Kog_Particles_js_msg\",\"set_curve_delay\",%0.3f,%0.3f,%0.3f);\n",a[1],a[2],a[3]
}

function do_comb_mastervol(v,p)
{
	indent(v)
	printf "messnamed(\"Kog_Comb_Master_Vol_msg\",%0.3f);\n",p
}

function do_comb_volcurve(v,p)
{
	split(p,a,"/")
	indent(v)
	printf "messnamed(\"Kog_Comb_Vol_Line_msg\",%0.3f,%d,%0.3f);\n",a[1],a[2],a[3]
}

function do_comb_spectgate_thresh(v,p)
{
	indent(v)
	printf "messnamed(\"Kog_Comb_SpectralGate_Thresh_msg\",%0.3f);\n",p
}

function do_comb_clear_bufs(v,p)
{
	split(p,a,"/")
	indent(v)
	printf "messnamed(\"Kog_Comb_Buffers_js_msg\",\"clear_bufs\",%d,%d,%d,%d);\n",a[1],a[2],a[3],a[4]
}

function do_comb_play_loop(v,p)
{
	split(p,a,"/")
	indent(v)
	printf "messnamed(\"Kog_Comb_Buffers_js_msg\",\"set_play_loop\","
	if (a[1] == "autobang")
		printf "autobang,"
	else
		printf "%d,",a[1]*1000
	printf "%s,%s,%s,%s);\n",a[2],a[3],a[4],a[5]
}

function do_comb_play_seq(v,p)
{
	split(p,a,"/")
	indent(v)
	printf "messnamed(\"Kog_Comb_Buffers_js_msg\",\"set_play_seq\",%d,%d,%d,%d);\n",a[1],a[2],a[3],a[4]
}

function do_comb_rec_seq(v,p)
{
	split(p,a,"/")
	indent(v)
	printf "messnamed(\"Kog_Comb_Buffers_js_msg\",\"set_rec_seq\",%d,%d,%d,%d);\n",a[1],a[2],a[3],a[4]
}

function do_comb_notes(v,p)
{
	split(p,a,"/")
	indent(v)
	printf "messnamed(\"Kog_Comb_Notes_msg\",%d,%d,%d);\n",a[1],a[2],a[3]
}

function do_comb_buf_speed(v,p)
{
	split(p,a,"/")

	indent(v)
	printf "for (b = 0; b < gNum_Bufs; b++)\n"

	num_octaves = 4
	indent(v+1)
	printf "messnamed(\"Kog_Comb_Buffers_js_msg\",\"set_play_speed\",b"
	for (i = 1; i <= num_octaves; i++)
		printf ",%0.3f",a[i]
	printf ");\n"
}

# the following is a helper function
function vol_message(a)
{
	num_octaves = 4
	for (i = 1; i <= num_octaves*2; i++)
		printf ",%0.3f",a[i+1]
	printf ");\n"
}

function do_comb_buf_vol_n(v,p,n)
{
	split(p,a,"/")
	if (a[1]=="all") return

	indent(v)
	printf "messnamed(\"Kog_Comb_Buffers_js_msg\",\"set_play_vol\",%d",n
	vol_message(a);
}

function do_comb_buf_vol_0(v,p)
{
	split(p,a,"/")
	if (a[1]=="all")
	{
		indent(v)
		printf "for (b = 0; b < gNum_Bufs; b++)\n"

		indent(v+1)
		printf "messnamed(\"Kog_Comb_Buffers_js_msg\",\"set_play_vol\",b"
		vol_message(a);
	}
	else
		do_comb_buf_vol_n(v,p,0);
}

function do_comb_buf_vol_1(v,p)
{
	do_comb_buf_vol_n(v,p,1)
}

function do_comb_buf_vol_2(v,p)
{
	do_comb_buf_vol_n(v,p,2)
}

function do_comb_buf_vol_3(v,p)
{
	do_comb_buf_vol_n(v,p,3)
}
