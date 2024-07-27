document.addEventListener('DOMContentLoaded', function () {
    const accommodations = [
        { name: 'Sunrise Apartments', location: 'Main Street', price: 'R5000/month', type: 'student', image: 'images/test1-1.jpeg' },
        { name: 'Campus Residence', location: 'University Road', price: 'R4500/month',type: 'hotel', image: 'images/test2-1.jpeg' },
        { name: 'Downtown Loft', location: 'Downtown', price: 'R6000/month', type: 'student',image: 'images/test3-1.jpeg' },
        { name: 'Belhar Lofts', location: 'Belhar 7', price: 'R4500/month', type: 'lodge',image: 'images/test4-1.jpeg' },

    ];

    const studentList = document.querySelector('#student-accommodations .accommodation-list');
    const hotelList = document.querySelector('#hotels .accommodation-list');
    const lodgeList = document.querySelector('#lodges .accommodation-list');


    accommodations.forEach(acc => {
        const div = document.createElement('div');
        div.className = 'accommodation';
        div.dataset.id = acc.id; // Set data-id for later use
        div.innerHTML = `
            <img src="${acc.image}" alt="${acc.name}">
            <h3>${acc.name}</h3>
            <p>${acc.location}</p>
            <p>${acc.price}</p>
        `;

        // Add click event to store the ID in local storage
        document.querySelectorAll('.accommodation').forEach(item => {
    item.addEventListener('click', function () {
        const id = this.dataset.id; // Assuming you have a data-id attribute
        localStorage.setItem('selectedAccommodationId', id);
        window.location.href = 'details.html';
    });
});


        // Append to the correct list based on type
        if (acc.type === 'student') {
            studentList.appendChild(div);
        } else if (acc.type === 'hotel') {
            hotelList.appendChild(div);
        }else if (acc.type === 'lodge') {
            lodgeList.appendChild(div);
        } else {
            otherList.appendChild(div);
        }
    });
});

