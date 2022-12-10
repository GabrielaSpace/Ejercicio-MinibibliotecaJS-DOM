/* Ejercicio con arrays, objetos, manejo del DOM. 
Dado el siguiente array de objetos, pintar en el DOM tarjetas con los detalles de los siguientes libros. También 
hay que darle algo de estilos con clases CSS correspondientes (es un buen ejercicio propenso a flexbox):
 */
const books = [
    {
      "author": "Chinua Achebe",
      "country": "Nigeria",
      "imageLink": "images/things-fall-apart.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
      "pages": 209,
      "title": "Things Fall Apart",
      "year": 1958
    },
    {
      "author": "Hans Christian Andersen",
      "country": "Denmark",
      "imageLink": "images/fairy-tales.jpg",
      "language": "Danish",
      "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
      "pages": 784,
      "title": "Fairy tales",
      "year": 1836
    },
    {
      "author": "Dante Alighieri",
      "country": "Italy",
      "imageLink": "images/the-divine-comedy.jpg",
      "language": "Italian",
      "link": "https://en.wikipedia.org/wiki/Divine_Comedy\n",
      "pages": 928,
      "title": "The Divine Comedy",
      "year": 1315
    },
    {
      "author": "Unknown",
      "country": "Sumer and Akkadian Empire",
      "imageLink": "images/the-epic-of-gilgamesh.jpg",
      "language": "Akkadian",
      "link": "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
      "pages": 160,
      "title": "The Epic Of Gilgamesh",
      "year": -1700
    },
    {
      "author": "Unknown",
      "country": "Achaemenid Empire",
      "imageLink": "images/the-book-of-job.jpg",
      "language": "Hebrew",
      "link": "https://en.wikipedia.org/wiki/Book_of_Job\n",
      "pages": 176,
      "title": "The Book Of Job",
      "year": -600
    }]
  
  
    let mbMain= document.createElement('main');
    let mbSection = document.createElement('section');
    mbMain.appendChild(mbSection);
  
  
  
    for (let i =0; i <books.length;i++){
  
      mbbooks (books[i], i);
    }
  
  
    function mbbooks() {
  
  
    let mbArticle = document.createElement('article');
    mbSection.appendChild(mbArticle);
      
    let mbTitle = document.createElement('h3');
    mbTitle.setAttribute('class','title');
    mbArticle.appendChild(mbTitle);
  
    let mbAuthor = document.createElement('p');
    mbAuthor.setAttribute('class','author');
    mbArticle.appendChild(mbAuthor);
  
    let mbCountry = document.createElement('p');
    mbCountry.setAttribute('class','country');
    mbArticle.appendChild(mbCountry);
  
    let mbImg = document.createElement('img');
    mbImg.setAttribute('class','imageLink');
    mbArticle.appendChild(mbImg);
  
   let mbLink = document.createElement('p');
    mbLink.setAttribute('src','link');
    mbArticle.appendChild(mbLink);
  
    let mbLanguage = document.createElement('p');
    mbLanguage.setAttribute('class','language');
    mbArticle.appendChild(mbLanguage);
  
    let mbYear = document.createElement('p');
    mbYear.setAttribute('class','year');
    mbArticle.appendChild(mbYear);
  
    let mbPages = document.createElement('p');
    mbPages.setAttribute('class','pages');
    mbArticle.appendChild(mbPages);
  
  document.getElementsByClassName('title').innerHTML =books.title;

  
  }
  
    console.log(mbMain);
  
  
  
  
    
  
  
  