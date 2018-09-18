function calcPedido(){
	var total = 0;
	var principalValor = 0;
	
	var principal = $("input[name='principal']:checked").val();
	
	if(principal == "Carne")
		principalValor = 15;
	else if(principal == "Peixe")
		principalValor = 13;
	else
		principalValor = 11;
	
	var a =	`<div class="row">
    		<div class="col-sm">
    			${principal}
    		</div>
    		<div class="col-sm">
      			<p class="text-right">${principalValor.toFixed(2).replace('.', ',')}</p>
    		</div>
  		</div>`;
	$('#nota').append(a);
	
	total += principalValor;
	
	var acompanhamentos = new Array();
	$("input[type=checkbox][name='acompanhamento']:checked").each(function(){
		acompanhamentos.push($(this).val());
	});
	
	total = total + acompanhamentos.length * 3.00;
	
	var valorAcompanhamento = 3;
	for(var i = 0; acompanhamentos[i] != null; i++){
		a =	`<div class="row">
    		<div class="col-sm">
    			${acompanhamentos[i]}
    		</div>
    		<div class="col-sm">
      			<p class="text-right">${valorAcompanhamento.toFixed(2).replace('.', ',')}</p>
    		</div>
  		</div>`;
		$('#nota').append(a);
	}
	
	a =	`<div class="row border-top">
		<div class="col-sm">
			Valor sem desconto
		</div>
		<div class="col-sm">
  			<p class="text-right">${total.toFixed(2).replace('.', ',')}</p>
		</div>
		</div>`;
	$('#nota').append(a);
	
	var desconto = 0;
	var convenio = $('#selectConvenio :selected').val();
	
	if(convenio == "FATEC"){
		desconto = total * 0.2;
		total = total * 0.8;
	}
	else if(convenio == "Prefeitura"){
		desconto = total * 0.1;
		total = total * 0.9;
	}
	
	a =	`<div class="row">
		<div class="col-sm">
			Convenio: ${convenio}
		</div>
		<div class="col-sm">
  			<p class="text-right">-${desconto.toFixed(2).replace('.', ',')}</p>
		</div>
		</div>`;
	$('#nota').append(a);
	
	
	var observacao = $("#textAreaObs").val();
	var linhaObs = observacao.split('\n')
	a =	`<div class="row border-top">
			<div class="col-sm">
				Observações:
			</div>
		</div>`;
	$("#nota").append(a);
	for (i = 0; linhaObs[i] != null; i++){
		a =	`<div class="row">
				<div class="col-sm">
					${linhaObs[i]}
				</div>
			</div>`;
		$('#nota').append(a);
	}
	
	$('#total').html(total.toFixed(2).replace('.',','));
}

function limpar() {
	var a = `<div class="row">
		<div class="col-sm">
			Produto
	</div>
	<div class="col-sm">
			<p class="text-right">Valor</p>
	</div>
	</div>`;
	$("#nota").html(a); 	
}
