const labTestsByHealthConcern = [
    {
        name: 'Full Body',
        image: 'https://cms-contents.pharmeasy.in/homepage_top_categories_images/4cb2baf3234-Fullbody.png?dim=256x0',
        link: ''
    },
    {
        name: 'Vitamins',
        image: 'https://cms-contents.pharmeasy.in/homepage_top_categories_images/e1a18d8deac-Vitamins.png?dim=256x0',
        link: ''
    },
    {
        name: 'Diabetes',
        image: 'https://cms-contents.pharmeasy.in/homepage_top_categories_images/1e927857c26-Diabetes.png?dim=256x0',
        link: ''
    },
    {
        name: 'Fever',
        image: 'https://cms-contents.pharmeasy.in/homepage_top_categories_images/e1c60c444bf-Fever.png?dim=256x0',
        link: ''
    },
    {
        name: 'Women Care',
        image: 'https://cms-contents.pharmeasy.in/homepage_top_categories_images/7b238cdbb60-womencare.png?dim=256x0',
        link: ''
    },
    {
        name: 'Thyroid',
        image: 'https://cms-contents.pharmeasy.in/homepage_top_categories_images/71fb3c06e71-Thyroid.png?dim=256x0',
        link: ''
    },
    {
        name: 'Covid',
        image: 'https://cms-contents.pharmeasy.in/homepage_top_categories_images/6b775dd8478-covid.png?dim=256x0',
        link: ''
    },
    {
        name: 'Bone',
        image: 'https://cms-contents.pharmeasy.in/homepage_top_categories_images/bca113a1b80-Bone.png?dim=256x0',
        link: ''
    },
    {
        name: 'Heart',
        image: 'https://cms-contents.pharmeasy.in/homepage_top_categories_images/520acd31898-heart.png?dim=256x0',
        link: ''
    },
    {
        name: 'Lifestyle',
        image: 'https://cms-contents.pharmeasy.in/homepage_top_categories_images/9696ef00b0a-lifestyle.png?dim=256x0',
        link: ''
    }
];

function generateLabTestsByHealthConcern(labTests) {
    const container = document.querySelector('.Lab-Tests-by-Health-Concern');
    labTests.forEach(test => {
        const testDiv = document.createElement('div');
        testDiv.classList.add('Lab-Tests-by-Health-Concern-img');

        const link = document.createElement('a');
        link.href = test.link;

        const image = document.createElement('img');
        image.src = test.image;
        image.alt = test.name;

        link.appendChild(image);
        testDiv.appendChild(link);
        container.appendChild(testDiv);
    });
}

generateLabTestsByHealthConcern(labTestsByHealthConcern);