<!doctype html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>

    <style>
        fieldset {
            width: 60%;
            margin: 20px;
        }
    </style>

   

</head>

<body>
    <fieldset>
        <legend>Toolbar</legend>
        <div>
            Number
            <input type='text' id='number' />
            <input type='button' value='Add To List' onclick="doAddToList()"   />
            
            <input type='button' value='Clear Display' 
                    onClick="clearUI();"
                    />
            
            <input type='button' value='Reset Calculator' 
                    onClick="reset();"
                    />

            <br/>
            <input type='button' value='Sum' onclick="doSum();"    />
            <input type='button' value='Average'  onclick="doAverage();" />
            <input type='button' value='Find Min'   />

        </div>

    </fieldset>

    <hr/>

    <fieldset>
        <legend>Console</legend>

        <div id='console'>
            <!-- <p>sum is 60</p>
            <p>average is 20</p> -->
        </div>

    </fieldset>

    <fieldset>
        <legend>Number List</legend>

        <ul id='numberList'>
            <!-- <li>29</li>
            <li>11</li>
            <li>10</li> -->
        </ul>

        <input type='button' value='refresh list' onclick="refreshList();" />
    </fieldset>

  
    <script src="calc.js"></script>
    
</body>

</html>
