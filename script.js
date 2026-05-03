const menuData = {
    hot: [
        { arName: "إسبريسو", enName: "Espresso", arDesc: "قوي وغني", enDesc: "Strong & rich", price: "45" },
        { arName: "دبل إسبريسو", enName: "Double Espresso", arDesc: "تركيز عالي", enDesc: "High concentration", price: "55" },
        { arName: "كابتشينو", enName: "Cappuccino", arDesc: "رغوة حليب كثيفة", enDesc: "Thick milk foam", price: "65" },
        { arName: "لاتيه", enName: "Latte", arDesc: "حليب ناعم", enDesc: "Smooth steamed milk", price: "70" },
        { arName: "موكا", enName: "Mocha", arDesc: "شوكولاتة إيطالية", enDesc: "Italian chocolate", price: "75" },
        { arName: "أمريكانو", enName: "Americano", arDesc: "إسبريسو + ماء", enDesc: "Espresso + hot water", price: "55" },
        { arName: "فلات وايت", enName: "Flat White", arDesc: "كريمي وناعم", enDesc: "Velvety & smooth", price: "68" },
        { arName: "كورتادو", enName: "Cortado", arDesc: "إسبريسو مع قليل من الحليب", enDesc: "Espresso with little milk", price: "60" },
        { arName: "قهوة تركية", enName: "Turkish Coffee", arDesc: "تقليدية مصرية", enDesc: "Egyptian style", price: "50" },
        { arName: "قهوة فرنسية", enName: "French Press", arDesc: "غنية بالنكهة", enDesc: "Full bodied", price: "65" },
        { arName: "كاراميل لاتيه", enName: "Caramel Latte", arDesc: "صوص كراميل", enDesc: "Caramel sauce", price: "78" },
        { arName: "هازelnوت لاتيه", enName: "Hazelnut Latte", arDesc: "بنكهة البندق", enDesc: "Hazelnut flavor", price: "78" },
        { arName: "فانيليا لاتيه", enName: "Vanilla Latte", arDesc: "نكهة الفانيليا", enDesc: "Sweet vanilla", price: "75" },
        { arName: "قهوة بالقرفة", enName: "Cinnamon Coffee", arDesc: "دافئة ومنعشة", enDesc: "Warm & spicy", price: "70" }
    ],
    cold: [
        { arName: "لاتيه مثلج", enName: "Iced Latte", arDesc: "منعش", enDesc: "Refreshing", price: "75" },
        { arName: "كولد برو", enName: "Cold Brew", arDesc: "منقوع ١٢ ساعة", enDesc: "12 hours steeped", price: "70" },
        { arName: "فرابيه موكا", enName: "Mocha Frappe", arDesc: "شوكولاتة وكريمة", enDesc: "Chocolate & cream", price: "85" },
        { arName: "فرابيه كراميل", enName: "Caramel Frappe", arDesc: "صوص كراميل", enDesc: "Caramel sauce", price: "85" },
        { arName: "آيس أمريكانو", enName: "Iced Americano", arDesc: "منعش وقوي", enDesc: "Strong & refreshing", price: "60" },
        { arName: "عصير برتقال طازج", enName: "Fresh Orange Juice", arDesc: "برتقال مصري", enDesc: "Egyptian oranges", price: "65" },
        { arName: "ليموناضة بالنعناع", enName: "Mint Lemonade", arDesc: "ليمون طازج", enDesc: "Fresh lemon", price: "55" },
        { arName: "آيس تي", enName: "Iced Tea", arDesc: "شاي بارد", enDesc: "Chilled black tea", price: "50" },
        { arName: "شيك شوكولاتة", enName: "Chocolate Milkshake", arDesc: "كريمي", enDesc: "Creamy", price: "80" },
        { arName: "شيك فراولة", enName: "Strawberry Milkshake", arDesc: "طازجة", enDesc: "Fresh strawberry", price: "80" },
        { arName: "ماتشا لاتيه مثلج", enName: "Iced Matcha Latte", arDesc: "شاي أخضر ياباني", enDesc: "Japanese green tea", price: "85" },
        { arName: "كوكا كولا", enName: "Coca Cola", arDesc: "باردة", enDesc: "Chilled", price: "35" },
        { arName: "سبرايت", enName: "Sprite", arDesc: "منعش", enDesc: "Refreshing", price: "35" }
    ],
    snacks: [
        { arName: "توست أفوكادو", enName: "Avocado Toast", arDesc: "بيض مسلوق", enDesc: "Poached egg", price: "95" },
        { arName: "كرواسون بالجبن", enName: "Cheese Croissant", arDesc: "طازج", enDesc: "Fresh baked", price: "65" },
        { arName: "ساندوتش تونة", enName: "Tuna Sandwich", arDesc: "خضروات طازجة", enDesc: "Fresh veggies", price: "85" },
        { arName: "بيتزا مارجريتا", enName: "Margherita Pizza", arDesc: "صغيرة", enDesc: "Personal size", price: "90" },
        { arName: "سلطة سيزر", enName: "Caesar Salad", arDesc: "دجاج مشوي", enDesc: "Grilled chicken", price: "95" },
        { arName: "فرايز", enName: "French Fries", arDesc: "مع صوص", enDesc: "With sauce", price: "55" },
        { arName: "ناگتس دجاج", enName: "Chicken Nuggets", arDesc: "٨ قطع", enDesc: "8 pieces", price: "75" },
        { arName: "كلوب ساندوتش", enName: "Club Sandwich", arDesc: "دجاج وبيض", enDesc: "Chicken & egg", price: "90" },
        { arName: "برجر بيف", enName: "Beef Burger", arDesc: "كلاسيكي", enDesc: "Classic", price: "110" },
        { arName: "فطيرة بالسبانخ", enName: "Spinach Pastry", arDesc: "طازجة", enDesc: "Fresh", price: "60" },
        { arName: "براوني", enName: "Brownie", arDesc: "شوكولاتة", enDesc: "Chocolate", price: "65" },
        { arName: "كوكيز", enName: "Cookies", arDesc: "شوكولاتة", enDesc: "Chocolate chip", price: "55" },
        { arName: "تشيز كيك", enName: "Cheesecake", arDesc: "كلاسيكي", enDesc: "Classic", price: "75" }
    ]
};

