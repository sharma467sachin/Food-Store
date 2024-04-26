import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import './Recipe.css';

const Recipe = () => {
  // Sample recipe data
  const recipes = [
    { id: 1, title: "", dishes:[{Name:"Panner Chilli", price:'$110',imageUrl: "https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}, {Name:"Mushroom Masala", price:'$40',imageUrl:"https://images.unsplash.com/photo-1598532213919-078e54dd1f40?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}, {Name:"Manchurian", price:'$20',imageUrl:"https://images.unsplash.com/photo-1574484284002-952d92456975?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},{Name:"Egg Curry", price:'$20',imageUrl: "https://plus.unsplash.com/premium_photo-1673590981774-d9f534e0c617?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},{Name:"Chicken Masala", price:'$20',imageUrl: "https://images.unsplash.com/photo-1564671165093-20688ff1fffa?q=80&w=1898&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}, {Name:"Fish Curry", price:'$20',imageUrl: "https://images.unsplash.com/photo-1606850246029-dd00bd5eff97?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}], link: "/recipe/1" },
    { id: 2, title: "", dishes:[{Name:"Chatpate Masale", price:'$20',imageUrl:"https://plus.unsplash.com/premium_photo-1673581152308-591c1645be02?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}, {Name:"Aloo Mattar", price:'$20',imageUrl:"https://plus.unsplash.com/premium_photo-1670263778678-54cde45cd1f5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}, {Name:"White Pasta", price:'$20',imageUrl:"https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}, {Name:"Red Pasta", price:'$20',imageUrl:"https://images.unsplash.com/photo-1617460182733-e555b2ce5ede?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}, {Name:"Dal Makhani", price:'$20',imageUrl:"https://images.unsplash.com/photo-1604152135912-04a022e23696?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},{Name:"Dal Tadka", price:'$20',imageUrl: "https://plus.unsplash.com/premium_photo-1661771822467-e516ca075314?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}], link: "/recipe/2" },
    { id: 3, title: "", dishes:[{Name:"Veg Biryani", price:'$120',imageUrl:"https://plus.unsplash.com/premium_photo-1673581152308-591c1645be02?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}, {Name:"Veg mix", price:'$80',imageUrl:"https://plus.unsplash.com/premium_photo-1670263778678-54cde45cd1f5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}, {Name:"Veg Pasta", price:'$220',imageUrl:"https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}, {Name:"Veg Red Pasta", price:'$20',imageUrl:"https://images.unsplash.com/photo-1617460182733-e555b2ce5ede?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}, {Name:"Veg Makhani", price:'$200',imageUrl:"https://images.unsplash.com/photo-1604152135912-04a022e23696?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},{Name:"Veg Tadka", price:'$120',imageUrl: "https://plus.unsplash.com/premium_photo-1661771822467-e516ca075314?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}], link: "/recipe/2" },
    // Add more recipes as needed
  ];

  // State for search query
  const [searchQuery, setSearchQuery] = useState('');
  // State for sort option
  const [sortOption, setSortOption] = useState('default');

  // Event handler to update search query state
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Event handler to update sort option state
  const handleSortChange = (option) => {
    setSortOption(option);
  };

  // Filter and sort recipes based on search query and sort option
  

  // Function to sort dishes
  const sortDishes = (dishes, option) => {
     if (option === 'price') {
      return dishes.sort((a, b) => parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1)));
    } else {
      return dishes; // Default order
    }
  };

  const sortedAndFilteredRecipes = recipes.filter(recipe =>
    recipe.dishes.some(dish => dish.Name.toLowerCase().includes(searchQuery.toLowerCase()))
  ).map(recipe => ({
    ...recipe,
    dishes: sortDishes(recipe.dishes, sortOption)
  }));

  const generateCarouselSlides = () => {
    const slides = [];
    const filteredRecipes = sortedAndFilteredRecipes.filter(recipe =>
      recipe.dishes.some(dish => dish.Name.toLowerCase().includes(searchQuery.toLowerCase()))
    );
    if (filteredRecipes.length === 0) {
      return (
        <Carousel.Item key="no-results">
          <h3>No results found</h3>
        </Carousel.Item>
      );
    }
    filteredRecipes.forEach(recipe => {
      const dishes = recipe.dishes.map((dish, index) => (
        <div className="col-md-2" key={index}>
          <img
            src={dish.imageUrl}
            alt={dish.Name}
            style={{ width: '100%', cursor: 'pointer' }}
            onClick={() => window.location.href = recipe.link}
            width={300}
            height={200}
          />
          <div className='dishInfo'>
            <p>{dish.Name}</p>
            <p>{dish.price}</p>
          </div>
        </div>
      ));
  
      slides.push(
        <Carousel.Item key={recipe.id}>
          <div className="container">
            <div className="row">{dishes}</div>
          </div>
          <Carousel.Caption>
            <h3>{recipe.title}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      );
    });
    return slides;
  };
  
  

  return (
    <div className='Recipe-body'>
      <div style={{color:'white', backgroundColor: '#FFD700', padding: '20px', textAlign: 'center', display: 'flex', flexDirection:'row', justifyContent: 'space-between' }}>
        <h2 style={{marginBottom: '0', marginLeft:'43%'}}>Our Recipes</h2>
        {/* Search bar */}
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchInputChange}
          placeholder="Search for recipes..."
          style={{ marginLeft:'auto', padding: '5px', width: '300px' }}
        />
        {/* Dropdown for sorting */}
        <DropdownButton id="dropdown-basic-button" title="Sort">
          <Dropdown.Item onClick={() => handleSortChange('default')}>Default</Dropdown.Item>
          <Dropdown.Item onClick={() => handleSortChange('price')}>Sort by Price</Dropdown.Item>
        </DropdownButton>
      </div>
      <Carousel indicators={false} className='recipeC' interval={null}>
        {generateCarouselSlides()}
      </Carousel>
    </div>
  );
};

export default Recipe;
