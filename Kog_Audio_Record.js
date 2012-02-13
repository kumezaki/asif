autowatch = 1;

var sfrec_audioin_msg = "Kog_sfrecord_audioin_msg";
var sfrec_comb_msg = "Kog_sfrecord_comb_msg";
var sfrec_part_msg = "Kog_sfrecord_particles_msg";

function reset()
{
	messnamed(sfrec_audioin_msg,"samptype","int32");
	messnamed(sfrec_comb_msg,"samptype","int32");
	messnamed(sfrec_part_msg,"samptype","int32");

	messnamed(sfrec_audioin_msg,"open",get_rec_file_name("kog_audioin"));
	messnamed(sfrec_comb_msg,"open",get_rec_file_name("kog_comb"));
	messnamed(sfrec_part_msg,"open",get_rec_file_name("kog_particles"));
	
	update_rec_file_number();
}

function msg_int(v)
{
	if (v == 1) reset();
	
	messnamed(sfrec_audioin_msg,v);
	messnamed(sfrec_comb_msg,v);
	messnamed(sfrec_part_msg,v);
}

/*----------------------------------------------------------------------------*/

function get_rec_file_name(n)
{
    var fp = new File("file_count.txt","read");
    var num_rec_outs = parseInt(fp.readline(256));
    var pad_str = num_rec_outs < 10 ? "00" : num_rec_outs < 100 ? "0" : "";
    var file_name = n + "_" + pad_str + num_rec_outs.toString() + ".aif";
    post(file_name+"\n");
    return file_name;
}

function update_rec_file_number(n)
{
    var fp = new File("file_count.txt","readwrite");
    var num_rec_outs = parseInt(fp.readline(256));
    fp.position = 0;
    fp.writeline((++num_rec_outs).toString());
    fp.close();
}
