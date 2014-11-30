    var seni_ganti= 1;
    var seni_jumlahgambar= 3;
    var seni_kecepatanganti=2000;

    var seni_img1=new Image();
    var seni_img2=new Image();
    var seni_img3=new Image();

    seni_img1.src="img/katalog/seni/1.jpg";
    seni_img2.src="img/katalog/seni/2.jpg";
    seni_img3.src="img/katalog/seni/3.jpg";

    function seni_ganti_gambar(){
		if (document.images)
		{
			document.images.gambarseni.src=eval("seni_img"+ganti+".src");
			if (seni_ganti<seni_jumlahgambar)
			seni_ganti++;
			else
			seni_ganti= 1;
		}
		setTimeout("seni_ganti_gambar()",seni_kecepatanganti);
    }
