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
                        <li class="active" id="_databases"><a href="Databases.php">Perpetual Inventory</a>
                        </li>
                        <li id="_inventory"><a href="Inventory.php">Inventory in Action</a>
                        </li>
                        <li id="_about"><a href="about.php">About Me</a>
                        </li>

                    </ul>
                </div>
                <!--.nav-collapse -->
            </div>
        </nav>

        <div class="container">
            
            <section class="content" id="Databases">

                <div class="content_page" >
                    <h1>Perpetual Inventory</h1>
                    
                        <div class="col-md-7">
                            <img class="img-responsive" src="img/perpetualinvtable.jpg" alt="">
                    </div>
                    <div class="col-md-5">
                        <p class="lead">The way it all comes together: <br>
                           <ul>
                               <li> There is a table for the starting inventory (what I counted on Monday, the initial inventory day) <br></li>
                               <li>Next received inventory is added in (what invoices are received from vendors and plugged in) <br></li>
                        <li> Finally, subtract out the pmix (what was actually punched into the computer) <br></li></ul></p>
                        <div class="img_cen">
                            <img id="show_code" src="img/code_button.png" data-toggle="modal" data-target="#myModal" alt="Code Button">
                            <div id="myModal" class="modal fade" role="dialog">
                                <div class="modal-dialog">

                                    <!-- Modal content-->
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                                            <h4 class="modal-title">My Code</h4>
                                        </div>
                                        <div class="modal-body">
                                            <div class="code_box" id="code3">
                        <div id="code_3">
                            <p>/* Perpetual Inventory */<br>
                                select products.name, <br>
                                products.unit,<br>
                                cast(((st_inv_p7_wk1_2015.on_hand * measurements.value<br>
                                + (receive_p7_wk1_2015.received * measurements.value)<br>
                                - (pmix_p7_wk1_2015.sold * recipes_products.ounces))<br> 
                                / measurements.value as decimal (10,1))<br> 
                                as 'Variance in Units'<br>                                                                                     from products<br>
                                Join st_inv_p7_wk1_2015<br>
                                On products.id = st_inv_p7_wk1_2015.product_id<br>
                                Join receive_p7_wk1_2015<br>
                                On products.id = receive_p7_wk1_2015.product_id<br>
                                join recipes_products<br>
                                on products.id = recipes_products.productid<br>
                                join pmix_p7_wk1_2015<br>
                                on recipes_products.recipeid = pmix_p7_wk1_2015.recipe_id<br>
                                join measurements<br>
                                on products.unit = measurements.name<br>
                                group by products.id<br>
                                Order by products.id;
                        </div>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                           
                        </div>                    </div>
                </div>
            </section>
        </div>

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
        <script src="main.js"></script>

    </body>

</html>