let btn = document.getElementById('btn');
let output = document.getElementById('output');
let topDiv = document.getElementById('topDiv');
let newBtn = document.getElementById('newBtn');
let modalInfo = document.getElementById('modalInfo');
  
let bibleVerses = [
  {
    translation:'NIV',
    verse:"John 3:16",
    verseText:"For God so loved the world that he gave his one and only Son, that whoever believes in Him shall not perish but have eternal life."
  },
  {
    translation:'NASB',
    verse:"John 3:16",
    verseText:"For God so loved the world, that He gave His only Son, so that everyone who believes in Him will not perish, but have eternal life."
  },
  {
    translation:'ESV',
    verse:"John 3:16",
    verseText:"For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life."
  },
  {
    translation:'NIV',
    verse:"Jeremiah 29:11",
    verseText:"For I know the plans I have for you, declares the LORD, plans to prosper you and not to harm you, plans to give you hope and a future."
  },
  {
    translation:'NASB',
    verse: "Jeremiah 29:11",
    verseText:" For I know the plans that I have for you, declares the Lord, plans for prosperity and not for disaster, to give you a future and a hope.",
  },
  {
    translation:'ESV',
    verse:"Jeremiah 29:11",
    verseText:"For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope."
  },
  {
    translation:'NIV',
    verse:"Psalm 139:14",
    verseText:"I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well."
  },
  {
    translation:'NASB',
    verse:"Psalm 139:14",
    verseText:"I will give thanks to You, because I am awesomely and wonderfully made; Wonderful are Your works, And my soul knows it very well."
  },
  {
    translation:'ESV',
    verse:"Psalm 139:14",
    verseText:"I praise you, for I am fearfully and wonderfully made. Wonderful are your works; my soul knows it very well."
  },
  {
    translation:'NIV',
    verse:"Philippians 4:13",
    verseText:"I can do all this through him who gives me strength."
  },
  {
    translation:'NASB',
    verse:"Philippians 4:13",
    verseText:"I can do all things through Him who strengthens me."
  },
  {
    translation:'ESV',
    verse:"Philippians 4:13",
    verseText:"I can do all things through him who strengthens me."
  },
  {
    translation:'NIV',
    verse:"Proverbs 3:5",
    verseText:"Trust in the Lord with all your heart and lean not on your own understanding."
  },
  {
    translation:'NASB',
    verse:"Proverbs 3:5",
    verseText:"Trust in the Lord with all your heart and do not lean on your own understanding."
  },
  {
    translation:'ESV',
    verse:"Proverbs 3:5",
    verseText:"Trust in the LORD with all your heart, and do not lean on your own understanding."
  },

  
]

const imagesLandscape = 
[
  {
    image: "https://images.unsplash.com/photo-1482784160316-6eb046863ece?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    photographer: "jms",
    source: "Unsplash"
  },
  {
    image: "https://images.unsplash.com/photo-1490682143684-14369e18dce8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    photographer: "Artem Sapegin",
    source: "Unsplash"
  },
  {
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1875&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    photographer: "Qingbao Meng",
    source: "Unsplash"
  },
  {
    image: "https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    photographer: "Joel Holland",
    source: "Unsplash"
  },
  {
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    photographer: "v2osk",
    source: "Unsplash"
  },
  {
    image: "https://images.pexels.com/photos/602794/pexels-photo-602794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    photographer: "David Bartus",
    source: "Pexels"
  },
  {
    image: "https://images.pexels.com/photos/624015/pexels-photo-624015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    photographer: "Frans van Heerden",
    source: "Pexels"
  },
  {
    image: "https://images.pexels.com/photos/456710/pexels-photo-456710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    photographer: "Eberhard Grossgasteiger",
    source: "Pexels"
  },
  {
    image: "https://images.pexels.com/photos/259881/pexels-photo-259881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    photographer: "Pixabay",
    source: "Pexels"
  },
  {
    image: "https://images.pexels.com/photos/417083/pexels-photo-417083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    photographer: "Pixabay",
    source: "Pexels"
  }
]

