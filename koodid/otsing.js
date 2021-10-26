var AndmeAadress="andmed/Tartu2024 kultuuriasutuste tabel.xlsx";
var ExcelToJSON = function() {/*https://stackoverflow.com/questions/8238407/how-to-parse-excel-xls-file-in-javascript-html5*/

    this.parseExcel = function(file) {
      var reader = new FileReader();
      reader.onload = function(e) {
        var data = e.target.result;
        var workbook = XLSX.read(data, {
          type: 'binary'
        });
  
        workbook.SheetNames.forEach(function(sheetName) {
          // Here is your object
          var XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
          var json_object = JSON.stringify(XL_row_object);
          
         return json_object;
  
        })
  
      };
  
      reader.onerror = function(ex) {
        console.log(ex);
      };
  
      reader.readAsBinaryString(file);
    };
  }
function LaeTabel(){
    alert("SIIN");
    Andmed=ExcelToJSON(AndmeAadress);
    alert(Andmed);
    alert(JSON.parse(Andmed));

}