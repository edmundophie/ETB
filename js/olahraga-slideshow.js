    var ganti= 1;
    var jumlahgambar= 3;
    var kecepatanganti=2000;

    var img1=new Image();
    var img2=new Image();
    var img3=new Image();

    img1.src="img/katalog/olahraga/1.jpg";
    img2.src="img/katalog/olahraga/2.jpg";
    img3.src="img/katalog/olahraga/3.jpg";

    function ganti_gambar(){
		if (document.images)
		{
			document.images.gambar.src=eval("img"+ganti+".src");
			if (ganti<jumlahgambar)
			ganti++;
			else
			ganti= 1;
		}
		setTimeout("ganti_gambar()",kecepatanganti);
    }
