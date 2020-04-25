<?php
# Put your config
$emailTo = "solicitacao@9oficioniteroi.com";
$vname = "Cartorio 9 Oficio Niteroi";
$subject = "Pedido de Procuração";

# End your config
 
$name     =  $_POST['name'];
$email    =  $_POST['email'];
$telefone =  $_POST['phone'];
$outorgante = $_POST['outorgante'];
$outorgado = $_POST['outorgado'];
$finalidade = $_POST['finalidade'];
 
$message = '
----------------------------------------------------------------
O seguinte pedido de Procuração foi realizado:
----------------------------------------------------------------
|DADOS DE CONTATO|

Nome: ' . $name . '
E-mail: ' . $email . '
Telefone: ' . $telefone . '


|DADOS DA PROCURAÇÃO|

Outorgante: ' . $outorgante . '
Outorgado: ' . $outorgado . '
Finalidade: ' . $finalidade . '


|DETALHES|

' . $_POST['message'] . '

----------------------------------------------------------------';
 
 
mail($emailTo, $subject, $message);


if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {

echo "<script type='text/javascript'> 
alert('Insira um email válido.'); 
</script>"; 
echo "<script>window.history.back()</script>"; // Página que será redirecionada
}


else{

echo "<script type='text/javascript'> 
alert('Seu pedido foi realizado com sucesso!'); 
</script>"; 
echo "<script>window.history.back()</script>"; // Página que será redirecionada

}

?>
