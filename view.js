let $ = require('jquery')
let c = 0

$('#mensaje').text(c.toString())
$('#btn_1').on('click', ()=>{ 
	c ++
	$('#mensaje').text('Hola tu' + c)
})
