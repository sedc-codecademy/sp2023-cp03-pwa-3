// Check if the user is already logged in
function checkLoginStatus() {
  var loggedInUsername = localStorage.getItem('loggedInUsername');
  if (loggedInUsername) {
    document.getElementById('username').value = loggedInUsername;
    document.getElementById('username').readOnly = true;
    document.getElementById('login-button').style.display = 'none';
    document.getElementById('logout-button').style.display = 'block';
    document.getElementById('logged-in-username').textContent = 'Logged in as: ' + loggedInUsername;
  }
}

// Handle the login button click
document.getElementById('login-button').addEventListener('click', function() {
  var username = document.getElementById('username').value;
  if (username.trim() !== '') {
    localStorage.setItem('loggedInUsername', username);
    document.getElementById('username').readOnly = true;
    document.getElementById('login-button').style.display = 'none';
    document.getElementById('logout-button').style.display = 'block';
    document.getElementById('logged-in-username').textContent = 'Logged in as: ' + username;
  }
});

// Handle the logout button click
document.getElementById('logout-button').addEventListener('click', function() {
  localStorage.removeItem('loggedInUsername');
  document.getElementById('username').value = '';
  document.getElementById('username').readOnly = false;
  document.getElementById('login-button').style.display = 'block';
  document.getElementById('logout-button').style.display = 'none';
  document.getElementById('logged-in-username').textContent = '';
});

// Check the login status when the page loads
checkLoginStatus();

// Handle the submit review button click
document.getElementById('submit-review').addEventListener('click', function() {
  var title = document.getElementById('title').value;
  var review = document.getElementById('review').value;
  var loggedInUsername = localStorage.getItem('loggedInUsername');

  if (title.trim() !== '' && review.trim() !== '' && loggedInUsername) {
    var reviewItem = document.createElement('div');
    reviewItem.classList.add('review');

    var reviewHeader = document.createElement('div');
    reviewHeader.classList.add('review-header');

    var reviewTitle = document.createElement('h3');
    reviewTitle.textContent = title;

    var usernameElement = document.createElement('span');
    usernameElement.classList.add('username');
    usernameElement.textContent = loggedInUsername;

    var reviewBody = document.createElement('div');
    reviewBody.classList.add('review-body');

    var reviewText = document.createElement('p');
    reviewText.classList.add('review-text');
    reviewText.textContent = review;

    var likeButton = document.createElement('button');
    likeButton.classList.add('like-button');
    likeButton.textContent = 'Like';

    var counter = 0; // Initial counter value
    var counterElement = document.createElement('span');
    counterElement.classList.add('counter');
    counterElement.textContent = counter;

    likeButton.addEventListener('click', function() {
      if (likeButton.classList.contains('liked')) {
        // Decrease counter by 1
        counter--;
        counterElement.textContent = counter;
        likeButton.classList.remove('liked');
        likeButton.textContent = 'Like';
      } else {
        // Increase counter by 1
        counter++;
        counterElement.textContent = counter;
        likeButton.classList.add('liked');
        likeButton.textContent = 'Liked';
      }
    });

    var likeButtonContainer = document.createElement('div');
    likeButtonContainer.classList.add('like-button-container');
    likeButtonContainer.appendChild(likeButton);
    likeButtonContainer.appendChild(counterElement);

    var deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
      var confirmDelete = confirm('Are you sure you want to delete this review?');
      if (confirmDelete) {
        reviewItem.classList.add('hide');
        setTimeout(function() {
          reviewItem.remove();
        }, 400); // Delay removal to match the slide-up animation duration
      }
    });

    reviewHeader.appendChild(reviewTitle);
    reviewHeader.appendChild(usernameElement);
    reviewBody.appendChild(reviewText);
    reviewBody.appendChild(likeButtonContainer);
    reviewBody.appendChild(deleteButton);
    reviewItem.appendChild(reviewHeader);
    reviewItem.appendChild(reviewBody);

    var reviewsList = document.querySelector('.reviews-list');
    reviewsList.appendChild(reviewItem);

    var reviewItems = document.querySelectorAll('.review');
    if (reviewItems.length > 4) {
      reviewsList.classList.add('scrollable');
    }

    // Scroll to the latest review item
    reviewItem.scrollIntoView({ behavior: 'smooth', block: 'end' });

    // Clear the form fields
    document.getElementById('title').value = '';
    document.getElementById('review').value = '';

    // Show the review item with animation
    setTimeout(function() {
      reviewItem.classList.add('show');
    }, 10);
  }
});
