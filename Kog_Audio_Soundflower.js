autowatch = 1;

outlets = 4;

var gCombMainAudio_L = 7;
var gCombMainAudio_R = 8;
var gParticlesMainAudio_L = 5;
var gParticlesMainAudio_R = 6;

function loadbang()
{
    outlet(0,"set",gCombMainAudio_L);
    outlet(1,"set",gCombMainAudio_R);
    outlet(2,"set",gParticlesMainAudio_L);
    outlet(3,"set",gParticlesMainAudio_R);
}

function reset()
{
    loadbang();
}
