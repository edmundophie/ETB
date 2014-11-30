    var novel_ganti= 1;
    var novel_jumlahgambar= 3;
    var novel_kecepatanganti=2000;

    var novel_img1=new Image();
    var novel_img2=new Image();
    var novel_img3=new Image();

    novel_img1.src="img/katalog/novel/1.jpg";
    novel_img2.src="img/katalog/novel/2.jpg";
    novel_img3.src="img/katalog/novel/3.jpg";

    function novel_ganti_gambar(){
		if (document.images)
		{
			document.images.gambarnovel.src=eval("novel_img"+ganti+".src");
			if (novel_ganti<novel_jumlahgambar)
			novel_ganti++;
			else
			novel_ganti= 1;
		}
		setTimeout("novel_ganti_gambar()",novel_kecepatanganti);
    }
