<!--
*** Thanks for checking out c. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]
[![NO LICENSE][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://gdansk.pja.edu.pl/pl/">
    <img src="images/logo.jpg" alt="Logo" width="540" height="80">
  </a>

  <h2 align="center">DOT_PJATK</h2>

  <p align="center">
    .NET framework project in PJATK subject
    <br />
    <a href="https://github.com/dccstcc/BIU_PJATK"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <!-- <a href="https://github.com/othneildrew/Best-README-Template">View Demo</a>
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues">Report Bug</a>
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues">Request Feature</a> -->
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <!-- <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li> -->
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <!-- <li><a href="#acknowledgements">Acknowledgements</a></li> -->
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

In this project I use template from BIU_PJATK subject for frontend of application and use .NET framework for backend implementation. I Use C# language for make REST API and communicate it with web form for register new users in application. 

### Built With

This project use technology below.
* [![dotnet][dotnet-shield]][dotnet-url]
* [![Angular][angular-shield]][angular-url]


<!-- GETTING STARTED -->
## Getting Started

This is instructions on setting up this project locally.

### Prerequisites

Microsoft Visual Studio IDE is need. <br/>
.NET framework is required. <br/>
Angular CLI package intall with Node Package Manager is need. <br/>
Angular devkit package intall with Node Package Manager is need. <br/>

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/dccstcc/DOT_PJATK
   ```
2. Go to folder with actual version of project frontend
   ```sh
   cd dotNET_ASP_REST_EF/Angular_SPA/ClientApp
   ```
3. Build and run sources with Angular CLI
   ```sh
   ng serve
   ```
   <br/>
4. Run project in web browser
   Default adress set in framewrok is:
   [https://localhost:4200/](https://localhost:4200/)
   <br/>
5. Run Visual Studio and import project from source
   ```sh
   cd DOT_PJATK/dotNET_ASP_REST_EF/

   ```
   open 
   ```
   NET_CORE_ASP_REST_EF.sln
   ```
   in Visual Studio
   <br/>
6. From context menu of ASP_REST project hit 
  ```
  run project
  ```
<br />
<img src="images/run_backend.png" width="300"/>

<!-- USAGE EXAMPLES -->
## Usage

After run project from Visual Studio web browser start automatically with backend data view.

<img src="images/backend_init.png" width="300"/>

Go to web browser and enter in adress
```
http://localhost:4200
```

<img src="images/web_for_init.png" width="300"/>


As first we need to register user in system use fields with personal user data. Unappropriate entries are detected and user will see typing error. After user registration process we can sign into service with given user name and password.

<img src="images/web_form_fill.png" width="300"/>

It is possible not to fill all inputs because button 
```
rejestracja_rest_api
```
is active all the time. After click this button we will send data for backend rest api and will register new user in Angular storage.

<img src="images/frontend_summary.png" width="300"/>

Now it is need to refresh web page.

<img src="images/json_output.png" width="300"/>


<!-- _For more examples, please refer to the [Documentation](https://example.com)_ -->



<!-- ROADMAP 
## Roadmap

See the [open issues](https://github.com/othneildrew/Best-README-Template/issues) for a list of proposed features (and known issues).

-->

<!-- CONTRIBUTING 
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

-->

<!-- LICENSE -->
## License

This project has not a license.
All rights are reserved and it is not Open Source or Free. You cannot modify or redistribute this code without explicit permission from the copyright holder.
See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Dominik Stec - dccstcc@gmail.com

[![LinkedIn][linkedin-shield]][linkedin-url]

Project URL: 
<br />
`https://github.com/dccstcc/DOT_PJATK.git`



<!-- ACKNOWLEDGEMENTS 
## Acknowledgements
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Img Shields](https://shields.io)
* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Pages](https://pages.github.com)
* [Animate.css](https://daneden.github.io/animate.css)
* [Loaders.css](https://connoratherton.com/loaders)
* [Slick Carousel](https://kenwheeler.github.io/slick)
* [Smooth Scroll](https://github.com/cferdinandi/smooth-scroll)
* [Sticky Kit](http://leafo.net/sticky-kit)
* [JVectorMap](http://jvectormap.com)
* [Font Awesome](https://fontawesome.com)

-->



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/dccstcc/DOT_PJATK.svg?style=for-the-badge
[contributors-url]: https://github.com/dccstcc/DOT_PJATK/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/dccstcc/DOT_PJATK.svg?style=for-the-badge
[forks-url]: https://github.com/dccstcc/DOT_PJATK/network/members
[stars-shield]: https://img.shields.io/github/stars/dccstcc/DOT_PJATK.svg?style=for-the-badge
[stars-url]: https://github.com/dccstcc/DOT_PJATK/stargazers
[issues-shield]: https://img.shields.io/github/issues/dccstcc/DOT_PJATK.svg?style=for-the-badge
[issues-url]: https://github.com/dccstcc/DOT_PJATK/issues
[license-shield]: https://img.shields.io/badge/License-NONE-orange
[license-url]: https://github.com/dccstcc/DOT_PJATK/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/dominik-stec
[product-screenshot]: images/screenshot.png

[angular-shield]: https://img.shields.io/badge/-Angular-red
[angular-url]: https://angular.io/
[dotnet-shield]: https://img.shields.io/badge/-.NET-blue
[dotnet-url]: https://docs.microsoft.com/pl-pl/dotnet/
