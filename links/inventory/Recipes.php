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
                height: 660px !important;
                padding-bottom: 40px;
                
                
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
                        <li class="active" id="_recipes"><a href="Recipes.php">Recipes</a>
                        </li>
                        <li id="_databases"><a href="Databases.php">Perpetual Inventory</a>
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

            <section class="content" id="Recipes">

                <div class="content_page" >
                    <h1>Recipes</h1>
                
                    <div class="recipes col-md-3">
                       <div class="widimg">
                        <img src="http://i717.photobucket.com/albums/ww171/DaelricDavis/recipes1.jpg" class="img_responsive" border="0" width="100%"  alt="recipe1 photo recipes1.jpg"/>
                        </div>
                    </div>
                    <div class="col-md-6">
                    <p class="lead">The next step was to draft the recipes of a few iconic bar drinks. This produced a table displaying the name of the drinks. It was important to keep this as a separate table.</p>
                        <a><img class="img-responsive" src="http://i717.photobucket.com/albums/ww171/DaelricDavis/arrow-downleft.jpg" border="0" alt=" photo arrow-downleft.jpg"/></a>

                    <div id="float_r">
                        <a><img src="http://i717.photobucket.com/albums/ww171/DaelricDavis/Arrow_guy_right.jpg" border="0" alt=" photo Arrow_guy_right.jpg"/></a>
                    </div>
                    <p class="lead">Once I had my product and recipe tables set up, I was able to bring them together to show how much of each product the recipes called for. There is a little more to it than it seems, check out the code to see how it was done!</p>
                    <div class="float_l">
                        <img id="show_code3" src="img/code_button.png" data-toggle="modal" data-target="#myModal" alt="Code Button">
                    </div>
                    </div>
                    <div class="bev_rec_ounce col-md-3">
                        <div class="widimg">
                        <img class="img-responsive" src="http://i717.photobucket.com/albums/ww171/DaelricDavis/bev_rec_ounce.jpg" width="100%" border="0" alt="bev_rec_ounce photo bev_rec_ounce.jpg"/>
                        </div> </div>
                </div>
                        
                <!-- Modal -->
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
                                    <a href="#code_3"><img src= "img/recipe_product2.jpg" class="img_responsive" border="0" alt="code_for_recipepage photo recipe_product.jpg" width= "550px"/></a>
                                    <div id="code_3">
                                        <p>Select recipes.name AS 'Beverage Recipes', products.name AS 'Ingredients', recipes_products.ounces AS 'Amount'<br>
                                            from recipes_products<br>
                                            Join recipes<br>
                                            On recipes.id = recipes_products.recipeid<br>
                                            Join products<br>
                                            On products.id = recipes_products.productid<br>
                                            Order by recipes.name;</p>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
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