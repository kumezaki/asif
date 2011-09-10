autowatch = 1;

var gArray = new Array;
var gArraySize = 2;

var gPos_MaxActive = 1;

var gTask_Update = new Task(update);

function loadbang()
{
	update();
	
	for (i = 0; i < gArraySize; i++)
		gArray[i] = 0;
}

function status(pos,v)
{
	gArray[pos] = v;

	if (v == 0) update();
}

function thresh(pos,v)
{
	if (gArray[pos] == 0) return;

	if (v == 0) update();
}

function max_active(v)
{
	gPos_MaxActive = v;
}

function update()
{
	var pos = -1;
	for (i = 0; i < gPos_MaxActive; i++)
	{
		if (gArray[i] == 0)
		{
			pos = i;
			break;
		}
	}
	
	outlet(0,pos);
}
