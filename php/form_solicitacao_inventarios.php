<?php
# Put your config
$emailTo = "contato@9oficioniteroi.com";
$vname = "Cartorio 9 Oficio Niteroi";
$subject = "Pedido de Inventário";

# End your config
 
$name     =  $_POST['name'];
$email    =  $_POST['email'];
$telefone =  $_POST['phone'];
 
$message = '
----------------------------------------------------------------
O seguinte pedido de Inventário foi realizado:
----------------------------------------------------------------
|DADOS DE CONTATO|

Nome: ' . $name . '
E-mail: ' . $email . '
Telefone: ' . $telefone . '


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
