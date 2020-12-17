fetch("https://api.covid19api.com/summary")
		.then(res => res.json())
		.then(data =>{

			const global = data.Global
			const allCountries = data.Countries
			const myanmar = allCountries.find(c=> c.Country === "Myanmar")

			console.log("Myanmar's COVID-19 Data:", myanmar);
             
            document.getElementById("date").innerHTML = myanmar.Date;
			document.getElementById("ndata1").innerHTML = myanmar.NewRecovered;
			
		});
		fetch("https://coronavirus-19-api.herokuapp.com/countries/Myanmar")


		.then(res => res.json())
		.then(data =>{

			console.log( "Myanmar's COVID-19 Data:", data);
            document.getElementById("country").innerHTML = data.country;
            document.getElementById("tdata").innerHTML = data.totalTests;
            document.getElementById("tdata1").innerHTML = data.active;
			document.getElementById("data").innerHTML = data.cases;
			document.getElementById("ndata").innerHTML = data.todayCases;
			document.getElementById("data1").innerHTML = data.recovered;
			document.getElementById("data2").innerHTML = data.deaths;
			document.getElementById("ndata2").innerHTML = data.todayDeaths;

		});
		