document.querySelectorAll('.recipe-btn').forEach(button => {
    button.addEventListener('click', () => {
        const recipeId = button.closest('.creation').getAttribute('data-recipe-id');
        showRecipeDetails(recipeId);
    });
});

function showRecipeDetails(id) {
    let recipeContent = '';

    switch (id) {
        case '1':
            recipeContent = `
                <h2>White Sauce Pasta</h2>
                <img src="/images/pasta.jpeg">
                <h3>Ingredients:</h3>
                <ul>
                    <li>200g pasta</li>
                    <li>1 cup heavy cream</li>
                    <li>1/2 cup grated cheese</li>
                    <li>1 onion, chopped</li>
                    <li>2 garlic cloves, minced</li>
                    <li>Salt and pepper to taste</li>
                    <li>2 tablespoons olive oil</li>
                </ul>
                <h3>Procedure:</h3>
                <ol>
                    <li>Cook pasta according to package instructions.</li>
                    <li>In a pan, heat olive oil, add onions and garlic, sauté until golden.</li>
                    <li>Add heavy cream and cheese, stir until combined.</li>
                    <li>Add cooked pasta, mix well, and season with salt and pepper.</li>
                </ol>
            `;
            break;
        case '2':
            recipeContent = `
                <h2>French Toast</h2>
                <img src="/images/toast.jpeg">
                <h3>Ingredients:</h3>
                <ul>
                    <li>2 slices of bread</li>
                    <li>1 egg</li>
                    <li>1/4 cup milk</li>
                    <li>1 teaspoon cinnamon</li>
                    <li>Butter for frying</li>
                </ul>
                <h3>Procedure:</h3>
                <ol>
                    <li>In a bowl, whisk egg, milk, and cinnamon.</li>
                    <li>Dip bread in the mixture, coating both sides.</li>
                    <li>Fry in butter until golden on both sides.</li>
                    <li>Serve with syrup or fruit.</li>
                </ol>
            `;
            break;
        case '3':
            recipeContent = `
                <h2>Mushroom Soup</h2>
                <img src="/images/mushroom soup.jpeg">
                <h3>Ingredients:</h3>
                <ul>
                    <li>500g mushrooms, sliced</li>
                    <li>1 onion, chopped</li>
                    <li>2 garlic cloves, minced</li>
                    <li>4 cups vegetable broth</li>
                    <li>1/2 cup heavy cream</li>
                    <li>Salt and pepper to taste</li>
                    <li>2 tablespoons olive oil</li>
                </ul>
                <h3>Procedure:</h3>
                <ol>
                    <li>In a pot, heat olive oil over medium heat. Add onions and garlic, sauté until translucent.</li>
                    <li>Add mushrooms and cook until soft. Pour in vegetable broth and bring to a boil.</li>
                    <li>Reduce heat and simmer for 15 minutes. Stir in heavy cream, salt, and pepper.</li>
                    <li>Blend until smooth and serve hot.</li>
                </ol>
            `;
            break;
        case '4':
            recipeContent = `
                <h2>Benefits of Cooking at Home</h2>
                <img src="/images/benefits.jpeg">
                <p>
                    Cooking at home can provide numerous benefits for both your health and your wallet. When you prepare meals at home, you have full control over the ingredients and can ensure that you are using fresh, high-quality foods. This can greatly improve the nutritional value of your meals and help you make healthier choices.
                </p>
                <p>
                    Another significant advantage of cooking at home is the cost savings. Dining out or ordering takeout can be expensive, especially when done frequently. Preparing your own meals allows you to plan more budget-friendly dishes while still enjoying delicious, wholesome food.
                </p>
                <p>
                    Lastly, cooking at home can be a rewarding experience. The sense of accomplishment that comes from preparing a meal for yourself or others adds a special touch to the process. Plus, it can be a great way to experiment with new flavors and techniques in the kitchen.
                </p>
            `;
            break;
        case '5':
            recipeContent = `
                <h2>Delicious Meals Made Easy</h2>
                <img src="/images/plants.png">
                <p>
                    Creating delicious meals at home doesn't have to be complicated. With just a few simple ingredients and easy-to-follow recipes, anyone can make mouthwatering dishes. From quick weeknight dinners to impressive weekend meals, cooking can become a seamless part of your routine.
                </p>
                <p>
                    One of the keys to making cooking easy is meal prepping. By planning your meals ahead of time, you can save valuable time during the week and avoid the stress of deciding what to cook at the last minute. This allows you to enjoy home-cooked meals without the hassle.
                </p>
                <p>
                    Moreover, having a few go-to recipes on hand can make a big difference. These recipes should be simple yet versatile, allowing you to mix and match ingredients based on what you have in your pantry or fridge. In no time, you'll be whipping up delicious meals that everyone will love.
                </p>
            `;
            break;
        case '6':
            recipeContent = `
                <h2>Quick Pizza Recipe</h2>
                <img src="/images/pizza.jpeg">
                <h3>Ingredients:</h3>
                <ul>
                    <li>1 pre-made pizza crust</li>
                    <li>1 cup pizza sauce</li>
                    <li>2 cups shredded mozzarella cheese</li>
                    <li>Your choice of toppings (pepperoni, mushrooms, peppers, etc.)</li>
                </ul>
                <h3>Procedure:</h3>
                <ol>
                    <li>Preheat the oven according to the crust package instructions.</li>
                    <li>Spread pizza sauce over the crust, sprinkle cheese, and add toppings.</li>
                    <li>Bake for 15-20 minutes or until the cheese is melted and bubbly.</li>
                </ol>
            `;
            break;
        case '7':
            recipeContent = `
                <h2>Avocado Toast</h2>
                <img src="/images/ToastAvacado.jpeg">
                <h3>Ingredients:</h3>
                <ul>
                    <li>1 ripe avocado</li>
                    <li>2 slices of bread</li>
                    <li>Salt and pepper to taste</li>
                    <li>Red pepper flakes (optional)</li>
                </ul>
                <h3>Procedure:</h3>
                <ol>
                    <li>Toast the bread to your liking.</li>
                    <li>In a bowl, mash the avocado with a fork and season with salt and pepper.</li>
                    <li>Spread the mashed avocado on the toasted bread and sprinkle with red pepper flakes.</li>
                </ol>
            `;
            break;
        case '8':
            recipeContent = `
                <h2>Top Cooking Tips</h2>
                <img src="/images/Tips.png">
                <p>
                    Cooking can be a breeze if you follow some simple tips to stay organized and efficient in the kitchen. First, always read through the entire recipe before you begin cooking. This ensures that you have all the necessary ingredients and tools on hand and helps avoid any surprises during the cooking process.
                </p>
                
                <p>
                    It's also important to prep all your ingredients ahead of time. Chop vegetables, measure spices, and gather utensils before you start cooking. This will make the actual cooking process smoother and more enjoyable, as everything will be ready to go when you need it.
                </p>
                <p>
                    Lastly, invest in quality kitchen tools. Having sharp knives, sturdy pans, and reliable gadgets can make a big difference in your cooking experience. With the right tools and a little preparation, you'll be able to tackle any recipe with confidence.
                </p>
            `;
            break;
        default:
            recipeContent = `<h2>Recipe not found.</h2>`;
    }

    showModal(recipeContent);
}

function showModal(content) {
    const modal = document.getElementById('recipeModal');
    const recipeDetails = document.getElementById('recipeDetails');
    recipeDetails.innerHTML = content;
    modal.style.display = 'block';

    const closeButton = document.querySelector('.close');
    closeButton.onclick = () => {
        modal.style.display = 'none';
    };

    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
}
