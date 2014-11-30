    var science_ganti= 1;
    var science_jumlahgambar= 3;
    var science_kecepatanganti=2000;

    var science_img1=new Image();
    var science_img2=new Image();
    var science_img3=new Image();

    science_img1.src="img/katalog/science/1.jpg";
    science_img2.src="img/katalog/science/2.jpg";
    science_img3.src="img/katalog/science/3.jpg";

    function science_ganti_gambar(){
		if (document.images)
		{
			document.images.gambarscience.src=eval("science_img"+ganti+".src");
			if (science_ganti<science_jumlahgambar)
			science_ganti++;
			else
			science_ganti= 1;
		}
		setTimeout("science_ganti_gambar()",science_kecepatanganti);
    }