const imagesPortrait = 
[
  {
    image: "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8MXwwfHx8MA%3D%3D",
    photographer: "Shifaaz Shamoon",
    source: "Unsplash"
  },
  {
    image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    photographer: "Daniel Malikyar",
    source: "Unsplash"
  },
  {
    image: "https://images.unsplash.com/photo-1455218873509-8097305ee378?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    photographer: "Thomas Kelley",
    source: "Unsplash"
  },
  {
    image:"https://images.unsplash.com/photo-1522963704421-5a794c1aad43?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    photographer: "Florian Wedhe",
    source: "Unsplash"
  },
  {
    image: "https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    photographer: "Johny Goerend",
    source: "Unsplash"
  },
  {
    image: "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    photographer: "Michael Block",
    source: "Pexels"
  },
  {
    image: "https://images.pexels.com/photos/2877375/pexels-photo-2877375.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    photographer: "Ignacio Palés",
    source: "Pexels"
  },
  {
    image: "https://images.pexels.com/photos/1336924/pexels-photo-1336924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    photographer: "Satria Bagaskara",
    source: "Pexels"
  },
  {
    image: "https://images.pexels.com/photos/1624504/pexels-photo-1624504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    photographer: "Eberhard Grossgasteiger",
    source: "Pexels"
  },
  {
    image: "https://images.pexels.com/photos/3214944/pexels-photo-3214944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    photographer: "Alex Azabache",
    source: "Pexels"
  }
]

btn.addEventListener('click', () => {
  const randomVerse = bibleVerses[Math.floor(Math.random() * bibleVerses.length)];
  output.innerHTML = randomVerse.verseText + '<br>' + randomVerse.verse + ' ' + randomVerse.translation;

  let width = window.innerWidth;
  let height = window.innerHeight;
  console.log(width);
  let titleContainer = document.getElementById('titleContainer');
  let imageSet;

  width > 800 ? imageSet = imagesLandscape : imageSet = imagesPortrait; 
  height > width ? imageSet = imagesPortrait: imageSet = imagesLandscape;

  const newImage = imageSet[Math.floor(Math.random() * imageSet.length)];

  titleContainer.style.display = 'none';
  btn.style.display = 'none';
  topDiv.style.display = 'flex';
  topDiv.style.flexDirection ='row';
  topDiv.style.justifyContent = 'space-between';
  document.body.background = newImage.image;
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundAttachment = 'fixed';
  document.body.style.backgroundPosition = 'center';
  document.body.style.backgroundRepeat = 'no-repeat';
  document.body.style.objectFit = 'contain';
  modalInfo.innerHTML = `Photographer ${newImage.photographer} on ${newImage.source}`;
})

newBtn.addEventListener('click', () => {
  const randomVerse = bibleVerses[Math.floor(Math.random() * bibleVerses.length)];
  output.innerHTML = randomVerse.verseText + '<br>' + randomVerse.verse + ' ' + randomVerse.translation;

  let width = window.innerWidth;
  let height = window.innerHeight;

  let imageSet;

  width > 800 ? imageSet = imagesLandscape : imageSet = imagesPortrait; 
  height > width ? imageSet = imagesPortrait: imageSet = imagesLandscape;

  const newImage = imageSet[Math.floor(Math.random() * imageSet.length)];
  document.body.background = newImage.image;
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundAttachment = 'fixed';
  document.body.style.backgroundPosition = 'center';
  document.body.style.backgroundRepeat = 'no-repeat';
  document.body.style.objectFit = 'contain';
  modalInfo.innerHTML = `Photographer ${newImage.photographer} on ${newImage.source}`;
})  

let modal = document.getElementById('infoModal');
let modalBtn = document.getElementById('modalBtn');
let span = document.getElementsByClassName('close')[0];

modalBtn.onclick = () => {
  modal.style.display = 'block';
}

span.onclick = () => {
  modal.style.display = 'none';
}

window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}