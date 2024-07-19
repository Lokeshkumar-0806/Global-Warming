document.addEventListener('DOMContentLoaded', function() {
    loadRecyclingGuides();
    initMap();
    loadCommunityForum();
});

function loadRecyclingGuides() {
    const guidesContainer = document.getElementById('guides-container');
    const guides = [
        { title: 'Plastic Recycling Guide', content: 'Learn how to recycle plastic properly.' },
        { title: 'Paper Recycling Guide', content: 'Tips for recycling paper products.' },
        { title: 'Metal Recycling Guide', content: 'How to recycle metal items.' }
    ];

    guides.forEach(guide => {
        const guideElement = document.createElement('div');
        guideElement.classList.add('guide');
        guideElement.innerHTML = `<h3>${guide.title}</h3><p>${guide.content}</p>`;
        guidesContainer.appendChild(guideElement);
    });
}

function initMap() {
    const mapContainer = document.getElementById('map-container');
    mapContainer.innerHTML = '<p>Map of recycling centers will be here.</p>';
    // You can integrate Google Maps or any other mapping service here.
}

function loadCommunityForum() {
    const forumContainer = document.getElementById('forum-container');
    forumContainer.innerHTML = '<p>Community forum will be here.</p>';
    // You can integrate a forum service or create your own forum functionality.
}
