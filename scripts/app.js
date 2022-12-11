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
    document.body.appendChild(mbMain);
    let mbSection = document.createElement('section');
    mbMain.appendChild(mbSection);
  
  
    for (let i =0; i <books.length;i++){
  
      mbbooks (books[i]);
    }
  
    function mbbooks(object) {
  
  
    let mbArticle = document.createElement('article');
    mbArticle.setAttribute('class','book');
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
    mbImg.setAttribute('src','https://images.unsplash.com/photo-1604342162684-0cb7869cc445?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80')
    mbArticle.appendChild(mbImg);
  
   let mbLink = document.createElement('a');
    mbLink.setAttribute('href','link');
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
  
      
     mbTitle.textContent=object.title;
     mbAuthor.textContent=object.author;
     mbCountry.textContent=object.country;
     mbImg.textContent=object.imageLink;
     mbLink.textContent=object.link;
     mbLanguage.textContent=object.language;
     mbYear.textContent=object.year;
     mbPages.textContent=object.pages;

  }
  console.log(mbMain);
  
  
  
  
    
  
  
  