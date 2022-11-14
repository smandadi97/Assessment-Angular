<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

    <title>Walmart Search Page</title>
    <style>
        * {
            box-sizing: border-box;
        }
        .header {
            padding: 10px;
            text-align: center;
            background: #0071ce;
            color: white;
            border-bottom: 1px solid rgba(255,255,255);
        }

        .header h1 {
            font-size: 40px;
        }
        .navbar {
            overflow: hidden;
            background-color: #0071ce;
            position: sticky;
            position: -webkit-sticky;
            padding-top: 10px;
            top: 0;
        }

        .navbar a {
            float: left;
            display: block;
            color: white;
            text-align: center;
            padding: 14px 20px;
            text-decoration: none;
        }

        .navbar a.right {
            float: right;
        }

        .navbar a:hover {
            background-color: #ddd;
            color: black;
        }
        .navbar a.active {
            background-color: #FFC220;
            color: white;
        }

        .row {
            display: -ms-flexbox; /* IE10 */
            display: flex;
            -ms-flex-wrap: wrap; /* IE10 */
            flex-wrap: wrap;
        }

        .side {
            -ms-flex: 30%;
            flex: 30%;
            background-color: white;
            padding-top: 5px;
        }

        .main {
            -ms-flex: 70%;
            flex: 70%;
            background-color: white;
            padding: 5px;
            padding-left: 2px;
        }

        .footer {
            padding: 20px;
            text-align: center;
            background: #0071ce;
            color: white;
        }
        @media screen and (max-width: 700px) {
            .row {
                flex-direction: column;
            }
        }
        @media screen and (max-width: 400px) {
            .navbar a {
                float: none;
                width: 100%;
            }
        }


    </style>

</head>
<body>

<div class="header">
    <h1><img src="https://s3.amazonaws.com/www-inside-design/uploads/2018/04/walmart-square.jpg" style=height:50px;"> Walmart Search Page
    </h1>
    <form action="findsyn" method="GET">
        <p> Search Everything at Walmart Online and In-Store. </p>
        <label for="letter"></label>
        <input type="text" name="word" value="" placeholder="What are you looking for? "/>
        <input type="submit" value="Submit" />
    </form>
</div>

<div class="navbar">
    <a href="#" class="active">Home</a>
    <a href="#">Departments</a>
    <a href="#">Services</a>
    <a href="#" class="right">My Account</a>
</div>

<div class="row">
    <div class="side">
        <img src="https://www.therconline.com/wp-content/uploads/2022/10/Walmart-Black-Friday-Deals-2022.jpg" alt="Img1BlkFri" height="350px" width="498px">
        <h2 style="text-align: center">Flash Pick of the day</h2>
        <img src="https://www.cnet.com/a/img/resize/3ffc120c0ef950e7329df471eef61c5f8889f7fa/hub/2021/11/16/75a4509b-b970-44cc-b73b-e4c24722f46f/screen-shot-2021-11-16-at-8-34-43-am.png?auto=webp&fit=crop&height=528&width=940" height="350px" width="498px";>
    </div>
    <div class="main">
        <img src="https://cdn.couponcabin.com/blog/202010/WM_DealsforDaysBlogHero_1015.png" style="height: 350px" width="1163px">

        <h2 style="text-align: center">Over 60% off on clothing, accessories, electronics and furniture!</h2>

        <img src="https://www.webfx.com/wp-content/uploads/2021/10/costco-category-page.png" style="height: 360px" width="1163px">
    </div>
</div>

<div class="footer">

    <a href="#" style="color: white"> Department </a>
    <a href="#" style="color: white">   Store Directory </a>
    <a href="#" style="color: white">   Careers </a>
    <a href="#" style="color: white">   Our Company</a>
    <a href="#" style="color: white">   Sell on Walmart.com </a>
    <a href="#" style="color: white">   Help </a>


</div>

</body>
</html>