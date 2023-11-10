// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

const blogItems = document.querySelectorAll('.blog__items');
if (blogItems) {
	loadBlogItems();
}

async function loadBlogItems(params) {
	const response = await fetch("files/blog.json", {
		method: "GET"
	});
	if (response.ok) {
		const responseResult = await response.json();
		initBlog(responseResult);
	} else {
		alert("Error!");
	}
}

function initBlog(data) {
	for (let index = 0; index < 3; index++) {
		const item = data.items[index];
		buildBlogItem(item);
	}
}

function buildBlogItem(item) {
	let blogItemTemplate = ``;

	blogItemTemplate += `<article class="blog__item item-blog">`;

	blogItemTemplate +=

		blogItemTemplate += `</article>`;


	let blogItemTemplate = `
	<article class="blog__item item-blog">
							<a href="#" class="item-blog__image-ibg">
								<img src="@img/blog/01.jpg" alt="Image">
							</a>
							<div class="item-blog__content">
								<div class="item-blog__date">19 Jan 2023</div>
								<h4 class="item-blog__title">
									<a href="" class="item-blog__link-title">Understanding Smart Home Systems & Maintenance</a>
								</h4>
								<div class="item-blog__text text">
									<p>Discover the ultimate guide to troubleshooting common smart home issues in our latest blog
										post. From connectivity problems to device malfunctions, we provide step-by-step solutions
										to
										help you restore the seamless functionality of your smart home system. Gain expert
										insights,
										practical tips, and insider advice to keep your home automation running smoothly. Don't
										let
										technical glitches hinder your smart home experience - empower yourself with the knowledge
										to
										resolve issues and enjoy the convenience of your connected home. Visit our blog now and
										become a troubleshooting pro!</p>
								</div>
							</div>
							<div class="item-blog__tags">
								<a href="#" class="item-blog__tag">Plumbing</a>
								<a href="#" class="item-blog__tag">Architecture</a>
								<a href="#" class="item-blog__tag">Maintenance</a>
							</div>
						</article>
	`;
	blogItems.insertAdjacentHTML('beforeend', blogItemTemplate);
}