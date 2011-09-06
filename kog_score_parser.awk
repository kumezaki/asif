@include "kog_param_funcs.awk"

function indent(v)
{
	for (i = 0; i < v; i++) printf "\t"
}

function do_begin_switch(v,n)
{
	indent(v); printf "switch (%s)\n",n
	indent(v); print "{"
}

function do_end_switch(v)
{
	indent(v+1); print "default: break;"
	indent(v); print "}"
}

function do_begin_case(v,cue)
{
	indent(v); print "case "cue":"
	indent(v); print "{"
}

function do_end_case(v)
{
	indent(v+1); print "break;"
	indent(v); print "}"
}

function case_end_check(v)
{
	if (last["cue"] != -1)
	{
		do_end_switch(v+1)
		do_end_case(v)
	}
}

function param_changed(v0,v1)
{
	return v0 != "" && v0 != v1
}

function param_check(p)
{
	if (param_changed($col[p],last[p]))
		last[p] = $col[p]
}

function do_param(p)
{
	param_check(p)
	f = sprintf("do_%s",p)
	@f(5,last[p])
}

BEGIN {
	FS=","

	PROCINFO["sorted_in"] = "@val_num_asc"
	col_num = 0;
	
	last["cue"] = -1;
	last["subcue"] = -1;
	
	do_begin_code();
	
	do_begin_switch(1,"v0")
}

{
	if (col_num == 0)
	{
		split($0,a)
		for (col_num = 1; col_num <= NF; col_num++) col[a[col_num]] = col_num
		next
	}

	if ($col["cue"] >= 0 || $col["subcue"] >= 0)
	{
		if (param_changed($col["cue"],last["cue"]))
		{
			case_end_check(2)
			
			do_begin_case(2,$col["cue"])
			do_begin_switch(3,"v1")
			
			last["cue"] = $col["cue"]
		}
		
		do_begin_case(4,$col["subcue"])

		for (p in col)
			if (p != "cue" && p != "subcue")
				do_param(p)

		do_end_case(4)
	}
}

END {
	case_end_check(2)

	do_end_switch(1)

	do_end_code();
}
