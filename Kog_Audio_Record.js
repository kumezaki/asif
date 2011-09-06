autowatch = 1;

var sfrec_comb_msg = "Kog_sfrecord_comb_msg";
var sfrec_part_msg = "Kog_sfrecord_particles_msg";

function reset()
{
	messnamed(sfrec_comb_msg,"samptype","int32");
	messnamed(sfrec_part_msg,"samptype","int32");

	messnamed(sfrec_comb_msg,"open","kog_comb.aif");
	messnamed(sfrec_part_msg,"open","kog_particles.aif");

}

function msg_int(v)
{
	if (v == 1) reset();
	
	messnamed(sfrec_comb_msg,v);
	messnamed(sfrec_part_msg,v);
	
	messnamed("Kog_Comb_sfplay_msg",v);
}
