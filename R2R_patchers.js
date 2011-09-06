autowatch = 1;

var Kog_patcher_array = new Array;
Kog_patcher_array.push("Kog_Comb_Main.maxpat");
Kog_patcher_array.push("Kog_Particles_Main.maxpat");

var wfmr_patcher_array = new Array;
wfmr_patcher_array.push("wfmr_main.maxpat");

function song(v)
{
	messnamed("thispatcher_msg","wclose");
	
	switch (v)
	{
		case 0:
			open(Kog_patcher_array);
			break;
		case 1:
			open(wfmr_patcher_array);
			break;
		default:
			break;
	}
	
	messnamed("bring_to_front","bang");
}

function open(a)
{
    for (i = 0; i < a.length; i++)
        outlet(0,"load",a[i]);
}
