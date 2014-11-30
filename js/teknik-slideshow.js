    var teknik_ganti= 1;
    var teknik_jumlahgambar= 3;
    var teknik_kecepatanganti=2000;

    var teknik_img1=new Image();
    var teknik_img2=new Image();
    var teknik_img3=new Image();

    teknik_img1.src="img/katalog/teknik/1.jpg";
    teknik_img2.src="img/katalog/teknik/2.jpg";
    teknik_img3.src="img/katalog/teknik/3.jpg";

    function teknik_ganti_gambar(){
		if (document.images)
		{
			document.images.gambarteknik.src=eval("teknik_img"+ganti+".src");
			if (teknik_ganti<teknik_jumlahgambar)
			teknik_ganti++;
			else
			teknik_ganti= 1;
		}
		setTimeout("teknik_ganti_gambar()",teknik_kecepatanganti);
    }
