 $(function() {
var availableTags = [
"Pemrograman Berbasis Web",
"Pemrograman Pascal Dasar",
"Pemrograman Berbasis Objek"
];
$( "#tags" ).autocomplete({
source: availableTags
});
});
