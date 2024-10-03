<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Basic HTML Website</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }

        header {
            background-color: #333;
            color: white;
            text-align: center;
            padding: 1em;
        }

        nav {
            background-color: #555;
            color: white;
            padding: 0.5em;
        }

        nav a {
            color: white;
            text-decoration: none;
            margin: 0 1em;
        }

        main {
            padding: 1em;
        }

        section {
            margin-bottom: 1em;
        }

        footer {
            background-color: #333;
            color: white;
            text-align: center;
            padding: 1em;
        }

        .highlight {
            background-color: yellow;
        }

        table {
            border-collapse: collapse;
            width: 100%;
        }

        th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
        }

        th {
            background-color: #555;
            color: white;
        }
    </style>
</head>
<body>

    <header>
        <h1>Welcome to My Website</h1>
    </header>

    <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
    </nav>

    <main>
        <section>
            <h2>Featured Content</h2>
            <p>This is a paragraph with <span class="highlight">highlighted</span> text.</p>
            <img src="https://placekitten.com/400/200" alt="Cute Kitten">
        </section>

        <section>
            <h2>Interactive Feature</h2>
            <button onclick="changeColor()">Change Color</button>
        </section>

        <section>
            <h2>Table Example</h2>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>City</th>
                </tr>
                <tr>
                    <td>John Doe</td>
                    <td>25</td>
                    <td>New York</td>
                </tr>
                <tr>
                    <td>Jane Smith</td>
                    <td>30</td>
                    <td>Los Angeles</td>
                </tr>
            </table>
        </section>
    </main>

    <footer>
        <p>&copy; 2023 My Website. All rights reserved.</p>
    </footer>

    <script>
        function changeColor() {
            document.body.style.backgroundColor = "lightblue";
        }
    </script>

</body>
</html>
