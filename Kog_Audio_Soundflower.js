autowatch = 1;

outlets = 6;

var gCombMainAudio_L = 7;
var gCombMainAudio_R = 8;
var gParticlesMainAudio_0_L = 17;
var gParticlesMainAudio_0_R = 18;
var gParticlesMainAudio_1_L = 19;
var gParticlesMainAudio_1_R = 20;

function loadbang()
{
    outlet(0,"set",gCombMainAudio_L);
    outlet(1,"set",gCombMainAudio_R);
    outlet(2,"set",gParticlesMainAudio_0_L);
    outlet(3,"set",gParticlesMainAudio_0_R);
    outlet(4,"set",gParticlesMainAudio_1_L);
    outlet(5,"set",gParticlesMainAudio_1_R);
}

function reset()
{
    loadbang();
}
