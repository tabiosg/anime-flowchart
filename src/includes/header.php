<!DOCTYPE html>

<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width-device-width, initial-scale-1" />
    <title>
        <?php echo TITLE; ?>
    </title>

    <link rel="shortcut icon" type="image/jpg" href="/src/images/favicon.png"/>
    <link rel=stylesheet href="src/bootstrap/css/bootstrap.min.css" />
    <link rel="stylesheet" type="text/css" href="/src/css/normalize/normalize.css" />
    <link rel="stylesheet" type="text/css" href="/src/css/style.css" />

</head>

<body>
    <header>
  <!-- Navbar -->
        <nav class="navbar navbar-expand-lg navbar-light bg-white">
        <div class="container-fluid">
            <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarExample01"
            aria-controls="navbarExample01"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarExample01">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item active">
                <a class="nav-link" aria-current="page" href="index.php">Home</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="about.php">About</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="https://github.com/tabiosg/">Documentation</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="https://github.com/tabiosg/">Creator</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
        <!-- Navbar -->

        <!-- Background image -->
        <style>
        /* Default height for small devices */
            #intro-example {
                height: 400px;
            }

            /* Height for devices larger than 992px */
            @media (min-width: 992px) {
                #intro-example {
                    height: 600px;
                }
            }
        </style>

        <div
        id="intro-example"
        class="p-5 text-center bg-image"
        style="
            background-image: url('https://images.unsplash.com/photo-1601850494422-3cf14624b0b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80');
            height: 700px;
            background-position:center;
        "
        >
        <div class="mask" style="background-color: rgba(0, 0, 0, 0.6);">
            <div class="d-flex justify-content-center align-items-center h-100">
            <div class="text-white">
                <h1 class="mb-3"><?php echo HEADER_ONE; ?></h1>
                <h4 class="mb-3"><?php echo HEADER_TWO; ?></h4>
                <a class="btn btn-outline-light btn-lg" href="index.php" role="button"
                >Click here to find new anime</a
                >
            </div>
            </div>
        </div>
        </div>
    </header>