<!DOCTYPE html>
<html lang="">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Scott Davis' RMS</title>
        <link rel="stylesheet" href="styles.css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css">

        <style>
            body {
                padding-top: 50px;
            }

            .content_page {
            }
        </style>

        <!--[if IE]>
<script src="https://cdn.jsdelivr.net/html5shiv/3.7.2/html5shiv.min.js"></script>
<script src="https://cdn.jsdelivr.net/respond/1.4.2/respond.min.js"></script>
<![endif]-->
    </head>

    <body>
        <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="index.php">Scott Davis' RMS</a>
                </div>

                <div class="collapse navbar-collapse">
                    <ul class="nav navbar-nav">
                        <li id="_home"><a href="index.php">Home</a>
                        </li>
                        <li id="_products"><a href="Products.php">Products</a>
                        </li>
                        <li id="_recipes"><a href="Recipes.php">Recipes</a>
                        </li>
                        <li id="_databases"><a href="Databases.php">Perpetual Inventory</a>
                        </li>
                        <li class="active" id="_inventory"><a href="Inventory.php">Inventory in Action</a>
                        </li>
                        <li id="_about"><a href="about.php">About Me</a>
                        </li>

                    </ul>
                </div>
                <!--.nav-collapse -->
            </div>
        </nav>

        <div class="container">

            <section class="content" id="Inventory">

                <div class="content_page">
                    <h1>Inventory in Action</h1>
                    <p class="lead">
                        Now that you've seen how it was all put together, check it out in action. 
<br><br>
                        Using php, I brought the database to the website. Below, you can see the query in action by pulling up numbers from a ‘static Monday morning count’. This generates a table that is user friendly, allowing you to see variance in units or dollars.
                        <br><br>
                        Enjoy!</p>
<!--                    <select class="form-control" id="sel1">
                        <option value="static">Static Values</option>
                        <option value="update">Update On Hand</option>
                    </select>-->
                    <?php
                    $servername = "localhost";
                    $username = "id39847_admin";
                    $password = "admin";
                    $dbname = "admin";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "  /* Actual Varience in Units */
Select products.id, static_monday_count.count as 'On Hand', v_1.name, v_1.unit, v_1.Variance_in_Units as 'Variance in Units', CONCAT('$', FORMAT((v_1.Variance_in_Units * products.price),2)) as 'Variance in Price'
 from v_1
    Join products
    on products.name = v_1.name
 join static_monday_count
    on static_monday_count.product_id = products.id;";
                    ?>
                    <div class="con_table">
                        <form method="GET" action=''>
                            <div class="inv_table">

                                <table class="table table-bordered">
                                    <tr>
                                        <th id="Column4">On Hand</th>
                                        <th id="Column1">Products</th>
                                        <th id="Column2">Unit</th>
                                        <th id="Column3">Units Variance</th>
                                        <th id="Column6">$$ Variance</th>
                                    </tr>
                                </table>
                                <?php

$result = $conn->query($sql);

if ($result->num_rows > 0) {

    // output data of each row

    while($row = $result->fetch_assoc()) {?>

                                <table class="table-condensed table-bordered">

                                    <tr>
                                        <td id="Column4"><input class="oh_input" type="text" name="fname" value="<?php echo $row["On Hand"] ?>"></td>
                                        <td id="Column5"><input type="text" name="id" value="<?php echo $row["id"] ?>"></td>
                                        <td id="Column1"><?php echo $row["name"] ?></td>
                                        <td id="Column2"><?php echo $row["unit"] ?></td> 
                                        <td id="Column3"><?php echo $row["Variance in Units"] ?></td>
                                        <td id="Column6"><?php echo $row["Variance in Price"] ?></td>
                                    </tr>
                                </table>

                                <?php
                                         }
} else {
    echo "0 results";
}
$conn->close();
                                ?>
                            </div>
                            <input class="cal_btn" type="submit" name="button1" value="Calculate">
                        </form>
                    </div>
<!--                    <?php
if(isset($_GET['button1']))
{
    // configuration
    $dbtype     = "mysql";
    $dbhost     = "localhost";
    $dbname     = "cl10-admin-f5r";
    $dbuser     = "cl10-admin-f5r";
    $dbpass     = "root";
    // database connection
    $conn = new PDO("mysql:host=$dbhost;dbname=$dbname",$dbuser,$dbpass);
    // new data
    $unit = $_GET['fname'];
    $id = $_GET['id'];
    // query
    $sql = "UPDATE static_monday_count  
            SET count=?
            WHERE product_id=?";
    $q = $conn->prepare($sql);
    $q->execute(array($unit,$id));
}
                    ?>-->
                    <div class="img_cen">
                        <img src="img/code_button.png" data-toggle="modal" data-target="#myModal" alt="Code Button">
                    </div>
                    <div class="clearfix"></div>
                    <div id="myModal" class="modal fade " role="dialog">
                        <div class="modal-dialog large">

                            <!-- Modal content-->
                            <div class="modal-content ">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                                    <h4 class="modal-title">My Code</h4>
                                </div>
                                <div class="modal-body">
                                    <div class="code_box1" id="code3">
                                        <div id="code_3">
                                            <p> CREATE<br>
                                                VIEW `v_1` AS<br>
                                                SELECT `a`.`name` AS `name`,<br>
                                                `a`.`unit` AS `unit`,<br>
                                                CAST((((((`st_inv_p7_wk1_2015`.`on_hand` *<br>
                                                `measurements`.`value`) + (`receive_p7_wk1_2015`.`received` *<br>
                                                `measurements`.`value`)) - (`pmix_p7_wk1_2015`.`sold` *<br>
                                                `recipes_products`.`ounces`)) -<br>
                                                (`static_monday_count`.`count` * `measurements`.`value`)) /<br>
                                                `measurements`.`value`)<br>
                                                AS DECIMAL (10 , 1 )) AS `Variance_in_Units`<br>
                                                FROM ((((((`products` `a`<br>
                                                JOIN `st_inv_p7_wk1_2015`<br>
                                                ON ((`a`.`id` = `st_inv_p7_wk1_2015`.`product_id`)))<br>
                                                JOIN `receive_p7_wk1_2015`<br>
                                                ON ((`a`.`id` = `receive_p7_wk1_2015`.`product_id`)))<br>
                                                JOIN `recipes_products`<br>
                                                ON ((`a`.`id` = `recipes_products`.`productid`)))<br>
                                                JOIN `pmix_p7_wk1_2015`<br>
                                                ON ((`recipes_products`.`recipeid` =<br>
                                                `pmix_p7_wk1_2015`.`recipe_id`)))<br>
                                                JOIN `measurements` ON<br>
                                                ((`a`.`unit` = `measurements`.`name`)))<br>
                                                JOIN `static_monday_count`<br>
                                                ON ((`a`.`id` = `static_monday_count`.`product_id`)))<br>
                                                GROUP BY `a`.`id`<br>
                                                ORDER BY `a`.`id`<br>

                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
        </div>

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
        <script src="main.js"></script>
    </body>

</html>