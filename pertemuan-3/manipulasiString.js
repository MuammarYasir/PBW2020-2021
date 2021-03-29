		var kalimat = "Saya Terbang Jauh";
		document.getElementById("contoh").innerHTML = kalimat.length;

		//manipulasi string dengan indexOf
		var kalimat = "Selamat datang di tutorial string javascript";
	    var temukan = kalimat.indexOf("tutorial");
	    document.getElementById("contoh1").innerHTML = temukan;

	    //manipulasi string dengan LastindexOf
	    var kalimat = "Selamat datang di tutorial string javascript";
	    var temukan = kalimat.lastIndexOf("string");
	    document.getElementById("contoh2").innerHTML = temukan;

	    //manipulasi string dengan search
	    var kalimat = "belajar javascript di www.malasngoding.com";
	    var cari = kalimat.search("javascript");
	    document.getElementById("contoh3").innerHTML = cari;

	    //manipulasi string dengan slice
	    var kalimat = "belajar javascript di www.malasngoding.com";   
	    var filter = kalimat.slice(22, 42);
	    document.getElementById("contoh4").innerHTML = filter;

	    //manipulasi string dengan replace
	    var kalimat = "belajar javascript di www.malasngoding.com";   
			var ganti = kalimat.replace('javascript', 'pemrograman');
	    document.getElementById("contoh5").innerHTML = ganti;

	    //manipulasi string dengan toUpperCase dan toLowerCase
	    var kalimat = "Belajar JAVASCRIPT di www.malasngoding.com";  
			
	  	// mengubah ke huruf besar
	  	var a = kalimat.toUpperCase();
	  
	   	// mengubah ke huruf kecil
	  	var b = kalimat.toLowerCase();
	  
	    document.getElementById("besar").innerHTML = a;
	  	document.getElementById("kecil").innerHTML = b;

	  	//manipulasi string dengan concat
	  	var a = "Muammar";    
	  	var b = "Yasir";   
			  
	   	// menggabungkan string
	  	var gabung = a.concat(" ",b);  
	    document.getElementById("contoh6").innerHTML = gabung;

	    //manipulasi string dengan split
	    var huruf = "a,b,c";    
	  
	   	// string jadi array
	    var convert = huruf.split(",");  
	    document.getElementById("contoh7").innerHTML = convert[0];