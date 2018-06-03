var data = [
    {
        id: 'box1',
        title: 'First box',
        content: '<p>Lorem ipsum dolor sit amet!</p>',
        categories: ['highlighted', 'special-header', 'important']
	},
    {
        id: 'box2',
        title: 'Second box',
        content: '<p>Lorem ipsum dolor sit amet!</p>',
        categories: ['special-header', 'important']
	},
    {
        id: 'box3',
        title: 'Third box',
        content: '<p>Lorem ipsum dolor sit amet!</p>',
        categories: ['highlighted', 'important']
	},
    {
        id: 'box4',
        title: 'Fourth box',
        content: '<p>Lorem ipsum dolor sit amet!</p>',
        categories: ['highlighted']
	},
    {
        id: 'box5',
        title: 'Fifth box',
        content: '<p>Lorem ipsum dolor sit amet!</p>',
        categories: []
	},
];

var boxes = document.querySelectorAll('.box');
var boxesLenght = boxes.length;

for (var i = 0; i < boxesLenght; i++) {

    // 2
    var boxHeader = boxes[i].querySelector('header');
    boxHeader.innerHTML = data[i].title;
    // 3
    var boxContent = boxes[i].querySelector('p');
    boxContent.innerHTML = data[i].content;
    // 4
    for (var j = 0; j < data[i].categories.length; j++) {
        boxes[i].classList.add(data[i].categories[j]);
    }
}
