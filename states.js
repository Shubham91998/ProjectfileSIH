const stateData = {
    Kerala: {
        photos: [
            'path/to/kerala1.jpg',
            'path/to/kerala2.jpg'
        ],
        videos: [
            'path/to/kerala1.mp4'
        ],
        famousPlaces: [
            'Backwaters of Kerala',
            'Munnar Hills'
        ],
        festivals: [
            'Onam',
            'Vishu'
        ]
    },
    punjab: {
        photos: [
            'path/to/punjab1.jpg',
            'path/to/punjab2.jpg'
        ],
        videos: [
            'path/to/punjab1.mp4'
        ],
        famousPlaces: [
            'Golden Temple',
            'Jallianwala Bagh'
        ],
        festivals: [
            'Baisakhi',
            'Lohri'
        ]
    },
    Bihar: {
        photos: [
            'https://www.drishtiias.com/images/uploads/1626088444_image3.jpg',
            'https://www.holidify.com/images/bgImages/NALANDA.jpg'
        ],
        videos: [
            
        ],
        famousPlaces: [
            'Buddha Stupa, Kesharia',
            'Hanuman Temple, Patna'
        ],
        festivals: [
            'ChatPuja',
            'Lohri'
        ]
    },
    Uttar_Perdesh: {
        photos: [
            'path/to/punjab1.jpg',
            'path/to/punjab2.jpg'
        ],
        videos: [
            'path/to/punjab1.mp4'
        ],
        famousPlaces: [
            'Golden Temple',
            'Jallianwala Bagh'
        ],
        festivals: [
            'Baisakhi',
            'Lohri'
        ]
    },
    Chennai: {
        photos: [
            'path/to/punjab1.jpg',
            'path/to/punjab2.jpg'
        ],
        videos: [
            'path/to/punjab1.mp4'
        ],
        famousPlaces: [
            'Golden Temple',
            'Jallianwala Bagh'
        ],
        festivals: [
            'Baisakhi',
            'Lohri'
        ]
    },
    // Add data for other states here
};

function loadStateContent(state) {
    const contentDiv = document.getElementById('state-content');
    contentDiv.innerHTML = '';

    if (stateData[state]) {
        const { photos, videos, famousPlaces, festivals } = stateData[state];

        contentDiv.innerHTML += '<h2>Photos</h3>';
        photos.forEach(photo => {
            contentDiv.innerHTML += `<img src="${photo}" alt="Photo of ${state}">`;
        });

        contentDiv.innerHTML += '<h3>Videos</h3>';
        videos.forEach(video => {
            contentDiv.innerHTML += `<video controls><source src="${video}" type="video/mp4">Your browser does not support the video tag.</video>`;
        });

        contentDiv.innerHTML += '<h3>Famous Places</h3>';
        contentDiv.innerHTML += '<ul>';
        famousPlaces.forEach(place => {
            contentDiv.innerHTML += `<li>${place}</li>`;
        });
        contentDiv.innerHTML += '</ul>';

        contentDiv.innerHTML += '<h3>Festivals</h3>';
        contentDiv.innerHTML += '<ul>';
        festivals.forEach(festival => {
            contentDiv.innerHTML += `<li>${festival}</li>`;
        });
        contentDiv.innerHTML += '</ul>';
    } else {
        contentDiv.innerHTML = '<p>No data available for this state.</p>';
    }
}
