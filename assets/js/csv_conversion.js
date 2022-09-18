 function tableToCSV() {
   //declare a JavaScript variable of array type
   var csv = [];
   var rows = document.querySelectorAll("table tr");
 
   //merge the whole data in tabular form 
  for(var i=0; i<rows.length; i++) {
  	var row = [], cols = rows[i].querySelectorAll("td, th");

  	for(var j=1; j<cols.length - 1; j++){
      // row.push(cols[j].innerText);

  	   //row.push(cols[j].innerText);
      if (cols[j].innerText.indexOf(',') > -1) { //cell value contains a ,
        var cell_with_comma = '"' + cols[j].innerText + '"';
        row.push(cell_with_comma);
      }
      else{
        row.push(cols[j].innerText);
      }

    }
    console.log(row);
    csv.push(row.join(","))
  }
   //call the function to download the CSV file
   downloadCSV(csv.join("\n"));
}


function downloadCSV(csv) {
    var csvFile;
    var downloadLink;
   
    //define the file type to text/csv
    csvFile = new Blob([csv], {type: 'text/csv'});
    downloadLink = document.createElement("a");
    downloadLink.download = 'cards.csv';
    downloadLink.href = window.URL.createObjectURL(csvFile);
    downloadLink.style.display = "none";

    document.body.appendChild(downloadLink);
    downloadLink.click();
}