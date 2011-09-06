autowatch = 1;

outlets = 5;

var gDur = 0.;
var gSpeed = 0.;

function start()
{
	var dur = gDur - get_rand_value(0.,25.);
	outlet(4,dur);
	
	var vol = get_rand_value(0.8,1.0);
	outlet(3,vol);
	
	outlet(2,"setloop",0,gDur);

	var start = get_rand_value(0.,100.);
	outlet(1,start);
	
	var delay = get_rand_value(0.,25.);
	outlet(0,gSpeed,delay);
}

function stop()
{
	outlet(0,0.,0.);
}

function set_dur(v)
{
	gDur = v;
}

function set_speed(v)
{
	gSpeed = v;
}

function get_rand_value(lo,hi)
{
	var range = hi - lo;
	var offset = Math.random() * range;
	return lo + offset;
}
