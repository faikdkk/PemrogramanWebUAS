function pilih()
{
	var kecamatan = document.getElementById("kecamatan");
	var pilihan = document.getElementById("pilihan");
	var option = document.createElement("option");

	option.text = kecamatan.options[kecamatan.selectedIndex].text;
	try
	{
		pilihan.add(option,null);
	}
	catch(ex)
	{
		pilihan.add(option);
	}
}