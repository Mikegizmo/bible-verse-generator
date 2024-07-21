let btn = document.getElementById('btn');
let output = document.getElementById('output');
let newBtn = document.getElementById('newBtn');

let bibleVerses = 
[
  "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.<br>John 3:16",

  "For I know the plans I have for you,” declares the LORD, “plans to prosper you and not to harm you, plans to give you hope and a future.<br>Jeremiah 29:11",

  "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.<br>Romans 8:28",

  "I can do everything through him who gives me strength.<br>Philippians 4:13",

  "In the beginning God created the heavens and the earth.<br>Genesis 1:1",

  "Trust in the LORD with all your heart and lean not on your own understanding.<br>Proverbs 3:5",

  "In all your ways acknowledge him, and he will make your paths straight.<br>Proverbs 3:6",

  "Do not conform any longer to the pattern of this world, but be transformed by the renewing of your mind. Then you will be able to test and approve what God's will is—his good, pleasing and perfect will.<br>Romans 12:2",

  "Do not be anxious about anything, but in everything, by prayer and petition, with thanksgiving, present your requests to God.<br>Philippians 4:6",

  "Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit.<br>Matthew 28:19"
];

let bibleVerses2 = [
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
  }

  
]

const imagesLandscape = 
[
  "https://images.unsplash.com/photo-1564053489984-317bbd824340?q=80&w=1792&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

  "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

  "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1875&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

  "https://images.unsplash.com/photo-1500964757637-c85e8a162699?q=80&w=1803&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

  "https://images.pexels.com/photos/602794/pexels-photo-602794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

  "https://images.pexels.com/photos/624015/pexels-photo-624015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

  "https://images.pexels.com/photos/456710/pexels-photo-456710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

  "https://images.pexels.com/photos/259881/pexels-photo-259881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

  "https://images.pexels.com/photos/417083/pexels-photo-417083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

]

const imagesPortrait = 
[
  "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8MXwwfHx8MA%3D%3D",

  "https://images.unsplash.com/photo-1414609245224-afa02bfb3fda?q=80&w=1889&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

  "https://images.unsplash.com/photo-1455218873509-8097305ee378?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

  "https://images.unsplash.com/photo-1507692812060-98338d07aca3?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

  "https://plus.unsplash.com/premium_photo-1675433344518-21eb72dfc7a5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

  "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

  "https://images.pexels.com/photos/2877375/pexels-photo-2877375.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

  "https://images.pexels.com/photos/1336924/pexels-photo-1336924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

  "https://images.pexels.com/photos/1624504/pexels-photo-1624504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

  "https://images.pexels.com/photos/3214944/pexels-photo-3214944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
]

btn.addEventListener('click', () => {
  const randomVerse = bibleVerses2[Math.floor(Math.random() * bibleVerses2.length)];
  output.innerHTML = randomVerse.verseText + '<br>' + randomVerse.verse + ' ' + randomVerse.translation;

  let width = window.innerWidth;
  let height = window.innerHeight;
  console.log(width);
  let titleContainer = document.getElementById('titleContainer');
  let btn = document.getElementById('btn');
  let newBtn = document.getElementById('newBtn');
  let imageSet;

  width > 800 ? imageSet = imagesLandscape : imageSet = imagesPortrait; 
  height > width ? imageSet = imagesPortrait: imageSet = imagesLandscape;

  const newImage = imageSet[Math.floor(Math.random() * imageSet.length)];
  titleContainer.style.display = 'none';
  btn.style.display = 'none';
  newBtn.style.display = 'block';
  document.body.background = newImage;
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundAttachment = 'fixed';
  document.body.style.backgroundPosition = 'center';
  document.body.style.backgroundRepeat = 'no-repeat';
  document.body.style.objectFit = 'contain';
})

newBtn.addEventListener('click', () => {
  const randomVerse = bibleVerses2[Math.floor(Math.random() * bibleVerses2.length)];
  output.innerHTML = randomVerse.verseText + '<br>' + randomVerse.verse + ' ' + randomVerse.translation;

  let width = window.innerWidth;
  let height = window.innerHeight;

  let imageSet;

  width > 800 ? imageSet = imagesLandscape : imageSet = imagesPortrait; 
  height > width ? imageSet = imagesPortrait: imageSet = imagesLandscape;

  const newImage = imageSet[Math.floor(Math.random() * imageSet.length)];
  document.body.background = newImage;
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundAttachment = 'fixed';
  document.body.style.backgroundPosition = 'center';
  document.body.style.backgroundRepeat = 'no-repeat';
  document.body.style.objectFit = 'contain';
})  