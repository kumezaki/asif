autowatch = 1;

var gArray_Playing = new Array;
var gArraySize_Playing = 2;

var gPos_MaxActive = 1;

var gBlocking = false;
var gTask_Blocking = new Task(block_func);
var gDur_Blocking = 4000;

function loadbang()
{
	update();
	
	for (i = 0; i < gArraySize_Playing; i++)
		gArray_Playing[i] = 0;
}

function playing(pos,v)
{
	post("playing",pos,v,"\n");

	/* if play is on start blocking */
	if (v == 1)
	{
		gBlocking = true;
		gTask_Blocking.schedule(gDur_Blocking);
	}
		
	gArray_Playing[pos] = v;

	update();

	messnamed("Kog_Part_Stat_"+pos,v);
}

function max_active(v)
{
	gPos_MaxActive = v;
}

function update()
{
	var pos = -1;

	if (!gBlocking)
		for (i = 0; i < gPos_MaxActive; i++)
		{
			if (gArray_Playing[i] == 0)
			{
				pos = i;
				break;
			}
		}
	
	outlet(0,pos);
}

function set_blocking_dur(v)
{
	post("gDur_Blocking = "+v+"\n");

	gDur_Blocking = v;
}

function block_func()
{
	gBlocking = false;

	update();
}
