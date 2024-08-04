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
    translation:'NIV',
    verse:"Jeremiah 29:11",
    verseText:"For I know the plans I have for you, declares the LORD, plans to prosper you and not to harm you, plans to give you hope and a future."
  },
  {
    translation:'NIV',
    verse:"Psalm 139:14",
    verseText:"I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well."
  },
  {
    translation:'NIV',
    verse:"Philippians 4:13",
    verseText:"I can do all this through him who gives me strength."
  },
  {
    translation:'NIV',
    verse:"Proverbs 3:5",
    verseText:"Trust in the Lord with all your heart and lean not on your own understanding."
  },
  {
    translation:'NIV',
    verse:"Luke 19:10", 
    verseText:"For the Son of Man came to seek and to save the lost."
  },
  {
    translation:'NIV',
    verse:"Psalm 56:3",
    verseText:"When I am afraid, I put my trust in you."
  },
  {
    translation:'NIV',
    verse:"Proverbs 17:17",
    verseText:"A friend loves at all times, and a brother is born for a time of adversity."
  },
  {
    translation:'NIV',
    verse:"1 Peter 5:7",
    verseText:"Cast all your anxiety on him because he cares for you."
  },
  {
    translation:'NIV',
    verse:"John 16:33",
    verseText:"In this world you will have trouble.  But take heart! I have overcome the world."
  },
  {
    translation:'NIV',
    verse:"Matthew 11:28",
    verseText:"Come to me, all of you who are weary and burdened, and I will give you rest."
  },
  {
    translation:'NIV',
    verse:"Romans 5:8",
    verseText:"But God demonstrates his own love for us in this: While we were still sinners, Christ died for us."
  },
  {
    translation:'NIV',
    verse:"Romans 3:23",
    verseText:"For all have sinned and fall short of the glory of God."
  },
  {
    translation:'NIV',
    verse:"Romans 3:10",
    verseText:"As it is written: There is no one righteous, not even one."
  },
  {
    translation:'NIV',
    verse:"Romans 10:13",
    verseText:"For everyone who calls on the name of the Lord will be saved."
  },
  {
    translation:'NIV',
    verse:"Romans 1:5",
    verseText:"The light shines in the darkness, and the darkness has not overcome it."
  },
  {
    translation:'NIV',
    verse:"Ephesians 2:10",
    verseText:"For we are God's handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do."
  },
  {
    translation:'NIV',
    verse:"Psalm 145:8",
    verseText:"The Lord is gracious and compassionate, slow to anger and rich in love."
  },
  {
    translation:'NIV',
    verse:"Psalm 46:10",
    verseText:"Be still, and know that I am God; I will be exalted among the nations, I will be exalted in the earth."
  },
  {
    translation:'NIV',
    verse:"Luke 19:10",
    verseText:"For the Son of Man came to seek and to save the lost."
  }
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
    image: "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    photographer: "Mark Harpur",
    source: "Unsplash"
  },
  {
    image: "https://images.unsplash.com/photo-1535961652354-923cb08225a7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    photographer: "Simon Berger",
    source: "Unsplash"
  },
  {
    image: "https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    photographer: "Arno Smit",
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
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    photographer: "Jeremy Bishop",
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
  },
  {
    image: "https://images.pexels.com/photos/27410833/pexels-photo-27410833/free-photo-of-waterfall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    photographer: "ArWeltAtty Attila",
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