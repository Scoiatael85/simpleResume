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
                        <li class="active" id="_products"><a href="Products.php">Products</a>
                        </li>
                        <li id="_recipes"><a href="Recipes.php">Recipes</a>
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


            <section class="content" id="Products">

                <div class="content_page" >
                    <h1 class="h1_p">Products</h1>

                    <div id="products">
                        <div class="Pro_imgsize col-md-3">
                            <img class="col-md-12" src="http://i717.photobucket.com/albums/ww171/DaelricDavis/products%201.jpg" border="0" alt="products1 photo products 1.jpg"/>
                        </div>
                    </div>
                    <div class="text col-md-9">
                        <p class="lead">The first task was to design the product list. I decided to work solely with beverages. I did so for several reasons, but the most important being that it's fun to look at the actual cost of 'Liquid Gold'.</p>
                    </div>
                    <div class="show_code">
                        <img id="show_code2" src="img/code_button.png" alt="Code Button">
                    </div>
                    <div class="hidden2 code_box" id="code2">
                        <p>CREATE TABLE products ( <br>
                            id INT NOT NULL AUTO_INCREMENT, <br>
                            name TEXT, unit TEXT, price DECIMAL (10,2) <br>
                            PRIMARY KEY (id)   ); <br>

                            INSERT INTO products (name, unit, price) VALUES<br>
                            ("Honey Jack Daniels", "liter", 33.22);<br>
                            INSERT INTO products (name, unit, price) VALUES<br>
                            ("Gordons", "liter", 8.99);<br>
                            SELECT * FROM products;</p>
                    </div>

                </div>
            </section>
           
        </div>

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
        <script src="main.js"></script>

    </body>

</html>