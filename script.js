document.addEventListener('DOMContentLoaded', function() {
  const cars = [
    { id: 1, name: 'Maruti Swift', price: 380000, topSpeed: '165 km/h', mileage: '22 km/l', engine: '1.2L I4', category: 'Hatchback', img: 'https://imgd.aeplcdn.com/640X480/vimages/202603/4447269_140655_1_1773829361628.jpg?qp=80&fit=true' },
    { id: 2, name: 'Hyundai i20', price: 750000, topSpeed: '170 km/h', mileage: '20 km/l', engine: '1.2L I4', category: 'Hatchback', img: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/i20/11092/1755058597906/rear-left-view-121.jpg' },
    { id: 3, name: 'Tata Nexon', price: 850000, topSpeed: '175 km/h', mileage: '18 km/l', engine: '1.5L Diesel', category: 'SUV', img: 'https://imgd.aeplcdn.com/642x361/n/cw/ec/183817/tata-nexon-left-front-three-quarter1.jpeg?isig=0&q=75' },
    { id: 4, name: 'Honda City', price: 1500000, topSpeed: '185 km/h', mileage: '18 km/l', engine: '1.5L i-VTEC', category: 'Sedan', img: 'https://www.xdrivecars.com/assets/images/products/Used-cars-in-trivandrum--110820254220.webp' },
    { id: 5, name: 'Hyundai Creta', price: 1700000, topSpeed: '185 km/h', mileage: '17 km/l', engine: '1.5L Petrol', category: 'SUV', img: 'https://cdn-s3.autocarindia.com/hyundai/Creta-Electric/500_5172.jpg?w=640&q=75' },
    { id: 6, name: 'Toyota Fortuner', price: 3800000, topSpeed: '180 km/h', mileage: '10 km/l', engine: '2.8L Diesel', category: 'SUV', img: 'https://img.autocarpro.in/autocarpro/709f4883-7b5d-48a5-8aee-b556afd7e4f4_Fortuner-Leader-white.jpg?w=750&h=490&q=75&c=1' },
    { id: 7, name: 'BMW X5', price: 8500000, topSpeed: '240 km/h', mileage: '11 km/l', engine: '3.0L I6', category: 'Luxury', img: 'https://cdn-s3.autocarindia.com/BMW/X5/_AAB6024.JPG?w=640&q=75' },
    { id: 8, name: 'Mercedes GLE', price: 9200000, topSpeed: '235 km/h', mileage: '10 km/l', engine: '3.0L V6', category: 'Luxury', img: 'https://cylindersi.pl/wp-content/uploads/2024/03/Mercedes-GLE-sylwetka.jpg' },
    { id: 9, name: 'Range Rover Velar', price: 9800000, topSpeed: '210 km/h', mileage: '12 km/l', engine: '2.0L I4', category: 'Luxury', img: 'https://media.production.jlrms.com/styles/thumbnail_big/s3/2021-08-16/image/c1578a06-e7d7-4b5a-8790-ac095e785094/RR_Velar_22MY_Auric_Edition_Exterior_S44_180821_02.jpg?VersionId=VFURFDAjjyyXWCJQEEw6jLF3A8LeieNX&h=65c67da0&itok=lyJ6Bmhq' },
    { id: 10, name: 'Porsche Panamera', price: 18500000, topSpeed: '280 km/h', mileage: '9 km/l', engine: '2.9L V6', category: 'Luxury', img: 'https://cdn.motor1.com/images/mgl/Kb7eqM/s1/2025-porsche-panamera-turbo-s-e-hybrid.webp' },
    { id: 11, name: 'Ferrari Roma', price: 38000000, topSpeed: '320 km/h', mileage: '7.5 km/l', engine: '3.9L V8', category: 'Supercar', img: 'https://hips.hearstapps.com/hmg-prod/images/2024-ferrari-roma-spider-117-650b3c92b4ae2.jpg?crop=0.742xw:0.624xh;0.176xw,0.376xh&resize=2048:*' },
    { id: 12, name: 'Lamborghini Urus', price: 42000000, topSpeed: '305 km/h', mileage: '7 km/l', engine: '4.0L V8', category: 'Supercar', img: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Lamborghini_Urus_SE_DSC_8524.jpg' },
    { id: 13, name: 'Ferrari SF90', price: 72000000, topSpeed: '340 km/h', mileage: '6 km/l', engine: '4.0L V8 Hybrid', category: 'Supercar', img: 'https://www.thesupercarblog.com/wp-content/uploads/2025/04/Ferrari-SF90-XX-by-Novitec-2.jpg' }
  ];

  cars.sort((a, b) => a.price - b.price);

  const carGrid = document.getElementById('carGrid');
  const detailOverlay = document.getElementById('carDetailOverlay');
  const detailCard = document.getElementById('carDetailCard');
  let selectedForCompare = [];

  function createCarCard(car, includeActions = true) {
    const card = document.createElement('div');
    card.className = 'car-card';
    let actionsHtml = '';
    if (includeActions) {
      actionsHtml = `
        <div class="car-actions">
          <button class="select-compare" data-id="${car.id}"><i class="fa-regular fa-square-check"></i> Compare</button>
          <button class="info-btn" data-id="${car.id}"><i class="fa-regular fa-circle-info"></i> Info</button>
        </div>
      `;
    }
    card.innerHTML = `
      <div class="car-img" style="background-image: url('${car.img}')"></div>
      <div class="car-info">
        <div class="car-name">${car.name}</div>
        <span class="car-category">${car.category}</span>
        ${actionsHtml}
      </div>
    `;
    return card;
  }

  function renderCars(filter = 'all') {
    if (!carGrid) return;
    carGrid.innerHTML = '';
    const filtered = filter === 'all' ? cars : cars.filter(c => c.category === filter);
    filtered.forEach(car => carGrid.appendChild(createCarCard(car, true)));
    attachAllButtons();
  }
  
  if (carGrid) renderCars('all');

  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      if (renderCars) renderCars(this.dataset.filter);
    });
  });

  function attachInfoButtons(container = document) {
    container.querySelectorAll('.info-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        const car = cars.find(c => c.id === parseInt(this.dataset.id));
        if (car && detailCard) {
          detailCard.innerHTML = `
            <div class="car-img" style="background-image: url('${car.img}'); height: 200px; background-size: cover; border-radius: 16px;"></div>
            <h3 style="margin: 0.8rem 0; color: #eab308; font-size: 1.5rem;">${car.name}</h3>
            <div style="color: #eab308; font-size: 1.3rem; font-weight: 600; margin-bottom: 1rem;">₹ ${car.price.toLocaleString('en-IN')}</div>
            <div class="car-specs" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin: 1.5rem 0;">
              <div class="spec-item" style="background: #0a0c15; padding: 1rem; border-radius: 12px; text-align: center; border: 1px solid rgba(234, 179, 8, 0.2); transition: all 0.3s; cursor: pointer;">
                <i class="fa-solid fa-gauge-high" style="font-size: 1.8rem; color: #eab308; margin-bottom: 0.5rem; display: block;"></i>
                <span style="display: block; font-size: 0.85rem; color: #9ca3af; margin-bottom: 0.3rem;">Top Speed</span>
                <strong style="font-size: 1rem; color: #e8edf2;">${car.topSpeed}</strong>
              </div>
              <div class="spec-item" style="background: #0a0c15; padding: 1rem; border-radius: 12px; text-align: center; border: 1px solid rgba(234, 179, 8, 0.2); transition: all 0.3s; cursor: pointer;">
                <i class="fa-solid fa-gas-pump" style="font-size: 1.8rem; color: #eab308; margin-bottom: 0.5rem; display: block;"></i>
                <span style="display: block; font-size: 0.85rem; color: #9ca3af; margin-bottom: 0.3rem;">Mileage</span>
                <strong style="font-size: 1rem; color: #e8edf2;">${car.mileage}</strong>
              </div>
              <div class="spec-item" style="background: #0a0c15; padding: 1rem; border-radius: 12px; text-align: center; border: 1px solid rgba(234, 179, 8, 0.2); transition: all 0.3s; cursor: pointer;">
                <i class="fa-solid fa-gear" style="font-size: 1.8rem; color: #eab308; margin-bottom: 0.5rem; display: block;"></i>
                <span style="display: block; font-size: 0.85rem; color: #9ca3af; margin-bottom: 0.3rem;">Engine</span>
                <strong style="font-size: 1rem; color: #e8edf2;">${car.engine}</strong>
              </div>
              <div class="spec-item" style="background: #0a0c15; padding: 1rem; border-radius: 12px; text-align: center; border: 1px solid rgba(234, 179, 8, 0.2); transition: all 0.3s; cursor: pointer;">
                <i class="fa-solid fa-tag" style="font-size: 1.8rem; color: #eab308; margin-bottom: 0.5rem; display: block;"></i>
                <span style="display: block; font-size: 0.85rem; color: #9ca3af; margin-bottom: 0.3rem;">Category</span>
                <strong style="font-size: 1rem; color: #e8edf2;">${car.category}</strong>
              </div>
            </div>
            <button class="back-btn" id="backFromDetail" style="background: #eab308; border: none; padding: 0.8rem; border-radius: 40px; font-weight: 600; width: 100%; cursor: pointer; color: #0a0c15; transition: all 0.3s;"><i class="fa-solid fa-arrow-left"></i> Back</button>
          `;
          detailOverlay.classList.add('active');
          document.getElementById('backFromDetail').addEventListener('click', () => detailOverlay.classList.remove('active'));
          
          const specItems = document.querySelectorAll('.spec-item');
          specItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
              item.style.borderColor = '#eab308';
              item.style.transform = 'scale(1.05)';
            });
            item.addEventListener('mouseleave', () => {
              item.style.borderColor = 'rgba(234, 179, 8, 0.2)';
              item.style.transform = 'scale(1)';
            });
          });
        }
      });
    });
  }

  if (detailOverlay) {
    detailOverlay.addEventListener('click', e => { 
      if (e.target === detailOverlay) detailOverlay.classList.remove('active'); 
    });
  }

  const car1Select = document.getElementById('car1Select');
  const car2Select = document.getElementById('car2Select');
  const compareBtn = document.getElementById('compareBtn');
  const compareTable = document.getElementById('compareTable');

  function populateCompareSelects() {
    if (!car1Select || !car2Select) return;
    car1Select.innerHTML = '<option value="">-- Select a car --</option>';
    car2Select.innerHTML = '<option value="">-- Select a car --</option>';
    
    cars.forEach(car => {
      const option1 = document.createElement('option');
      option1.value = car.id;
      option1.textContent = `${car.name} (₹${(car.price/100000).toFixed(0)}L)`;
      
      const option2 = document.createElement('option');
      option2.value = car.id;
      option2.textContent = `${car.name} (₹${(car.price/100000).toFixed(0)}L)`;
      
      car1Select.appendChild(option1);
      car2Select.appendChild(option2);
    });
    
    if (selectedForCompare[0]) car1Select.value = selectedForCompare[0];
    if (selectedForCompare[1]) car2Select.value = selectedForCompare[1];
  }

  function formatPrice(price) {
    return '₹ ' + price.toLocaleString('en-IN');
  }

  function generateRecommendation(car1, car2) {
    let message = '';
    
    if (car1.price < car2.price) {
      const diff = (car2.price - car1.price) / 100000;
      message = `${car1.name} is more budget-friendly by ₹${(car2.price - car1.price).toLocaleString('en-IN')} (${diff.toFixed(1)}L).`;
      
      if (parseInt(car1.topSpeed) > parseInt(car2.topSpeed)) {
        message += ` It also offers better performance with ${car1.topSpeed} top speed.`;
      } else if (parseFloat(car1.mileage) > parseFloat(car2.mileage)) {
        message += ` It also offers better fuel efficiency with ${car1.mileage}.`;
      }
    } 
    else if (car2.price < car1.price) {
      const diff = (car1.price - car2.price) / 100000;
      message = `${car2.name} is more budget-friendly by ₹${(car1.price - car2.price).toLocaleString('en-IN')} (${diff.toFixed(1)}L).`;
      
      if (parseInt(car2.topSpeed) > parseInt(car1.topSpeed)) {
        message += ` It also offers better performance with ${car2.topSpeed} top speed.`;
      } else if (parseFloat(car2.mileage) > parseFloat(car1.mileage)) {
        message += ` It also offers better fuel efficiency with ${car2.mileage}.`;
      }
    }
    else {
      message = `Both cars are priced equally at ${formatPrice(car1.price)}. `;
      if (parseInt(car1.topSpeed) > parseInt(car2.topSpeed)) {
        message += `${car1.name} offers better top speed.`;
      } else if (parseInt(car2.topSpeed) > parseInt(car1.topSpeed)) {
        message += `${car2.name} offers better top speed.`;
      } else {
        message += `Choose based on your personal preference.`;
      }
    }
    
    return message;
  }

  function displayComparison() {
    if (!car1Select || !car2Select || !compareTable) return;
    
    const id1 = parseInt(car1Select.value);
    const id2 = parseInt(car2Select.value);
    
    if (!id1 || !id2) {
      alert('Please select two cars to compare');
      return;
    }
    
    if (id1 === id2) {
      alert('Please select two different cars to compare');
      return;
    }
    
    const car1 = cars.find(c => c.id === id1);
    const car2 = cars.find(c => c.id === id2);
    
    if (!car1 || !car2) return;
    
    document.getElementById('car1Name').textContent = car1.name;
    document.getElementById('car2Name').textContent = car2.name;
    document.getElementById('car1Price').textContent = formatPrice(car1.price);
    document.getElementById('car2Price').textContent = formatPrice(car2.price);
    document.getElementById('car1Speed').textContent = car1.topSpeed;
    document.getElementById('car2Speed').textContent = car2.topSpeed;
    document.getElementById('car1Mileage').textContent = car1.mileage;
    document.getElementById('car2Mileage').textContent = car2.mileage;
    document.getElementById('car1Engine').textContent = car1.engine;
    document.getElementById('car2Engine').textContent = car2.engine;
    document.getElementById('car1Category').textContent = car1.category;
    document.getElementById('car2Category').textContent = car2.category;
    
    const recommendationMsg = document.getElementById('recommendationMsg');
    if (recommendationMsg) {
      recommendationMsg.innerHTML = `<i class="fa-solid fa-star" style="color:#eab308;"></i> ${generateRecommendation(car1, car2)}`;
    }
    
    compareTable.style.display = 'block';
    compareTable.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  if (compareBtn) {
    compareBtn.addEventListener('click', displayComparison);
  }

  function attachCompareButtons(container = document) {
    container.querySelectorAll('.select-compare').forEach(btn => {
      btn.addEventListener('click', function() {
        const carId = parseInt(this.dataset.id);
        if (selectedForCompare.includes(carId)) {
          selectedForCompare = selectedForCompare.filter(id => id !== carId);
          this.classList.remove('selected');
          this.innerHTML = '<i class="fa-regular fa-square-check"></i> Compare';
        } else {
          if (selectedForCompare.length >= 2) {
            alert('You can only compare two cars at a time. Deselect one first.');
            return;
          }
          selectedForCompare.push(carId);
          this.classList.add('selected');
          this.innerHTML = '<i class="fa-regular fa-circle-check"></i> Selected';
        }
        populateCompareSelects();
      });
    });
  }

  function attachAllButtons(container = document) {
    attachCompareButtons(container);
    attachInfoButtons(container);
  }

  const priceRange = document.getElementById('priceRange');
  const budgetValue = document.getElementById('budgetValue');
  const budgetCars = document.getElementById('budgetCars');

  function updateBudgetCars(maxPrice) {
    if (!budgetCars) return;
    const filtered = cars.filter(c => c.price <= maxPrice);
    budgetCars.innerHTML = '';
    if (filtered.length === 0) {
      budgetCars.innerHTML = '<p style="text-align:center; grid-column:1/-1;">No cars in this budget</p>';
      return;
    }
    filtered.forEach(car => budgetCars.appendChild(createCarCard(car, true)));
    attachAllButtons(budgetCars);
  }

  if (priceRange) {
    priceRange.addEventListener('input', function() {
      const val = parseInt(this.value);
      if (budgetValue) budgetValue.textContent = val.toLocaleString('en-IN');
      updateBudgetCars(val);
    });
    updateBudgetCars(5000000);
  }

  let currentSlide = 0;
  const slides = document.querySelectorAll('.carousel-slide');
  const totalSlides = slides.length;
  const carouselSlides = document.getElementById('carouselSlides');
  const dotsContainer = document.getElementById('carouselDots');

  if (carouselSlides && dotsContainer && slides.length > 0) {
    function updateCarousel() {
      carouselSlides.style.transform = `translateX(-${currentSlide * 100}%)`;
      document.querySelectorAll('.dot').forEach((dot, i) => dot.classList.toggle('active', i === currentSlide));
    }

    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      if (i === 0) dot.classList.add('active');
      dot.addEventListener('click', () => { currentSlide = i; updateCarousel(); });
      dotsContainer.appendChild(dot);
    }

    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (prevBtn) prevBtn.addEventListener('click', () => { currentSlide = (currentSlide - 1 + totalSlides) % totalSlides; updateCarousel(); });
    if (nextBtn) nextBtn.addEventListener('click', () => { currentSlide = (currentSlide + 1) % totalSlides; updateCarousel(); });
    
    setInterval(() => { currentSlide = (currentSlide + 1) % totalSlides; updateCarousel(); }, 5000);
  }

  const feedbackForm = document.getElementById('feedbackForm');
  if (feedbackForm) {
    feedbackForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const msg = document.getElementById('message').value.trim();
      if (!name || !email || !msg) return alert('All fields required');
      if (!email.includes('@')) return alert('Valid email required');
      const successDiv = document.getElementById('formSuccess');
      if (successDiv) {
        successDiv.style.display = 'block';
        successDiv.textContent = '✨ Thanks for your valuable feedback!';
      }
      this.reset();
      setTimeout(() => { if (successDiv) successDiv.style.display = 'none'; }, 3000);
    });
  }

  populateCompareSelects();
});