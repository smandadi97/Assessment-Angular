<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<html>
<head>

    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

    <title>Walmart Search Results Page</title>
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
            -ms-flex: 30%; /* IE10 */
            flex:30%;
            background-color: #f1f1f1;
            padding: 0px;
            padding-top: 5px;
        }

        .main {
            -ms-flex: 40%;
            flex: 40%;
            background-color: white;
            padding: 0px;
            padding-left: 5px;
            padding-top: 5px;
        }

        .footer {
            padding: 20px;
            text-align: center;
            background: #0071ce;
            color: white;
        }

        .right{
            -ms-flex: 30%;
            flex: 30%;

        }

        h3{
            margin: 0;
            padding: 0;
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
    <h1><img src="https://s3.amazonaws.com/www-inside-design/uploads/2018/04/walmart-square.jpg" style=height:50px;"> Walmart Search Results Page
    </h1>
    <% if (request.getAttribute("word") != null) { %>
    <h3>Product you searched for: <%= request.getParameter("word")%></h3>
    <form action="findsyn" method="GET">
        <p> Search Everything at Walmart Online and In-Store. </p>
        <label for="letter"></label>
        <input type="text" name="word" value="" placeholder="What are you looking for? "/>
        <input type="submit" value="Submit" />
    </form>
    <% } else { %>
    <p>hello</p>
    <% }%>
</div>

<div class="navbar">
    <a href="#" class="active">Home</a>
    <a href="#">Departments</a>
    <a href="#">Services</a>
    <a href="#" class="right">My Account</a>
</div>

<div class="row">
    <div class="side">
        <img src="https://www.therconline.com/wp-content/uploads/2022/10/Walmart-Black-Friday-Deals-2022.jpg" alt="Img1BlkFri" style=height:329px;">
        <h1>Flash Pick of the day</h1>
        <img src="https://www.cnet.com/a/img/resize/3ffc120c0ef950e7329df471eef61c5f8889f7fa/hub/2021/11/16/75a4509b-b970-44cc-b73b-e4c24722f46f/screen-shot-2021-11-16-at-8-34-43-am.png?auto=webp&fit=crop&height=528&width=940" style=height:260px;">
    </div>
    <div class="main" style="padding-bottom: 5px">
        <h1 style="text-decoration: underline">Search Results for: <%= request.getAttribute("word")%></h1>

        <% int[] id = (int[]) request.getAttribute("id"); %>
        <% String[] description = (String[]) request.getAttribute("description"); %>
        <% String[] img = (String[]) request.getAttribute("img"); %>
        <% String[] brand = (String[]) request.getAttribute("brand"); %>
        <% String[] price = (String[]) request.getAttribute("price"); %>
        <% for(int i =0; i<(int)request.getAttribute("totalrows"); i++) { %>

        <img src="<%= img[i]%>" style="height: 100px;" align="left">

        <p style="text-decoration: underline"><%= brand[i]%>
        <h3> ID# <%= id[i]%>: <%= description[i]%></h3>
        <h1 style="color: forestgreen"><%= price[i]%> </h1>
            <% if(i == 0) {%>
            <form action="prod1" method="GET">
                <%  }%>
                <input type="submit" value="Buy now" /></form> <br> </p>

        <%  }%>

    </div>

    <div class = right style="background: white" style = "padding-bottom: 5px">
        <h1 style="text-decoration: underline"> People also liked: </h1>
        <% int[] idr = (int[]) request.getAttribute("idr"); %>
        <% String[] descriptionr = (String[]) request.getAttribute("descriptionr"); %>
        <% String[] imgr = (String[]) request.getAttribute("imgr"); %>
        <% String[] brandr = (String[]) request.getAttribute("brandr"); %>
        <% String[] pricer = (String[]) request.getAttribute("pricer"); %>
        <% for(int i =0; i<(int)request.getAttribute("totalrows"); i++) { %>

        <img src="<%= imgr[i]%>" style="height: 100px;" align="left">
        <p style="text-decoration: underline"><%= brandr[i]%>
        <h3> ID# <%= idr[i]%>: <%= descriptionr[i]%></h3>
        <h1 style="color: forestgreen"><%= pricer[i]%>  <button type="button">Buy Now!</button> </p> </h1>
        <% } %>

    </div>
</div>

<div class="footer">
    <p>

        <a href="#" style="color: white"> Department </a>
        <a href="#" style="color: white"> Store Directory </a>
        <a href="#" style="color: white"> Careers </a>
        <a href="#" style="color: white"> Our Company</a>
        <a href="#" style="color: white"> Sell on Walmart.com </a>
        <a href="#" style="color: white"> Help </a>

    </p>
</div>

</body>
</html>