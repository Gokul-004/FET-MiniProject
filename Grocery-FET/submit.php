<html>
    <?php

     $prod=$_POST['prod'];
    echo "<h1>Your Ordered Products are <br>".$prod."<br>";
    if($prod=="Fruits"||$prod=="Vegetables"){
    $quan=$_POST['Quantity'];
    echo "<h1>And the Quantity is <br>".$quan."kg<br>";}
    elseif($prod=="Snacks"){
        $quan=$_POST['Quantity'];
        echo "<h1>And the Quantity is <br>".$quan."Packets<br>";}
       
    ?>
    <button><a href="Home.html"> Return </a></button>
</html>