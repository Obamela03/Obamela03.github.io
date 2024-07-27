document.addEventListener('DOMContentLoaded', function () {
    const accommodations = [
        { id: 1, name: 'Sunrise Apartments', location: 'Main Street', price: '$5000/month', image: 'images/test1.jpeg', photos: ['images/test1.jpeg', 'images/test1.jpeg', 'images/test1.jpeg', 'images/test1.jpeg', 'images/test1.jpeg', 'images/test1.jpeg'], reviews: [] },
        { id: 2, name: 'Campus Residence', location: 'University Road', price: '$4500/month', image: 'images/test2.jpeg', photos: ['images/test2.jpeg', 'images/test2.jpeg'], reviews: [] },
        { id: 3, name: 'Downtown Loft', location: 'Downtown', price: '$6000/month', image: 'images/test3.jpeg', photos: ['images/test3.jpeg', 'images/test3.jpeg'], reviews: [] },
        { id: 4, name: 'Belhar Lofts', location: 'Belhar', price: '6000/month', image: 'images/test4.jpeg', photos: ['images/test4.jpeg', 'images/test4.jpeg'], reviews: [] },

    ];

    const urlParams = new URLSearchParams(window.location.search);
    const accommodationId = parseInt(localStorage.getItem('selectedAccommodationId'), 10);

    console.log('Accommodation ID:', accommodationId); // Debugging

    const accommodation = accommodations.find(acc => acc.id === accommodationId);

    if (accommodation) {

        console.log('Accommodation found:', accommodation); // Debugging

        document.getElementById('name').textContent = accommodation.name;
        document.getElementById('location').textContent = `Location: ${accommodation.location}`;
        document.getElementById('price').textContent = `Price: ${accommodation.price}`;
        document.getElementById('main-photo').src = accommodation.image;

        const photoGallery = document.getElementById('photo-gallery');
        accommodation.photos.forEach(photo => {
            const img = document.createElement('img');
            img.src = photo;
            img.alt = accommodation.name;
            photoGallery.appendChild(img);
        });

        const reviewList = document.getElementById('review-list');
        accommodation.reviews.forEach(review => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${review.rating} Stars:</strong> ${review.text}`;
            reviewList.appendChild(li);
        });

        // Handle form submission
        const reviewForm = document.getElementById('review-form');
        reviewForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const rating = document.getElementById('rating').value;
            const reviewText = document.getElementById('review-text').value;

            const newReview = { rating: rating, text: reviewText };
            accommodation.reviews.push(newReview);

            const li = document.createElement('li');
            li.innerHTML = `<strong>${rating} Stars:</strong> ${reviewText}`;
            reviewList.appendChild(li);

            reviewForm.reset();
        });
    } else {
        document.getElementById('AccomDetails').textContent = 'Accommodation not found.';
    }
});