let isEnglish = false;

function renderMenu() {
    const categories = [
        { key: 'hot', gridId: 'hot-grid' },
        { key: 'cold', gridId: 'cold-grid' },
        { key: 'snacks', gridId: 'snacks-grid' }
    ];

    categories.forEach(cat => {
        const grid = document.getElementById(cat.gridId);
        grid.innerHTML = '';

        menuData[cat.key].forEach(item => {
            const itemHTML = `
                <div class="menu-item">
                    <div class="item-info">
                        <h3>${isEnglish ? item.enName : item.arName}</h3>
                        <p class="desc">${isEnglish ? item.enDesc : item.arDesc}</p>
                    </div>
                    <span class="price">${item.price} EGP</span>
                </div>
            `;
            grid.innerHTML += itemHTML;
        });
    });
}

function toggleLanguage() {
    isEnglish = !isEnglish;
    const btn = document.getElementById('langBtn');

    if (isEnglish) {
        btn.textContent = "🇪🇬 العربية";
        document.documentElement.setAttribute('dir', 'ltr');
        
        document.getElementById('hero-title').textContent = "Café Profescnial";
        document.getElementById('hero-tagline').textContent = "Premium Coffee • Cold Drinks • Snacks";
        document.getElementById('location').textContent = "Downtown • Cairo";
        document.getElementById('hours').textContent = "7:00 AM - 11:00 PM";
        document.getElementById('hot-title').textContent = "Hot Drinks";
        document.getElementById('cold-title').textContent = "Cold Drinks";
        document.getElementById('snacks-title').textContent = "Snacks & Food";
        document.getElementById('footer-name').textContent = "Café Profescnial";
    } else {
        btn.textContent = "🇬🇧 English";
        document.documentElement.setAttribute('dir', 'rtl');
        
        document.getElementById('hero-title').textContent = "كافيه بروفيشنال";
        document.getElementById('hero-tagline').textContent = "قهوة فاخرة • مشروبات • سناكس";
        document.getElementById('location').textContent = "وسط البلد • القاهرة";
        document.getElementById('hours').textContent = "٧:٠٠ ص - ١١:٠٠ م";
        document.getElementById('hot-title').textContent = "القهوة الساخنة";
        document.getElementById('cold-title').textContent = "المشروبات الباردة";
        document.getElementById('snacks-title').textContent = "السناكس والوجبات الخفيفة";
        document.getElementById('footer-name').textContent = "كافيه بروفيشنال";
    }

    renderMenu();
}

// Load menu
renderMenu();